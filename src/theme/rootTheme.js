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
  palette: {
    ...light.palette,
    type: "dark"
  }
}

export default light;