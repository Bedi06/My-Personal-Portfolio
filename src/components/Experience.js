import Box from "@mui/material/Box";
import { Theme } from "../theme.js";
import { ThemeProvider } from "@mui/material/styles";

export default function Experience() {
  return (
    <ThemeProvider theme={Theme}>
      <Box id="experience" sx={{ height: "60vh", paddingTop: "100px" }}>
        <h1
          style={{
            fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
            color: Theme.palette.secondary.light,
          }}
        >
          <span
            style={{
              color: Theme.palette.primary.main,
              fontSize: "25px",
              fontFamily: "SF Mono,Fira Code,Fira Mono,Roboto Mono,monospace",
            }}
          >
            {" "}
            02.
          </span>
          Experience
        </h1>
      </Box>
    </ThemeProvider>
  );
}
