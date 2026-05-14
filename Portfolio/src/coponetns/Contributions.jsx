import './sections.css';

export default function Contributions() {
  const contributions = [
    // {
    //   id: 1,
    //   title: 'Open Source React Component Library',
    //   description: 'Contributed reusable UI components to a popular React library used by thousands of developers.',
    //   contribution: 'Core Contributor',
    // },
    {
      id: 2,
      title: 'Web Development Documentation',
      description: 'Enhanced documentation for modern web development practices and best patterns.',
      contribution: 'Documentation',
    },
    {
      id: 3,
      title: 'Community Forum Support',
      description: 'Actively helped other developers solve problems and shared knowledge in web development communities.',
      contribution: 'Community Helper',
    },
    {
      id: 4,
      title: 'Web Accessibility Project',
      description: 'Contributed to improving web accessibility standards and implementations.',
      contribution: ' Contributor',
    },
  ];

  return (
    <section id="contributions" className="section contributions-section">
      <div className="container">
        {/* <span className="section-label">Open Source</span> */}
        <h2 className="section-title">Contributions</h2>

        <div className="contributions-list">
          {contributions.map((contrib) => (
            <div key={contrib.id} className="contribution-card">
              <div className="contribution-header">
                <h3>{contrib.title}</h3>
                <span className="contribution-badge">{contrib.contribution}</span>
              </div>
              <p>{contrib.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}