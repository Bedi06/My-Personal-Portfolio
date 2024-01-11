import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#17A3A3",
    },
    secondary: {
      main: "#a8b2d1",
    },
  },
});
export default responsiveFontSizes(theme);
