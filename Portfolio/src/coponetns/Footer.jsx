import './footer.css';
import { FaGithub, FaLinkedin, FaInstagram, FaMailBulk } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // const navLinks = [
  //   { label: 'About', href: '#about' },
  //   { label: 'Projects', href: '#projects' },
  //   { label: 'Experience', href: '#experience' },
  //   { label: 'Education', href: '#education' },
  // ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/LokeshKumawat2003', icon: FaGithub },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lokeshkumawat07', icon: FaLinkedin },
    { label: 'Instagram', href: 'https://www.instagram.com/lucky_kmwt_7/?hl=en', icon: FaInstagram },
    { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=lokeshkumawat288g@gmail.com', icon: FaMailBulk },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          <div className="footer-brand">
            <h3>Portfolio</h3>
            <p>Showcasing skills, experience, and a passion for building things on the web.</p>
          </div>

          {/* <div className="footer-section">
            <h3>Navigation</h3>
            <ul>
              {navLinks.map(({ label, href }) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div> */}

          <div className="footer-section">
            {/* <h3>Connect</h3> */}
            <div className="social-links">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  title={label}
                  className="social-link-icon"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          {/* <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}