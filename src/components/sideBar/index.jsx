import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Assessment } from "@material-ui/icons";

import { ContextCommon } from "../../contexts/common";

import { useStyles } from "./styles";

function SideBar() {
  const classes = useStyles();

  const { loged, setLoged } = useContext(ContextCommon);

  return (
    <AppBar
      position="static"
      color="transparent"
      className={classes.HeaderMenu}
    >
      <Toolbar className={classes.toolbar}>
        <Grid container alignItems="center" component={Link} to="/">
          <Assessment />
          <Typography variant="h6" className={classes.title}>
            REGISTRATOR
          </Typography>
        </Grid>

        <Grid>
          <Button
            href="https://github.com/VitorMiguelPS"
            target="_blank"
            color="inherit"
          >
            Github
          </Button>

          <Button
            href="https://www.linkedin.com/in/vitor-mp-silva/"
            target="_blank"
            color="inherit"
          >
            LinkedIn
          </Button>

          {!loged && (
            <Button
              variant="contained"
              component={Link}
              to="/login"
              color="inherit"
              className={classes.loginButton}
            >
              Login
            </Button>
          )}
          {loged && (
            <Button
              component={Link}
              to="/"
              color="inherit"
              onClick={() => setLoged(false)}
            >
              Logout
            </Button>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default SideBar;
