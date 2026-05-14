import './sections.css';

export default function About() {
  const highlights = [
    {
      icon: '◈',
      title: 'Problem Solver',
      desc: 'Finding elegant solutions to complex problems through clean, maintainable code.',
    },
    {
      icon: '◎',
      title: 'Lifelong Learner',
      desc: 'Always exploring new technologies, patterns, and best practices.',
    },
    {
      icon: '◇',
      title: 'Team Player',
      desc: 'Thriving in collaborative environments built on open communication.',
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About <span>me</span></h2>

        <div className="about-layout">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with a strong foundation in modern web
              technologies. With expertise in React, JavaScript, and responsive design, I love
              creating engaging user experiences and solving complex problems through clean,
              maintainable code.
            </p>
            <p>
              I'm committed to continuous learning and staying updated with the latest industry
              trends. When I'm not coding, you can find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map(({ icon, title, desc }) => (
              <div className="highlight" key={title}>
                <span className="highlight-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}