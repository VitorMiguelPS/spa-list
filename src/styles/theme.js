import { createMuiTheme } from "@material-ui/core/styles";

export const primaryColor = "#d53369";
export const secondaryColor = "#daae51";
export const secondaryBlue = "#0053a1";
export const darkBlue = "#005";
export const whiteColor = "#fff";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  appColors: {
    secondaryBlue,
    darkBlue,
    whiteColor,
  },
  typography: {
    fontFamily: ["Geomanist"].join(","),
  },
});

export default theme;
