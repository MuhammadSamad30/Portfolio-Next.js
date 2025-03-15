"use client";
import "boxicons/css/boxicons.min.css";
import { projectsData } from "../data/projectsData";

const Project1 = () => {
  const htmlProjects = projectsData.filter((project) =>
    [
      "Resume Builder",
      "Age Calculator",
      "I'D Card Generator",
      "Currency Converter",
      "Virtual Assistant",
      "Gemini Clone",
    ].includes(project.title)
  );

  const nextJsProjects = projectsData.filter((project) =>
    [
      "E-Com Website",
      "Blog App",
      "E-Com Hackathon",
      "ExamQuiz.io",
      "E-Com Back-End",
      "Dino Jumping",
    ].includes(project.title)
  );

  const pythonProjects = projectsData.filter((project) =>
    [
      "File converter Excel to CSV",
      "Unit Converter",
      "Password Strength",
      "Library Management",
    ].includes(project.title)
  );

  const CategoryTitle = ({ title, icon }: { title: string; icon: string }) => (
    <div className="category-title">
      <i className={`bx ${icon}`}></i>
      <h2>{title}</h2>
    </div>
  );

  return (
    <div className="projects-container">
      <h1 id="project-heading">
        All<span className="pl-2">P</span>rojects
      </h1>

      <div className="category-section">
        <CategoryTitle
          title="HTML, CSS & JavaScript Projects"
          icon="bxl-html5"
        />
        <div id="projects">
          {htmlProjects.map((project) => (
            <div key={project.id} className="project-card glass">
              <h3>
                {project.title} <i className={`bx ${project.icon}`}></i>
              </h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                id="project-link"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="category-section">
        <CategoryTitle title="Next.js Projects" icon="bxl-react" />
        <div id="projects">
          {nextJsProjects.map((project) => (
            <div key={project.id} className="project-card glass">
              <h3>
                {project.title} <i className={`bx ${project.icon}`}></i>
              </h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                id="project-link"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="category-section">
        <CategoryTitle title="Python Projects" icon="bxl-python" />
        <div id="projects">
          {pythonProjects.map((project) => (
            <div key={project.id} className="project-card glass">
              <h3>
                {project.title} <i className={`bx ${project.icon}`}></i>
              </h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                id="project-link"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project1;
