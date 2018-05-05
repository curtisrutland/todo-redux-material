import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import CssBaseline from "material-ui/CssBaseline";
//import { light, dark } from "./rootTheme";
import light from "./rootTheme";

//const darkTheme = createMuiTheme(dark);
const lightTheme = createMuiTheme(light);


export default Component => props => (
  <MuiThemeProvider theme={lightTheme}>
    <CssBaseline />
    <Component {...props} />
  </MuiThemeProvider>
);