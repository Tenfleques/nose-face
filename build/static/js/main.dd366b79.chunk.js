(this["webpackJsonpe-nose-data"]=this["webpackJsonpe-nose-data"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"appname":"Enose Data Admin","description":"\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u043d\u0438\u0435 \u0434\u0430\u043d\u044b\u0445 E-Nose [VSUET]","user":"Tenfleques","repo":"nose-data","branch":"data","path":"data/"}')},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(60),i=a.n(r),o=(a(72),a(4)),l=a(5),c=a(7),u=a(6),h=a(8),p=a(18),m=a(20),d=a(61),f=function(e){var t=e.component,a=Object(d.a)(e,["component"]);return s.a.createElement(m.b,Object.assign({},a,{render:function(e){return sessionStorage.getItem("user")?s.a.createElement(t,e):s.a.createElement(m.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},v=a(3),g=(a(77),a(39)),b=a.n(g),k=a(27),y=a(64),E=(a(79),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={highlight:!1},a.fileInputRef=s.a.createRef(),a.openFileDialog=a.openFileDialog.bind(Object(v.a)(a)),a.onFilesAdded=a.onFilesAdded.bind(Object(v.a)(a)),a.onDragOver=a.onDragOver.bind(Object(v.a)(a)),a.onDragLeave=a.onDragLeave.bind(Object(v.a)(a)),a.onDrop=a.onDrop.bind(Object(v.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"openFileDialog",value:function(){this.props.disabled||this.fileInputRef.current.click()}},{key:"onFilesAdded",value:function(e){if(!this.props.disabled){var t=e.target.files;if(this.props.onFilesAdded){var a=this.fileListToArray(t);this.props.onFilesAdded(a)}}}},{key:"onDragOver",value:function(e){e.preventDefault(),this.props.disabed||this.setState({highlight:!0})}},{key:"onDragLeave",value:function(e){this.setState({highlight:!1})}},{key:"onDrop",value:function(e){if(e.preventDefault(),!this.props.disabed){var t=e.dataTransfer.files;if(this.props.onFilesAdded){var a=this.fileListToArray(t);this.props.onFilesAdded(a)}this.setState({highlight:!1})}}},{key:"fileListToArray",value:function(e){for(var t=[],a=0;a<e.length;a++)t.push(e.item(a));return t}},{key:"render",value:function(){return s.a.createElement("div",{className:"mx-auto Dropzone ".concat(this.state.highlight?"Highlight":""),onDragOver:this.onDragOver,onDragLeave:this.onDragLeave,onDrop:this.onDrop,onClick:this.openFileDialog,style:{cursor:this.props.disabled?"default":"pointer"}},s.a.createElement("input",{ref:this.fileInputRef,className:"FileInput",type:"file",accept:".xml,.csv,.xls",multiple:!0,onChange:this.onFilesAdded}),s.a.createElement("img",{alt:"upload",className:"Icon",src:"baseline-cloud_upload-24px.svg"}),s.a.createElement("span",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b\u044b"))}}]),t}(n.Component)),O=(a(80),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).autoComplete=a.autoComplete.bind(Object(v.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"autoComplete",value:function(e){}},{key:"render",value:function(){return s.a.createElement("div",{className:this.props.className},s.a.createElement("label",{htmlFor:this.props.name},this.props.caption),s.a.createElement("input",{type:"text",className:"form-control",onInput:this.autoComplete,onChange:this.props.onChange,id:this.props.name,name:this.props.name,value:this.props.value,placeholder:this.props.placeholder}),s.a.createElement("span",{className:"muted small"},this.props.help))}}]),t}(n.Component)),w=a(12),N=a(13),j=a(65),C=a.n(j);var S=function(e){return function e(t){if(Array.isArray(t)){for(var a=[],n=0;n<t.length;++n)a.push(e(t[n]));return a}if("text"===t.type)return t.text;if(t.elements){if(1===t.elements.length)return e(t.elements[0]);var s={};for(var r in t.elements)if("sensor"===t.elements[r].name){s.sensors||(s.sensors=[]);var i={sid:t.elements[r].attributes.sid,initial:Number.parseFloat(t.elements[r].attributes.initial)};i.readings=t.elements[r].elements.sort((function(e,t){return e.attributes.time-t.attributes.time})).map((function(e){return Number.parseFloat(e.attributes.value.replace(",","."))})),s.sensors.push(i)}else s[t.elements[r].name]=e(t.elements[r]);if(t.name){var o={};return o[t.name]=s,o}return s}return""}(C.a.xml2js(e))},x=function(e){var t=new TextDecoder,a=new Uint8Array;return"string"===typeof e?(a=new Uint8Array(e.split(",")),JSON.parse(t.decode(a))):{}};function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(Object(a),!0).forEach((function(t){Object(k.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={files:[],uploading:!1,uploadProgress:{},successfullUploaded:!1,gh_api:{},catalog:e.root,authorized:!1,user:{}},a.onFilesAdded=a.onFilesAdded.bind(Object(v.a)(a)),a.uploadFiles=a.uploadFiles.bind(Object(v.a)(a)),a.onPathChanged=a.onPathChanged.bind(Object(v.a)(a)),a.renderActions=a.renderActions.bind(Object(v.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){e.root!==this.props.root&&this.setState({catalog:this.props.root})}},{key:"onFilesAdded",value:function(e){this.setState((function(t){return{files:t.files.concat(e)}}))}},{key:"onPathChanged",value:function(e){var t=e.target.value;this.setState({catalog:t})}},{key:"uploadFiles",value:function(){var e=Object(y.a)(b.a.mark((function e(){var t,a,n,s,r,i,o=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.setState({uploadProgress:{},uploading:!0}),t=this.props.api,a=[],"/"!==(n=this.state.catalog)[n.length-1]&&(n+="/"),"/"===n[0]&&(n=n.slice(1)),n=n.startsWith(this.props.Application.path)?n:this.props.Application.path+n,s=function(e){var t=o.state.files[e].name.toLowerCase().replace(".xml",".uint");a.push(new Promise((function(a,s){var r=new FileReader;r.onload=function(){var e=new Uint8Array(r.result),s=new TextDecoder,i=new TextEncoder,o=JSON.stringify(S(s.decode(e)));a({name:t,path:n+t,content:i.encode(o).join(",")})},r.addEventListener("progress",(function(e){if(e.lengthComputable){var a=D({},o.state.uploadProgress);a[t]={state:"pending",percentage:e.loaded/e.total*100},o.setState({uploadProgress:a})}})),r.readAsArrayBuffer(o.state.files[e])})))},r=0;r<this.state.files.length;++r)s(r);try{i=this,Promise.all(a).then((function(e){var a=e.map((function(e){return e.name})),s=t.pushFiles("file uploads: "+a.join(", "),e),r=function(e){var t=D({},i.state.uploadProgress);t[e]={state:"done",percentage:100},i.setState({uploadProgress:t})};s.then((function(e){if(e&&200===e.status){for(var t=0;t<a.length;++t)r(a[t]);i.props.onUploadSuccess(n)}})),s.catch((function(e){for(var t=0;t<a.length;++t){var n=D({},i.state.uploadProgress);n[a[t]]={state:"fail",percentage:100},i.setState({successfullUploaded:!1,uploadProgress:n})}}))})),this.setState({successfullUploaded:!0,uploading:!1})}catch(l){this.setState({successfullUploaded:!0,uploading:!1})}case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderProgress",value:function(e){var t=this.state.uploadProgress[e];if(this.state.uploading||this.state.successfullUploaded)return s.a.createElement("span",{className:"d-inline pl-3"},s.a.createElement(w.a,{icon:N.a,className:t&&"done"===t.state?"text-secondary":"d-none"}),s.a.createElement(w.a,{icon:N.c,className:t&&"done"===t.state?"d-none":"text-warning fa-spin"}))}},{key:"renderActions",value:function(){var e=this;return this.state.successfullUploaded?s.a.createElement("button",{onClick:function(){return e.setState({files:[],successfullUploaded:!1})}},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"):s.a.createElement("button",{disabled:this.state.files.length<0||this.state.uploading,onClick:this.uploadFiles,className:"px-5"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c")}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:this.props.className},s.a.createElement("span",{className:"Title h4 py-3"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u0430\u0439\u043b\u043e\u0432"),s.a.createElement("div",{className:"row pt-3"},s.a.createElement(O,{name:"auto-complete-catalogs",caption:"\u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0444\u0430\u0439\u043b\u043e\u0432",className:"col-12 border-bottom form-group text-left py-3 mb-3",help:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0432 \u043a\u0430\u043a\u0443\u044e \u0433\u0440\u0443\u043f\u043f\u0443 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b\u044b. e.g. vsuet/vosdux",placeholder:"",value:this.state.catalog,onChange:this.onPathChanged}),s.a.createElement("div",{className:"col-12 col-md-8 col-lg-6"},s.a.createElement(E,{onFilesAdded:this.onFilesAdded,disabled:this.state.uploading||this.state.successfullUploaded}),s.a.createElement("div",{className:"col-12 text-center py-3"},this.renderActions())),s.a.createElement("div",{className:"col-12 col-md-4 col-lg-6"},s.a.createElement("div",{className:"row text-left"},this.state.files.map((function(t){var a=t.name.toLowerCase().replace(".xml",".uint");return s.a.createElement("div",{key:a,className:"col-12 col-md-6 col-lg-4"},s.a.createElement("span",{className:""},a),e.renderProgress(a))}))))))}}]),t}(n.Component),A=a(1),P=function(e){return s.a.createElement("nav",{className:"navbar navbar-dark bg-primary fixed-top "+e.className},s.a.createElement(p.b,{className:"nav-item text-white no-underline",to:"/"},A.appname),s.a.createElement(p.b,{className:"nav-item text-white no-underline",to:"/investigations"},"\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f"),s.a.createElement(p.b,{className:"nav-item text-white no-underline",to:"/upload"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u043e\u0441\u0430"),s.a.createElement(p.b,{className:"nav-item text-white no-underline",to:"/support"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430"))};String.prototype.hashCode=function(){var e,t=0;if(0===this.length)return t;for(e=0;e<this.length;e++)t=(t<<5)-t+this.charCodeAt(e),t|=0;return Math.abs(t)};var U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={columns:[],data:[],page:0,rows:e.rows},a.onClickPagination=a.onClickPagination.bind(Object(v.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"fleques_large_table_columns",value:function(){if(this.props.data.measure)return s.a.createElement("div",{className:this.props.headerClass+" pb-4 z-200 sticky-columns text-center"},s.a.createElement("div",{className:"row px-3"},s.a.createElement("div",{className:"col-12 h6"},this.props.data.measure.start+" "+this.props.data.measure.name+" "+this.props.data.measure.description),s.a.createElement("div",{key:"col_id",className:"col-1"},"ID"),this.state.columns.map((function(e){return s.a.createElement("div",{key:"col_"+e.field,className:"col "},e.title)}))))}},{key:"fleques_large_table_rows",value:function(){for(var e=this,t=[],a=this.state.page*this.state.rows+1,n=Math.min(a+this.state.rows,this.state.data.length),r=a;r<n;++r)t.push(s.a.createElement("div",{key:"row_"+r,className:" row border-bottom py-2 px-3"},s.a.createElement("div",{key:"cell_counter_"+r,className:"col-1"},r),this.state.columns.map((function(t){return s.a.createElement("div",{key:"cell_"+t.field,className:"col"},e.state.data[r][t.field])}))));return t.push(s.a.createElement("div",{key:"row_pagination",className:" row py-2 px-3 "}," ",this.flequesGetPagination())),t}},{key:"onClickPagination",value:function(e){this.setState({page:e})}},{key:"flequesGetPagination",value:function(){for(var e=this,t=Math.floor(this.state.data.length/this.state.rows)+(this.state.data.length%this.state.rows?1:0),a=[],n=function(t){a.push(s.a.createElement("span",{key:"page_"+t,className:"btn btn-transparent mx-0 text-muted text-small"+(e.state.page===t?" bg-primary text-white":""),onClick:function(){return e.onClickPagination(t)}},t+1))},r=0;r<t;++r)n(r);return a}},{key:"flequesLargeTable",value:function(){var e=this.fleques_large_table_columns("bg-primary"),t=this.fleques_large_table_rows();return s.a.createElement("div",{className:this.props.className},e,t)}},{key:"componentDidUpdate",value:function(e){if(this.props.data.measure!==e.data.measure){for(var t=[],a=[],n=this.props.data.measure.sensors,s=0;s<n.length;++s){var r="field_"+n[s].sid.hashCode();a.push({field:r,title:n[s].sid});for(var i=0;i<n[s].readings.length;++i)t[i]||(t[i]={}),t[i][r]=n[s].readings[i]}this.setState({columns:a,data:t})}}},{key:"render",value:function(){return this.flequesLargeTable()}}]),t}(n.Component),R=function(e){return s.a.createElement("div",{className:e.className+" mouse-pointer",onClick:e.onClick},e.caption)},z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={root:e.root,files:e.files},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){JSON.stringify(e)!==JSON.stringify(this.props)&&this.setState({root:this.props.root,files:this.props.files})}},{key:"onClickDir",value:function(e){this.props.onClickDir(e),this.setState({root:e})}},{key:"showFileList",value:function(){var e=this;return this.state.files?""===this.state.root?this.state.files.filter((function(e){return"tree"===e.type})).map((function(t){return s.a.createElement(R,{key:t.sha,onClick:function(){return e.onClickDir(t.path)},caption:t.path,className:"d-flex text-secondary"})})):[s.a.createElement(R,{key:"root",onClick:function(){return e.onClickDir("")},caption:s.a.createElement(w.a,{icon:N.b}),className:"d-flex text-secondary h5"})].concat(this.state.files.filter((function(t){return t.path.startsWith(e.state.root)&&2===t.path.replace(e.state.root,"").split("/").length&&"tree"!==t.type})).map((function(t){var a=t.path.replace(e.state.root+"/","").split("."),n=a.slice(0,a.length-1).join(".");return s.a.createElement(R,{key:t.sha,onClick:function(a){return e.props.onClickFile(t)},caption:n,className:"d-flex text-secondary"})}))):""}},{key:"render",value:function(){return s.a.createElement("div",{className:this.props.className},s.a.createElement("h4",null,this.props.title||"\u0444\u0430\u0439\u043b\u044b \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435"),s.a.createElement("div",{className:"mh-85 mh-md-85 y-scroll-auto"},this.showFileList()))}}]),t}(n.Component),L=a(66),T=a.n(L);function B(e){var t,a=[],n={},s={},r=new T.a(e);function i(){return t.getCommit(n.commitSHA).then((function(e){n.treeSHA=e.data.tree.sha}))}function o(e){return t.createBlob(e.content).then((function(t){a.push({sha:t.data.sha,path:e.path,mode:"100644",type:"blob"})}))}function l(){return t.createTree(a,n.treeSHA).then((function(e){s.treeSHA=e.data.sha}))}function c(){return t.updateHead("heads/"+n.name,s.sha)}this.getApi=function(){return r},this.setRepo=function(e,a){return t=r.getRepo(e,a)},this.setBranch=function(e){if(!t)throw"Repository is not initialized";return t.listBranches().then((function(a){if(!a.data.find((function(t){return t.name===e})))return t.createBranch("master",e).then((function(){n.name=e}));n.name=e}))},this.pushFiles=function(e,a){if(!t)throw"Repository is not initialized";if(!n.hasOwnProperty("name"))throw"Branch is not set";return t.getRef("heads/"+n.name).then((function(e){n.commitSHA=e.data.object.sha})).then(i).then((function(){return function(e){for(var t=[],a=e.length,n=0;n<a;n++)t.push(o(e[n]));return Promise.all(t)}(a)})).then(l).then((function(){return function(e){return t.commit(n.commitSHA,s.treeSHA,e).then((function(e){s.sha=e.data.sha}))}(e)})).then(c).catch((function(e){console.error(e)}))}}var I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={gh_api:{},authorized:!1,user:{},files:[],root:"",repo:null,openfile:{}},a.onClickDir=a.onClickDir.bind(Object(v.a)(a)),a.onClickFile=a.onClickFile.bind(Object(v.a)(a)),a.onUploadSuccess=a.onUploadSuccess.bind(Object(v.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("user");if(t){var a=new B({token:(t=JSON.parse(t)).token});a.setRepo(A.user,A.repo);var n=a.setBranch(A.branch);n.then((function(){var n=a.getApi().getRepo(A.user,A.repo),s=n.getTree(A.branch+"?recursive=1"),r=e;s.then((function(e){var s=[];e&&e.data&&e.data.tree&&(s=e.data.tree.filter((function(e){return e.path.includes("data")}))),r.setState({authorized:!0,user:t,gh_api:a,files:s,repo:n})})),s.catch((function(e){r.setState({authorized:!0,user:t,gh_api:a,repo:n})}))})),n.catch((function(a){e.setState({authorized:!1,user:t})}))}}},{key:"onClickDir",value:function(e){this.setState({root:e})}},{key:"onClickFile",value:function(e){var t=this.state.gh_api.getApi().getRepo(A.user,A.repo).getBlob(e.sha),a=this;t.then((function(e){if(200===e.status){var t=x(e.data);a.setState({openfile:t})}})),t.catch((function(e){console.log(e)}))}},{key:"onUploadSuccess",value:function(e){if("/"===e[e.length-1]&&(e=e.slice(0,e.length-1)),this.state.repo){var t=this.state.repo.getTree(A.branch+"?recursive=1"),a=this;t.then((function(t){var n=[];t&&t.data&&t.data.tree&&(n=t.data.tree),a.setState({files:n,root:e})})),t.catch((function(e){console.log(e)}))}}},{key:"render",value:function(){return this.state.authorized?s.a.createElement("div",{className:""},s.a.createElement(P,{className:"mb-5"}),s.a.createElement("div",{className:"container-fluid mt-5"},s.a.createElement("div",{className:"row px-3"},s.a.createElement("div",{className:"col-12 col-md-8 col-lg-9"},s.a.createElement(F,{onUploadSuccess:this.onUploadSuccess,root:this.state.root,className:"card mt-3 mt-md-4 col-12",Application:A,api:this.state.gh_api}),s.a.createElement(U,{headerClass:"bg-primary text-white",rows:5,data:this.state.openfile,className:"card mt-3 mt-md-4 col-12 px-0"})),s.a.createElement(z,{onClickDir:this.onClickDir,onClickFile:this.onClickFile,root:this.state.root,files:this.state.files,className:"card mt-3 mt-md-4 pt-3 col-12 col-md-4 col-lg-3 "})))):"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 ...."}}]),t}(n.Component),H=[".html",".jpg",".png"],J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={gh_api:{},authorized:!1,user:{},preview_html:null,preview_file_status:0,files:[],root:"",repo:null,openfile:{}},a.onClickDir=a.onClickDir.bind(Object(v.a)(a)),a.onClickFile=a.onClickFile.bind(Object(v.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("user");if(t){var a=new B({token:(t=JSON.parse(t)).token});a.setRepo(A.user,A.repo);var n=a.setBranch("investigations");n.then((function(){var n=a.getApi().getRepo(A.user,A.repo),s=n.getTree("investigations?recursive=1"),r=e;s.then((function(e){var s=[];e&&e.data&&e.data.tree&&(s=e.data.tree.filter((function(e){return e.path.includes("progress")&&!e.path.includes(".fld")}))),r.setState({authorized:!0,user:t,gh_api:a,files:s,repo:n})})),s.catch((function(e){r.setState({authorized:!0,user:t,gh_api:a,repo:n})}))})),n.catch((function(a){e.setState({authorized:!1,user:t})}))}}},{key:"onClickDir",value:function(e){this.setState({root:e})}},{key:"processHtml",value:function(e,t){var a=this,n=t.getBlob(e.sha),s=this;n.then((function(e){200===e.status&&s.setState({preview_html:e.data,preview_file_status:0})})),n.catch((function(e){a.setState({preview_file_status:2}),console.log(e)}))}},{key:"processImages",value:function(e){}},{key:"renderFilePreviewProgress",value:function(){switch(this.state.preview_file_status){case 0:case 0:return"";case 2:return s.a.createElement("div",null,"... \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u0430\u0439\u043b\u0430 \u043d\u0435 \u0443\u0434\u0430\u043b\u0430\u0441\u044c");case 1:return s.a.createElement("div",{className:"col-12 text-center pt-5 mt-5"},s.a.createElement(w.a,{icon:N.c,className:"text-primary fa-spin fa-5x"}))}}},{key:"onClickFile",value:function(e){var t=e.path.split("."),a="."+t[t.length-1];if(this.setState({preview_file_status:1,preview_html:""}),H.includes(a)){var n=this.state.gh_api.getApi().getRepo(A.user,A.repo);switch(a){case".html":this.processHtml(e,n);break;default:return}}else this.setState({preview_file_status:2})}},{key:"render",value:function(){return this.state.authorized?s.a.createElement("div",{className:""},s.a.createElement(P,{className:"mb-5"}),s.a.createElement("div",{className:"container-fluid mt-5"},s.a.createElement("div",{className:"row px-3"},s.a.createElement(z,{title:"\u041f\u0440\u043e\u0433\u0440\u0435\u0441\u0441",onClickDir:this.onClickDir,onClickFile:this.onClickFile,root:this.state.root,files:this.state.files,className:"card mt-3 mt-md-4 pt-3 col-8 col-md-4 col-lg-3 d-none d-md-block"}),s.a.createElement("div",{className:"col-12 col-md-8 col-lg-9 "},this.renderFilePreviewProgress(),s.a.createElement("iframe",{title:"preview-html-files",className:"col-12 px-0 border-0 min-h-85 mh-85 mh-md-85",srcDoc:this.state.preview_html}))))):"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 ...."}}]),t}(n.Component),q=[".json",".jpg",".png"],M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={gh_api:{},authorized:!1,user:{},preview_html:null,preview_file_status:0,files:[],root:"",repo:null,openfile:{}},a.onClickDir=a.onClickDir.bind(Object(v.a)(a)),a.onClickFile=a.onClickFile.bind(Object(v.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("user");if(t){var a=new B({token:(t=JSON.parse(t)).token});a.setRepo(A.user,A.repo);var n=a.setBranch("investigations");n.then((function(){var n=a.getApi().getRepo(A.user,A.repo),s=n.getTree("investigations?recursive=1"),r=e;s.then((function(e){var s=[];e&&e.data&&e.data.tree&&(s=e.data.tree.filter((function(e){return e.path.includes("support")}))),r.setState({authorized:!0,user:t,gh_api:a,files:s,repo:n})})),s.catch((function(e){r.setState({authorized:!0,user:t,gh_api:a,repo:n})}))})),n.catch((function(a){e.setState({authorized:!1,user:t})}))}}},{key:"onClickDir",value:function(e){this.setState({root:e})}},{key:"processVideo",value:function(e,t){var a=this,n=t.getBlob(e.sha),r=this;n.then((function(e){if(200===e.status){var t=new TextEncoder,a=new Blob([t.encode(e.data)],{type:"video/mp4"}),n=URL.createObjectURL(a);console.log(n,a);var i=s.a.createElement("video",null,s.a.createElement("source",{src:n}));r.setState({preview_html:i,preview_file_status:0})}})),n.catch((function(e){a.setState({preview_file_status:2}),console.log(e)}))}},{key:"processImages",value:function(e){}},{key:"renderFilePreviewProgress",value:function(){switch(this.state.preview_file_status){case 0:case 0:return"";case 2:return s.a.createElement("div",null,"... \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u0430\u0439\u043b\u0430 \u043d\u0435 \u0443\u0434\u0430\u043b\u0430\u0441\u044c");case 1:return s.a.createElement("div",{className:"col-12 text-center pt-5 mt-5"},s.a.createElement(w.a,{icon:N.c,className:"text-primary fa-spin fa-5x"}))}}},{key:"onClickFile",value:function(e){var t=e.path.split("."),a="."+t[t.length-1];if(this.setState({preview_file_status:1,preview_html:""}),q.includes(a)){var n=this.state.gh_api.getApi().getRepo(A.user,A.repo);switch(a){case".html":this.processHtml(e,n);break;case".mp4":this.processVideo(e,n);break;default:return}}else this.setState({preview_file_status:2})}},{key:"render",value:function(){return this.state.authorized?s.a.createElement("div",{className:""},s.a.createElement(P,{className:"mb-5"}),s.a.createElement("div",{className:"container-fluid mt-5"},s.a.createElement("div",{className:"row px-3"},s.a.createElement(z,{title:"\u0421\u043b\u0443\u0436\u0431\u0430 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438",onClickDir:this.onClickDir,onClickFile:this.onClickFile,root:this.state.root,files:this.state.files,className:"card mt-3 mt-md-4 pt-3 col-8 col-md-4 col-lg-3 d-none d-md-block min-h-85 mh-85 mh-md-85"}),s.a.createElement("div",{className:"col-12 col-md-8 col-lg-9 "},this.renderFilePreviewProgress(),this.state.preview_html)))):"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 ...."}}]),t}(n.Component);function W(){return s.a.createElement("div",{className:""},s.a.createElement(P,{className:"mb-5"}),s.a.createElement("div",{className:"container-fluid mt-5"},s.a.createElement("div",{className:"col-12 h3"},"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435 ",A.appname),s.a.createElement("div",{className:"col-12"},A.description)))}var V=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={login:"",password:"",submitted:!1,user:{},error:!1},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){sessionStorage.removeItem("user")}},{key:"handleChange",value:function(e){var t,a=e.target,n=a.name,s=a.value;this.setState((t={},Object(k.a)(t,n,s),Object(k.a)(t,"submitted",!1),t))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.login,s=a.password;this.setState({submitted:!0});var r={name:n,token:s},i=new B({token:r.token});i.setRepo(A.user,A.repo);var o=i.setBranch(A.branch);o.then((function(){sessionStorage.setItem("user",JSON.stringify(r)),t.setState({submitted:!0,user:r})})),o.catch((function(e){t.setState({error:!0})}))}},{key:"renderLoginForm",value:function(){var e=this.state,t=e.login,a=e.password,n=e.submitted,r=e.error;return s.a.createElement("div",{className:"container p-5"},s.a.createElement("form",{className:"row mt-5 p-md-5 bg-primary text-white max-w-600px mx-auto",onSubmit:this.handleSubmit},s.a.createElement("div",{className:r?"col-12 text-danger":"invisible col-12"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d"),s.a.createElement("div",{className:"form-group col-12"},s.a.createElement("label",{htmlFor:"login"},"\u043b\u043e\u0433\u0438\u043d"),s.a.createElement("input",{type:"text",name:"login",value:t,className:"form-control col-12 mb-3"+(n&&!t?" border-danger":""),onChange:this.handleChange}),n&&!t&&s.a.createElement("div",{className:"text-danger"},"\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u043d\u0430\u044f \u043f\u043e\u043b\u044f")),s.a.createElement("div",{className:"form-group col-12"},s.a.createElement("label",{htmlFor:"password"},"\u043f\u0430\u0440\u043e\u043b\u044c"),s.a.createElement("input",{type:"password",name:"password",value:a,className:"form-control col-12 mb-3"+(n&&!a?" border-danger":""),onChange:this.handleChange}),n&&!a&&s.a.createElement("div",{className:"text-danger"},"\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u043d\u0430\u044f \u043f\u043e\u043b\u044f")),s.a.createElement("div",{className:"form-group col-12"},s.a.createElement("button",{type:"submit",className:"form-control col-12 mb-3"},"\u0412\u043e\u0439\u0442\u0438 \xa0",n?s.a.createElement(w.a,{icon:N.d,className:r?"text-danger d-none":"d-none"}):"",n?s.a.createElement(w.a,{icon:N.c,className:r?"d-none":"text-success"}):""))))}},{key:"render",value:function(){return this.state.user.token?s.a.createElement(m.a,{to:{pathname:"/",state:{from:"/login"}}}):this.renderLoginForm()}}]),t}(s.a.Component),G=(a(129),a(130),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(p.a,{basename:""},s.a.createElement(m.b,{exact:!0,strict:!0,path:"/login",component:V}),s.a.createElement(f,{exact:!0,path:"/",component:W}),s.a.createElement(f,{exact:!0,strict:!0,path:"/upload",component:I}),s.a.createElement(f,{exact:!0,strict:!0,path:"/investigations",component:J}),s.a.createElement(f,{exact:!0,strict:!0,path:"/support",component:M}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},67:function(e,t,a){e.exports=a(131)},72:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},86:function(e,t){},88:function(e,t){}},[[67,1,2]]]);
//# sourceMappingURL=main.dd366b79.chunk.js.map