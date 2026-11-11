
import {
  GraduationCap,
  BookOpen,
  School,
} from "lucide-react";

import education from "../data/education";

const educationIcons = {
  1: GraduationCap,
  2: BookOpen,
  3: School,
};

const Education = () => {
  return (
    <section className="education section" id="education">
      <div className="container">
        <div className="education-header">
          <span className="section-label">My academic background</span>

          <h2 className="section-heading">
            My <span className="accent-text">Education</span>
          </h2>

          <p className="education-subtitle">
            My academic journey and educational qualifications.
          </p>
        </div>

        <div className="education-list">
          {education.map((item, index) => {
            const Icon = educationIcons[item.id] || GraduationCap;

            return (
              <article className="education-card" key={item.id}>
                <div className="education-icon">
                  <Icon size={25} />
                </div>

                <div className="education-details">
                  <div className="education-top">
                    <span className="education-duration">
                      {item.duration}
                    </span>
                  </div>

                  <h3>{item.degree}</h3>

                  <h4>{item.field}</h4>

                  <p>{item.institution}</p>

                  {item.location && (
                    <span className="education-location">
                      {item.location}
                    </span>
                  )}
                </div>

                {index === 0 && (
                  <span className="education-current">
                    Graduation
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
