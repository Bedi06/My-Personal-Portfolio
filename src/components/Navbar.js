import React from "react";
import { Link as MuiLink, animateScroll as scroll } from "react-scroll";
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
  const openPdfInNewTab = () => {
    const pdfUrl =
      "https://bedis-portfolio.s3.eu-west-2.amazonaws.com/Bedrije+Omuri+Resume+.pdf";
    window.open(pdfUrl, "_blank");
  };
  const scrollTo = (elementId) => {
    scroll.scrollTo(elementId, {
      smooth: "easeInOutQuart",
      offset: -50,
    });
  };

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
            <MuiLink
              to="about"
              smooth={true}
              duration={500}
              style={{
                marginRight: "1em",
                textDecoration: "none",
                color: theme.palette.secondary.main,
                cursor: "pointer",
              }}
            >
              <span style={{ color: theme.palette.primary.main }}>01.</span>{" "}
              About
            </MuiLink>
            <MuiLink
              to="experience"
              smooth={true}
              duration={500}
              style={{
                marginRight: "1em",
                textDecoration: "none",
                color: theme.palette.secondary.main,
                cursor: "pointer",
              }}
            >
              <span style={{ color: theme.palette.primary.main }}>02.</span>{" "}
              Experience
            </MuiLink>
            <MuiLink
              to="projects"
              smooth={true}
              duration={500}
              style={{
                marginRight: "1em",
                textDecoration: "none",
                color: theme.palette.secondary.main,
                cursor: "pointer",
              }}
            >
              <span style={{ color: theme.palette.primary.main }}>03.</span>{" "}
              Projects
            </MuiLink>
            <MuiLink
              to="contact"
              smooth={true}
              duration={500}
              style={{
                marginRight: "3em",
                textDecoration: "none",
                color: theme.palette.secondary.main,
                cursor: "pointer",
              }}
            >
              <span style={{ color: theme.palette.primary.main }}>04.</span>{" "}
              Contact
            </MuiLink>
            <Button
              variant="outlined"
              sx={{
                marginRight: "3em",
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
              }}
              onClick={openPdfInNewTab}
            >
              Resume
            </Button>
          </Box>
        </Box>
      </header>
    </ThemeProvider>
  );
}
