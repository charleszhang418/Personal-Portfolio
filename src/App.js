import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Education from "./components/Education"
import General from "./components/General"

import "./App.css"

function App({}) {
  const [darkMode, setDarkMode] = useState(false);
  

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Hero darkMode={darkMode}/>
        <div id="General"><General /></div>
        <div id="Experience"><Experiences /></div>
        <div id="Project"><Projects /></div>
        <div id="Education"><Education /></div>
        <Footer />
      </main>
    </div>
  );
}

export default App;