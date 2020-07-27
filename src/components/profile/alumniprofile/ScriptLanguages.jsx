import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import { Grid, Container, TextareaAutosize } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export default function ScriptLanguages({
  html,
  css,
  javascript,
  nodejs,
  mysql,
  mongodb,
  react,
}) {
  return (
    <div>
      <Container maxWidth="sm">
        <h3>Script Languages</h3>
        <a href="https://www.google.com">What does * mean?</a>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Typography component="legend">HTML</Typography>
          </Grid>
          <Grid item xs={2}>
            <Rating name="html" value={html} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Typography component="legend">CSS</Typography>
          </Grid>
          <Grid item xs={2}>
            <Rating name="css" value={css} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Typography component="legend">Javascript</Typography>
          </Grid>
          <Grid item xs={2}>
            <Rating name="javascript" value={javascript} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Typography component="legend">NodeJS</Typography>
          </Grid>
          <Grid item xs={2}>
            <Rating name="nodejs" value={nodejs} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Typography component="legend">MySQL</Typography>
          </Grid>
          <Grid item xs={5}>
            <Rating name="mysql" value={mysql} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Typography component="legend">MongoDB</Typography>
          </Grid>
          <Grid item xs={2}>
            <Rating name="mongodb" value={mongodb} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Typography component="legend">React</Typography>
          </Grid>
          <Grid item xs={2}>
            <Rating name="react" value={react} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
