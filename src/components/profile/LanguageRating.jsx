import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import { Grid, Container } from "@material-ui/core";

export default function LanguageRating() {
  const [english, setEnglish] = React.useState(0);
  const [dutch, setDutch] = React.useState(0);
  const [french, setFrench] = React.useState(0);
  return (
    <div>
      <Container maxWidth="sm">
        <h3>Languages</h3>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography component="legend">English</Typography>
          </Grid>
          <Grid item xs={2}>
            <Rating
              name="english"
              value={english}
              onChange={(event, newValue) => {
                setEnglish(newValue);
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
              name="dutch"
              value={dutch}
              onChange={(event, newValue) => {
                setDutch(newValue);
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
              name="french"
              value={french}
              onChange={(event, newValue) => {
                setFrench(newValue);
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
