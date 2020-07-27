import React from "react";
import { Button, Container } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
export default function UploadCV() {
  const classes = useStyles();
  return (
    <div>
      <Container spacing={1}>
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<CloudUploadIcon />}
        >
          Upload CV
        </Button>
      </Container>
    </div>
  );
}
