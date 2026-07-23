import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">DevProfile</h2>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#achievements" onClick={closeMenu}>
          Achievements
        </a>
        <a href="#contact" onClick={closeMenu}>Contact</a>

        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;