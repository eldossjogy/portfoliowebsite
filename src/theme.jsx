import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: "#212121"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      fold: 400,
      sm: 600,
      md: 900,
      tablet: 1050,
      lg: 1200,
      xl: 1536,
    },
  },
});
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      paper: "#E0E0E0"
    },
    primary:{
      main: "#E0E0E0"
    }
  },  
   breakpoints: {
    values: {
      xs: 0,
      fold: 400,
      sm: 600,
      md: 900,
      tablet: 1050,
      lg: 1200,
      xl: 1536,
    },
  },
});

