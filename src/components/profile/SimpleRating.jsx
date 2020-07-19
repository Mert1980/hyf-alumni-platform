import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function SimpleRating(props) {
  const [en, setEnValue] = React.useState(0);
  const [nl, setNlValue] = React.useState(0);
  console.log("English", en);
  console.log("Dutch", nl);
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <p>English</p>
        <Rating
          name="simple-controlled"
          value={en}
          onChange={(event, newValue) => {
            setEnValue(newValue);
            console.log(1, event);
            console.log(2, newValue);
            // setEnValue(event.target.value);
          }}
        />
        <p>Dutch</p>
        <Rating
          name="simple-controlled"
          value={nl}
          onChange={(event, newValue) => {
            setNlValue(newValue);
            console.log(3, event);
            console.log(4, newValue);
          }}
        />
      </Box>
    </div>
  );
}
