import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import { Grid, Container, TextareaAutosize } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export default function TechnicalRating() {
  const [html, setHTML] = React.useState(0);
  const [css, setCSS] = React.useState(0);
  const [javascript, setJavascript] = React.useState(0);
  const [nodejs, setNodejs] = React.useState(0);
  const [mysql, setMySql] = React.useState(0);
  const [mongodb, setMongodb] = React.useState(0);
  const [react, setReact] = React.useState(0);
  console.log(html);
  return (
    <div>
      <Container maxWidth="sm">
        <h2>Script Languages</h2>
        <a href="https://www.google.com">What does * mean?</a>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography component="legend">HTML</Typography>
          </Grid>
          <Grid item xs={2}>
            <Rating
              name="html"
              value={html}
              onChange={(event, newValue) => {
                setHTML(newValue);
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
      </Container>
    </div>
  );
}
