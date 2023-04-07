import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skils from "./Components/Skils";
import Prollects from "./Components/Prollects";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

function App() {
  // ---------Modo DIA Y NOCHE-------
  const [darMode, setDarkMode] = useState(false);

  return (
    <div className={darMode && "dark"}>
      <Navbar darkMode={darMode} setDarkMode={setDarkMode} />

      <main className="bg-white dark:bg-dark text-dark dark:text-white">
        <Home />
        <Skils />
        <br/>
        <br/>
        <br/>
        <Prollects />
        <br/>
        <br/>
        <br/>
        <Services />
        <br/>
        <br/>
        <br/>
        <Contact />
      </main>
    </div>
  )
}

export default App;
