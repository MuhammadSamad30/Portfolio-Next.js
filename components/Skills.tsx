"use client";
import { useEffect, useRef } from "react";

const Skills1: React.FC = () => {
  const skillRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    skillRefs.current.forEach((ref) => {
      if (ref) {
        const percentage = ref.getAttribute("data-percentage");
        ref.style.width = "0%";

        setTimeout(() => {
          ref.style.transition = "width 2s ease-in-out";
          ref.style.width = percentage || "0%";
        }, 100);
      }
    });
  }, []);

  return (
    <div id="skillsContainer">
      <div id="skillItem">
        <div id="skillInfo">
        <i className="bx bxl-html5 icon"></i>
          <span id="skillName">HTML</span>
          <div id="skillBar">
            <div
              id="skillLevel"
              ref={(el) => {
                if (el) skillRefs.current[0] = el;
              }}
              data-percentage="100%"
            ></div>
          </div>
          <span id="skillPercentage">100%</span>
        </div>
      </div>

      <div id="skillItem">
        <div id="skillInfo">
        <i className="bx bxl-css3 icon"></i>
          <span id="skillName">CSS</span>
          <div id="skillBar">
            <div
              id="skillLevel"
              ref={(el) => {
                if (el) skillRefs.current[1] = el;
              }}
              data-percentage="100%"
            ></div>
          </div>
          <span id="skillPercentage">100%</span>
        </div>
      </div>

      <div id="skillItem">
        <div id="skillInfo">
        <i className="bx bxl-javascript icon"></i>
          <span id="skillName">JavaScript</span>
          <div id="skillBar">
            <div
              id="skillLevel"
              ref={(el) => {
                if (el) skillRefs.current[2] = el;
              }}
              data-percentage="98%"
            ></div>
          </div>
          <span id="skillPercentage">98%</span>
        </div>
      </div>

      <div id="skillItem">
        <div id="skillInfo">
        <i className="bx bxl-typescript icon"></i>
          <span id="skillName">TypeScript</span>
          <div id="skillBar">
            <div
              id="skillLevel"
              ref={(el) => {
                if (el) skillRefs.current[3] = el;
              }}
              data-percentage="98%"
            ></div>
          </div>
          <span id="skillPercentage">98%</span>
        </div>
      </div>

      <div id="skillItem">
        <div id="skillInfo">
      <i className='bx bxl-react'></i>
          <span id="skillName">Next.js</span>
          <div id="skillBar">
            <div
              id="skillLevel"
              ref={(el) => {
                if (el) skillRefs.current[5] = el;
              }}
              data-percentage="50%"
            ></div>
          </div>
          <span id="skillPercentage">50%</span>
        </div>
      </div>

      <div id="skillItem">
        <div id="skillInfo">
        <i className="bx bxl-nodejs icon"></i>
          <span id="skillName">Node.js</span>
          <div id="skillBar">
            <div
              id="skillLevel"
              ref={(el) => {
                if (el) skillRefs.current[4] = el;
              }}
              data-percentage="35%"
            ></div>
          </div>
          <span id="skillPercentage">35%</span>
        </div>
      </div>
    </div>
  );
};

export default Skills1;
