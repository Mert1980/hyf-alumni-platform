import React, { useState } from "react";
import axios from "axios";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import { Grid, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";

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

export default function TechnicalRating() {
  const classes = useStyles();

  const [html, setHTML] = React.useState({ skill: "HTML", rate: 0 });
  const [css, setCSS] = React.useState(0);
  const [javascript, setJavascript] = React.useState(0);
  const [nodejs, setNodejs] = React.useState(0);
  const [mysql, setMySql] = React.useState(0);
  const [mongodb, setMongodb] = React.useState(0);
  const [react, setReact] = React.useState(0);

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
    const bodyParameters = {
      html,
    };
    const id = localStorage.getItem("ID");
    // axios is used to send post request
    axios
      .patch(
        `https://hyf-almuni.herokuapp.com/alumni/${id}`,
        bodyParameters,
        config
      )
      .then((e) => {
        if (e.status === 200) {
          setSaved(true);
          console.log(e);
        } else {
          setSaved(false);
        }
      });
  }

  return (
    <div>
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
              value={html.rate}
              onChange={(event, newValue) => {
                setHTML({ skill: "HTML", rate: newValue });
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
              value={css}
              onChange={(event, newValue) => {
                setCSS(newValue);
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
              value={javascript}
              onChange={(event, newValue) => {
                setJavascript(newValue);
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
              value={nodejs}
              onChange={(event, newValue) => {
                setNodejs(newValue);
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
              value={mysql}
              onChange={(event, newValue) => {
                setMySql(newValue);
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
              value={mongodb}
              onChange={(event, newValue) => {
                setMongodb(newValue);
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
              value={react}
              onChange={(event, newValue) => {
                setReact(newValue);
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Button
            onClick={handleClick}
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save Tech Skills
          </Button>
        </Grid>
      </Container>
    </div>
  );
}
