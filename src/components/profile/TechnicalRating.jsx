import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import { Grid, Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiContainer: {
      // Name of the rule
      root: {
        // Some CSS
        color: "white",
        width: "300%",
      },
    },
  },
});

export default function TechnicalRating() {
  const [html, setHTML] = React.useState(0);
  const [css, setCSS] = React.useState(0);
  const [javascript, setJavascript] = React.useState(0);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <Grid container spacing={2}>
            <Grid item xs={2}>
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
            <Grid item xs={2}>
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
            <Grid item xs={2}>
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
        </Container>
      </ThemeProvider>
    </div>
  );
}
