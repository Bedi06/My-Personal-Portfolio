import { Theme } from "../theme.js";
import { ThemeProvider } from "@mui/material/styles";
import { ListItem, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import rightArrow from "./assets/right-arrow.svg";
import profile from "./assets/profile.png";

export default function About() {
  return (
    <ThemeProvider theme={Theme}>
      <Grid
        container
        id="about"
        sx={{
          height: {
            sm: "120vh",
            md: "100vh",
            lg: "100vh",
            xl: "100vh",
          },
          mt: "4em",
          pb: "4em",
          mb: { sx: "16em", sm: "16em", md: "5em", lg: "2em" },
        }}
      >
        <Grid
          item
          xs={20}
          sm={12}
          md={6}
          lg={6}
          sx={{ paddingRight: { xs: 0, md: "2em" } }}
        >
          <Typography
            variant="h2"
            fontSize={"2em"}
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
              fontSize: "16px",
              fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
              lineHeight: 1.5,
            }}
          >
            Hi , my name is Bedi and i enjoy building software solutions. My
            journey into the world of technology began at very young age. I've
            always been interested in computers and technology. I was the person
            who people would go if they had issues with their laptops ,devices
            or apps . This early exposure ignited a profound curiosity and
            passion for understanding the intricacies of technology and
            troubleshooting complex issues. Which led me to persue a degree in
            Information Technology. I've always been a curious learner. And Over
            time, I honed my skills in software engineering, web development,
            and database technologies, seeking opportunities to delve deeper
            into the field. Throughout my professional journey, I've cultivated
            a strong foundation in developing, testing, and debugging
            high-performance software solutions. Some of the tools and languages
            i work include :
          </section>
          <Grid
            container
            spacing={1}
            sx={{ mt: "1em", mb: "2em", color: Theme.palette.secondary.main }}
          >
            {skills.map((skill, index) => (
              <Grid item xs={6} key={index}>
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
              xs: "5em",
              sm: "5em",
              md: "10em",
              lg: "8em",
            },
          }}
        >
          <img
            src={profile}
            alt="profile"
            style={{
              width: "23em",
              height: "20em",
              mt: {
                xs: "2em",
                sm: "3em",
                md: "10em",
                lg: "15em",
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
  "AWS (S3,EC2,RDS,DynamoDB,API Gateway, Lambda,Cloudfront)",
  "Linux",
];
