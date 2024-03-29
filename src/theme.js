import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  palette: {
    primary: {
      main: "#17A3A3",
      dark: " #10193a",
    },
    secondary: {
      main: "#8892b0",
      light: "#ccd6f6",
      dark: "#a8b2d1",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      cursor: "default",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          transition: "color 0.3s ease",
          "&:hover": {
            color: "#ccd6f6",
          },
        },
      },
    },
  },
});
