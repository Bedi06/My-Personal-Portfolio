import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import aboutImage from "../components/assets/BO.png";

export default function About() {
  console.log(About);
  return (
    <Box sx={{ height: "600px", width: "100%" }}>
      <h1 style={{ marginTop: "100px", marginRight: "100px" }}>About</h1>
      <Paper
        elevation={3}
        style={{
          padding: 16,
          textAlign: "right",
          borderRadius: "30%",
          overflow: "hidden",
          width: "100px",
          height: "100px",
          display: "block",
          marginTop: "100px",
        }}
      >
        <img
          src={aboutImage}
          alt="about"
          style={{ width: "100%", height: "100%" }}
        />
      </Paper>
    </Box>
  );
}
