import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import RevealSection from "./components/RevealSection";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");

    return savedTheme === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero
        name="Ramkumar"
        role="B.Tech IT Student"
        interest="Full-Stack Developer | AI Enthusiast"
        description="I build practical applications that solve real-world problems."
      />

  <RevealSection>
  <About />
</RevealSection>

<RevealSection>
  <Skills />
</RevealSection>

<RevealSection>
  <Projects />
</RevealSection>

<RevealSection>
  <Achievements />
</RevealSection>

<RevealSection>
  <Contact />
</RevealSection>

      <Footer />
    

      <ScrollToTop />
    </div>
  );
}

export default App;