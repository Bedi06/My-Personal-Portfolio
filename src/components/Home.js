import Box from "@mui/material/Box";
import { Theme } from "../theme.js";
import { ThemeProvider } from "@mui/material/styles";

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <Box id="home" height={"60vh"}>
        <Box height="40vh">
          <div
            style={{
              marginTop: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              marginLeft: "7em",
              marginRight: "7em",
            }}
          >
            <span
              style={{
                color: Theme.palette.primary.main,
                fontSize: "20px",
                fontWeight: "light",
                wordSpacing: "5px",
              }}
            >
              Hi, my name is
            </span>
            <h1
              style={{
                color: Theme.palette.secondary.light,
                lineHeight: 1.1,
                fontSize: "clamp(40px, 8vw, 80px)",
                fontWeight: "600",
                margin: 0,
              }}
            >
              Bedi Omuri
            </h1>
            <h2
              style={{
                color: Theme.palette.secondary.main,
                fontSize: "clamp(40px, 8vw, 80px)",
                fontWeight: "600",
                margin: 0,
                lineHeight: 0.9,
              }}
            >
              I Code for impactful <br /> simplicity.
            </h2>
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "500px" }}
            >
              <p
                style={{
                  color: Theme.palette.secondary.light,
                  fontWeight: "light",
                  fontSize: "18px",
                }}
              >
                I am a Software Engineer on a misson to elevate my Cloud
                computing skills. Looking for an opportunity where i can
                contribute my creativity and my passion for software
                development!
              </p>
            </Box>
          </div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
