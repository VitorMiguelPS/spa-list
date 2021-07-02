import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function HomePage(){
  return (
    <Grid item>
      <Typography variant="h1">Bem vindo ao Registrator</Typography>
      <Link to="/login">Login</Link>
    </Grid>
  )
};

export default HomePage;