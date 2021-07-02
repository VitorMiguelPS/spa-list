import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  LoginPage: {
    height: "100vh",
  },
  background: {
    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    height: "100vh",
    width: "100%",
    display: "block",
    position: "absolute",
    filter: "brightness(0.5)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    background: theme.appColors.whiteColor,
    zIndex: 1,
    height: 400,
    width: 300,
    padding: 35,
    borderRadius: 20,
  },
  submit: {
    alignSelf: "flex-end",
  },
}));

export default useStyles;
