import { Theme } from "../theme.js";
import { ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";
import profile from "./assets/profile.JPG";
import { Skeleton } from "@mui/material";
import { Typography } from "@mui/material";

export default function About() {
  return (
    <ThemeProvider theme={Theme}>
      <Grid
        container
        id="about"
        sx={{
          display: "flex",
          alignItems: "flex-start",
          minHeight: "60vh",
          width: "auto",
          pt: { xs: "2em", sm: "2em", md: "3em", lg: "4em" },
          position: "relative", // For absolute positioning of Skeleton
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          lg={6}
          sx={{
            paddingBottom: { xs: "2em", sm: "3em", md: "4em", lg: "5em" }, // Add space below text
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
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
                color: "black",
                marginRight: "100px",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  color: "rgb(80 82 91)",
                  fontSize: "25px",
                  fontFamily:
                    "SF Mono,Fira Code,Fira Mono,Roboto Mono,monospace",
                }}
              ></span>
              About me
            </Typography>
            <Skeleton
              variant="text"
              animation="wave"
              display="inline"
              width="70%"
              sx={{
                left: "20%",
                transform: "translateX(-50%)",
                fontSize: "2px",
                margin: 0,
                backgroundColor: " #17A3A3",
              }}
            />
          </div>
          <section
            style={{
              display: "flex",
              width: { xs: "50%", md: "80%" },
              marginTop: "2em",
              color: "#555d69",
              fontSize: "20px",
              fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
              lineHeight: 1.3,
            }}
          >
            Hi , my name is Bedi and i enjoy designing and building web
            applications.
          </section>{" "}
          <section
            style={{
              display: "flex",
              width: { xs: "50%", md: "80%" },
              marginTop: "1em",
              color: "#555d69",
              fontSize: "20px",
              fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
              lineHeight: 1.3,
            }}
          >
            My journey into the world of technology began at very young age. I
            was the person who people would go if they had issues with their
            laptops ,devices or apps . This early exposure ignited a profound
            curiosity and passion for understanding the intricacies of
            technology and troubleshooting complex issues. Which led me to
            persue a degree in Information Technology.{" "}
          </section>
          <section
            style={{
              display: "flex",
              width: { xs: "50%", md: "80%" },
              marginTop: "1em",
              color: "#555d69",
              fontSize: "20px",
              fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
              lineHeight: 1.3,
            }}
          >
            Over time, I honed my skills in software engineering, web
            development, and database technologies, seeking opportunities to
            dwellve deeper into the field. Throughout my professional journey,
            I've cultivated a strong foundation in developing, testing, and
            debugging high-performance web applications. Some of the tools and
            languages i work with are:
          </section>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pt: { xs: "2em", sm: "4em", md: "4em", lg: "3em" },
          }}
        >
          <div
            style={{
              position: "relative",
              display: "inline-block",
              paddingLeft: "3em",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "1em",
                left: "4em",
                width: "60%",
                height: "99%",
                border: "4px solid #17A3A3",
              }}
            />
            <img
              src={profile}
              alt="profile"
              style={{
                width: "60%",
                height: "auto",
                filter: "grayscale(90%)",
              }}
            />
          </div>
        </Grid>
        <Skeleton
          variant="text"
          animation="wave"
          width="30%"
          sx={{
            fontSize: "2px",
            backgroundColor: "#17A3A3",
            position: "absolute",
            bottom: { xs: "-4rem", sm: "-4rem", md: "-5rem", lg: "-1rem" },
            left: { xs: "50%", md: "80%" },
            transform: "translateX(-50%)",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
