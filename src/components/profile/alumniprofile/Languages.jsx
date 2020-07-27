import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import { Grid, Container } from "@material-ui/core";

export default function LanguageRating({ english, dutch, french }) {
  return (
    <div>
      <Container maxWidth="sm">
        <h3>Languages</h3>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <Typography component="legend">English</Typography>
          </Grid>
          <Grid item xs={2}>
            <Rating name="english" value={english} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <Typography component="legend">Dutch</Typography>
          </Grid>
          <Grid item xs={2}>
            <Rating name="dutch" value={dutch} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <Typography component="legend">French</Typography>
          </Grid>
          <Grid item xs={2}>
            <Rating name="french" value={french} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
