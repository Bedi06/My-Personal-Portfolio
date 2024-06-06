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
          mb: { sm: "1em", md: "2em", lg: "5em" },
        }}
      >
        <Box>
          <div
            style={{
              marginTop: "8em",
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
                color: Theme.palette.primary.main,

                fontSize: "clamp(40px, 8vw, 80px)",
                fontWeight: "600",
                marginTop: "5px",
                lineHeight: "0.9",
                fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
              }}
            >
              Bedi Omuri
            </Typography>
            <Typography
              variant="h3"
              style={{
                width: { xs: "80%", sm: "80%" },
                color: "black",
                fontSize: "clamp(40px, 8vw, 80px)",
                fontWeight: "600",
                marginTop: "5px",
                lineHeight: "1.1",
                fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
              }}
            >
              I enjoy designing {""}
              <br />
              and building web applications.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                width: { xs: "80%", md: "80%" },
              }}
            >
              <Typography
                variant="p"
                style={{
                  paddingTop: "1em",
                  paddingBottom: "4em",
                  color: "rgb(123 123 123)",
                  fontSize: "20px",
                  lineHeight: 1.3,
                  fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
                }}
              >
                I am a Software Engineer with a keen interest in Cloud
                computing. My commitment revolves around continuously enhancing
                my skills and knowledge in this ever-evolving domain. I am
                currently exploring opportunities as both a Software Engineer
                and DevOps Engineer. Currently going through a cloud journey at{" "}
                <a
                  href="https://codeyourfuture.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="CodeYourFuture"
                  style={{
                    color: Theme.palette.primary.main,
                    textDecoration: "none",
                  }}
                >
                  CodeYourFuture .
                </a>
              </Typography>
            </Box>
          </div>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}
