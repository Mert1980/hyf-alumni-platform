import React from "react";
import { Button, Container, Avatar } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { makeStyles } from "@material-ui/core/styles";

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
  const [picture, setPicture] = React.useState(null);

  const handleChange = (event) => {
    setPicture(event.target.value);
  };
  const uploadHandler = () => {};
  return (
    <div>
      <Container spacing={1}>
        <Avatar src="/broken-image.jpg" className={classes.large} />
        <input
          style={{ display: "none" }}
          type="file"
          value={picture}
          onChange={handleChange}
        ></input>
        <Button
          onClick={uploadHandler}
          variant="contained"
          color="default"
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
