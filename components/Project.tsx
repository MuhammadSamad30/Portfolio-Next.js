import "boxicons/css/boxicons.min.css";
import Link from "next/link";

const Project1 = () => {
  return (
    <div id="projects">
    <div id="project project-1">
      <h3>Resume Builder <i className="bx bxs-spreadsheet"></i></h3>
      <p>A responsive Resume Builder website built with HTML, CSS, and TypeScript.</p>
      <a href="https://shareable-resume-builder-by-samad.vercel.app/" target="_blank" rel="noopener noreferrer" id="project-link">View Project</a>
    </div>
  
    <div id="project project-2">
      <h3>Age Calculator <i className="bx bx-calculator"></i></h3>
      <p>A web application to calculate your exact age in years, months, and days.</p>
      <a href="https://age-calculator-delta-pearl.vercel.app/" target="_blank" rel="noopener noreferrer" id="project-link">View Project</a>
    </div>
  
    <div id="project project-3">
      <h3>I&apos;D Card Generator <i className="bx bx-id-card"></i></h3>
      <p>Generate and download your personal ID card. Built using HTML, CSS, and JavaScript.</p>
      <a href="https://muhammad-samad-id-card-generator.vercel.app/" target="_blank" rel="noopener noreferrer" id="project-link">View Project</a>
    </div>
  
    <div id="project project-4">
      <h3>Currency Converter <i className="bx bxl-bitcoin"></i></h3>
      <p>A simple Currency Converter app to convert your amount built using JavaScript.</p>
      <a href="https://muhammad-samad-currency-convertor.vercel.app/" target="_blank" rel="noopener noreferrer" id="project-link">View Project</a>
    </div>
  
    <div id="project project-5">
      <h3>Virtual Assistant <i className="bx bx-brain"></i></h3>
      <p>This project is based on voice commands and can answer anything you want!</p>
      <a href="https://virtual-assistant-js-by-samad.vercel.app/" target="_blank" rel="noopener noreferrer" id="project-link">View Project</a>
    </div>

    <div id="project project-6">
      <h3>E-Com Website <i className='bx bxs-store-alt'></i></h3>
      <p>E-commerce Website with responsive ness and Shopping cart functionality!</p>
      <a href="https://e-commerce-website-by-samad.vercel.app/" target="_blank" rel="noopener noreferrer" id="project-link">View Project</a>
    </div>

    <div id="project project-7">
      <h3>Blog App <i className='bx bxl-blogger'></i></h3>
      <p>Blog App On Next Js 15 Introduction with Fully Responsive ness</p>
      <a href="https://basic-blog-app-by-samad.vercel.app/" target="_blank" rel="noopener noreferrer" id="project-link">View Project</a>
    </div>

    <div id="project project-8">
      <h3>E-Com Hackathon <i className='bx bx-store'></i></h3>
      <p>Figma to E-Commerce Website Pixel perfect with Responsive ness! In Hackathon Event</p>
      <a href="https://e-commerce-hackathon-by-samad.vercel.app/" target="_blank" rel="noopener noreferrer" id="project-link">View Project</a>
    </div>
  
    <div id="project project-9">
      <h3>Want To See All</h3>
      <p></p>
      <Link href="/projects" id="project-link">View All</Link>
    </div>
  </div>
  )
}

export default Project1 