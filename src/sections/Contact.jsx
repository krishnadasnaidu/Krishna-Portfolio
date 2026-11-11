
import {
  Mail,
  MapPin,
  Code,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-header">
          <span className="section-label">Let's connect</span>

          <h2 className="section-heading">
            Get In <span className="accent-text">Touch</span>
          </h2>

          <p className="contact-subtitle">
            I'm open to opportunities, collaborations, and
            conversations about software development.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's build something great together.</h3>

            <p>
              Whether you have a job opportunity, a project idea,
              or simply want to connect, feel free to reach out.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Mail size={21} />
                </div>

                <div>
                  <span>Email : </span>
                  <a href="mailto:kinjarapukrishnadasnaidu616@gmail.com">
                    kinjarapukrishnadasnaidu616@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <MapPin size={21} />
                </div>

                <div>
                  <span>Location</span>
                  <p>Andhra Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <h3>Find me online</h3>

            <p>
              Connect with me through my professional profiles.
            </p>

            <a
              href="https://github.com/krishnadasnaidu"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <Code size={21} />
              <span>GitHub</span>
              <ArrowUpRight size={18} />
            </a>

            <a
              href="https://linkedin.com/in/krishnadasnaidu"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <BriefcaseBusiness size={21} />
              <span>LinkedIn</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
