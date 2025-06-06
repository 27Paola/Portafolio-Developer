import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import HamburgerMenu from "./Components/HamburguerMenu";


function App() {
  // ---------Modo DIA Y NOCHE-------
  const [darMode, setDarkMode] = useState(false);

  return (
    <div className={darMode && "dark"}>
      <Navbar darkMode={darMode} setDarkMode={setDarkMode} />

      <main className="bg-white dark:bg-dark text-dark dark:text-white">
        <Home />
        <br/>
        <br />
        <Skills />
        <br />
        <br />
        <br />
        <Projects />
        <br />
        <br />
        <br />
        <Services />
        <br />
        <br />
        <br />
        <Contact />
        <br />
        <br />
        <Footer />
      </main>
    </div>
  )
}

export default App;
