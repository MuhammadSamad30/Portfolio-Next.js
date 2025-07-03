"use client";
import skills from "./Skillsdata";

const Skills1 = () => {
  return (
    <section id="skillsSection">
      <div id="skillsGrid">
        {skills.map((skill, idx) =>
          skill ? (
            <div className="skillCard" key={idx}>
              <div className="skillIcon">{skill.icon}</div>
              <div className="skillName">{skill.name}</div>
            </div>
          ) : null
        )}
      </div>
    </section>
  );
};

export default Skills1;
