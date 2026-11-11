
import {
  Code,
  BriefcaseBusiness,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#home" className="logo">
            Krishnadasnaidu<span>.</span>
          </a>

          <p>Building ideas into meaningful digital experiences.</p>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/krishnadasnaidu"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Code size={20} />
          </a>

          <a
            href="https://linkedin.com/in/krishnadasnaidu"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness size={20} />
          </a>

          <a href="#home" aria-label="Back to top">
            <ArrowUp size={20} />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>Copyright {currentYear} Krishna Das Naidu. All rights reserved.</p>
        <p>Designed and developed with React.</p>
      </div>
    </footer>
  );
};

export default Footer;
