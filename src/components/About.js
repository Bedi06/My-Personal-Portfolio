import Box from "@mui/material/Box";
import { Theme } from "../theme.js";
import { ThemeProvider } from "@mui/material/styles";
export default function About() {
  return (
    <ThemeProvider theme={Theme}>
      <Box id="about" sx={{ height: "60vh", paddingTop: "4em" }}>
        <h1
          style={{
            fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
            color: Theme.palette.secondary.light,
            marginTop: "100px",
            marginRight: "100px",
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              color: Theme.palette.primary.main,
              fontSize: "25px",
              fontFamily: "SF Mono,Fira Code,Fira Mono,Roboto Mono,monospace",
            }}
          >
            01.
          </span>
          A bit about me
        </h1>

        <Box className="imgContanier"></Box>
      </Box>
    </ThemeProvider>
  );
}
