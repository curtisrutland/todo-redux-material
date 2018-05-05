import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import CssBaseline from "material-ui/CssBaseline";
//import { light, dark } from "./rootTheme";
//import light from "./rootTheme";
import { dark } from "./rootTheme";

const theme = createMuiTheme(dark);
//const theme = createMuiTheme(light);


export default Component => props => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...props} />
  </MuiThemeProvider>
);