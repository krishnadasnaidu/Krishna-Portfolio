
import {
  Code,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

import projects from "../data/projects";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects-header">
          <span className="section-label">What I've been building</span>

          <h2 className="section-heading">
            Featured <span className="accent-text">Projects</span>
          </h2>

          <p className="projects-subtitle">
            Practical projects that demonstrate my learning and
            development skills.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-top">
                <span className="project-number">
                  {String(project.id).padStart(2, "0")}
                </span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <span className="project-status">
                  {project.status}
                </span>
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`GitHub profile for ${project.title}`}
                >
                  <Code size={19} />
                  GitHub
                  <ArrowUpRight size={16} />
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
