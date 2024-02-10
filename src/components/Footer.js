import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import githubColor from "./assets/githubColor.svg";
import Linkedin from "./assets/linkedin.svg";
import { Theme } from "../theme.js";
import { ThemeProvider } from "@mui/material/styles";

const IconWrapper = styled(Box)({
  marginRight: "10px",
  cursor: "pointer",
});

export default function Footer() {
  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "2em",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <IconWrapper>
            <a
              href="https://github.com/bedi06"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={githubColor}
                alt="github Icon"
                style={{ width: "20px" }}
              />
            </a>
          </IconWrapper>
          <IconWrapper>
            <a
              href="https://www.linkedin.com/in/bediomuri/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={Linkedin}
                alt="linkedin Icon"
                style={{ width: "20px" }}
              />
            </a>
          </IconWrapper>
        </Box>

        <Typography
          variant="body1"
          sx={{
            color: Theme.palette.secondary.main,
            fontFamily: "monospace",
            marginTop: "0.5em",
          }}
        >
          Created by Bedi Omuri
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
