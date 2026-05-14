import Nav from './coponetns/nav'
import About from './coponetns/About'
import Experience from './coponetns/Experience'
import Projects from './coponetns/Projects'
import TechStack from './coponetns/TechStack'
import Contributions from './coponetns/Contributions'
import Education from './coponetns/Education'
import Achievements from './coponetns/Achievements'
import Footer from './coponetns/Footer'
import './App.css'
import Contact from './coponetns/Contact'
import profilePhoto from './assets/profile.jpg';
import { FaGithub, FaLinkedin, FaInstagram, FaMailBulk } from 'react-icons/fa';
function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/LokeshKumawat2003', icon: FaGithub },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lokeshkumawat07', icon: FaLinkedin },
    { label: 'Instagram', href: 'https://www.instagram.com/lucky_kmwt_7/?hl=en', icon: FaInstagram },
    { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=lokeshkumawat288g@gmail.com', icon: FaMailBulk },
  ];

  return (
    <>
      <Nav />

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        {/* Background decorations */}
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-container">
          <div className="hero-photo">
            <img
              src={profilePhoto}
              alt="Profile photo"
            />
          </div>
          <div className="hero-content">
            <span className="hero-badge">Available for opportunities</span>

            <h1>
              Building things<br />
              for the <span className="accent">web</span>
            </h1>

            <p className="hero-role">
              Full Stack Developer &nbsp;·&nbsp; Web Enthusiast &nbsp;·&nbsp; Problem Solver
            </p>

            <p className="hero-subtitle">
              Crafting thoughtful digital experiences with modern technologies —
              from pixel-perfect UIs to resilient backends.
            </p>

            <div className="hero-cta-row">
              <a
                href="https://drive.google.com/file/d/1IuNitgncQ6h3EnOG-3Y_kUrnrDagUBnP/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Resume →
              </a>
      <a
                className="cta-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </a>
              <br />
            <div className="hero-social-links">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  title={label}
                  className="hero-social-icon"
                >
                  <Icon size={22} /> 
                </a>
              ))}
            </div>
        
            </div>
          </div>


        </div>
      </section>

      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Contributions />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </>
  )
}

export default App