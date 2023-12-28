import Box from "@mui/material/Box";
const logo = "logo.svg";

export default function Header() {
  return (
    <header className="App-header">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          backgroundColor: "#EFECEC",
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          width={50}
          height={50}
          className="App-logo"
          alt="logo"
          style={{ marginRight: 10 }} // Add margin to the logo
        />

        {/* Navigation Links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{ marginRight: "1em" }}>#About me</p>{" "}
          <p style={{ marginRight: "1em" }}>#Projects</p>
          <p style={{ marginRight: "1em" }}>#Contact</p>
        </Box>
      </Box>
    </header>
  );
}
