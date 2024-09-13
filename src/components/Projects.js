import React from "react";
import Link from "@mui/material/Link";
import githubIcon from "./assets/githubIcon.svg";
import projectData from "../components/projectsData.json";
import { LaunchOutlined } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";

const Projects = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      id="projects"
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        padding: 1,
      }}
    >
      <Typography
        variant="h3"
        style={{
          textAlign: "center",
          marginTop: "1em",
          fontWeight: "600",
          fontFamily: "SF Mono,Fira Code,Fira Mono,Roboto Mono,monospace",
          color: "#555d69",
          lineHeight: "1.5",
          whiteSpace: "nowrap",
          fontSize: { xs: "25px", sm: "30px", md: "20px", lg: "25px" },
        }}
      >
        Featured Projects
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1.5em",
          marginBottom: "1.5em",
          backgroundColor: "white",
          color: "black",
          flexWrap: "wrap",
        }}
      >
        {projectData.map((project, index) => (
          <React.Fragment key={index}>
            <Link
              underline="none"
              style={{
                margin: "0.5em",
                fontFamily: "monospace",
                fontSize: "15px",
              }}
              href={`#project-${index}`}
            >
              {project.title}
            </Link>
            {index < projectData.length - 1 && (
              <span style={{ margin: "0.5em" }}>|</span>
            )}
          </React.Fragment>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2em",
        }}
      >
        {projectData.map((project, index) => (
          <div
            key={index}
            id={`project-${index}`}
            style={{
              display: "flex",
              flexDirection: isSmallScreen
                ? "column"
                : index % 2 === 0
                ? "row-reverse"
                : "row",
              alignItems: "center",
              paddingBottom: "5em",
            }}
          >
            <Link
              underline="none"
              href={project.github}
              style={{
                flex: "1",
                marginRight: isSmallScreen ? 0 : index % 2 === 0 ? 0 : "1em",
                marginLeft: isSmallScreen ? 0 : index % 2 === 0 ? "1em" : 0,
                order: isSmallScreen ? -1 : 0,
              }}
            >
              <img
                src={project.image[0]}
                alt={project.title}
                style={{ width: "100%" }}
              />
            </Link>
            <div style={{ flex: "1", textAlign: "left", padding: "1em" }}>
              <Link
                href={project.liveview}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
                    fontSize: { xs: "20px", sm: "24px", md: "28px" },
                    color: "black",
                  }}
                >
                  {project.title}
                </Typography>
              </Link>
              <Typography
                variant="body1"
                style={{
                  fontSize: { xs: "14px", sm: "15px", md: "16px" },
                  color: "#555d69",
                  marginTop: "1em",
                }}
              >
                {project.description}
              </Typography>
              <div style={{ marginTop: "1em" }}>
                {project.details.map((detail, index) => (
                  <span
                    key={index}
                    style={{
                      color: "#17A3A3",
                      display: "inline-block",
                      margin: "0.5em 0.5em 0 0",
                      padding: "0.3em",
                      border: "2px solid",
                      borderRadius: "5px",
                      borderColor: "#17A3A3",
                      fontFamily: "monospace",
                      fontSize: {
                        xs: "12px",
                        sm: "14px",
                        md: "16px",
                        lg: "20px",
                      },
                    }}
                  >
                    {detail}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: "1.5em" }}>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </Link>
                <Link
                  style={{
                    color: "black",
                  }}
                  href={project.liveview}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LaunchOutlined
                    sx={{ paddingLeft: "0.5em", fontSize: "1.8em" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
