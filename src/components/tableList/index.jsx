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
import MaskedInput from "react-text-mask";

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
        if (objInputs[item].value === "") {
          alert("Please, review the form. All fields are required.");

          return false;
        } else {
          const itemId = objInputs[item].name;
          newClientToSubmit[`${itemId}`] = objInputs[item].value;
        }
      }
    }

    addListItem(newClientToSubmit);
  };

  function TextMaskCustom(props) {
    const { id, inputRef, ...other } = props;

    const masksToValid = [
      {
        telephone: [
          "(",
          /[1-9]/,
          /\d/,
          ")",
          " ",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
        ],
        cnpj: [
          /[0-9]/,
          /\d/,
          ".",
          /\d/,
          /\d/,
          /\d/,
          ".",
          /\d/,
          /\d/,
          /\d/,
          "/",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
        ],
        zip: [/[0-9]/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/],
        numberAddress: [/^[0-9\b]*$/],
      },
    ];

    return (
      <MaskedInput
        {...other}
        ref={(ref) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={masksToValid[0][id]}
        placeholderChar={"\u2000"}
        showMask
      />
    );
  }

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
        {listType.list === "client" ? (
          <Table className={classes.table} aria-label="simple table">
            <TableHead className={classes.headerTable}>
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

            <TableBody>
              {clientList?.map((item, index) => (
                <TableRow
                  key={index}
                  className={index % 2 === 0 ? "" : classes.odd}
                >
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
          </Table>
        ) : (
          <Table className={classes.table} aria-label="simple table">
            <TableHead className={classes.headerTable}>
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
                <TableRow
                  key={index}
                  className={index % 2 === 0 ? "" : classes.odd}
                >
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

      {listType.list === "client" ? (
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
                    id="fantasyName"
                    label="Fantasy Name"
                    name="fantasyName"
                  />
                  <TextField
                    margin="normal"
                    required
                    id="cnpj"
                    label="CNPJ"
                    name="cnpj"
                    InputProps={{
                      inputComponent: TextMaskCustom,
                    }}
                  />
                  <TextField
                    margin="normal"
                    required
                    id="address"
                    label="Address"
                    name="address"
                  />
                  <TextField
                    margin="normal"
                    required
                    id="numberAddress"
                    label="N°"
                    name="numberAddress"
                    type="number"
                  />
                  <TextField
                    margin="normal"
                    required
                    id="state"
                    label="State"
                    name="state"
                  />
                </Grid>

                <Grid item className={classes.modalInput}>
                  <TextField
                    margin="normal"
                    required
                    id="socialReason"
                    label="Social Reason"
                    name="socialReason"
                  />
                  <TextField
                    margin="normal"
                    required
                    id="zip"
                    label="Zip"
                    name="zip"
                    InputProps={{
                      inputComponent: TextMaskCustom,
                    }}
                  />
                  <TextField
                    margin="normal"
                    required
                    id="complement"
                    label="Complement"
                    name="complement"
                  />
                  <TextField
                    margin="normal"
                    required
                    id="district"
                    label="District"
                    name="district"
                  />
                  <TextField
                    margin="normal"
                    required
                    id="city"
                    label="City"
                    name="city"
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
      ) : (
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
                    id="name"
                    label="Name"
                    name="name"
                  />
                  <TextField
                    margin="normal"
                    required
                    id="secondName"
                    label="Second Name"
                    name="secondName"
                  />
                  <TextField
                    margin="normal"
                    required
                    id="telephone"
                    label="Telephone"
                    name="telephone"
                    InputProps={{
                      inputComponent: TextMaskCustom,
                    }}
                  />
                </Grid>

                <Grid item className={classes.modalInput}>
                  <TextField
                    margin="normal"
                    required
                    id="email"
                    label="E-mail"
                    name="email"
                  />
                  <TextField
                    margin="normal"
                    required
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
