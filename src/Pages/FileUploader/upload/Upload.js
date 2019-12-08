import React, { Component } from "react";
import Dropzone from "../dropzone/Dropzone";
import "./Upload.css";

import AutoCompleteTextBox from "../../../Controls/AutocompleteTextBox"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import parseXmlToJson from "../../../helpers/parse-nose-files"

class Upload extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      files: [],
      uploading: false,
      uploadProgress: {},
      successfullUploaded: false,
      gh_api : {},
      catalog: props.root,
      authorized: false,
      user: {}
    };

    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
    this.onPathChanged = this.onPathChanged.bind(this);
    this.renderActions = this.renderActions.bind(this);
  }
  
  componentDidUpdate(prevProps){
    if(prevProps.root !== this.props.root){
      this.setState({catalog : this.props.root})
    }
  }

  onFilesAdded(files) {
    this.setState(prevState => ({
      files: prevState.files.concat(files)
    }));
  }

  onPathChanged(ev) {
    let path = ev.target.value;
    this.setState({catalog: path});
  }
  async uploadFiles() {
    this.setState({ uploadProgress: {}, uploading: true });
    let api = this.props.api
    const promises = [];
    
    let path = this.state.catalog 
    if(path[path.length - 1] !== "/"){
      path += "/"
    }
    if(path[0] === "/"){
      path = path.slice(1);
    }

    path = path.startsWith(this.props.Application.path) ?
    path : this.props.Application.path + path;

    for(let i = 0; i < this.state.files.length; ++i){

      let fnam = this.state.files[i].name.toLowerCase().replace(".xml",".uint");

      promises.push(new Promise((resolve, reject) => {
        var fr = new FileReader();  
        fr.onload = () => {
          let encoded_utf_8 =  new Uint8Array(fr.result);
          let textDecode = new TextDecoder();
          let textEncoder = new TextEncoder();

          let json = JSON.stringify(parseXmlToJson.parseXmlToJson(textDecode.decode(encoded_utf_8)))

          resolve({ name: fnam, path:  path + fnam, content: textEncoder.encode(json).join(",") } )
        };

        fr.addEventListener('progress', (event)=>{
          if (event.lengthComputable) {
            const copy = { ...this.state.uploadProgress };
            copy[fnam] = {
              state: "pending",
              percentage: (event.loaded / event.total) 
              * 100
            };
            this.setState({ uploadProgress: copy });
          }
        });

        fr.readAsArrayBuffer(this.state.files[i]);

      }));
    }

    try {
      let that = this;
      Promise.all(promises).then(function(files){
        let filenames = files.map(f => f.name);
        
        let upload = api.pushFiles("file uploads: " + filenames.join(", "), files);        

        let updateLoaded = (f) => {
          const copy = { ...that.state.uploadProgress };
          copy[f] = { state: "done", percentage: 100 };
          that.setState({ uploadProgress: copy });           
        }

        upload.then((res) => {
          if(res){
            if(res.status === 200){
              for (var i = 0; i < filenames.length; ++i){
                updateLoaded(filenames[i])
              }
              that.props.onUploadSuccess(path);
            }
          }          
        })
        upload.catch((e) => {
          for (var i = 0; i < filenames.length; ++i){
            const copy = { ...that.state.uploadProgress };
            copy[filenames[i]] = { state: "fail", percentage: 100 };
            that.setState({
              successfullUploaded : false,
              uploadProgress: copy
            })
          }
        })
      });
      

      this.setState({ successfullUploaded: true, uploading: false });
    } catch (e) {
      this.setState({ successfullUploaded: true, uploading: false });
    }
  }

  renderProgress(file_name) {
    const uploadProgress = this.state.uploadProgress[file_name];
    if (this.state.uploading || this.state.successfullUploaded) {
      return (
        <span className="d-inline pl-3">
            <FontAwesomeIcon icon={faCheckCircle} className={uploadProgress && uploadProgress.state === "done"?
            "text-secondary" : "d-none" } />
             <FontAwesomeIcon icon={faSpinner} className={uploadProgress && uploadProgress.state === "done"?
          "d-none" : "text-warning fa-spin"} />                   
        </span>
      );
    }
  }

  renderActions() {
    if (this.state.successfullUploaded) {
      return (
        <button
          onClick={() =>
            this.setState({ files: [], successfullUploaded: false })
          }
        >
          Очистить
        </button>
      );
    } else {
      return (
        <button
          disabled={this.state.files.length < 0 || this.state.uploading}
          onClick={this.uploadFiles}
          className="px-5"
        >
          Загрузить
        </button>
      );
    }
  }

  render() {
      
      return (
        <div className={this.props.className}>
          <span className="Title h4 py-3">Загрузка файлов</span>
          <div className="row pt-3">
            <AutoCompleteTextBox 
              name="auto-complete-catalogs" 
              caption="каталог файлов" 
              className="col-12 border-bottom form-group text-left py-3 mb-3" 
              help="Определить в какую группу отправить файлы. e.g. vsuet/vosdux" 
              placeholder=""
              value={this.state.catalog}
              onChange={this.onPathChanged}
              />
            <div className="col-12 col-md-8 col-lg-6"> 
              <Dropzone
                onFilesAdded={this.onFilesAdded}
                disabled={this.state.uploading || this.state.successfullUploaded}
              />
              <div className="col-12 text-center py-3">{this.renderActions()}</div>
            </div>
            <div className="col-12 col-md-4 col-lg-6">
              <div className="row text-left">
                {this.state.files.map(file => {
                  let show_f_name = file.name.toLowerCase().replace(".xml",".uint")
                  return (
                    <div key={show_f_name} className="col-12 col-md-6 col-lg-4">
                      <span className="">{show_f_name}</span>
                      {this.renderProgress(show_f_name)}
                    </div>
                  );
                })}
              </div>            
            </div>
          </div>
        </div> 
      );
    }
}

export default Upload;
