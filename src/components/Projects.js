import React from "react";
import Link from "@mui/material/Link";
import githubIcon from "./assets/githubIcon.svg";
import projectData from "../components/projectsData.json";
import { LaunchOutlined } from "@mui/icons-material";

const Projects = () => {
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
      <h1 style={{ textAlign: "center", marginTop: "2em" }}>
        Feature Projects
      </h1>
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
          fontSize: "20px",
        }}
      >
        {projectData.map((project, index) => (
          <React.Fragment key={index}>
            <Link
              underline="none"
              style={{ marginRight: "1em" }}
              href={`#project-${index}`}
            >
              {project.title}
            </Link>
            {index < projectData.length - 1 && (
              <span style={{ marginRight: "1em" }}>|</span>
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
              flexDirection: index % 2 === 0 ? "row-reverse" : "row",
              alignItems: "center",
              paddingBottom: "5em",
            }}
          >
            <Link
              underline="none"
              href={project.github}
              style={{
                flex: "1",
                marginRight: index % 2 === 0 ? "0" : "1em",
                marginLeft: index % 2 === 0 ? "1em" : "0",
              }}
            >
              <img
                src={project.image[0]}
                alt={project.title}
                style={{ width: "100%" }}
              />
            </Link>
            <div style={{ flex: "1", textAlign: "left" }}>
              <h2>{project.title}</h2>
              <p style={{ fontSize: "15px" }}>{project.description}</p>
              <div>
                {project.details.map((detail, index) => (
                  <span
                    key={index}
                    style={{
                      display: "inline-block",
                      margin: "0.5em 0.5em 0 0",
                      padding: "0.5em",

                      backgroundColor: "#f1f1f1",
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
