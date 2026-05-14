import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './sections.css';
import './contact.css';

export default function Contact() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init('6O9yD_985jpKtDOpY');
    }, []);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus('');

        // Send email using EmailJS
        emailjs.send(
            'service_xxvznss',
            'template_fvjvmle',
            {
                to_email: 'lokeshkumawat288g@gmail.com',
                from_name: `${form.firstName} ${form.lastName}`,
                from_email: form.email,
                subject: form.subject,
                message: form.message,
            }
        ).then(
            (response) => {
                console.log('Email sent successfully!', response);
                setSubmitStatus('success');
                setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' });
                setTimeout(() => setSubmitStatus(''), 5000);
            },
            (error) => {
                console.error('Failed to send email:', error);
                setSubmitStatus('error');
                setTimeout(() => setSubmitStatus(''), 5000);
            }
        ).finally(() => {
            setIsLoading(false);
        });
    };

    const details = [
        { icon: '✉', label: 'Email', value: 'lokeshkumawat288g@gmail.com' },
        { icon: '☏', label: 'Phone', value: '9549809524' },
        { icon: '◎', label: 'Location', value: 'Rajasthan, India' },
        { icon: '◷', label: 'Response Time', value: 'Within 24 hours' },
    ];

    const subjects = [
        'Job Opportunity',
        'Freelance Project',
        'Collaboration',
        'Just Saying Hi',
        'Other',
    ];

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="contact-layout">

                    {/* ── Left ── */}
                    <div className="contact-info">
                        {/* <span className="section-label">Contact</span> */}
                        <h2>Let's Connect</h2>
                        <p>
                            I'm always open to discussing new opportunities, interesting
                            projects, or just having a chat about technology and development.
                        </p>

                        <div className="contact-details">
                            {details.map(({ icon, label, value }) => (
                                <div className="contact-detail" key={label}>
                                    <div className="contact-detail-icon" aria-hidden="true">
                                        {icon}
                                    </div>
                                    <div className="contact-detail-text">
                                        <span className="contact-detail-label">{label}</span>
                                        <span className="contact-detail-value">{value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right — form ── */}
                    <div className="contact-form-card">
                        <form onSubmit={handleSubmit} noValidate>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="firstName">
                                        First Name <span className="required">*</span>
                                    </label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        className="form-input"
                                        placeholder="Your first name"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="lastName">
                                        Last Name <span className="required">*</span>
                                    </label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        className="form-input"
                                        placeholder="Your last name"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="email">
                                    Email <span className="required">*</span>
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="form-input"
                                    placeholder="your.email@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="subject">
                                    Subject <span className="required">*</span>
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    className="form-select"
                                    value={form.subject}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select a subject</option>
                                    {subjects.map((s) => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="message">
                                    Message <span className="required">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-textarea"
                                    placeholder="Tell me about your project or how I can help you..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <p className="form-hint">
                                💡 Tip: Write a meaningful message with at least 3 words and 10 characters.
                            </p>

                            {submitStatus === 'success' && (
                                <p className="form-success">✓ Message sent successfully! I'll get back to you soon.</p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="form-error">✗ Failed to send message. Please try again.</p>
                            )}

                            <button type="submit" className="form-submit" disabled={isLoading}>
                                {isLoading ? 'Sending...' : 'Send Message'}
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}