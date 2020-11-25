import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home.component";
import Admin from "./components/admin.component";
import Login from "./components/login.components";
import Signup from "./components/signup.component";
import HeaderComp from "./components/header.component";
import FooterComp from "./components/footer.component";
import PrivateRoute from "./PrivateRoute";
import { Helmet } from "react-helmet";
import $ from "jquery";
import Popper from "popper.js";

function App() {
  const TITLE = "Team";
  return (
    <Router>
      <div>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Signup} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/admin" component={Admin} />
      </div>
    </Router>
  );
}

export default App;
