import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home.component";
import Admin from "./components/admin.component";
import Login from "./components/login.components";
import Signup from "./components/signup.component";
import NotFound404 from "./components/not_found_404"
import PrivateRoute from "./PrivateRoute";
import { Helmet } from "react-helmet";

function App() {
  const TITLE = "Team";
  return (
    <Router>
      <div>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Signup} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/admin" component={Admin} />
          <Route path="/404" component={NotFound404} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
