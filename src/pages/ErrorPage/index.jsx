import React from "react";
import { Grid, Typography } from "@material-ui/core";
import ErrorGif from "../../assets/images/404.gif";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <Grid item style={{ marginTop: 50 }}>
      <img src={ErrorGif} alt="You Shall Not Pass" />
      <Typography variant="h1">404</Typography>
      <Typography variant="h4">
        Uau... it seems like Vitor doesn't developed this page...
      </Typography>
      <Typography variant="h4">
        That's true, but you really should not be here
      </Typography>
      <Link to="/">Back to home</Link>
    </Grid>
  );
}

export default ErrorPage;
