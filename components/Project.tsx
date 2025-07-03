import "boxicons/css/boxicons.min.css";
import Link from "next/link";

const projects = [
  {
    id: "project-1",
    title: "Resume Builder",
    icon: "bxs-spreadsheet",
    description:
      "A responsive Resume Builder website built with HTML, CSS, and TypeScript.",
    link: "https://shareable-resume-builder-by-samad.vercel.app/",
  },
  {
    id: "project-2",
    title: "E-Com Website",
    icon: "bxs-store-alt",
    description:
      "E-commerce Website with responsiveness and Shopping cart functionality!",
    link: "https://e-commerce-website-by-samad.vercel.app/",
  },
  {
    id: "project-3",
    title: "Blog App",
    icon: "bxl-blogger",
    description: "Blog App On Next Js 15 Introduction with Full Responsiveness",
    link: "https://basic-blog-app-by-samad.vercel.app/",
  },
  {
    id: "project-4",
    title: "E-Com Hackathon",
    icon: "bx-store",
    description:
      "Figma to E-Commerce Website Pixel perfect with Responsiveness! In Hackathon Event",
    link: "https://e-commerce-hackathon-by-samad.vercel.app/",
  },
];

const Project1 = () => {
  return (
    <div className="projects-container">
      <h1 className="flex justify-center text-[28px] md:text-[35px] font-black p-[1px] text-[#d6b153] font-sans mt-4 mb-6">
        Featured Projects
      </h1>

      <div className="category-section">
        <div className="category-title">
          <i className="bx bx-code-alt"></i>
          <h2>Latest Work</h2>
        </div>

        <div id="projects">
          {projects.map((project) => (
            <div key={project.id} className="project-card glass">
              <h3>
                {project.title} <i id="project-icon" className={`bx ${project.icon}`}></i>
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

          <div className="project-card glass">
            <h3>
              Want To See All <i id="project-icon" className="bx bx-link-external"></i>
            </h3>
            <p>Explore my complete portfolio of projects</p>
            <Link href="/projects" id="project-link">
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
