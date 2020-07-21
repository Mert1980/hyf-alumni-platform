import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import BasicInfo from "./BasicInfo";
import UploadCV from "./UploadCV";
import UploadPicture from "./UploadPicture";
import GitHubLink from "./GitHubLink";
import LinkedInLink from './LinkedInLink';
import { Grid, Container, TextareaAutosize } from "@material-ui/core";
import "./profile.css";

// import Languages from "../profile/Languages";
// import SimpleRating from "./SimpleRating";
import LanguageRating from "../profile/LanguageRating";
import TechnicalRating from "./TechnicalRating";

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
}));

export default function AlumniProfile() {
  let history = useHistory();
  const classes = useStyles();

  const header = (
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

      <Container maxWidth="sm">
        <BasicInfo />
        <UploadPicture/>
        <UploadCV/>
        <GitHubLink/>
        <LinkedInLink/>
        <TechnicalRating />
        <LanguageRating />
      </Container>
    </div>
  );

  return header;
}
