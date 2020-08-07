import React, {useState} from "react";
import {CircularProgress, Grid, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles(() => ({
   container: {
       height: "100vh"
   },
   search_bar: {
       marginTop: "30vh"
   },
    loader: {
       marginTop: 10
    }
}));

const HomePage = () => {

    const classes = useStyles();


    return (
        <Grid direction={"column"}
              className={classes.container}
              alignContent={"center"}
              alignItems={"center"}
              container
        >
            <Grid container
                  alignContent={"center"}
                  justify={"center"}
                  className={classes.search_bar}
                  alignItems={"center"}
                  item
            >
                <div>
                    asda
                </div>
            </Grid>
        </Grid>
    )

};

export default HomePage;