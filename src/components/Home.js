import Box from "@mui/material/Box";
import { Theme } from "../theme.js";
import { ThemeProvider } from "@mui/material/styles";

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <Box id="home" sx={{ height: "60vh" }}>
        <Box height="40vh">
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
            <h1
              style={{
                color: Theme.palette.secondary.light,
                lineHeight: 1.1,
                fontSize: "clamp(40px, 8vw, 80px)",
                fontWeight: "600",
                margin: 0,
                fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
              }}
            >
              Bedi Omuri
            </h1>
            <h2
              style={{
                color: Theme.palette.secondary.main,
                fontSize: "clamp(40px, 8vw, 80px)",
                fontWeight: "600",
                marginTop: "5px",
                lineHeight: 1.1,
                fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
              }}
            >
              I enjoy building software solutions.
            </h2>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { xs: "90%", md: "65%" },
              }}
            >
              <p
                style={{
                  color: Theme.palette.secondary.main,
                  fontSize: "16px",
                  fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
                  marginTop: 0,
                }}
              >
                I'm a passionate Software Engineer dedicated to advancing my
                skills in Cloud computing. Currently seeking opportunities as a
                Software Engineer or DevOps Engineer to continue my professional
                growth.
              </p>
            </Box>
          </div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
