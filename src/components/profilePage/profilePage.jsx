import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid, Container, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
}));

const uriEndpoin = `http://localhost:8080/`;

export default function ProfilePage() {
  const classes = useStyles();
  const [id, setID] = useState(localStorage.getItem("ID"));
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [about, setAbout] = useState("");
  const [gitHubLink, setGitHubLink] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [html, setHTML] = useState({});
  const [css, setCSS] = useState({});
  const [javascript, setJavascript] = useState({});
  const [nodejs, setNodejs] = useState({});
  const [mysql, setMySql] = useState({});
  const [mongodb, setMongodb] = useState({});
  const [react, setReact] = useState({});
  const [english, setEnglish] = useState({});
  const [dutch, setDutch] = useState({});
  const [french, setFrench] = useState({});
  // follow submission of basic info
  const [saved, setSaved] = useState(false);

  if (saved) {
    setTimeout(() => {
      setSaved(false);
    }, 2000);
  }

  function handleClick() {
    const config = {
      headers: { Authorization: localStorage.getItem("token") },
    };

    const almuniBody = {
      name: firstName,
      surname: lastName,
      about: about,
    };

    const ScriptBody = [html, css, javascript, nodejs, mysql, mongodb, react];
    const languagesBody = [english, dutch, french];
    const mediaBody = [
      { media: "GitHub", student: id, url: gitHubLink },
      { media: "LinkedIn", student: id, url: linkedIn },
    ];
    // axios is used to send post request
    axios.patch(`${uriEndpoin}alumni/${id}`, almuniBody, config).then((e) => {
      if (e.status === 200) {
        setSaved(true);
        console.log(e);
      } else {
        setSaved(false);
      }
    });

    ScriptBody.map((i) => {
      axios.post(`${uriEndpoin}skill`, i, config).then((e) => {
        if (e.status === 200) {
          setSaved(true);
          console.log(e);
        } else {
          setSaved(false);
        }
      });
    });
    languagesBody.map((i) => {
      axios.post(`${uriEndpoin}language`, i, config).then((e) => {
        if (e.status === 200) {
          setSaved(true);
          console.log(e);
        } else {
          setSaved(false);
        }
      });
    });
    mediaBody.map((i) => {
      axios.post(`${uriEndpoin}media`, i, config).then((e) => {
        if (e.status === 200) {
          setSaved(true);
          console.log(e);
        } else {
          setSaved(false);
        }
      });
    });
  }

  return (
    <div>
      <Container maxWidth="sm">
        <h2>Update Your Profile</h2>
        <h4>Basic Information</h4>
        <Grid container spacing={1}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              onChange={(e) => setFirstname(e.target.value)}
              id="firstName"
              label="First Name"
              variant="outlined"
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              onChange={(e) => setLastname(e.target.value)}
              id="lastName"
              label="Last Name"
              variant="outlined"
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              onChange={(e) => setAbout(e.target.value)}
              id="about"
              label="About You"
              multiline
              rows={4}
              //   defaultValue="Default Value"
              variant="outlined"
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              onChange={(e) => setGitHubLink(e.target.value.trim())}
              id="gitHubLink"
              label="GitHub Link"
              variant="outlined"
              value={gitHubLink}
            />
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="LinkedInLink"
              label="LinkedIn Link"
              variant="outlined"
              value={linkedIn}
              onChange={(e) => setLinkedIn(e.target.value.trim())}
            />
          </form>
        </Grid>

        <Container maxWidth="sm">
          <h2>Technical Skills</h2>
          <a href="https://www.google.com">What does * mean?</a>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography component="legend">HTML</Typography>
            </Grid>
            <Grid item xs={2}>
              <Rating
                name="html"
                onChange={(e) => {
                  setHTML({ student: id, skill: "HTML", rate: e.target.value });
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography component="legend">CSS</Typography>
            </Grid>
            <Grid item xs={2}>
              <Rating
                name="css"
                onChange={(e) => {
                  setCSS({ student: id, skill: "CSS", rate: e.target.value });
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography component="legend">Javascript</Typography>
            </Grid>
            <Grid item xs={2}>
              <Rating
                name="javascript"
                onChange={(e) => {
                  setJavascript({
                    student: id,
                    skill: "javascript",
                    rate: e.target.value,
                  });
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography component="legend">NodeJS</Typography>
            </Grid>
            <Grid item xs={2}>
              <Rating
                name="nodejs"
                onChange={(e) => {
                  setNodejs({
                    student: id,
                    skill: "nodejs",
                    rate: e.target.value,
                  });
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography component="legend">MySQL</Typography>
            </Grid>
            <Grid item xs={2}>
              <Rating
                name="mysql"
                onChange={(e) => {
                  setMySql({
                    student: id,
                    skill: "mysql",
                    rate: e.target.value,
                  });
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography component="legend">MongoDB</Typography>
            </Grid>
            <Grid item xs={2}>
              <Rating
                name="mongodb"
                onChange={(e) => {
                  setMongodb({
                    student: id,
                    skill: "mongodb",
                    rate: e.target.value,
                  });
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography component="legend">React</Typography>
            </Grid>
            <Grid item xs={2}>
              <Rating
                name="react"
                onChange={(e) => {
                  setReact({
                    student: id,
                    skill: "react",
                    rate: e.target.value,
                  });
                }}
              />
            </Grid>
          </Grid>
        </Container>

        <div>
          <h3>Languages</h3>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography component="legend">English</Typography>
            </Grid>
            <Grid item xs={2}>
              <Rating
                name="English"
                onChange={(e) => {
                  setEnglish({
                    student: id,
                    language: "English",
                    rate: e.target.value,
                  });
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography component="legend">Dutch</Typography>
            </Grid>
            <Grid item xs={2}>
              <Rating
                name="Dutch"
                onChange={(e) => {
                  setDutch({
                    student: id,
                    language: "Dutch",
                    rate: e.target.value,
                  });
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography component="legend">French</Typography>
            </Grid>
            <Grid item xs={2}>
              <Rating
                name="French"
                onChange={(e) => {
                  setFrench({
                    student: id,
                    language: "French",
                    rate: e.target.value,
                  });
                }}
              />
            </Grid>
          </Grid>
        </div>

        <Button
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<CloudUploadIcon />}
        >
          Upload CV
        </Button>
        <div>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
          >
            Upload Picture
          </Button>
        </div>
        <Grid container spacing={1}>
          <Button
            onClick={handleClick}
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </Grid>

        {saved && (
          <Grid item xs>
            <Typography
              component="h6"
              variant="subtitle1"
              color="error"
              align="center"
            >
              Your basic information is successfully saved.
            </Typography>
          </Grid>
        )}
      </Container>
    </div>
  );
}
