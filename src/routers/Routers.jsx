import React from "react";
import "../index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignupAlumni from "../components/signup/SignupAlumni";
import SignupCompany from "../components/signup/SignupCompany";
import Login from "../components/login/Login";
import Homepage from "../components/landing/Homepage";

export default function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signupalumni" component={SignupAlumni} />
        <Route exact path="/signupcompany" component={SignupCompany} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}
