import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function About() {
  return (
    <Box id="about" sx={{ height: "60vh" }}>
      <h1
        style={{
          fontFamily: "monospace",
          marginTop: "100px",
          marginRight: "100px",
        }}
      >
        01.A bit About me
      </h1>
      <Paper
        elevation={3}
        style={{
          textAlign: "right",
          borderRadius: "30%",
          overflow: "hidden",
          width: "100px",
          height: "100px",
          display: "block",
          marginTop: "100px",
        }}
      ></Paper>
    </Box>
  );
}
