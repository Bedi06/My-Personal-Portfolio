import { Box, Typography, Grid } from "@mui/material";
import { Theme } from "../theme.js";
import { ThemeProvider } from "@mui/material/styles";

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <Grid
        container
        item
        xs={12}
        id="home"
        sx={{
          mb: { sm: "1em", md: "2em", lg: "2em" },
        }}
      >
        <Box>
          <div
            style={{
              marginTop: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
            }}
          >
            <span
              style={{
                color: Theme.palette.primary.main,
                fontSize: "20px",
                fontWeight: "light",
                wordSpacing: "5px",
                fontFamily: "monospace",
                paddingBottom: "1em",
              }}
            >
              Hi, my name is
            </span>
            <Typography
              variant="h1"
              style={{
                color: Theme.palette.secondary.light,
                lineHeight: 1.1,
                fontSize: "clamp(40px, 8vw, 80px)",
                fontWeight: "600",
                margin: 0,
                fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
              }}
            >
              {" "}
              Bedi Omuri
            </Typography>
            <Typography
              variant="h2"
              style={{
                color: Theme.palette.secondary.main,
                fontSize: "clamp(40px, 8vw, 80px)",
                fontWeight: "600",
                marginTop: "5px",
                lineHeight: 0.9,
                fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
              }}
            >
              I enjoy web applications.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="p"
                style={{
                  paddingTop: "1em",
                  color: Theme.palette.secondary.main,
                  fontSize: "18px",
                  fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
                }}
              >
                I am an enthusiastic and dedicated Software Engineer with a keen
                interest in Cloud computing. My commitment revolves around
                continuously enhancing my skills and knowledge in this
                ever-evolving domain. I am currently exploring opportunities as
                both a Software Engineer and DevOps Engineer, aiming to further
                my career and contribute to impactful projects. I am passionate
                about innovation and eager to collaborate with teams to drive
                technological advancements and achieve collective success
              </Typography>
            </Box>
          </div>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}
