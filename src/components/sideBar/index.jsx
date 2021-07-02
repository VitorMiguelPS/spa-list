import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Assessment } from "@material-ui/icons";

import { useStyles } from "./styles";

function SideBar() {
  const classes = useStyles();

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

          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
          <Button component={Link} to="/login" color="inherit">
            Logout
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default SideBar;
