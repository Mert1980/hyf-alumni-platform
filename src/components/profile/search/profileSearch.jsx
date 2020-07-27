import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const uriEndpoin = `https://hyf-almuni.herokuapp.com/`;
class Search extends Component {
  state = {
    profiles: [],
    studentsSkill: [],
    studentsLanguage: [],
    lang: [],
    skill: [],
  };
  componentDidMount() {
    const config = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    axios.get(`${uriEndpoin}alumni`, config).then((res) => {
      this.setState({ profiles: res.data.alumni });
    });
  }
  handleChangeSkill = (e) => {
    const studentID = [];
    e.preventDefault();
    this.state.profiles.map((i) => {
      i.skills.map((skill) => {
        if (skill.skill.toLowerCase() === e.target.value.toLowerCase()) {
          studentID.push(skill.student);
        } else {
          return null;
        }
      });
    });
    this.setState({ studentsSkill: studentID });
  };
  handleChangeLanguage = (e) => {
    const studentID = [];
    const langg = [];
    e.preventDefault();
    this.state.profiles.map((i) => {
      i.languages.map((lang) => {
        if (lang.language.toLowerCase() === e.target.value.toLowerCase()) {
          studentID.push(lang.student);
        } else if (
          lang.language.toLowerCase() !== e.target.value.toLowerCase() &&
          lang.language === null
        ) {
          return null;
        } else {
          langg.push(e.target.value);
        }
      });
    });
    this.setState({ studentsLanguage: studentID });
    this.setState({ lang: langg });
  };

  render() {
    return (
      <div>
        <h1>Find me</h1>
        <select onChange={this.handleChangeSkill} className="custom-select">
          <option value="0" selected>
            Select Skill
          </option>
          <option value="javascript">JavaScript</option>
          <option value="mysql">MySQL</option>
          <option value="MongoDB">MongoDB</option>
          <option value="Nodejs">Nodejs</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
        </select>
        <select onChange={this.handleChangeLanguage} className="custom-select">
          <option value="0" selected>
            Select Language
          </option>
          <option value="English">English</option>
          <option value="Dutch">Dutch</option>
          <option value="French">French</option>
        </select>
        <div>
          <h2>Profiles</h2>
          {this.state.studentsSkill.length > 0 && (
            <ul>
              {this.state.profiles.map((i) =>
                this.state.studentsSkill.map((e) =>
                  this.state.studentsLanguage.map((lang) => {
                    if (i._id === e && i._id === lang) {
                      return (
                        <li key={i._id}>
                          <Link
                            to={{
                              pathname: "/alumniProfile",
                              state: { i },
                            }}
                          >
                            {i.name}
                          </Link>
                        </li>
                      );
                    } else {
                      return null;
                    }
                  })
                )
              )}
            </ul>
          )}
          {this.state.lang.length > 1
            ? `There are ${this.state.profiles.length} alumni matching your query`
            : null}
          <br />
          {this.state.studentsSkill.length === 0 ? ` ` : null}
        </div>
      </div>
    );
  }
}

export default Search;
