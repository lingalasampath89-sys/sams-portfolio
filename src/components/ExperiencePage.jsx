import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import './ExperiencePage.css';

/* custom chevron — no icon lib */
function ChevronSVG() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6L8 10L12 6"/>
    </svg>
  );
}

const experiences = [
  {
    id: 'exp-1',
    type: 'experience',
    role: "Part-Time Web Developer",
    company: "Jersey Perfumes",
    period: "2023 - Present",
    location: "Guntur, Andhra Pradesh",
    tags: ["HTML", "CSS", "JavaScript", "React.js"],
    summary: "Designing and maintaining responsive web pages to enhance product visibility and user engagement.",
    achievements: [
      "Designed, developed, and maintained responsive web pages to enhance product visibility and user engagement.",
      "Implemented modern UI/UX principles to improve website usability, navigation, and overall customer experience.",
      "Optimized website performance, ensuring fast loading times and cross-browser compatibility.",
      "Managed content updates, product presentation, and regular maintenance to ensure smooth operations."
    ],
  },
];

const education = [
  {
    id: 'edu-1',
    type: 'education',
    degree: "B.Tech — Computer Science Engineering (AI & ML)",
    institution: "KKR & KSR Institute of Technology & Sciences (KITS)",
    period: "2022 - 2026",
    score: "CGPA: 8.2 / 10",
    tags: ["AI & ML", "Python", "Data Science"],
    achievements: [
      "Specialized in Artificial Intelligence and Machine Learning stream.",
      "Built projects in Generative AI, NLP, and XML parsing systems.",
      "Active member of tech clubs and participated in AI/ML workshops.",
      "Maintained a strong CGPA of 8.2/10 throughout the program.",
    ],
  },
  {
    id: 'edu-2',
    type: 'education',
    degree: "Intermediate (12th Standard)",
    institution: "Narayana Junior College, Guntur",
    period: "2020 - 2022",
    score: "94%",
    tags: ["MPC", "Mathematics", "Physics"],
    achievements: [
      "Secured 94% in the board examinations.",
      "Strong foundation in Mathematics and Physics.",
      "Qualified for engineering entrance examinations.",
    ],
  },
  {
    id: 'edu-3',
    type: 'education',
    degree: "SSC (10th Standard)",
    institution: "Adithya High School",
    period: "2019 - 2020",
    score: "99.1%",
    tags: ["Academics", "Top Scorer"],
    achievements: [
      "Achieved an outstanding 99.1% in board examinations.",
      "Ranked among the top students in the school.",
      "Demonstrated exceptional academic discipline and consistency.",
    ],
  },
];

const certifications = [
  {
    id: 'cert-1',
    type: 'certification',
    title: "Employability Skills Job Ready Virtual Internship",
    issuer: "TCS iON",
    tags: ["Soft Skills", "Professional Development"],
    summary: "Completed a comprehensive virtual internship focused on employability and job-readiness skills.",
    achievements: [
      "Completed a structured program covering communication, teamwork, and professional skills.",
      "Participated in real-world scenario-based modules to build job-readiness.",
      "Earned certification from TCS iON upon successful completion.",
    ],
  },
  {
    id: 'cert-2',
    type: 'certification',
    title: "Generative AI Fundamentals Certification",
    issuer: "Google / Coursera",
    tags: ["Generative AI", "LLM", "Prompt Engineering"],
    summary: "Certified in foundational concepts of Generative AI, large language models, and responsible AI usage.",
    achievements: [
      "Learned core concepts of Generative AI and large language models (LLMs).",
      "Understood prompt engineering techniques and responsible AI principles.",
      "Applied learnings to real-world AI project implementations.",
    ],
  },
];

const allItems = [...experiences, ...education, ...certifications];

const typeIcon = (type) => {
  if (type === 'experience') return <Briefcase size={16} />;
  if (type === 'education') return <GraduationCap size={16} />;
  return <Award size={16} />;
};

