import "boxicons/css/boxicons.min.css";
import Link from "next/link";

const projects = [
  {
    id: "project-1",
    title: "Resume Builder",
    icon: "bx bxs-spreadsheet",
    description: "A responsive Resume Builder website built with HTML, CSS, and TypeScript.",
    link: "https://shareable-resume-builder-by-samad.vercel.app/"
  },
  {
    id: "project-2",
    title: "E-Com Website",
    icon: "bx bxs-store-alt",
    description: "E-commerce Website with responsiveness and Shopping cart functionality!",
    link: "https://e-commerce-website-by-samad.vercel.app/"
  },
  {
    id: "project-3",
    title: "Blog App",
    icon: "bx bxl-blogger",
    description: "Blog App On Next Js 15 Introduction with Full Responsiveness",
    link: "https://basic-blog-app-by-samad.vercel.app/"
  },
  {
    id: "project-4",
    title: "E-Com Hackathon",
    icon: "bx bx-store",
    description: "Figma to E-Commerce Website Pixel perfect with Responsiveness! In Hackathon Event",
    link: "https://e-commerce-hackathon-by-samad.vercel.app/"
  }
];

const Project1 = () => {
  return (
    <div id="projects">
      {projects.map((project) => (
        <div key={project.id} id={`project ${project.id}`}>
          <h3>{project.title} <i className={project.icon}></i></h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" id="project-link">View Project</a>
        </div>
      ))}
      <div id="project project-9">
        <h3>Want To See All</h3>
        <p></p>
        <Link href="/projects" id="project-link">View All</Link>
      </div>
    </div>
  );
}

export default Project1;