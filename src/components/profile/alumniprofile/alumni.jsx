import React, { Component } from "react";
import Rating from "@material-ui/lab/Rating";

class Alumni extends Component {
  state = {
    profile: [],
  };
  componentDidMount() {
    this.setState({ profile: this.props.location.state.i });
  }
  render() {
    const { profile } = this.state;
    return (
      <div>
        {profile.length != 0 && (
          <div>
            <h1>Profile {profile.name} </h1>

            <p>First Name : {profile.name}</p>
            <p>Last Name : {profile.surname}</p>
            <p>====IMAGE====</p>
            <ul>
              {profile.media.map((i) => (
                <li key={i._id}>
                  <a href={i.url}>Check {i.media}</a>
                </li>
              ))}
            </ul>

            <p>{profile.about}</p>
            <p>{profile.jobTitle}</p>
            <h5>Techinical Skills</h5>
            <ul>
              {profile.skills.map((i) => (
                <li key={i.skill}>
                  <span>{i.skill}</span>{" "}
                  <Rating
                    style={{ paddingLeft: "30px" }}
                    key={i._id}
                    value={i.rate}
                  />
                </li>
              ))}
            </ul>
            <h5>Languages</h5>
            <ul>
              {profile.languages.map((i) => (
                <li key={i.language}>
                  <span>{i.language}</span>{" "}
                  <Rating
                    style={{ paddingLeft: "30px" }}
                    key={i._id}
                    value={i.rate}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Alumni;
