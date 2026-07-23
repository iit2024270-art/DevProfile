function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "JavaScript", "Python", "Java"],
    },

    {
      title: "Frontend",
      skills: ["HTML", "CSS", "React", "TypeScript"],
    },

    {
      title: "Backend",
      skills: ["Node.js", "Express.js"],
    },

    {
      title: "Databases & ORM",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma"],
    },

    {
      title: "Tools & APIs",
      skills: ["Git", "GitHub", "Postman", "REST APIs", "Swagger"],
    },
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical Skills</h2>

      <div className="skills-categories">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="skill-category"
          >
            <h3>{category.title}</h3>

            <div className="skills-container">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-card"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;