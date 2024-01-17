import Box from "@mui/material/Box";
import Theme from "../theme.js";
import { ThemeProvider } from "@mui/material/styles";

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <Box id="home" height={"20rem"}>
        <section height={"6em"}>
          <div
            style={{
              marginTop: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              marginLeft: "5em",
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
            </span>{" "}
            <h1 style={{ color: "#a8b2d1", fontSize: "40px", lineHeight: 0 }}>
              Bedrije Omuri
            </h1>
            <h2 style={{ lineHeight: 0, color: Theme.palette.secondary.main }}>
              I enjoy creating Software that improves lives !
            </h2>
            <p
              style={{
                color: Theme.palette.secondary.light,
                fontWeight: "light",
                lineHeight: 0,
              }}
            >
              Currently on a misson to elevate my Cloud computing skills.
            </p>
          </div>
        </section>
      </Box>
    </ThemeProvider>
  );
}
