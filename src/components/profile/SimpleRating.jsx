import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function SimpleRating(props) {
  const [en, setEnValue] = React.useState(0);
  const [nl, setNlValue] = React.useState(0);
  const [fr, setFrValue] = React.useState(0);
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <div>
          <p>English</p>
          <Rating
            name="english"
            value={en}
            onChange={(event, newValue) => {
              setEnValue(newValue);
            }}
          />
        </div>
        <div>
          <p>Dutch</p>
          <Rating
            name="dutch"
            value={nl}
            onChange={(event, newValue) => {
              setNlValue(newValue);
            }}
          />
        </div>
        <div>
          <p>French</p>
          <Rating
            name="french"
            value={fr}
            onChange={(event, newValue) => {
              setFrValue(newValue);
            }}
          />
        </div>
      </Box>
    </div>
  );
}
