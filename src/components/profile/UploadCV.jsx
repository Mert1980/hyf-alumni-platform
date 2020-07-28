import React from "react";
//import { Button, Container } from "@material-ui/core";
//import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { makeStyles } from "@material-ui/core/styles";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Preview = ({ meta }) => {
  const { name, percent, status } = meta;
  return (
    <span
      style={{
        alignSelf: "flex-start",
        margin: "10px 3%",
        fontFamily: "Helvetica",
      }}
    >
      {name}, {Math.round(percent)}%, {status}
    </span>
  );
};

const handleSubmit = (files, allFiles) => {
  console.log(files.map((f) => f.meta));
  allFiles.forEach((f) => f.remove());
};

export default function UploadCV() {
  const classes = useStyles();

  const getUploadCV = () => ({
    url: " https://httpbin.org/post",
  });

  return (
    <div>
      <Dropzone
        getUploadCV={getUploadCV}
        onSubmit={handleSubmit}
        PreviewComponent={Preview}
        inputContent="Drop Files (CV)"
        disabled={(files) =>
          files.some((f) =>
            ["preparing", "getting_upload_params", "uploading"].includes(
              f.meta.status
            )
          )
        }
      />
      {/*
      
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
      */}
    </div>
  );
}
