(this["webpackJsonpe-nose-data"]=this["webpackJsonpe-nose-data"]||[]).push([[0],{4:function(e){e.exports=JSON.parse('{"appname":"Enose Data Admin","description":"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0438 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f E-Nose [VSUET]","user":"Tenfleques","repo":"nose-data","branch":"data","path":"experiments/data/"}')},46:function(e,t,a){e.exports=a(99)},51:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(40),s=a.n(o),i=(a(51),a(8)),c=a(9),l=a(11),u=a(10),d=a(12),m=a(16),h=a(5),p=Object(h.a)(),f=a(41),g=function(e){var t=e.component,a=Object(f.a)(e,["component"]);return r.a.createElement(m.b,Object.assign({},a,{render:function(e){return sessionStorage.getItem("user")?r.a.createElement(t,e):r.a.createElement(m.a,{to:{pathname:"/nose-face/login",state:{from:e.location}}})}}))},b=(a(56),a(27)),v=a.n(b),O=a(22),E=a(44),j=a(3),y=(a(58),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={highlight:!1},a.fileInputRef=r.a.createRef(),a.openFileDialog=a.openFileDialog.bind(Object(j.a)(a)),a.onFilesAdded=a.onFilesAdded.bind(Object(j.a)(a)),a.onDragOver=a.onDragOver.bind(Object(j.a)(a)),a.onDragLeave=a.onDragLeave.bind(Object(j.a)(a)),a.onDrop=a.onDrop.bind(Object(j.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"openFileDialog",value:function(){this.props.disabled||this.fileInputRef.current.click()}},{key:"onFilesAdded",value:function(e){if(!this.props.disabled){var t=e.target.files;if(this.props.onFilesAdded){var a=this.fileListToArray(t);this.props.onFilesAdded(a)}}}},{key:"onDragOver",value:function(e){e.preventDefault(),this.props.disabed||this.setState({highlight:!0})}},{key:"onDragLeave",value:function(e){this.setState({highlight:!1})}},{key:"onDrop",value:function(e){if(e.preventDefault(),!this.props.disabed){var t=e.dataTransfer.files;if(this.props.onFilesAdded){var a=this.fileListToArray(t);this.props.onFilesAdded(a)}this.setState({highlight:!1})}}},{key:"fileListToArray",value:function(e){for(var t=[],a=0;a<e.length;a++)t.push(e.item(a));return t}},{key:"render",value:function(){return r.a.createElement("div",{className:"mx-auto Dropzone ".concat(this.state.highlight?"Highlight":""),onDragOver:this.onDragOver,onDragLeave:this.onDragLeave,onDrop:this.onDrop,onClick:this.openFileDialog,style:{cursor:this.props.disabled?"default":"pointer"}},r.a.createElement("input",{ref:this.fileInputRef,className:"FileInput",type:"file",accept:".xml",multiple:!0,onChange:this.onFilesAdded}),r.a.createElement("img",{alt:"upload",className:"Icon",src:"/baseline-cloud_upload-24px.svg"}),r.a.createElement("span",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b\u044b"))}}]),t}(n.Component)),N=(a(59),a(45)),k=a.n(N);function S(e){var t,a=[],n={},r={},o=new k.a(e);function s(){return t.getCommit(n.commitSHA).then((function(e){n.treeSHA=e.data.tree.sha}))}function i(e){return t.createBlob(e.content).then((function(t){a.push({sha:t.data.sha,path:e.path,mode:"100644",type:"blob"})}))}function c(){return t.createTree(a,n.treeSHA).then((function(e){r.treeSHA=e.data.sha}))}function l(){return t.updateHead("heads/"+n.name,r.sha)}this.setRepo=function(e,a){return t=o.getRepo(e,a)},this.setBranch=function(e){if(!t)throw"Repository is not initialized";return t.listBranches().then((function(a){if(!a.data.find((function(t){return t.name===e})))return t.createBranch("master",e).then((function(){n.name=e}));n.name=e}))},this.pushFiles=function(e,a){if(!t)throw"Repository is not initialized";if(!n.hasOwnProperty("name"))throw"Branch is not set";return t.getRef("heads/"+n.name).then((function(e){n.commitSHA=e.data.object.sha})).then(s).then((function(){return function(e){for(var t=[],a=e.length,n=0;n<a;n++)t.push(i(e[n]));return Promise.all(t)}(a)})).then(c).then((function(){return function(e){return t.commit(n.commitSHA,r.treeSHA,e).then((function(e){r.sha=e.data.sha}))}(e)})).then(l).catch((function(e){console.error(e)}))}}var w=a(4),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).autoComplete=a.autoComplete.bind(Object(j.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"autoComplete",value:function(e){}},{key:"render",value:function(){return r.a.createElement("div",{className:this.props.className},r.a.createElement("label",{htmlFor:this.props.name},this.props.caption),r.a.createElement("input",{type:"text",className:"form-control",onInput:this.autoComplete,onChange:this.props.onChange,id:this.props.name,name:this.props.name,placeholder:this.props.placeholder}),r.a.createElement("span",{className:"muted small"},this.props.help))}}]),t}(n.Component),F=a(19),C=a(20);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={files:[],uploading:!1,uploadProgress:{},successfullUploaded:!1,gh_api:{},catalog:"",authorized:!1,user:{}},a.onFilesAdded=a.onFilesAdded.bind(Object(j.a)(a)),a.uploadFiles=a.uploadFiles.bind(Object(j.a)(a)),a.onPathChanged=a.onPathChanged.bind(Object(j.a)(a)),a.renderActions=a.renderActions.bind(Object(j.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("user");if(t){var a=new S({token:(t=JSON.parse(t)).token});a.setRepo(w.user,w.repo);var n=a.setBranch(w.branch);n.then((function(){e.setState({authorized:!0,user:t,gh_api:a})})),n.catch((function(a){e.setState({authorized:!1,user:t})}))}}},{key:"onFilesAdded",value:function(e){this.setState((function(t){return{files:t.files.concat(e)}}))}},{key:"onPathChanged",value:function(e){var t=e.target.value;"/"!==t[t.length-1]&&(t+="/"),"/"===t[0]&&(t=t.slice(1)),this.setState({catalog:t})}},{key:"uploadFiles",value:function(){var e=Object(E.a)(v.a.mark((function e(){var t,a,n,r,o,s=this;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.setState({uploadProgress:{},uploading:!0}),t=this.state.gh_api,a=[],n=function(e){var t=s.state.files[e].name;a.push(new Promise((function(a,n){var r=new FileReader;r.onload=function(){a({name:t,path:w.path+s.state.catalog+t,content:r.result})},r.addEventListener("progress",(function(e){if(e.lengthComputable){var a=A({},s.state.uploadProgress);a[t]={state:"pending",percentage:e.loaded/e.total*100},s.setState({uploadProgress:a})}})),r.readAsText(s.state.files[e],"UTF-8")})))},r=0;r<this.state.files.length;++r)n(r);try{o=this,Promise.all(a).then((function(e){var a=e.map((function(e){return e.name})),n=t.pushFiles("file uploads: "+a.join(", "),e),r=function(e){var t=A({},o.state.uploadProgress);t[e]={state:"done",percentage:100},o.setState({uploadProgress:t})};n.then((function(e){if(e&&200===e.status)for(var t=0;t<a.length;++t)setTimeout(r(a[t]),1e4*Math.random())})),n.catch((function(e){for(var t=0;t<a.length;++t){var n=A({},o.state.uploadProgress);n[a[t]]={state:"fail",percentage:100},o.setState({successfullUploaded:!1,uploadProgress:n})}}))})),this.setState({successfullUploaded:!0,uploading:!1})}catch(i){this.setState({successfullUploaded:!0,uploading:!1})}case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderProgress",value:function(e){var t=this.state.uploadProgress[e.name];if(this.state.uploading||this.state.successfullUploaded)return r.a.createElement("span",{className:"d-inline pl-3"},r.a.createElement(F.a,{icon:C.a,className:t&&"done"===t.state?"text-secondary":"d-none"}),r.a.createElement(F.a,{icon:C.b,className:t&&"done"===t.state?"d-none":"text-warning fa-spin"}))}},{key:"renderActions",value:function(){var e=this;return this.state.successfullUploaded?r.a.createElement("button",{onClick:function(){return e.setState({files:[],successfullUploaded:!1})}},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"):r.a.createElement("button",{disabled:this.state.files.length<0||this.state.uploading,onClick:this.uploadFiles,className:"px-5"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c")}},{key:"render",value:function(){var e=this;return this.state.authorized?r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"Title py-3"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u0430\u0439\u043b\u043e\u0432"),r.a.createElement("div",{className:"row pt-3"},r.a.createElement(x,{name:"auto-complete-catalogs",caption:"\u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0444\u0430\u0439\u043b\u043e\u0432",className:"col-12 px-0 border-bottom form-group text-left py-3 mb-3",help:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0432 \u043a\u0430\u043a\u0443\u044e \u0433\u0440\u0443\u043f\u043f\u0443 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b\u044b. e.g. vsuet/vosdux",placeholder:"",onChange:this.onPathChanged}),r.a.createElement("div",{className:"col-12 col-md-8 col-lg-6"},r.a.createElement(y,{onFilesAdded:this.onFilesAdded,disabled:this.state.uploading||this.state.successfullUploaded}),r.a.createElement("div",{className:"col-12 text-center py-3"},this.renderActions())),r.a.createElement("div",{className:"col-12 col-md-4 col-lg-6"},r.a.createElement("div",{className:"row text-left"},this.state.files.map((function(t){return r.a.createElement("div",{key:t.name,className:"col-12 col-lg-6"},r.a.createElement("span",{className:""},t.name),e.renderProgress(t))}))))))):"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 ...."}}]),t}(n.Component),R=a(18),I=function(e){return r.a.createElement("nav",{className:"navbar navbar-dark bg-primary fixed-top "+e.className},r.a.createElement(R.a,{className:"nav-item text-white no-underline",to:"/nose-face"},w.appname),r.a.createElement(R.a,{className:"nav-item text-white no-underline",to:"/nose-face/upload"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u043e\u0441\u0430"))},L=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement(I,{className:"mb-5"}),r.a.createElement("div",{className:"Page"},r.a.createElement("div",{className:"card mt-3 mt-md-4 p-3 col-10 col-md-9 col-lg-8 col-xl-7"},r.a.createElement(P,null))))}}]),t}(n.Component);function T(){return r.a.createElement("div",{className:""},r.a.createElement(I,{className:"mb-5"}),r.a.createElement("div",{className:"container-fluid mt-5"},r.a.createElement("div",{className:"col-12 h3"},"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435 ",w.appname),r.a.createElement("div",{className:"col-12"},w.description)))}var U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={login:"",password:"",submitted:!1,user:{},error:!1},a.handleChange=a.handleChange.bind(Object(j.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){sessionStorage.removeItem("user")}},{key:"handleChange",value:function(e){var t,a=e.target,n=a.name,r=a.value;this.setState((t={},Object(O.a)(t,n,r),Object(O.a)(t,"submitted",!1),t))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.login,r=a.password;this.setState({submitted:!0});var o={name:n,token:r},s=new S({token:o.token});s.setRepo(w.user,w.repo);var i=s.setBranch(w.branch);i.then((function(){sessionStorage.setItem("user",JSON.stringify(o)),t.setState({submitted:!0,user:o})})),i.catch((function(e){t.setState({error:!0})}))}},{key:"renderLoginForm",value:function(){var e=this.state,t=e.login,a=e.password,n=e.submitted,o=e.error;return r.a.createElement("div",{className:"container p-5"},r.a.createElement("form",{className:"row mt-5 p-md-5 bg-primary text-white max-w-600px mx-auto",onSubmit:this.handleSubmit},r.a.createElement("div",{className:o?"col-12 text-danger":"invisible col-12"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d"),r.a.createElement("div",{className:"form-group col-12"},r.a.createElement("label",{htmlFor:"login"},"\u043b\u043e\u0433\u0438\u043d"),r.a.createElement("input",{type:"text",name:"login",value:t,className:"form-control col-12 mb-3"+(n&&!t?" border-danger":""),onChange:this.handleChange}),n&&!t&&r.a.createElement("div",{className:"text-danger"},"\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u043d\u0430\u044f \u043f\u043e\u043b\u044f")),r.a.createElement("div",{className:"form-group col-12"},r.a.createElement("label",{htmlFor:"password"},"\u043f\u0430\u0440\u043e\u043b\u044c"),r.a.createElement("input",{type:"password",name:"password",value:a,className:"form-control col-12 mb-3"+(n&&!a?" border-danger":""),onChange:this.handleChange}),n&&!a&&r.a.createElement("div",{className:"text-danger"},"\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u043d\u0430\u044f \u043f\u043e\u043b\u044f")),r.a.createElement("div",{className:"form-group col-12"},r.a.createElement("button",{type:"submit",className:"form-control col-12 mb-3"},"\u0412\u043e\u0439\u0442\u0438 \xa0",n?r.a.createElement(F.a,{icon:C.c,className:o?"text-danger d-none":"d-none"}):"",n?r.a.createElement(F.a,{icon:C.b,className:o?"d-none":"text-success"}):""))))}},{key:"render",value:function(){return this.state.user.token?r.a.createElement(m.a,{to:{pathname:"/nose-face/",state:{from:"/nose-face/login"}}}):this.renderLoginForm()}}]),t}(r.a.Component),B=(a(97),a(98),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(m.c,{history:p},r.a.createElement(m.b,{exact:!0,strict:!0,path:"/nose-face/login",component:U}),r.a.createElement(m.b,{exact:!0,strict:!0,path:"/nose-face/login/",component:U}),r.a.createElement(g,{exact:!0,path:"/nose-face/",component:T}),r.a.createElement(g,{exact:!0,strict:!0,path:"/",component:T}),r.a.createElement(g,{exact:!0,strict:!0,path:"/nose-face/upload",component:L}),r.a.createElement(g,{exact:!0,strict:!0,path:"/upload",component:L}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.5981dfdc.chunk.js.map