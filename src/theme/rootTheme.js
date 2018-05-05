export const light = {
  palette: {
    type: "light",
    primary: {
      light: '#768fff',
      main: '#2962ff',
      dark: '#0039cb',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff616f',
      main: '#ff1744',
      dark: '#c4001d',
      contrastText: '#000',
    },
  },
};

export const dark = {
  // palette: {
  //   ...light.palette,
  //   type: "dark"
  // }
  palette: {
    type: "dark",
    primary: {
      main: "#000",
      light: "#fff",
      dark: "#000",
      contrastText: "#fff"
    }, secondary: {
      main: "#d50000",
      light: "#ff5131",
      dark: "#9b0000",
      contrastText: "#fff"
    }
  }
}

export default light;