import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import SaveIcon from "@material-ui/icons/Save";

import "./alumniprofile.css";
import ScriptLanguages from "./ScriptLanguages";
import Languages from "./Languages";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const userData = {
  firstName: "Mert",
  lastName: "Demirok",
  urlImage: "https://ca.slack-edge.com/T91PPTG9H-UMYFQRD8T-c3c7c480793b-512",
  github: "https://github.com/Mert1980",
  linkedIn: "https://www.linkedin.com/in/mertdemirok80/",
  urlCV: "",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in dui efficitur neque semper posuere at porttitor dui. Aenean molestie, velit id feugiat maximus, lorem arcu venenatis est, non hendrerit dolor lectus at quam. Sed tempus elit at finibus bibendum. Morbi eleifend id erat vel rutrum. Cras tellus tellus, blandit sed purus eget, congue tristique eros. Donec maximus auctor arcu, quis iaculis sapien congue vel. Curabitur efficitur tincidunt velit, sit amet semper dui pulvinar eget. Quisque congue venenatis justo, ac sodales sapien molestie a. Nullam tempus ante et vestibulum sagittis. Fusce tempus ultrices est. Nulla bibendum placerat maximus.",
  jobTitle: "Full-stack",
  scriptLanguages: {
    html: "5",
    css: "4",
    javascript: "4",
    nodejs: "4",
    mysql: "2",
    mongodb: "4",
    react: "4",
  },
  languages: {
    english: "5",
    dutch: "4",
    french: "1",
  },
};

function ImageProfile() {
  const classes = useStyles();

  return (
    <div>
      <Avatar
        className={classes.large}
        alt="Mert Demirok"
        src={userData.urlImage}
      />
    </div>
  );
}

export default function AlumniProfile() {
  let history = useHistory();
  const classes = useStyles();

  const header = (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Hackyourfuture Alumni Platform
            </Typography>
            <Button onClick={() => history.push("/")} color="inherit">
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <div className="grid-container">
        <div className="picture">
          <ImageProfile />
          <p>
            {userData.firstName} {userData.lastName}{" "}
          </p>
          <p>{userData.jobTitle}</p>
          <div className="linkedin">
            <LinkedInIcon color="primary" />
            <a href={userData.linkedIn}>Check my LinkedIn profile</a>
          </div>
          <div className="github">
            <GitHubIcon color="primary" />
            <a href={userData.github}>Check my GitHub profile</a>
          </div>
        </div>
        <div className="about">
          <h4>About Me</h4>
          <p>{userData.about}</p>
          <div className="downloadCV">
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
            >
              Save CV
            </Button>
          </div>
        </div>
      </div>
      <div className="tech-skills">
        <ScriptLanguages
          html={userData.scriptLanguages.html}
          css={userData.scriptLanguages.css}
          javascript={userData.scriptLanguages.javascript}
          nodejs={userData.scriptLanguages.nodejs}
          mysql={userData.scriptLanguages.mysql}
          mongodb={userData.scriptLanguages.mongodb}
          react={userData.scriptLanguages.react}
        />
        <div className="languages">
          <Languages
            english={userData.languages.english}
            dutch={userData.languages.dutch}
            french={userData.languages.french}
          />
        </div>
      </div>
    </>
  );

  return header;
}
