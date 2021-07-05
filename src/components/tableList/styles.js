import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  headerPage: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    margin: "30px 0",
  },
  titlePage: {
    textTransform: "capitalize",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.appColors.whiteColor,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: "60%",
    maxHeight: "60%",
    display: "flex",
    flexDirection: "column",
    borderRadius: 20,
  },
  inputSection: {
    display: "flex",
    flexDirection: "row",
  },
  submit: {
    width: 150,
    marginTop: 20,
    alignSelf: "center",
  },
  modalInput: {
    display: "flex",
    flexDirection: "column",
    margin: "0 15px",
  },
  headerTable: {
    background: "#ffeabe",
  },
  odd: {
    background: "#fffbf4",
  },
}));
