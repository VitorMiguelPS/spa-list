import React, { useState, useContext, useEffect } from "react";
import { Grid, Typography, Paper, Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

import { ContextCommon } from "../../contexts/common";
import { useStyles } from "./styles";
import SideBar from "../../components/sideBar";
import TableList from "../../components/tableList";

import ClientImage from "../../assets/images/client.png";
import UserImage from "../../assets/images/user.png";

function ListPage() {
  const classes = useStyles();
  const history = useHistory();

  const { loged } = useContext(ContextCommon);

  const [listView, setListView] = useState("");

  useEffect(() => {
    const checkLogedStatus = () => {
      if (!loged) {
        history.push("/login");
      }
    };

    checkLogedStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid item>
      <SideBar actPage={"listagem"} />

      {!listView ? (
        <>
          <Grid item className={classes.titleSession}>
            <Typography variant="h1" className={classes.pageTitle}>
              Choose the list
            </Typography>
            <Typography variant="h6">
              You can choose about to manage clients ou users list
            </Typography>
          </Grid>

          <Grid container className={classes.listItems}>
            <Paper elevation={3} className={classes.itemList}>
              <Typography variant="h6">Client</Typography>
              <img src={ClientImage} alt="Client" />
              <Button
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={() => setListView("client")}
              >
                View
              </Button>
            </Paper>
            <Paper elevation={3} className={classes.itemList}>
              <Typography variant="h6">User</Typography>
              <img src={UserImage} alt="User" />
              <Button
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={() => setListView("user")}
              >
                View
              </Button>
            </Paper>
          </Grid>
        </>
      ) : (
        <Grid className={classes.tableSession}>
          <Grid item className={classes.breadcrumb}>
            <Button onClick={() => setListView("")}>
              <ArrowBackIcon /> Back
            </Button>
          </Grid>

          <TableList list={listView} />
        </Grid>
      )}
    </Grid>
  );
}

export default ListPage;
