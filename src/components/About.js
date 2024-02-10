import Box from "@mui/material/Box";
import { Theme } from "../theme.js";
import { ThemeProvider } from "@mui/material/styles";
import { ListItem, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import rightArrow from "./assets/right-arrow.svg";
export default function About() {
  return (
    <ThemeProvider theme={Theme}>
      <Box id="about" sx={{ height: "60vh", paddingTop: "4em" }}>
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
            width: { xs: "100%", md: "80%" },
            marginTop: "2em",
            marginLeft: "2 em",
            color: Theme.palette.secondary.main,
            fontSize: "16px",
            fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
            lineHeight: 1.5,
          }}
        >
          Hi , my name is Bedi and i enjoy building software solutions. My
          journey into the world of technology began with a strong foundation in
          Information Technology, which has evolved into a comprehensive skill
          set spanning both front-end and back-end development. I work with
          tools and languages such as :
        </section>
        <Grid
          container
          spacing={2}
          style={{
            marginTop: "1em",
            marginLeft: "2em",
            color: Theme.palette.secondary.main,
            display: "grid",
            gridTemplateColumns: "1fr 1fr", // Two columns
          }}
        >
          {skills.map((skill, index) => (
            <ListItem key={index}>
              <img
                src={rightArrow}
                alt="rightArrow"
                style={{ width: "10px" }}
              />
              <span style={{ marginRight: "5px" }}></span>
              {skill}
            </ListItem>
          ))}
        </Grid>

        <Box className="imgContanier"></Box>
      </Box>
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
