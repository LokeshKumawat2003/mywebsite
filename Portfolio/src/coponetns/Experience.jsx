import './sections.css';

export default function Experience() {
    const experiences = [
        {
            id: 1,
            title: ' Developer',
            company: 'Sequel string',
            period: '2026 — Present',
            description:
                'Developing responsive web applications using React.js, Node.js, Express.js, and MongoDB. Building user-friendly interfaces, REST APIs, and full-stack projects while improving problem-solving and modern development skills.',
        },
        {
            id: 2,
            title: 'Full Stack Developer',
            company: 'Sequel string',
            period: '2025 — 2026',
            description:
                'Developed and maintained multiple client-facing applications. Implemented responsive designs and optimized performance.',
        },
        {
            id: 3,
            title: 'Junior Developer',
            company: 'Sequel string',
            period: '2025 — 2025',
            description:
                'Started career learning modern web development, worked on frontend features and bug fixes.',
        },
    ];

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                {/* <span className="section-label">Career</span> */}
                <h2 className="section-title">Experience</h2>

                <div className="experience-list">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="experience-item">
                            <div className="experience-meta">
                                <span className="period">{ exp.period}</span>
                                <span className="company">{ exp.company}</span>
                            </div>
                            <div className="experience-body">
                                <h3>{exp.title}</h3>
                                <p className="description">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}