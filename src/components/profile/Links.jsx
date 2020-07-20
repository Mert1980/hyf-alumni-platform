import React from 'react';
import { TextField, Grid, Container, Button, Box} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

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
    },
  }));
  


const Links = () => {
    const classes = useStyles();

    return (
        <Container>
         <Grid container spacing={1}>  
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="gitHubLink" label="GitHub Link" variant="outlined" />
          </form>
          <Box className={classes.root}>
          <Button variant="contained" color="primary">
           Save
          </Button>
          </Box>
          
          </Grid>
          <Grid>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="LinkedInLink" label="LinkedIn Link" variant="outlined" />
          </form>
          <Box className={classes.root}>
          <Button variant="contained" color="primary">
           Save
          </Button>
          </Box>
          
        </Grid>
        </Container>
        
         

    

    )
}

export default Links
