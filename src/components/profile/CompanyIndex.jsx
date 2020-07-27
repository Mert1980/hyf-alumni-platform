import React, { Component } from "react";
import axios from "axios";
import Search from "./search/profileSearch";

const uriEndpoin = `https://hyf-almuni.herokuapp.com/`;

class CompanyProfile extends Component {
  state = {
    profiles: [],
  };

  componentDidMount() {
    const config = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    axios.get(`${uriEndpoin}alumni`, config).then((res) => {
      this.setState({ profiles: res.data.alumni });
      console.log("profiles", res.data.alumni);
    });
  }

  render() {
    return (
      <div>
        <Search />
      </div>
    );
  }
}

export default CompanyProfile;
