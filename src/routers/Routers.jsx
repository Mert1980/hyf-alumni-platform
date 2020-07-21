import React from "react";
import "../index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignupAlumni from "../components/signup/SignupAlumni";
import SignupCompany from "../components/signup/SignupCompany";
import LoginAlumni from "../components/login/LoginAlumni";
import LoginCompany from "../components/login/LoginCompany";
import AlumniProfile from "../components/profile/AlumniProfile";
import UpdateProfile from "../components/profile/UpdateProfile";
import CompanyProfile from "../components/profile/CompanyProfile";
import SignupOption from "../components/signup/SignupOption";
import LoginOption from "../components/login/LoginOption";

import Homepage from "../components/landing/Homepage";

export default function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signupalumni" component={SignupAlumni} />
        <Route exact path="/signupcompany" component={SignupCompany} />
        <Route exact path="/signupoption" component={SignupOption} />
        <Route exact path="/loginoption" component={LoginOption} />
        <Route exact path="/loginalumni" component={LoginAlumni} />
        <Route exact path="/logincompany" component={LoginCompany} />
        <Route exact path="/updateprofile" component={UpdateProfile} />
        <Route exact path="/profilealumni" component={AlumniProfile} />
        <Route exact path="/profilecompany" component={CompanyProfile} />
      </Switch>
    </Router>
  );
}
