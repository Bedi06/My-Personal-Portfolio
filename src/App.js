import "./App.css";
import Navbar from "./components/Navbar.js";
import Experience from "./components/Experience.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
    </div>
  );
};

export default App;
