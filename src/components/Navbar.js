import React, { useState } from "react";
import { Link as MuiLink } from "react-scroll";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Theme } from "../theme.js";
import { Hidden } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import bedis from "./assets/logo3.svg";
import Divider from "@mui/material/Divider";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const openPdfInNewTab = () => {
    const pdfUrl =
      "https://bedis-portfolio.s3.eu-west-2.amazonaws.com/Bedrije+Omuri+Resume+.pdf";
    window.open(pdfUrl, "_blank");
  };

  const navLinks = [
    { label: "About", to: "about" },
    // { label: "Experience", to: "experience" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#121b3b",
          paddingLeft: "0.5em",
          paddingRight: "0.5em",
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

        <Hidden smDown>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1em",
            }}
          >
            {navLinks.map((link, index) => (
              <MuiLink
                key={index}
                to={link.to}
                smooth={true}
                duration={500}
                style={{
                  marginRight: "1em",
                  textDecoration: "none",
                  color: Theme.palette.secondary.main,
                  cursor: "pointer",
                }}
              >
                <span style={{ color: Theme.palette.primary.main }}>
                  0{index + 1}.
                </span>{" "}
                {link.label}
              </MuiLink>
            ))}
            <Button
              variant="outlined"
              sx={{
                borderColor: Theme.palette.primary.main,
                color: Theme.palette.primary.main,
              }}
              onClick={openPdfInNewTab}
            >
              Resume
            </Button>
          </Box>
        </Hidden>

        <Hidden mdUp>
          <IconButton
            style={{ color: Theme.palette.primary.main }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon
              style={{
                fontSize: 32,
              }}
            />
          </IconButton>
        </Hidden>

        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          disableSwipeToOpen={false}
          PaperProps={{
            sx: {
              backgroundColor: Theme.palette.primary.dark,
            },
          }}
        >
          <Box
            sx={{
              width: 250,
              heigt: "100%",
              backgroundColor: Theme.palette.primary.dark,
            }}
            role="presentation"
            onClick={() => setOpen(false)}
            onKeyDown={() => setOpen(false)}
          >
            <div>
              <IconButton
                aria-label="Menu"
                onClick={() => setOpen(false)}
                sx={{ color: Theme.palette.primary.main }}
              >
                <ChevronRightIcon />
              </IconButton>
            </div>
            <Divider />
            <List sx={{ padding: "1.5em" }}>
              {navLinks.map((link, index) => (
                <ListItem
                  sx={{
                    marginBottom: "0.5em",
                  }}
                  key={index}
                  onClick={() => setOpen(false)}
                >
                  <MuiLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    style={{
                      textDecoration: "none",
                      color: Theme.palette.secondary.main,
                      cursor: "pointer",
                    }}
                  >
                    <ListItemText
                      primary={
                        <>
                          <span
                            style={{ color: Theme.palette.primary.main }}
                          >{`${(index + 1)
                            .toString()
                            .padStart(2, "0")}.`}</span>{" "}
                          {link.label}
                        </>
                      }
                    />
                  </MuiLink>
                </ListItem>
              ))}
              <ListItem>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: Theme.palette.primary.main,
                    color: Theme.palette.primary.main,
                    marginTop: "1em",
                  }}
                  onClick={openPdfInNewTab}
                >
                  Resume
                </Button>
              </ListItem>
            </List>
          </Box>
        </SwipeableDrawer>
      </Box>
    </ThemeProvider>
  );
}
