import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  titleSession: {
    marginBottom: 30,
  },
  pageTitle: {
    fontSize: "4rem",
    marginTop: 50,
  },
  listItems: {
    justifyContent: "center",
    alignItems: "center",
  },
  itemList: {
    height: 450,
    width: 300,
    margin: "0 30px",
    padding: 15,
    "& img": {
      width: "100%",
    },
  },
  submit: {
    marginTop: 20,
  },
  tableSession: {
    margin: "0 50px",
  },
  breadcrumb: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: 10,
  },
}));
