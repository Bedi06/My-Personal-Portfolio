import { Link } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

export default function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <header className="App-header">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#063058B",

            paddingLeft: "1em",
          }}
        >
          <h2
            className="App-logo"
            alt="logo"
            style={{
              marginRight: 10,
              color: theme.palette.primary.main,
              fontWeight: "light",
            }}
          >
            BO
          </h2>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link
              to="/about"
              style={{
                marginRight: "1em",
                textDecoration: "none",
                color: theme.palette.secondary.main,
                cursor: "pointer",
              }}
            >
              <span style={{ color: theme.palette.primary.main }}>01.</span>{" "}
              About
            </Link>
            <Link
              to="/experience"
              style={{
                marginRight: "1em",
                textDecoration: "none",
                color: theme.palette.secondary.main,
                cursor: "pointer",
              }}
            >
              <span style={{ color: theme.palette.primary.main }}>02.</span>{" "}
              Experience
            </Link>
            <Link
              to="/projects"
              style={{
                marginRight: "1em",
                textDecoration: "none",
                color: theme.palette.secondary.main,
                cursor: "pointer",
              }}
            >
              <span style={{ color: theme.palette.primary.main }}>03.</span>{" "}
              Projects
            </Link>
            <Link
              to="/contact"
              style={{
                marginRight: "3em",
                textDecoration: "none",
                color: theme.palette.secondary.main,
                cursor: "pointer",
              }}
            >
              <span style={{ color: theme.palette.primary.main }}>04.</span>{" "}
              Contact
            </Link>
            <Button
              variant="outlined"
              sx={{
                marginRight: "3em",
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
              }}
            >
              Resume
            </Button>
          </Box>
        </Box>
      </header>
    </ThemeProvider>
  );
}
