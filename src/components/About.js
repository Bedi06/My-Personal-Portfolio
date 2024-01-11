import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
// import aboutImage from "../components/assets/about.jpg";

export default function About() {
  return (
    <Box height={"100vh"} sx={{ display: "flex", justifyContent: "center" }}>
      <h1 style={{ marginTop: "100px", marginRight: "100px" }}>About</h1>
      <Paper
        elevation={3}
        style={{
          padding: 16,
          textAlign: "right",
          borderRadius: "30%",
          overflow: "hidden",
          width: "250px",
          height: "250px",
          display: "block",
          marginTop: "100px",
        }}
      >
        {/* <img
          src={aboutImage}
          alt="about"
          style={{
            width: "120%",
            height: "auto",
            objectFit: "contain",
            display: "block",
          }}
        /> */}
      </Paper>
    </Box>
  );
}
