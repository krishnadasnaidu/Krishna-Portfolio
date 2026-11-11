
import {
  Code2,
  Globe,
  Database,
  Server,
  Wrench,
} from "lucide-react";

import skills from "../data/skills";

const categoryIcons = {
  "Programming Languages": Code2,
  "Frontend Development": Globe,
  "Backend Development": Server,
  Databases: Database,
  "Tools & Technologies": Wrench,
};

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="skills-header">
          <span className="section-label">What I work with</span>

          <h2 className="section-heading">
            My <span className="accent-text">Skills</span>
          </h2>

          <p className="skills-subtitle">
            Technologies and tools I use while learning and building
            web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group) => {
            const Icon = categoryIcons[group.category] || Code2;

            return (
              <div className="skill-card" key={group.category}>
                <div className="skill-card-header">
                  <div className="skill-icon">
                    <Icon size={23} />
                  </div>

                  <h3>{group.category}</h3>
                </div>

                <div className="skill-list">
                  {group.items.map((skill) => (
                    <span className="skill-item" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
