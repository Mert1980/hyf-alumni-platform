import React from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

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

const UploadCVdemo = () => {
  const getUploadParams = () => ({
    url: " https://httpbin.org/post",
  });

  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
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
  );
};

export default UploadCVdemo;
