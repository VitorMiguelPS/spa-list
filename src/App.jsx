import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import theme from "./styles/theme";

import Routes from "./routes/routes";
import { ProviderCommon } from "./contexts/common";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProviderCommon>
        <Grid className="App">
          <Routes />
        </Grid>
      </ProviderCommon>
    </ThemeProvider>
  );
}

export default App;
