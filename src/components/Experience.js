import Box from "@mui/material/Box";
import { Theme } from "../theme.js";
import { ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";

export default function Experience() {
  return (
    <ThemeProvider theme={Theme}>
      <Box id="experience" sx={{ height: "60vh", paddingTop: "100px" }}>
        <Typography
          variant="h2"
          fontSize={"2em"}
          style={{
            fontWeight: "600",
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
            02.
          </span>
          Experience
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: Theme.palette.secondary.main }}
          style={{
            marginTop: "2em",
            fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
            fontSize: "16px",
            marginLeft: "1em",
          }}
        >
          Coming Soon ....
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
