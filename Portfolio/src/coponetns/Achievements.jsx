import './sections.css';
import { FaTrophy, FaStar, FaChartLine, FaGraduationCap, FaUsers, FaAward } from 'react-icons/fa';

export default function Achievements() {
 const achievements = [
  {
    id: 1,
    icon: FaTrophy,
    title: 'Industry Project Experience',
    description: 'Worked on real-world company projects and gained practical experience in full stack web development.',
  },
  {
    id: 2,
    icon: FaStar,
    title: 'Team Collaboration',
    description: 'Collaborated with team members on development tasks, debugging, and project management.',
  },
  {
    id: 3,
    icon: FaChartLine,
    title: 'Project Handling',
    description: 'Handled multiple project modules including frontend UI, backend APIs, and database integration.',
  },
  {
    id: 4,
    icon: FaGraduationCap,
    title: 'Technology Learning',
    description: 'Learned and implemented modern technologies such as React.js, Node.js, Express.js, and MongoDB.',
  },
  {
    id: 5,
    icon: FaUsers,
    title: 'Professional Growth',
    description: 'Improved communication, teamwork, and problem-solving skills while working in a professional environment.',
  },
  {
    id: 6,
    icon: FaAward,
    title: 'Development Experience',
    description: 'Built responsive web applications and gained hands-on experience in full stack development workflows.',
  },
];

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        {/* <span className="section-label">Recognition</span> */}
        <h2 className="section-title">Achievements</h2>

        <div className="achievements-grid">
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon;
            return (
              <div key={achievement.id} className="achievement-card">
                <span className="achievement-icon" aria-hidden="true">
                  <IconComponent size={32} />
                </span>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}