import './sections.css';

export default function TechStack() {
  const technologies = {
    Frontend: ['React','React Native', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
    Backend: ['Node.js', 'Express.js', 'MongoDB'],
    Tools: ['Git', 'GitHub', 'VS Code', 'Webpack', 'npm',"AI" ],
    Other: ['REST APIs', 'GraphQL', 'Responsive Design', 'Web Performance'],
  };

  return (
    <section id="tech-stack" className="section tech-stack-section">
      <div className="container">
        {/* <span className="section-label">Stack</span> */}
        <h2 className="section-title">Tech Stack</h2>

        <div className="tech-grid">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="tech-category">
              <h3>{category}</h3>
              <ul>
                {techs.map((tech, idx) => (
                  <li key={idx} className="tech-item">
                    <span className="checkmark" aria-hidden="true" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}