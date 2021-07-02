import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    height: "100vh",
    margin: 0,
    color: theme.appColors.whiteColor,
    "& a": {
      textDecoration: "none",
      color: theme.appColors.whiteColor,
    },
  },
  HomeContent: {
    paddingLeft: "2.75rem",
    paddingRight: "1.75rem",
  },
  TextSection: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    textAlign: "left",
    width: "40%",
    "& h1": {
      fontSize: "4rem",
      fontWeight: 700,
      margin: "40px 0",
    },
    "& h6": {
      fontSize: "1.5rem",
    },
  },
  ImageSection: {
    width: "60%",
    "& img": {
      width: "80%",
    },
  },
  ButtonLogin: {
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 20,
    width: 150,
    height: 45,
    "& a": {
      color: "#000",
      fontSize: 20,
    },
  },
}));

export default useStyles;
