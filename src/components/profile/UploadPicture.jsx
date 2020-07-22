import React, { useState } from "react";
import { Button, Container, Avatar } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { makeStyles } from "@material-ui/core/styles";
import Upload from "./Upload";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
}));

const UploadPicture = () => {
  const classes = useStyles();
  const [file, setFile] = useState("");

  const handleChange = (e) => {
    setFile(e.target.value);
  };

  const uploadHandler = () => {
    axios.post();
  };

  return (
    <div>
      <Upload />
      <Container spacing={1}>
        <Avatar src={uploadHandler} className={classes.large} />
        <Button
          onSubmit={handleChange}
          variant="contained"
          color="default"
          value={file}
          className={classes.button}
          startIcon={<CloudUploadIcon />}
        >
          Upload Picture
        </Button>
      </Container>
    </div>
  );
};

export default UploadPicture;
