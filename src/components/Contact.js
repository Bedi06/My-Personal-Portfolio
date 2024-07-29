import { Box, Grid } from "@mui/material";
import { Theme } from "../theme.js";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function Contact() {
  const handleSayHelloClick = () => {
    const email = "omuribedi@gmail.com";
    const subject = "Hello there!";
    const mailtoLink = `mailto:${email}?subject=${subject}`;
    window.open(mailtoLink);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Box
        id="contact"
        sx={{
          width: "100%",
          height: "60vh",
          paddingTop: "1.5em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: Theme.palette.primary.main,
            fontSize: "15px",
            fontFamily: "monospace",
            marginBottom: 0,
          }}
        >
          Let's Chat!
        </Typography>
        <Typography
          variant="h4"
          style={{
            fontSize: "25px",
            fontWeight: "600",
            fontFamily: "SF Mono,Fira Code,Fira Mono,Roboto Mono,monospace",
            color: "#555d69",
            lineHeight: "1.5",
            whiteSpace: "nowrap",
          }}
        >
          Get in touch
        </Typography>
        <Typography
          variant="p"
          style={{
            color: "#555d69",
            fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
            paddingBottom: "1em",
            textAlign: "center",
            width: "80%",
            Width: { xs: "60%", md: "30%", lg: "30%" },
          }}
        >
          Whether you have a project in mind, questions about my projects, or
          just want to chat tech, <br></br>I'm always eager to engage with
          fellow enthusiasts like you. Drop me a line and let's start the
          conversation!
        </Typography>
        <Grid container justifyContent="center">
          <Button
            variant="outlined"
            fullWidth
            sx={{
              width: "8em",
              height: "3em",
              marginTop: "1.5em",

              borderColor: Theme.palette.primary.main,
              color: Theme.palette.primary.main,
              fontFamily: "monospace",
            }}
            onClick={handleSayHelloClick}
          >
            Say Hello
          </Button>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
