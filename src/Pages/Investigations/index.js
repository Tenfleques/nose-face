import React, { Component } from "react";
import NavBar from "../../Components/navbar";
import FileList from "../../Components/FileList";
import GithubAPI from "../../helpers/gh-helper"
import Application from "../../Configs/package"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner} from '@fortawesome/free-solid-svg-icons'

const BRANCH = "investigations"
const ALLOWED_EXTS = [".html", ".jpg", ".png"]
const BASE = 0, LOADING = 1, ERROR = 2, SUCCESS = 0;

class InvestigationsPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      gh_api : {},
      authorized: false,
      user: {}, 
      preview_html : null,
      preview_file_status : 0,
      files : [],
      root : "",
      repo : null,
      openfile : {}
    };
    this.onClickDir =  this.onClickDir.bind(this);
    this.onClickFile = this.onClickFile.bind(this);
  }
  componentDidMount(){
    let user = sessionStorage.getItem("user");
    if(user){
      user = JSON.parse(user);

      const api = new GithubAPI({
        token: user.token
      })  
      api.setRepo(Application.user, Application.repo);

      let attempt_set_api = api.setBranch(BRANCH);

      attempt_set_api.then(() => {
        let repo = api.getApi().getRepo(Application.user, Application.repo);

        let trees = repo.getTree(BRANCH+"?recursive=1")

        let that = this;

        trees.then(function(res){
          let files = [];
          if(res && res.data && res.data.tree){
            files = res.data.tree.filter((f) => f.path.includes("progress") && !f.path.includes(".fld"))
          }
          that.setState({ authorized: true, user : user, gh_api: api, files : files, repo : repo });
        })

        trees.catch((e) => {
          that.setState({ authorized: true, user : user, gh_api: api, repo : repo  });
        })
      })

      attempt_set_api.catch((e) => {
        this.setState({ authorized: false, user : user });
      })
    }
  }
  onClickDir(path){
    this.setState({root : path});
  }
  processHtml(file, repo){
    let filecontent = repo.getBlob(file.sha);
    let that = this;

    filecontent.then(function(blob){
      if(blob.status === 200){
        that.setState({preview_html: blob.data, preview_file_status: SUCCESS})
      }      
    })

    filecontent.catch((e) => {
      this.setState({preview_file_status: ERROR});
      console.log(e)
    })
  }
  
  processImages(file){
    // TODO find other associated files, eg. json with description of what the image is all about etc. 
  }

  renderFilePreviewProgress(){
    switch (this.state.preview_file_status){
      case BASE:
      case SUCCESS:
        return "";
      case ERROR:
        return <div>
          ... загрузка файла не удалась 
        </div>
      case LOADING:
        return <div className="col-12 text-center pt-5 mt-5">
          <FontAwesomeIcon icon={faSpinner} className= "text-primary fa-spin fa-5x" /> 
        </div> 
    }
  }

  onClickFile(file){
    const file_arr = file.path.split(".");
    const file_ext = "." + file_arr[file_arr.length - 1]

    this.setState({preview_file_status: LOADING, preview_html : ""});

    if(ALLOWED_EXTS.includes(file_ext)){
      let repo = this.state.gh_api.getApi().getRepo(Application.user, Application.repo);

      switch (file_ext){
        case ".html":
          this.processHtml(file, repo)
          break;
        default:
          return;
      }
    }else{
      this.setState({preview_file_status: ERROR});
    }   
  }
  
  render() {
    if (this.state.authorized){     
      return (
        <div className="">
          <NavBar className="mb-5" /> 
          <div className="container-fluid mt-5">
            <div className="row px-3">
              <FileList title="Прогресс" onClickDir={this.onClickDir} onClickFile={this.onClickFile} root={this.state.root} files={this.state.files} className="card mt-3 mt-md-4 pt-3 col-8 col-md-4 col-lg-3 d-none d-md-block"/>

              <div className="col-12 col-md-8 col-lg-9 ">
                {this.renderFilePreviewProgress()}
                <iframe title="preview-html-files" className="col-12 px-0 border-0 min-h-85 mh-85 mh-md-85" srcDoc={this.state.preview_html}>
                </iframe>                
              </div>
              
            </div>          
          </div>
        </div>
      );
    }
    return "загрузка ....";
  }
}

export default InvestigationsPage;
