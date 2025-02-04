"use client";
import "boxicons/css/boxicons.min.css";
import { projectsData } from "../data/projectsData";

const Project1 = () => {
  return (
    <>
      <h1 id="project-heading">
        All<span className="pl-2">P</span>rojects
      </h1>
      <div id="projects">
        {projectsData.map((project: any) => (
          <div key={project.id} id={`project project-${project.id}`}>
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
    </>
  );
};

export default Project1;
