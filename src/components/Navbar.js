import React from "react";
import { Link as MuiLink } from "react-scroll";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Theme } from "../theme.js";
import { ThemeProvider } from "@mui/material/styles";
import bedis from "./assets/logo3.svg";

export default function Navbar() {
  const openPdfInNewTab = () => {
    const pdfUrl =
      "https://bedis-portfolio.s3.eu-west-2.amazonaws.com/Bedrije+Omuri+Resume+.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <ThemeProvider theme={Theme}>
      <header className="App-header">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#063058B",
            paddingLeft: "1em",
            fontFamily: "monospace",
          }}
        >
          <img
            className="App-logo"
            alt="logo"
            style={{
              marginRight: 10,
              width: "150px",
              height: "150px",
            }}
            src={bedis}
          />

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
                cursor: "pointer",
                color: Theme.palette.secondary.main,
                "&:hover": {
                  color: Theme.palette.primary.main,
                },
              }}
            >
              <span style={{ color: Theme.palette.primary.main }}>01.</span>{" "}
              About
            </MuiLink>
            <MuiLink
              to="experience"
              smooth={true}
              duration={500}
              style={{
                marginRight: "1em",
                textDecoration: "none",
                color: Theme.palette.secondary.main,
                cursor: "pointer",
              }}
            >
              <span style={{ color: Theme.palette.primary.main }}>02.</span>{" "}
              Experience
            </MuiLink>
            <MuiLink
              to="projects"
              smooth={true}
              duration={500}
              style={{
                marginRight: "1em",
                textDecoration: "none",
                color: Theme.palette.secondary.main,
                cursor: "pointer",
              }}
            >
              <span style={{ color: Theme.palette.primary.main }}>03.</span>{" "}
              Projects
            </MuiLink>
            <MuiLink
              to="contact"
              smooth={true}
              duration={500}
              style={{
                marginRight: "3em",
                textDecoration: "none",
                color: Theme.palette.secondary.main,
                cursor: "pointer",
              }}
            >
              <span style={{ color: Theme.palette.primary.main }}>04.</span>{" "}
              Contact
            </MuiLink>
            <Button
              variant="outlined"
              sx={{
                marginRight: "3em",
                borderColor: Theme.palette.primary.main,
                color: Theme.palette.primary.main,
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
