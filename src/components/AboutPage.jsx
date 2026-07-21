import React, { useState } from 'react';
import './AboutPage.css';

/* ── Custom inline SVGs (no icon lib) ── */
function IconPerson() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="7" r="4"/>
      <path d="M4 21v-1a8 8 0 0 1 16 0v1"/>
    </svg>
  );
}
function IconGradCap() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  );
}
function IconChevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 5L7 9L11 5"/>
    </svg>
  );
}

const personalDetails = [
  { label: 'Full Name',     value: 'Lingala Sampath Kumar' },
  { label: 'Date of Birth', value: '21 July 2003' },
  { label: 'Location',      value: 'Guntur, Andhra Pradesh' },
  { label: 'Phone',         value: '+91 89198 63308' },
  { label: 'Email',         value: 'lingalasampath89@gmail.com' },
  { label: 'Languages',     value: 'Telugu, English, Hindi' },
];

const educationData = [
  {
    id: 'edu-btech',
    degree: 'B.Tech — Computer Science Engineering (AI & ML)',
    institution: 'KKR & KSR Institute of Technology & Sciences (KITS)',
    period: '2022 – 2026',
    score: 'CGPA: 8.2 / 10',
    highlights: [
      'Specialized in Artificial Intelligence & Machine Learning stream.',
      'Built projects in Generative AI, NLP, and XML parsing systems.',
      'Active member of tech clubs; participated in AI/ML workshops.',
      'Maintained a consistent CGPA of 8.2/10.',
    ],
  },
  {
    id: 'edu-inter',
    degree: 'Intermediate (12th Standard)',
    institution: 'Narayana Junior College, Guntur',
    period: '2020 – 2022',
    score: '94%',
    highlights: [
      'Secured 94% in board examinations.',
      'Strong foundation in Mathematics and Physics.',
      'Qualified for engineering entrance examinations.',
    ],
  },
  {
    id: 'edu-ssc',
    degree: 'SSC (10th Standard)',
    institution: 'Adithya High School',
    period: '2019 – 2020',
    score: '99.1%',
    highlights: [
      'Achieved an outstanding 99.1% in board examinations.',
      'Ranked among the top students in the school.',
      'Demonstrated exceptional academic discipline and consistency.',
    ],
  },
];

const certifications = [
  'Employability Skills Job Ready Virtual Internship — TCS iON',
  'Generative AI Fundamentals Certification — Google / Coursera',
];

const AboutPage = () => {
  const [openEdu, setOpenEdu] = useState(null);
  const toggle = (id) => setOpenEdu(openEdu === id ? null : id);

  return (
    <div className="abp-page">
      {/* Back */}
      <a href="/" className="abp-back-btn" id="btn-back-home-about">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
        Back to Portfolio
      </a>

      {/* Hero Header */}
      <div className="abp-header">
        <p className="abp-eyebrow">ABOUT ME ——</p>
        <h1 className="abp-title">Lingala Sampath Kumar</h1>
        <p className="abp-subtitle">AI & ML Developer · Full-Stack Builder · Problem Solver</p>
        <p className="abp-bio">
          I am a Computer Science Engineering student specializing in{' '}
          <strong>Artificial Intelligence and Machine Learning</strong>. My philosophy centres on
          leveraging generative AI and robust algorithms to solve complex, real-world problems.
          I build intelligent, scalable systems—always focusing on clean architecture and
          measurable impact.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="abp-body">

        {/* ── Personal Details ── */}
        <section className="abp-card abp-personal">
          <div className="abp-card-header">
            <span className="abp-card-icon"><IconPerson /></span>
            <h2 className="abp-card-title">Personal Details</h2>
          </div>
          <ul className="abp-detail-list">
            {personalDetails.map((d) => (
              <li key={d.label} className="abp-detail-row">
                <span className="abp-detail-label">{d.label}</span>
                <span className="abp-detail-value">{d.value}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Education ── */}
        <section className="abp-card abp-education">
          <div className="abp-card-header">
            <span className="abp-card-icon"><IconGradCap /></span>
            <h2 className="abp-card-title">Education</h2>
          </div>

          <div className="abp-edu-list">
            {educationData.map((edu) => (
              <div key={edu.id} className="abp-edu-item">
                <div
                  className={`abp-edu-row ${openEdu === edu.id ? 'open' : ''}`}
                  onClick={() => toggle(edu.id)}
                  id={`about-edu-${edu.id}`}
                >
                  <div className="abp-edu-left">
                    <span className="abp-edu-dot" />
                    <div>
                      <p className="abp-edu-degree">{edu.degree}</p>
                      <p className="abp-edu-institution">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="abp-edu-right">
                    <span className="abp-edu-score">{edu.score}</span>
                    <span className="abp-edu-period">{edu.period}</span>
                    <span className={`abp-chevron ${openEdu === edu.id ? 'rotated' : ''}`}>
                      <IconChevron />
                    </span>
                  </div>
                </div>

                {openEdu === edu.id && (
                  <div className="abp-edu-detail">
                    <ul className="abp-edu-highlights">
                      {edu.highlights.map((h, i) => (
                        <li key={i}><span className="abp-bullet">→</span>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Certifications ── */}
        <section className="abp-card abp-certs">
          <div className="abp-card-header">
            <span className="abp-card-icon">🏆</span>
            <h2 className="abp-card-title">Certifications</h2>
          </div>
          <ul className="abp-cert-list">
            {certifications.map((c, i) => (
              <li key={i} className="abp-cert-item">
                <span className="abp-cert-dot" />
                {c}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;
