import React, { Component } from "react";
import "./index.css";
import Upload from "./upload/Upload";

import NoseMeasureTables from "../../Components/NoseTables";
import FileList from "../../Components/FileList";
import GithubAPI from "../../helpers/gh-helper"
import Application from "../../Configs/package"
import parseBlobToJson from "../../helpers/parse-nose-files"

class UploadPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      gh_api : {},
      authorized: false,
      user: {}, 
      files : [],
      root : "",
      repo : null,
      openfile : {}
    };
    this.onClickDir =  this.onClickDir.bind(this);
    this.onClickFile = this.onClickFile.bind(this);
    this.onUploadSuccess = this.onUploadSuccess.bind(this);
  }
  componentDidMount(){
    let user = sessionStorage.getItem("user");
    if(user){
      user = JSON.parse(user);

      const api = new GithubAPI({
        token: user.token
      })  
      api.setRepo(Application.user, Application.repo);

      let attempt_set_api = api.setBranch(Application.branch);

      attempt_set_api.then(() => {
        let repo = api.getApi().getRepo(Application.user, Application.repo);

        let trees = repo.getTree(Application.branch+"?recursive=1")

        let that = this;

        trees.then(function(res){
          let files = [];
          if(res && res.data && res.data.tree){
            files = res.data.tree.filter((f) => f.path.includes("data"))
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

  onClickFile(file){
    let repo = this.state.gh_api.getApi().getRepo(Application.user, Application.repo);

    let filecontent = repo.getBlob(file.sha);
    let that = this;

    filecontent.then(function(blob){

      if(blob.status === 200){
        let openfile = parseBlobToJson.parseBlobToJson(blob.data);
        that.setState({openfile})
      }      
    })

    filecontent.catch((e) => {
      console.log(e)
    })
  }
  onUploadSuccess(path){
    if(path[path.length - 1 ] === "/"){
      path = path.slice(0,path.length - 1)
    }
    if (this.state.repo){
      let trees = this.state.repo.getTree(Application.branch+"?recursive=1")

      let that = this;

      trees.then(function(res){
        let files = [];
        if(res && res.data && res.data.tree){
          files = res.data.tree
        }
        that.setState({ files : files, root : path });
      })

      trees.catch((e) => {
        console.log(e);
      })
    }
  }

  render() {
    if (this.state.authorized){     
      return (
        <div className="">
          <div className="container-fluid mt-5">
            <div className="row px-3">
              <div className="col-12 col-md-8 col-lg-9">
                <Upload onUploadSuccess={this.onUploadSuccess} root={this.state.root} className="card mt-3 mt-md-4 col-12" Application={Application} api={this.state.gh_api}/>

                <NoseMeasureTables headerClass="bg-primary text-white" 
                rows={5}
                data={this.state.openfile} className="card mt-3 mt-md-4 col-12 px-0" />
              </div>
              <FileList onClickDir={this.onClickDir} onClickFile={this.onClickFile} root={this.state.root} files={this.state.files} className="card mt-3 mt-md-4 pt-3 col-12 col-md-4 col-lg-3 "/>
            </div>          
          </div>
        </div>
      );
    }
    return "загрузка ....";
  }
}

export default UploadPage;
