import './sections.css';

export default function Education() {
const education = [
  {
    id: 1,
    degree: 'Full Stack Development',
    institution: 'Masai School',
    year: '01/2024 – 05/2025',
    details:
      'Learned full stack web development including React.js, Node.js, Express.js, MongoDB, JavaScript, and backend API development.',
  },
  {
    id: 2,
    degree: 'Electrician Trade',
    institution: 'Girija Devi Pvt. ITI',
    year: '08/2020 – 09/2022',
    details:
      'Completed technical vocational training with practical knowledge of electrical systems and maintenance.',
  },
  {
    id: 3,
    degree: '12th',
    institution: 'Gogathala School',
    year: '2019 – 2020',
    details:
      'Completed higher secondary education.',
  },
];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* <span className="section-label">Background</span> */}
        <h2 className="section-title">Education</h2>

        <div className="education-list">
          {education.map((edu) => (
            <div key={edu.id} className="education-item">
              <div className="education-meta">
                <span className="year">{edu.year}</span>
              </div>
              <div className="education-body">
                <h3>{edu.degree}</h3>
                <span className="institution">{edu.institution}</span>
                <p className="details">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}