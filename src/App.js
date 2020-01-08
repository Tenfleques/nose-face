import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import PrivateRoute from "./Components/privateRoute"


import UploadPage from "./Pages/FileUploader";
import InvestigationsPage from "./Pages/Investigations";
import SupportPage from "./Pages/Support";
import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";

import './Css/bootstrap.css';
import './Css/App.css';



class App extends Component {
  render() {
    return (
      <HashRouter basename="">     
          <Route exact strict path="/login" component={Login} />
          {/* <Route exact strict path="/nose-face/login/" component={Login} /> */}
          <PrivateRoute exact path="/" component={Home} />
          {/* <PrivateRoute exact strict  path="/" component={Home} /> */}
          <PrivateRoute exact strict path="/upload" component={UploadPage} />
          {/* <PrivateRoute exact strict path="/upload" component={UploadPage} /> */}
          <PrivateRoute exact strict path="/investigations" component={InvestigationsPage} />
          <PrivateRoute exact strict path="/support" component={SupportPage} />
          {/* <PrivateRoute exact strict path="/investigations" component={InvestigationsPage} />           */}
      </HashRouter>
    );
  }
}

export default App;
