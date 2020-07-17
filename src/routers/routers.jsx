import React from "react";
import "../index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "../components/signup/Signup";
import Login from "../components/login/Login";
import Homepage from "../components/landing/Homepage";

export default class MyRoutes extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}
