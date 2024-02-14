import React from "react";
import { styled } from "@mui/system";
import { Grid, Typography, Box, List, ListItem, Link } from "@mui/material";
import { Theme } from "../theme.js";
import { ThemeProvider } from "@mui/material/styles";
import { LaunchOutlined } from "@mui/icons-material";
import githubIcon from "./assets/githubIcon.svg";
import projectData from "./projectsData.json";
import ImageSlider from "./ImageSlider.js";
import { Skeleton } from "@mui/material";

const ProjectContainer = styled(Box)(({ theme }) => ({
  width: "100%",
}));

const Project = styled(Grid)(({ theme }) => ({
  margin: "30px",
  display: "grid",
  gridGap: "10px",
  gridTemplateColumns: "repeat(12, 1fr)",
  gridTemplateRows: "repeat(6, 1fr)",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(1, 1fr)",
    marginLeft: "3em",
    margin: 0,
    gap: "0.5em",
  },
}));

const ProjectContent = styled(Box)(({ theme }) => ({
  gridColumn: "1 / -1",
  gridRow: "1 / -1",
  padding: "0 25px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    gridColumn: "1/7 ",
  },
  [theme.breakpoints.down("md")]: {
    gridColumn: "1/1",
    gridRow: "1 / 1",
    padding: "0",
  },
  position: "relative",
}));

const ProjectLabel = styled("div")(({ theme }) => ({
  color: "#64ffda",
  fontFamily: "monospace",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    alignText: "left",
    marginTop: "7em",
    marginLeft: "1.5em",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    alignText: "left",
  },
}));

const ProjectTitle = styled("h4")(({ theme }) => ({
  fontSize: "1.2rem",
  fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
  margin: "10px 0 30px",
  color: "#eee",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    alignText: "Left",
    marginTop: "1em",
    marginLeft: "1em",
    marginBottom: 0,
  },
}));

const ProjectDetails = styled(Box)(({ theme }) => ({
  fontSize: "15px",
  lineHeight: 1.5,
  color: "#aaa",
  "& p": {
    padding: "20px 25px",
    backgroundColor: "#112240",
  },
  [theme.breakpoints.down("md")]: {
    "& p": {
      backgroundColor: "transparent",
      marginTop: "0.5em",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& p": {
      fontSize: "10px",
    },
  },
  "& ul": {
    display: "flex",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "4em",
    },
    "& li": {
      margin: 0,
      color: "#aaa",
      fontFamily: "monospace",
      [theme.breakpoints.down("sm")]: {
        "& li": {
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
        },
      },
    },
  },
}));

const ProjectIcons = styled(Box)(({ theme }) => ({
  gridColumn: "7 / -1",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    gridColumn: "1 / 2",
    justifyContent: "flex-end",
  },
  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-end",
  },
}));

const IconWrapper = styled(Box)({
  marginRight: "10px",
  cursor: "pointer",
});

const ProjectImage = styled(Box)(({ theme }) => ({
  zIndex: -1,
  gridColumn: "6 / -1",
  gridRow: "1 / -1",
  backgroundColor: "transparent",

  [theme.breakpoints.down("md")]: {
    gridColumn: "1/2",
    gridRow: "1 / 1",
    opacity: 0.1,
    width: "150%",
  },
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    opacity: 0.1,
    width: "140%",
  },

  [theme.breakpoints.down("xs")]: {
    marginRight: "10px",
    width: "120%",
  },
}));
export default function Projects() {
  return (
    <ThemeProvider theme={Theme}>
      <ProjectContainer id="projects">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            margin: 0,
            padding: 0,
          }}
        >
          <Typography
            variant="h2"
            fontSize={"2em"}
            style={{
              fontWeight: "600",
              fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
              color: Theme.palette.secondary.light,
              marginTop: "4em",
              marginRight: "100px",
            }}
          >
            <span
              style={{
                color: Theme.palette.primary.main,
                fontSize: "25px",
                fontFamily: "SF Mono,Fira Code,Fira Mono,Roboto Mono,monospace",
              }}
            >
              02.
            </span>
            Projects
            <Skeleton
              variant="text"
              animation="wave"
              display="inline"
              sx={{
                fontSize: "1px",
                padding: "1px",
                backgroundColor: Theme.palette.secondary.light,
              }}
            />
          </Typography>
        </div>
        <Grid container spacing={0}>
          {projectData.map((project, index) => (
            <Project key={index}>
              <ProjectContent>
                <ProjectLabel>{project.name}</ProjectLabel>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDetails>
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {project.description}
                  </Typography>
                  <List
                    sx={{
                      display: "flex",
                      alignItems: "center",

                      marginTop: "20px",
                    }}
                  >
                    {project.details.map((detail, index) => (
                      <ListItem key={index}>{detail}</ListItem>
                    ))}
                  </List>
                </ProjectDetails>
              </ProjectContent>

              <ProjectImage>
                <ImageSlider images={project.image} />
              </ProjectImage>

              <ProjectIcons>
                <IconWrapper>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={githubIcon}
                      alt="GitHub"
                      sx={{ color: Theme.palette.primary.main }}
                    />
                  </Link>
                </IconWrapper>
                <IconWrapper>
                  <Link
                    style={{
                      color: Theme.palette.primary.main,
                    }}
                    href={project.liveview}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LaunchOutlined />
                  </Link>
                </IconWrapper>
              </ProjectIcons>
            </Project>
          ))}
        </Grid>
      </ProjectContainer>
    </ThemeProvider>
  );
}
