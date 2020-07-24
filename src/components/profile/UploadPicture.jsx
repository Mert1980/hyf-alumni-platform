import React from "react";
import { Button, Container } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { makeStyles } from "@material-ui/core/styles";
import ImageUploading from "react-images-uploading";

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
  const maxNumber = 69;
  const onChange = (imageList) => {
    // data for submit
    console.log(imageList);
  };
  return (
    <div>
      <Container spacing={1}>
        <ImageUploading multiple onChange={onChange} maxNumber={maxNumber}>
          {({ imageList, onImageUpload }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <Button
                onClick={onImageUpload}
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<CloudUploadIcon />}
              >
                Upload Picture
              </Button>
              &nbsp;
              {imageList.map((image) => (
                <div key={image.key} className="image-item">
                  <img src={image.dataURL} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={image.onRemove}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </Container>
    </div>
  );
};

export default UploadPicture;
