import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "InveXa",

      description:
        "Full-stack inventory management platform for managing products, inventory levels, suppliers, purchase orders, sales orders, and demand insights across business operations.",

      highlights: [
        "Inventory and stock movement tracking",
        "JWT authentication and protected routes",
        "Demand insights and reorder alerts",
        "OpenAPI and Swagger API documentation",
      ],

      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "Prisma",
        "PostgreSQL",
        "JWT",
        "Swagger",
      ],

      github:
        "https://github.com/iit2024270-art/Invexa",
    },

    {
      title: "AI Text Summarizer",

      description:
        "AI-powered web application that generates concise summaries from long text using the Hugging Face Inference API and a transformer-based NLP model.",

      highlights: [
        "AI-powered text summarization",
        "Real-time character count",
        "Copy summarized text",
        "Responsive desktop and mobile design",
      ],

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "Axios",
        "Hugging Face Inference API",
        "DistilBART",
      ],

      github:
        "https://github.com/iit2024270-art/AI-Text-Summarizer",
    },

    {
      title: "Personal Finance Dashboard",

      description:
        "Full-stack MERN finance dashboard that enables users to securely manage income and expenses, track transactions, and visualize financial activity through interactive analytics.",

      highlights: [
        "JWT-based secure authentication",
        "Income and expense management",
        "Interactive financial charts and analytics",
        "Search and filter transaction history",
      ],

      technologies: [
        "React",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Axios",
        "Chart.js",
      ],

      github:
        "https://github.com/iit2024270-art/Personal_Finance_Dashboard",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
         <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            highlights={project.highlights}
            technologies={project.technologies}
            github={project.github}
            />
        ))}
      </div>
    </section>
  );
}

export default Projects;