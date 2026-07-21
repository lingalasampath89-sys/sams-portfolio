import React, { useState } from 'react';
import { ExternalLink, GitBranch } from 'lucide-react';
import './ProjectsPage.css';

/* custom chevron — no icon lib */
function ChevronSVG() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6L8 10L12 6"/>
    </svg>
  );
}

const aiProjects = [
  {
    id: 1,
    title: "AI-Powered Excel Summarizer",
    tagline: "Automated analysis tool for large datasets",
    tags: ["Python", "Generative AI", "NLP"],
    category: "AI & ML",
    problem: "Large Excel datasets required significant manual effort to extract insights, leading to delayed decision-making and potential human error.",
    solution: "Developed a Python-based pipeline leveraging NLP and Generative AI to parse data. Automated trend detection and pattern recognition algorithms generate concise summaries instantly.",
    architecture: "Python backend using Pandas for efficient data manipulation and integrated Generative AI models to handle nuanced generation of human-readable insights from raw data.",
    challenges: "Handling messy data with missing values and preventing hallucinations in the LLM outputs required strict prompt engineering and validation steps.",
    results: "Reduced manual analysis effort by ~60% and enhanced reporting accuracy for business scenarios. Processed 50+ complex datasets successfully.",
    link: "#",
    github: "https://github.com",
  },
  {
    id: 2,
    title: "Intelligent XML Parsing System",
    tagline: "AI/ML system for noisy data structuring",
    tags: ["Machine Learning", "XML", "Python"],
    category: "AI & ML",
    problem: "Existing XML parsing methods failed to efficiently handle complex, incomplete, and noisy XML data structures in legacy systems.",
    solution: "Designed an AI/ML-based architecture to clean and structure the data. Applied machine learning classification techniques to infer missing data and validate structures.",
    architecture: "Utilized ML classification models instead of traditional regex/XPath rules to allow the system to adapt to unpredictable noise and structural variations.",
    challenges: "Training the model on highly unstructured and noisy data required extensive data cleaning and synthetic data generation.",
    results: "Improved extraction accuracy by ~30% and significantly reduced manual correction time for large-scale enterprise datasets.",
    link: "https://deluxe-moonbeam-c85fbb.netlify.app",
    github: "https://github.com",
  },
];

const frontendProjects = [
  {
    id: 4,
    title: "AISI Organization Website",
    tagline: "Professional web presence with modern UI",
    tags: ["React.js", "Frontend", "UI/UX"],
    category: "Frontend",
    image: "/aisi-mockup.png",
    problem: "The organization required a modern, structured presentation of content that worked flawlessly across all devices and clearly communicated their mission.",
    solution: "Translated UI mockups into reusable React components, focusing on clean design principles and structuring the content navigation logically.",
    architecture: "Prioritized native HTML5/CSS3 semantics alongside React to maximize accessibility and SEO performance. Optimized all assets for rapid delivery.",
    challenges: "Ensuring cross-device compatibility and maintaining sub-second load times while keeping the UI visually rich.",
    results: "Delivered a fully responsive, highly optimized web experience with improved accessibility and <1s load times.",
    link: "https://my-organisation.vercel.app/",
    github: "https://github.com",
  },
  {
    id: 5,
    title: "KJ Systems",
    tagline: "Elite healthcare software solutions — demo build",
    tags: ["React.js", "Frontend", "UI Design"],
    category: "Frontend",
    isDemo: true,
    demoNote: "Demo only — built for skill showcase, not a real product.",
    problem: "Built to demonstrate frontend development skills — a fully functional demo of an enterprise-level healthcare software company website.",
    solution: "Designed and developed a modern, professional multi-page site with clean navigation, feature sections, and responsive layouts using React and CSS.",
    architecture: "Component-based React architecture with clean separation of pages and reusable UI components. Deployed on Vercel for fast global delivery.",
    challenges: "Recreating an enterprise feel with premium aesthetics while keeping the build lightweight and fast-loading.",
    results: "Demonstrates strong frontend capability — responsive design, smooth navigation, and enterprise-level UI/UX across all screen sizes.",
    link: "https://kj-systems-demo.vercel.app/",
    github: "https://github.com",
  },
];

