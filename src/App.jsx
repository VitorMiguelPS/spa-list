import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import theme from "./styles/theme";

import Routes from "./routes/routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid className="App">
        <Routes />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
