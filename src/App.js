import "./App.css";
import Navbar from "./components/Navbar.js";
import Experience from "./components/Experience.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div
        className="appBody"
        style={{ marginLeft: "6em", marginRight: "6em" }}
      >
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
