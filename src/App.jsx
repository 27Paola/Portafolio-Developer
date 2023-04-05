import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // ---------Modo DIA Y NOCHE-------
  const [darMode, setDarkMode] = useState(false);

  return (
    <div className={darMode && "dark"}>
      <Navbar darkMode={darMode} setDarkMode={setDarkMode} />

      <main className="bg-white dark:bg-dark text-dark dark:text-white">
        <Hero />
      </main>
    </div>
  )
}

export default App;
