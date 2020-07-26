import React, { Component } from "react";
import axios from "axios";
import Alumni from "./alumniprofile/alumni";
import Search from './search/profileSearch';

const uriEndpoin = `http://localhost:8080/`;

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
    });
  }

  render() {
    return (
      <div>
        {/* {this.state.profiles.length > 0 &&
          this.state.profiles.map((i) => <Alumni key={i._id} profile={i} />)} */}
          <Search />
      </div>
    );
  }
}

export default CompanyProfile;
