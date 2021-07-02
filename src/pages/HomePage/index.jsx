import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./styles";
import HomeImage from "../../assets/images/registrator.png";
import SideBar from "../../components/sideBar";

function HomePage() {
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <SideBar />

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.HomeContent}
      >
        <Grid item direction="column" className={classes.TextSection}>
          <Typography variant="h6">
            Need help to manage your clients?
          </Typography>
          <Typography variant="h1">Welcome to Registrator</Typography>
          <Typography variant="h6">
            The better way to register and manage all your client base. Nothing
            is better that keep the power in your hands
          </Typography>
          <Button variant="contained" className={classes.ButtonLogin}>
            <Link to="/login">Start</Link>
          </Button>
        </Grid>

        <Grid item className={classes.ImageSection}>
          <img src={HomeImage} alt="Registrator" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomePage;
