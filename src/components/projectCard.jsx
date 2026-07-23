function ProjectCard({
  title,
  description,
  highlights,
  technologies,
  github,
}) {
  return (
    <div className="project-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <h4>Key Features</h4>

      <ul className="project-highlights">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div className="technology-badges">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="technology-badge"
          >
            {technology}
          </span>
        ))}
      </div>

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="project-button"
      >
        View on GitHub
      </a>
    </div>
  );
}

export default ProjectCard;