const allProjects = [...aiProjects, ...frontendProjects];

const ProjectsPage = () => {
  const [activeId, setActiveId] = useState(null);
  const [filter, setFilter] = useState('All');

  const filters = ['All', '🤖 AI & ML', '🎨 Frontend'];

  const filtered = filter === 'All'
    ? allProjects
    : filter === '🤖 AI & ML'
      ? aiProjects
      : frontendProjects;

  const toggle = (id) => setActiveId(activeId === id ? null : id);

  return (
    <div className="pp-page">
      {/* Back button */}
      <a href="/" className="pp-back-btn" id="btn-back-home-projects">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
        Back to Portfolio
      </a>

      <div className="pp-header">
        <p className="pp-eyebrow">MY WORK ——</p>
        <h1 className="pp-title">All Projects</h1>
        <p className="pp-desc">
          A collection of AI/ML systems and frontend builds — each solving a real problem.
        </p>

        {/* Filter pills */}
        <div className="pp-filters">
          {filters.map(f => (
            <button
              key={f}
              className={`pp-filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Projects list */}
      <div className="pp-list">
        {filtered.map((project, i) => (
          <div key={project.id} className="pp-item">
            {/* ── Card Row ── */}
            <div
              className={`pp-card-row ${activeId === project.id ? 'open' : ''}`}
              onClick={() => toggle(project.id)}
              id={`project-row-${project.id}`}
            >
              <div className="pp-card-left">
                <span className={`pp-cat-dot ${project.category === 'Frontend' ? 'dot-frontend' : 'dot-ai'}`}></span>
                <div className="pp-card-info">
                  <div className="pp-card-title-row">
                    <h3 className="pp-card-title">{project.title}</h3>
                    {project.isDemo && <span className="pp-demo-badge">Demo</span>}
                  </div>
                  <p className="pp-card-tagline">{project.tagline}</p>
                </div>
              </div>

              <div className="pp-card-right">
                <div className="pp-tags">
                  {project.tags.map((t, idx) => <span key={idx} className="pp-tag">{t}</span>)}
                </div>
                {project.link && project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pp-live-btn"
                    onClick={e => e.stopPropagation()}
                  >
                    <ExternalLink size={13} /> Live
                  </a>
                )}
                <span className={`pp-chevron ${activeId === project.id ? 'rotated' : ''}`}>
                  <ChevronSVG />
                </span>
              </div>
            </div>

            {/* ── Expanded Detail ── */}
            {activeId === project.id && (
              <div className="pp-detail">
                <div className="pp-detail-inner">
                  {/* Left: Project image */}
                  <div className="pp-detail-img-col">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="pp-project-img" />
                    ) : (
                      <div className="pp-img-placeholder">
                        <span>{project.title}</span>
                      </div>
                    )}
                    {project.demoNote && (
                      <p className="pp-demo-note">⚠️ {project.demoNote}</p>
                    )}
                    <div className="pp-detail-actions">
                      {project.link && project.link !== '#' && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="pp-btn-primary">
                          <ExternalLink size={15} /> Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="pp-btn-secondary">
                          <GitBranch size={15} /> Source Code
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right: Case study text */}
                  <div className="pp-detail-text-col">
                    <div className="pp-cs-block">
                      <h4 className="pp-cs-label">The Problem</h4>
                      <p className="pp-cs-text">{project.problem}</p>
                    </div>
                    <div className="pp-cs-block">
                      <h4 className="pp-cs-label">The Solution</h4>
                      <p className="pp-cs-text">{project.solution}</p>
                    </div>
                    <div className="pp-cs-block">
                      <h4 className="pp-cs-label">Architecture & Tech</h4>
                      <p className="pp-cs-text">{project.architecture}</p>
                    </div>
                    <div className="pp-cs-block">
                      <h4 className="pp-cs-label">Challenges</h4>
                      <p className="pp-cs-text">{project.challenges}</p>
                    </div>
                    <div className="pp-cs-block result-block">
                      <h4 className="pp-cs-label">Results</h4>
                      <p className="pp-cs-text result-text">{project.results}</p>
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

export default ProjectsPage;
