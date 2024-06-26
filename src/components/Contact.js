import { Box, Grid } from "@mui/material";
import { Theme } from "../theme.js";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

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
        <h4
          style={{
            color: Theme.palette.primary.main,
            fontSize: "15px",
            fontFamily: "monospace",
            marginBottom: 0,
          }}
        >
          Let's Chat!
        </h4>
        <h2
          style={{
            fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
            color: "#555d69",
            whiteSpace: "nowrap",
          }}
        >
          Get in touch
        </h2>
        <section
          style={{
            color: Theme.palette.secondary.main,
            fontFamily: "Calibre,Inter,San Francisco,SF Pro Text",
            paddingBottom: "1em",
            textAlign: "center",
            width: "80%",
            maxWidth: { xs: "60%", md: "40%", lg: "40%" },
          }}
        >
          Whether you have a project in mind, questions about my projects, or
          just want to chat tech, I'm always eager to engage with fellow
          enthusiasts like you. Drop me a line and let's start the conversation!
        </section>
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
