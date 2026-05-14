import { useState } from 'react';
import './nav.css';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const navLinks = [
        { label: 'About', id: 'about' },
        { label: 'Experience', id: 'experience' },
        { label: 'Projects', id: 'projects' },
        { label: 'Tech Stack', id: 'tech-stack' },
        { label: 'Contributions', id: 'contributions' },
        { label: 'Education', id: 'education' },
        { label: 'Achievements', id: 'achievements' },
        { label: 'Contact', id: 'contact' },
    ];

    return (
        <nav className="navbar">
            <div className="nav-container">
                <h1 className="nav-logo" onClick={() => scrollToSection('hero')}>
                    Lokesh <span>.Dev</span>
                </h1>

                <button
                    className={`nav-toggle ${isOpen ? 'open' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    {navLinks.map(({ label, id }) => (
                        <li key={id}>
                            <a onClick={() => scrollToSection(id)}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}