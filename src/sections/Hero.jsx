
import {
  ArrowUpRight,
  Code,
  BriefcaseBusiness,
  Code2,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="hero section" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-label">
            <span className="status-dot"></span>
            Available for opportunities
          </span>

          <p className="hero-intro">Hello, I'm</p>

          <h1>
            Krishna Das
            <br />
            <span className="accent-text">Naidu.</span>
          </h1>

          <h2>Java Full Stack Developer</h2>

          <p className="hero-description">
            An Information Technology graduate passionate about
            building modern web applications using Java, Spring Boot,
            React, and database technologies. I enjoy solving
            problems and turning ideas into practical software.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore My Work
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/krishnadasnaidu"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Code size={21} />
            </a>

            <a
              href="https://linkedin.com/in/krishnadasnaidu"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness size={21} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-card">
            <div className="code-card-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span>developer.js</span>
            </div>

            <div className="code-content">
              <Code2 size={35} className="code-icon" />

              <p className="code-comment">
                // A little about me
              </p>

              <p>
                <span className="code-purple">const</span>{" "}
                developer = {"{"}
              </p>

              <p className="code-indent">
                name: <span className="code-green">"Krishnadasnaidu"</span>,
              </p>

              <p className="code-indent">
                role: <span className="code-green">"Java Full Stack Developer"</span>,
              </p>

              <p className="code-indent">
                passion: <span className="code-green">"Building applications"</span>,
              </p>

              <p className="code-indent">
                learning: <span className="code-green">"Every day"</span>
              </p>

              <p>{"};"}</p>

              <div className="code-cursor"></div>
            </div>
          </div>

          <div className="floating-tag tag-one">Java</div>
          <div className="floating-tag tag-two">React.js</div>
          <div className="floating-tag tag-three">Spring Boot</div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        <span>Scroll to explore</span>
      </a>
    </section>
  );
};

export default Hero;
