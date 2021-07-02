import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  HeaderMenu: {
    borderBottom: `1px solid rgba(255, 255, 255, 0.5)`,
    boxShadow: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    justifyContent: "space-between",
    color: theme.appColors.whiteColor,

    "& svg": {
      color: theme.appColors.whiteColor,
    },
    "& a": {
      textDecoration: "none",
      width: "auto",
    },
  },
  title: {
    color: theme.appColors.whiteColor,
    fontWeight: 700,
  },
  loginButton: {
    borderRadius: 20,
    color: "#000 !important",
  },
}));
