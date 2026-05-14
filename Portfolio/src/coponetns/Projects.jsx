import './sections.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A fully responsive e-commerce application built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      link: 'https://ornate-marigold-72bbb0.netlify.app/',
    },
    {
      id: 2,
      title: 'File Share App',
      description:
        'Secure file sharing platform with authentication, file upload, and real-time data handling features.',
      technologies: ['React', 'Node.js', 'MongoDB','Chakra UI'],
      link: 'https://file-share-gules.vercel.app/login',
    },
   {
  id: 3,
  title: 'Cashback App',
  description:
    'Cashback and rewards platform with secure authentication, real-time transactions, and responsive user experience.',
  technologies: ['React', 'Node.js', 'MongoDB', 'Chakra UI'],
  link: 'https://getrapidcash.in/',
},
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* <span className="section-label">Work</span> */}
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                View project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}