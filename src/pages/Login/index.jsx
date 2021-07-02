import React, { useState } from "react";
import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./styles";

function Login() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const preUser = {
    user: "masteruser",
    password: "123qwe",
  };

  function checkLoginCredentials() {
    if (email === preUser.user && password === preUser.password) {
      window.location.href = "/listagem";
    } else {
      alert(
        "Something gone wrong with your credentials. Please review your E-mail and Password"
      );
    }
  }

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.LoginPage}
    >
      <Paper elevation={0} className={classes.background} />

      <form noValidate autoComplete="off" className={classes.form}>
        <Typography>Login</Typography>

        <TextField
          margin="normal"
          required
          fullWidth
          variant="outlined"
          id="email"
          label="E-mail"
          name="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="password"
          type="password"
          id="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => checkLoginCredentials()}
        >
          Let's go
        </Button>

        <Link to="/">Back to home</Link>
      </form>
    </Grid>
  );
}

export default Login;
