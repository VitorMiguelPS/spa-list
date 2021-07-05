import React, { useState, useContext } from "react";
import {
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  Typography,
  Modal,
  Backdrop,
  Fade,
  TextField,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";

import { ContextCommon } from "../../contexts/common";
import { useStyles } from "./styles";

function TableList(listType) {
  const classes = useStyles();

  const { userList, setUserList, clientList, setClientList } =
    useContext(ContextCommon);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addListItem = (newItem) => {
    if (listType.list === "client") {
      setClientList([...clientList, newItem]);
    } else {
      setUserList([...userList, newItem]);
    }
  };

  const receiveNewItem = (e) => {
    e.preventDefault();

    let newClientToSubmit = {};
    const objInputs = e.target;

    for (const item in objInputs) {
      if (objInputs[item]?.localName === "input") {
        const itemId = objInputs[item].id;
        newClientToSubmit[`${itemId}`] = objInputs[item].value;
      }
    }

    addListItem(newClientToSubmit);
  };

  return (
    <Grid container>
      <Grid item className={classes.headerPage}>
        <Typography
          variant="h2"
          className={classes.titlePage}
        >{`${listType.list} List`}</Typography>

        <Button
          variant="contained"
          color="secondary"
          onClick={handleOpen}
        >{`Insert new ${listType.list}`}</Button>
      </Grid>

      <TableContainer component={Paper}>
        {listType.list === "client" && (
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">CNPJ</TableCell>
                <TableCell align="center">Fantasy Name</TableCell>
                <TableCell align="center">Social Reason</TableCell>
                <TableCell align="center">Zip</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">N°</TableCell>
                <TableCell align="center">Complement</TableCell>
                <TableCell align="center">District</TableCell>
                <TableCell align="center">City</TableCell>
                <TableCell align="center">State</TableCell>
                <TableCell align="center">&nbsp;</TableCell>
              </TableRow>
            </TableHead>

            {clientList.length > 0 && (
              <TableBody>
                {clientList?.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {item.cnpj}
                    </TableCell>
                    <TableCell align="center">{item.fantasyName}</TableCell>
                    <TableCell align="center">{item.socialReason}</TableCell>
                    <TableCell align="center">{item.zip}</TableCell>
                    <TableCell align="center">{item.address}</TableCell>
                    <TableCell align="center">{item.numberAddress}</TableCell>
                    <TableCell align="center">{item.complement}</TableCell>
                    <TableCell align="center">{item.district}</TableCell>
                    <TableCell align="center">{item.city}</TableCell>
                    <TableCell align="center">{item.state}</TableCell>
                    <TableCell align="center">
                      <Button>
                        <CreateIcon></CreateIcon>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        )}

        {listType.list === "user" && (
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Second Name</TableCell>
                <TableCell align="center">Telephone</TableCell>
                <TableCell align="center">E-mail</TableCell>
                <TableCell align="center">Password</TableCell>
                <TableCell align="center">&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userList.map((item, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{item.name}</TableCell>
                  <TableCell align="center">{item.secondName}</TableCell>
                  <TableCell align="center">{item.telephone}</TableCell>
                  <TableCell align="center">{item.email}</TableCell>
                  <TableCell align="center">{item.password}</TableCell>
                  <TableCell align="center">
                    <Button>
                      <CreateIcon></CreateIcon>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>

      {listType.list === "client" && (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <form
              noValidate
              autoComplete="off"
              className={classes.paper}
              onSubmit={(e) => receiveNewItem(e)}
            >
              <Grid item className={classes.inputSection}>
                <Grid item className={classes.modalInput}>
                  <TextField
                    margin="normal"
                    required
                    variant="outlined"
                    id="cnpj"
                    label="CNPJ"
                    name="cnpj"
                  />
                  <TextField
                    margin="normal"
                    required
                    variant="outlined"
                    id="fantasyName"
                    label="Fantasy Name"
                    name="cnfantasyNamepj"
                  />
                  <TextField
                    margin="normal"
                    required
                    variant="outlined"
                    id="socialReason"
                    label="Social Reason"
                    name="socialReason"
                  />
                  <TextField
                    margin="normal"
                    required
                    variant="outlined"
                    id="zip"
                    label="Zip"
                    name="zip"
                  />
                  <TextField
                    margin="normal"
                    required
                    variant="outlined"
                    id="address"
                    label="Address"
                    name="address"
                  />
                </Grid>

                <Grid item className={classes.modalInput}>
                  <TextField
                    margin="normal"
                    required
                    variant="outlined"
                    id="numberAddress"
                    label="N°"
                    name="numberAddress"
                  />
                  <TextField
                    margin="normal"
                    required
                    variant="outlined"
                    id="complement"
                    label="Complement"
                    name="complement"
                  />
                  <TextField
                    margin="normal"
                    required
                    variant="outlined"
                    id="district"
                    label="District"
                    name="district"
                  />
                  <TextField
                    margin="normal"
                    required
                    variant="outlined"
                    id="city"
                    label="City"
                    name="city"
                  />
                  <TextField
                    margin="normal"
                    required
                    variant="outlined"
                    id="state"
                    label="State"
                    name="state"
                  />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                color="secondary"
                type="submit"
                className={classes.submit}
              >
                Register
              </Button>
            </form>
          </Fade>
        </Modal>
      )}

      {listType.list === "user" && (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <form
              noValidate
              autoComplete="off"
              className={classes.paper}
              onSubmit={(e) => receiveNewItem(e)}
            >
              <Grid item className={classes.inputSection}>
                <Grid item className={classes.modalInput}>
                  <TextField
                    margin="normal"
                    required
                    variant="outlined"
                    id="name"
                    label="Name"
                    name="name"
                  />
                  <TextField
                    margin="normal"
                    required
                    variant="outlined"
                    id="secondName"
                    label="Second Name"
                    name="secondName"
                  />
                  <TextField
                    margin="normal"
                    required
                    variant="outlined"
                    id="telephone"
                    label="Telephone"
                    name="telephone"
                  />
                </Grid>

                <Grid item className={classes.modalInput}>
                  <TextField
                    margin="normal"
                    required
                    variant="outlined"
                    id="email"
                    label="E-mail"
                    name="email"
                  />
                  <TextField
                    margin="normal"
                    required
                    variant="outlined"
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                  />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                color="secondary"
                type="submit"
                className={classes.submit}
              >
                Register
              </Button>
            </form>
          </Fade>
        </Modal>
      )}
    </Grid>
  );
}

export default TableList;