const typeDotClass = (type) => {
  if (type === 'experience') return 'dot-exp';
  if (type === 'education') return 'dot-edu';
  return 'dot-cert';
};

const filters = ['All', '💼 Experience', '🎓 Education', '🏆 Certifications'];

const ExperiencePage = () => {
  const [activeId, setActiveId] = useState(null);
  const [filter, setFilter] = useState('All');

  const filtered =
    filter === 'All' ? allItems
    : filter === '💼 Experience' ? experiences
    : filter === '🎓 Education' ? education
    : certifications;

  const toggle = (id) => setActiveId(activeId === id ? null : id);

  const getLabel = (item) => {
    if (item.type === 'experience') return item.role;
    if (item.type === 'education') return item.degree;
    return item.title;
  };

  const getSub = (item) => {
    if (item.type === 'experience') return item.company;
    if (item.type === 'education') return item.institution;
    return item.issuer;
  };

  const getScore = (item) => item.score || null;

  return (
    <div className="ep-page">
      {/* Back button */}
      <a href="/" className="ep-back-btn" id="btn-back-home-exp">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
        Back to Portfolio
      </a>

      {/* Header */}
      <div className="ep-header">
        <p className="ep-eyebrow">BACKGROUND ——</p>
        <h1 className="ep-title">Experience & Education</h1>
        <p className="ep-desc">
          My professional journey, academic background, and certifications — all in one place.
        </p>

        {/* Filter pills */}
        <div className="ep-filters">
          {filters.map(f => (
            <button
              key={f}
              className={`ep-filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Items list */}
      <div className="ep-list">
        {filtered.map((item) => (
          <div key={item.id} className="ep-item">
            {/* ── Row ── */}
            <div
              className={`ep-card-row ${activeId === item.id ? 'open' : ''}`}
              onClick={() => toggle(item.id)}
              id={`exp-row-${item.id}`}
            >
              <div className="ep-card-left">
                <span className={`ep-cat-dot ${typeDotClass(item.type)}`}></span>
                <div className="ep-card-info">
                  <div className="ep-card-title-row">
                    <span className={`ep-type-icon ${typeDotClass(item.type)}`}>
                      {typeIcon(item.type)}
                    </span>
                    <h3 className="ep-card-title">{getLabel(item)}</h3>
                    {getScore(item) && (
                      <span className="ep-score-badge">{getScore(item)}</span>
                    )}
                  </div>
                  <p className="ep-card-sub">{getSub(item)}</p>
                </div>
              </div>

              <div className="ep-card-right">
                {item.period && (
                  <span className="ep-period-badge">{item.period}</span>
                )}
                <div className="ep-tags">
                  {(item.tags || []).slice(0, 2).map((t, i) => (
                    <span key={i} className={`ep-tag ep-tag-${item.type}`}>{t}</span>
                  ))}
                </div>
                <span className={`ep-chevron ${activeId === item.id ? 'rotated' : ''}`}>
                  <ChevronSVG />
                </span>
              </div>
            </div>

            {/* ── Expanded Detail ── */}
            {activeId === item.id && (
              <div className="ep-detail">
                <div className={`ep-detail-inner ep-border-${item.type}`}>
                  {/* Summary / tagline */}
                  {(item.summary) && (
                    <p className="ep-summary">{item.summary}</p>
                  )}

                  {/* Achievements */}
                  <div className="ep-achievements">
                    <h4 className="ep-cs-label">Key Highlights</h4>
                    <ul className="ep-ach-list">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="ep-ach-item">
                          <span className="ep-ach-bullet">→</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="ep-detail-tags">
                    <h4 className="ep-cs-label">
                      {item.type === 'experience' ? 'Technologies Used' : 'Areas'}
                    </h4>
                    <div className="ep-detail-tag-row">
                      {(item.tags || []).map((t, i) => (
                        <span key={i} className={`ep-tag ep-tag-${item.type} ep-tag-lg`}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
