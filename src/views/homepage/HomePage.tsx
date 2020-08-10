import React, {useEffect, useState} from "react";
import {Button, Link, CircularProgress, Grid, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles(() => ({
   container: {
       height: "100vh",
   },
   search_bar: {
       marginTop: "20vh"
   },
    loader: {
       marginTop: 10
    },
    header:{
      marginTop: "1%"
    },
    button_container: {
      marginTop: "3%",
      marginBottom: "2%"
    },
    button: {
        color: "#FF5700",
        border: "1px solid #FF5700",
        backgroundColor: "#fff",
        borderRadius: 4,
        "&:hover": {
            color: "#fff",
            backgroundColor: "#FF5700",
        },
        padding: "3px 16px",
        fontWeight: 700,
        fontSize: 12,
        width: 120,
        height: 50,
        marginRight: "2%",
        marginLeft: "2%"
    },
    link: {
       fontSize: 14
    }
}));

const HomePage = () => {

    const classes = useStyles();

    const [latestReleases, setLatestReleases] = useState({
        mac: "",
        windows: "",
        linux: ""
    })
    useEffect(() => {
        axios.get("https://api.github.com/repos/zachary-nguyen/electron-reddit/releases/latest")
            .then(res => {
                const assets = res.data.assets;
                const version = res.data.name;
                setLatestReleases(
                    {
                        mac: assets.find((x:any) => x.name === `Reddit-Client-${version}.dmg`).browser_download_url,
                        windows: assets.find((x:any) => x.name === `Reddit-Client-Setup-${version}.exe`).browser_download_url,
                        linux: assets.find((x:any) => x.name === `Reddit-Client-${version}.msi`).browser_download_url
                    }
                )
            })
            .catch(e => {})
    },[])

    return (
        <Grid direction={"column"}
              className={classes.container}
              alignContent={"center"}
              alignItems={"center"}
              container
        >
            <Grid container
                  alignContent={"center"}
                  justify={"flex-start"}
                  className={classes.search_bar}
                  alignItems={"center"}
                  item
                  direction={"column"}
            >
                <Grid>
                    <Typography variant={"h2"}>
                        Reddit Desktop Client
                    </Typography>
                </Grid>
                <Grid direction={"row"}>
                    <img src={require("../../assets/icon.png")}/>
                </Grid>
                <Grid className={classes.header} justify={"center"} item>
                    <Typography variant={"h5"}>
                        Latest Releases
                    </Typography>
                </Grid>
                <Grid className={classes.button_container} justify={"center"} container direction={"row"}>
                    <Button download href={latestReleases.windows} className={classes.button}>Windows</Button>
                    <Button download href={latestReleases.mac} className={classes.button}> Mac </Button>
                    <Button download href={latestReleases.linux} className={classes.button}> Linux </Button>
                </Grid>
                <Grid justify={"center"} container>
                    <Link className={classes.link} href={"https://github.com/zachary-nguyen/electron-reddit"}> View source code </Link>
                </Grid>
            </Grid>
        </Grid>
    )

};

export default HomePage;