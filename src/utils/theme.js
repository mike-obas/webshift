import { responsiveFontSizes, createTheme } from "@mui/material/styles";



let theme = createTheme({
  palette: {
    primary: {
      main: "#745BB0;",
    },
    // secondary: {
    //   light: "#ba68c8",
    //   main: "#9c27b0",
    //   contrastText: "#ffcc00",
    // }
  },
typography: {
  fontFamily: [
    '"Play"',
    '"Roboto"',
    '"cursive"'
  ].join(','),
},
});

theme = responsiveFontSizes(theme);

export default theme;
