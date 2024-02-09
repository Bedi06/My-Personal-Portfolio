import React from "react";
import { styled } from "@mui/system";
import { Grid, Typography, Box, List, ListItem } from "@mui/material";
import { Theme } from "../theme.js";
import { ThemeProvider } from "@mui/material/styles";
import { LaunchOutlined } from "@mui/icons-material";
import githubIcon from "./assets/githubIcon.svg";
import MuiImageSlider from "./MuiImageSlider.js";
const ProjectContainer = styled(Box)({
  maxWidth: "1000px",
  margin: "50px auto",
});

const Project = styled(Grid)({
  margin: "30px",
  display: "grid",
  gridGap: "10px",
  gridTemplateColumns: "repeat(12, 1fr)",
  gridTemplateRows: "repeat(6, 1fr)",
  alignItems: "center",
  "@media screen and (max-width: 768px)": {
    alignItems: "flex-start",
  },
});

const ProjectContent = styled(Box)({
  gridColumn: "1 / 7",
  gridRow: "1 / -1",
  position: "relative",
  [Theme.breakpoints.down("xs")]: {
    gridColumn: "1 / -1",
    padding: "40px",
  },
});

const ProjectLabel = styled("div")({
  color: "#64ffda",
  fontFamily: "monospace",
});

const ProjectTitle = styled("h4")({
  fontSize: "1.2rem",
  fontfamily: "Calibre,Inter,San Francisco,SF Pro Text",
  margin: "10px 0 30px",
  color: "#eee",
});

const ProjectDetails = styled(Box)({
  fontSize: "15px",
  lineHeight: 1.5,
  color: "#aaa",
  "& p": {
    backgroundColor: "#252525",
    padding: "20px 25px",
    [Theme.breakpoints.down("xs")]: {
      backgroundColor: "transparent",
      padding: "20px 0",
    },
  },
  "& ul": {
    display: "flex",
    marginTop: "20px",
    "& li": {
      margin: 0,
      // marginRight: "20px",
      // marginLeft: "10px",
      color: "#aaa",
      fontFamily: "monospace",
    },
  },
});

const ProjectImage = styled(Box)({
  width: "100%",
  position: "relative",
  zIndex: -1,
  backgroundColor: "#64ffda",
  background: "linear-gradient(0.4turn, #64ffda, #64ff8d)",
  borderRadius: "2px",
  gridColumn: "6 / -1",
  gridRow: "1 / -1",
  "@media screen and (max-width: 768px)": {
    height: "100%",
  },
  [Theme.breakpoints.down("xs")]: {
    gridColumn: "1 / -1",
    opacity: 0.25,
  },
  "&:before": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 3,
    backgroundColor: "#0a192f",
    mixBlendMode: "screen",
    transition: "background-color 0.3s ease",
  },
  "& img": {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "2px",
    position: "relative",
    mixBlendMode: "multiply",
    filter: "grayscale(70%) contrast(1)",
    transition: "filter 0.3s ease",
  },
  "&:hover:before": {
    filter: "grayscale(0)",
  },
  "&:hover img": {
    filter: "grayscale(0)",
  },
});

const ProjectIcons = styled(Box)({
  gridColumn: "7 / -1",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

const IconWrapper = styled(Box)({
  marginRight: "10px",
  cursor: "pointer",
});

export default function Projects() {
  return (
    <ThemeProvider theme={Theme}>
      <ProjectContainer id="projects">
        <Typography
          variant="h2"
          fontSize={"2em"}
          style={{
            fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
            color: Theme.palette.secondary.light,
            marginTop: "100px",
            marginRight: "100px",
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              color: Theme.palette.primary.main,
              fontSize: "25px",
              fontFamily: "SF Mono,Fira Code,Fira Mono,Roboto Mono,monospace",
            }}
          >
            03.
          </span>
          Projects
        </Typography>
        <Grid container spacing={2}>
          {projectData.map((project, index) => (
            <Project key={index}>
              <ProjectContent>
                <ProjectLabel>{project.name}</ProjectLabel>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDetails>
                  <Typography variant="body2" component="p">
                    {project.description}
                  </Typography>
                  <List
                    sx={{
                      display: "flex",
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
                <MuiImageSlider images={project.image} />
              </ProjectImage>
              <ProjectIcons>
                <IconWrapper>
                  <img src={githubIcon} alt="github Icon" />
                </IconWrapper>
                <IconWrapper>
                  <LaunchOutlined />
                </IconWrapper>
              </ProjectIcons>
            </Project>
          ))}
        </Grid>
      </ProjectContainer>
    </ThemeProvider>
  );
}

const projectData = [
  {
    name: "Project #1",
    title: "The Big Mouth",
    description:
      "Lorem ipsum dolor amet you probably haven't heard of them bitters selvage listicle heirloom. Locavore kombucha street art ennui 90's, organic food truck hell of seitan skateboard literally hexagon fixie next level. Lomo salvia yuccie hella roof party echo park vegan four dollar toast cred.",
    details: ["React", "MUI", "Auth0", "AWS"],
    image: [
      "https://bedis-portfolio.s3.eu-west-2.amazonaws.com/ThebigMouth.png",
      "https://bedis-portfolio.s3.eu-west-2.amazonaws.com/VideoHub.png",
      "https://bedis-portfolio.s3.eu-west-2.amazonaws.com/VideoHub2.png",
      "https://bedis-portfolio.s3.eu-west-2.amazonaws.com/VideoHub3.png",
    ],
    github: "",
    liveview: "",
  },

  {
    name: "Project #2",
    title: "Project Two",
    description:
      "Lorem ipsum dolor amet you probably haven't heard of them bitters selvage listicle heirloom. Locavore kombucha street art ennui 90's, organic food truck hell of seitan skateboard literally hexagon fixie next level. Lomo salvia yuccie hella roof party echo park vegan four dollar toast cred.",
    details: ["API", "React", "Bootstrap", "AWS"],
    image: "https://bedis-portfolio.s3.eu-west-2.amazonaws.com/project2.png",
    liveview: "",
  },
  {
    name: "Project #3",
    title: "Project Three",
    description:
      "Lorem ipsum dolor amet you probably haven't heard of them bitters selvage listicle heirloom. Locavore kombucha street art ennui 90's, organic food truck hell of seitan skateboard literally hexagon fixie next level. Lomo salvia yuccie hella roof party echo park vegan four dollar toast cred.",
    details: ["Detail A", "Detail B", "Detail C"],
    image: "https://bedis-portfolio.s3.eu-west-2.amazonaws.com/project3.png",
    github: "",
    liveview: "",
  },
];
