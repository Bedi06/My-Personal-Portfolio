import { Theme } from "../theme.js";
import { ThemeProvider } from "@mui/material/styles";
import { ListItem, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import rightArrow from "./assets/right-arrow.svg";
import profile from "./assets/profile.JPG";

export default function About() {
  return (
    <ThemeProvider theme={Theme}>
      <Grid
        container
        id="about"
        sx={{
          height: {
            xs: "auto",
            sm: "auto",
          },
          width: "auto",
          pt: { sm: "1em", md: "5em", lg: "5em" },
          pb: { xs: "2em", sm: "1em", md: "2em", lg: "2em" },
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          lg={6}
          sx={{ paddingRight: { xs: 0, md: "2em" } }}
        >
          <Typography
            variant="h2"
            fontSize={"32px"}
            style={{
              color: Theme.palette.secondary.light,
              marginTop: "1.5em",
              marginRight: "100px",
              whiteSpace: "nowrap",
              fontWeight: "600",
              fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
            }}
          >
            <span
              style={{
                color: Theme.palette.primary.main,
                fontSize: "18px",
                fontFamily: "SF Mono,Fira Code,Fira Mono,Roboto Mono,monospace",
              }}
            >
              01.
            </span>
            About me
          </Typography>
          <section
            style={{
              display: "flex",
              width: { xs: "50%", md: "80%" },
              marginTop: "2em",
              marginLeft: "2 em",
              color: Theme.palette.secondary.main,
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
              marginLeft: "2 em",
              color: Theme.palette.secondary.main,
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
              marginLeft: "2 em",
              color: Theme.palette.secondary.main,
              fontSize: "20px",
              fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
              lineHeight: 1.3,
            }}
          >
            Over time, I honed my skills in software engineering, web
            development, and database technologies, seeking opportunities to
            delve deeper into the field. Throughout my professional journey,
            I've cultivated a strong foundation in developing, testing, and
            debugging high-performance web applications. Some of the tools and
            languages i work with are:
          </section>
          <Grid
            container
            spacing={1}
            sx={{ mt: "1em", mb: "2em", color: Theme.palette.secondary.main }}
          >
            {skills.map((skill, index) => (
              <Grid item xs={4} key={index}>
                <ListItem sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={rightArrow}
                    alt="rightArrow"
                    style={{ width: "10px", mr: "5px" }}
                  />
                  {skill}
                </ListItem>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            mt: {
              xs: "1em",
              sm: "5em",
              md: "10em",
              lg: "8em",
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={profile}
            alt="profile"
            style={{
              width: "60%",
              height: "auto",
              mt: {
                xs: "2em",
                sm: "3em",
              },
              boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              borderRadius: "5%",
              transition: "filter 0.3s ease",
              "&:hover": {
                filter: `hue-rotate(30deg) saturate(100%)`, // Change color effect on hover
              },
            }}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
const skills = [
  "MUI",
  "Bootstrap",
  "JavaScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "Git",
  "Docker",
  "AWS S3",
  "AWS EC2",
  "AWS RDS",
  "DynamoDB",
  "API Gateway",
  "Lambda",
  "Cloudfront",

  "Linux",
];
