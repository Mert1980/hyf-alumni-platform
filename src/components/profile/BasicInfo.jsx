import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid, Container, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Typography from "@material-ui/core/Typography";

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

export default function BasicTextFields() {
  const classes = useStyles();
  const [firstName, setFirstname] = React.useState("");
  const [lastName, setLastname] = React.useState("");
  const [about, setAbout] = React.useState("");

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
      name: firstName,
      surname: lastName,
      about: about,
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
        <Grid container spacing={1}>
          <Button
            onClick={handleClick}
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save Basic Info
          </Button>
        </Grid>
      </Container>
    </div>
  );
}
