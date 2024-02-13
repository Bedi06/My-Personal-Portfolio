import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Theme } from "../theme.js";
import { ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import projectsData from "../components/projectsData.json";

export default function Projects() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",

        "& > :not(style)": {
          m: 1,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          width: 400,
          height: 400,
          position: "relative",
          overflow: "hidden",
        },
        "& > img": {
          width: "100%",
          height: "70%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        },
      }}
    >
      {projectsData.map((project, index) => (
        <Paper key={index} elevation={2}>
          <ThemeProvider theme={Theme}>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${project.image[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                padding: "10px",
                width: "100%",
                height: "30%",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              }}
            >
              <Typography variant="h5" component="div" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body2" component="div">
                {project.description}
              </Typography>
            </div>
          </ThemeProvider>
        </Paper>
      ))}
    </Box>
  );
}
