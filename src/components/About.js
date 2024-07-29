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
            paddingBottom: { xs: "2em", sm: "3em", md: "4em", lg: "5em" },
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
              variant="h3"
              fontSize={"2em"}
              style={{
                fontWeight: "600",
                fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
                marginRight: "100px",
                color: "#555d69",

                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  fontWeight: "600",
                  fontFamily:
                    "SF Mono,Fira Code,Fira Mono,Roboto Mono,monospace",
                  color: "#555d69",
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
          <Typography
            variant="body1"
            style={{
              display: "flex",
              width: { xs: "50%", md: "80%" },
              marginTop: "2em",
              color: "#555d69",
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
              lineHeight: 1.3,
            }}
          >
            Hi , my name is Bedi and i enjoy designing and building web
            applications.
          </Typography>{" "}
          <Typography
            variant="body1"
            style={{
              display: "flex",
              width: { xs: "50%", md: "80%" },
              marginTop: "2em",
              color: "#555d69",
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
              lineHeight: 1.3,
            }}
          >
            As a passionate web application designer and developer, my journey
            in technology began at an early age. From being the go-to
            troubleshooter for friends and family's tech issues, I developed a
            deep fascination with the intricacies of digital systems and
            problem-solving. This early exposure fuelled my decision to pursue a
            degree in Information Technology, setting the foundation for my
            career in software engineering.{" "}
          </Typography>
          <Typography
            variant="body1"
            style={{
              display: "flex",
              width: { xs: "50%", md: "80%" },
              marginTop: "2em",
              color: "#555d69",
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
              lineHeight: 1.3,
            }}
          >
            Over the years, I've cultivated expertise in web development,
            software engineering, and database technologies. My professional
            path has been marked by a continuous quest for knowledge, always
            seeking to delve deeper into the field and stay at the forefront of
            technological advancements. Today, I specialise in developing,
            testing, and debugging high-performance web applications. My
            approach combines technical proficiency with creative
            problem-solving, ensuring robust and user-friendly solutions. With a
            keen eye for detail and a passion for clean, efficient code, I
            strive to create web applications that not only meet but exceed
            client expectations. My journey from a curious tech enthusiast to a
            skilled web application professional underscores my commitment to
            excellence and continuous learning in this ever-evolving field.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pt: { xs: "2em", sm: "4em", md: "4em", lg: "2em" },
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
                width: "55%",
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
            bottom: { xs: "-4rem", sm: "-4rem", md: "-4rem", lg: "-1rem" },
            left: { xs: "50%", md: "55%" },
            transform: "translateX(-50%)",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
