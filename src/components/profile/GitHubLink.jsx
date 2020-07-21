import React from 'react';
import { TextField, Grid, Container, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "30ch",
      },
      button: {
        margin: theme.spacing(1),
      },
    },
  }));
  


const Links = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="sm">
            <Grid container spacing={1}>  
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="gitHubLink" label="GitHub Link" variant="outlined" />
          </form>
          <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
    
          
     </Grid>

        </Container>
         
          
        
        
         

    

    )
}

export default Links
