
import { Code2, GraduationCap, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-header">
          <span className="section-label">Get to know me</span>

          <h2 className="section-heading">
            About <span className="accent-text">Me</span>
          </h2>

          <p className="about-subtitle">
            A little about my background, interests, and what drives me
            as a developer.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>
              Building solutions through
              <span className="accent-text"> code and creativity.</span>
            </h3>

            <p>
              I am an Information Technology graduate with a strong
              interest in software development and building web
              applications. I enjoy understanding how applications
              work, solving programming challenges, and continuously
              improving my technical knowledge.
            </p>

            <p>
              My primary career goal is to become a Java Full Stack
              Developer. I am focusing on developing my skills in
              Java, Spring Boot, React, and database technologies
              while building practical projects.
            </p>

            <p>
              I believe in learning by doing, writing clean code,
              and improving through consistent practice. I am
              currently looking for an opportunity to begin my
              professional journey in software development.
            </p>
          </div>

          <div className="about-highlights">
            <div className="about-card">
              <div className="about-card-icon">
                <GraduationCap size={25} />
              </div>

              <div>
                <h4>Education</h4>
                <p>B.Tech in Information Technology</p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <Code2 size={25} />
              </div>

              <div>
                <h4>Development Focus</h4>
                <p>Java Full Stack Development</p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <Lightbulb size={25} />
              </div>

              <div>
                <h4>Mindset</h4>
                <p>Continuous learning and problem-solving</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
