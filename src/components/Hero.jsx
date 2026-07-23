import { useEffect, useState } from "react";

function Hero({ name, role, interest, description }) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < interest.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + interest[index]);
        setIndex((prev) => prev + 1);
      }, 80);

      return () => clearTimeout(timer);
    }
  }, [index, interest]);

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>

        <h1>{name}</h1>

        <h2>{role}</h2>

        <h3 className="typing-text">
          {displayText}

          {displayText.length < interest.length && (
            <span className="cursor">|</span>
          )}
        </h3>

        <p className="hero-description">
          {description}
        </p>

        <div className="hero-buttons">
          <a
            href="#projects"
            className="primary-button"
          >
            View My Work
          </a>

          <a
            href="/resume.pdf"
            download="Ramkumar_Guguloth_Resume.pdf"
            className="secondary-button"
          >
            Download Resume
          </a>
        </div>

        {/* ADD SOCIAL LINKS HERE */}
        <div className="social-links">
          <a
            href="https://github.com/iit2024270-art"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/guguloth-ramkumar-a1a232332/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;