import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <h2>Update Your Profile</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="firstName" label="First Name" variant="outlined" />
      </form>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="lastName" label="Last Name" variant="outlined" />
      </form>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-multiline-static"
          label="About You"
          multiline
          rows={4}
          //   defaultValue="Default Value"
          variant="outlined"
        />
      </form>
    </div>
  );
}
