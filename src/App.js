import "./App.css";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import { styled } from "@mui/system";
import { Theme } from "./theme.js";
import { ThemeProvider } from "@mui/material/styles";
import Footer from "./components/Footer.js";
import PopupModal from "./components/PopupModal.js";

const AppBody = styled("div")(({ theme }) => ({
  marginLeft: "6em",
  marginRight: "6em",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "2em",
    marginRight: "1em",
  },
}));
const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Navbar />

        <AppBody>
          <PopupModal message="Don't judge me ,I'am still a work in progress." />
          ß
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </AppBody>
      </div>
    </ThemeProvider>
  );
};

export default App;
