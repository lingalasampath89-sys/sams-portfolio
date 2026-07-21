import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, ExternalLink, X } from 'lucide-react';
import './Projects.css';

const aiProjects = [
  {
    id: 1,
    title: "AI-Powered Excel Summarizer",
    tagline: "Automated analysis tool for large datasets",
    tags: ["Python", "Generative AI", "NLP"],
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
    problem: "Existing XML parsing methods failed to efficiently handle complex, incomplete, and noisy XML data structures in legacy systems.",
    solution: "Designed an AI/ML-based architecture to clean and structure the data. Applied machine learning classification techniques to infer missing data and validate structures.",
    architecture: "Utilized ML classification models instead of traditional regex/XPath rules to allow the system to adapt to unpredictable noise and structural variations.",
    challenges: "Training the model on highly unstructured and noisy data required extensive data cleaning and synthetic data generation.",
    results: "Improved extraction accuracy by ~30% and significantly reduced manual correction time for large-scale enterprise datasets.",
    link: "https://deluxe-moonbeam-c85fbb.netlify.app",
    github: "https://github.com",
  },
  {
    id: 3,
    title: "Oil Sales E-Commerce Platform",
    tagline: "Full-stack marketplace for oil products",
    tags: ["React.js", "Node.js", "MySQL"],
    problem: "Needed a reliable, dynamic platform to handle product catalogs, secure user authentication, and complex order management for an oil services business.",
    solution: "Built a dynamic React frontend and a secure Node.js backend integrated with MySQL for robust data management and secure checkout flows.",
    architecture: "Separated concerns using a REST API approach to ensure the frontend remained fast and decoupled from the database operations. Implemented JWT authentication.",
    challenges: "Ensuring secure transactions and handling complex pricing structures based on bulk orders and real-time inventory.",
    results: "Improved user engagement, achieved seamless responsiveness across 15+ device resolutions, and successfully digitized the client's sales pipeline.",
    link: "#",
    github: "https://github.com",
  },
];

const frontendProjects = [
  {
    id: 4,
    title: "AISI Organization Website",
    tagline: "Professional web presence with modern UI",
    tags: ["React.js", "Frontend", "UI/UX"],
    problem: "The organization required a modern, structured presentation of content that worked flawlessly across all devices and clearly communicated their mission.",
    solution: "Translated UI mockups into reusable React components, focusing on clean design principles and structuring the content navigation logically.",
    architecture: "Prioritized native HTML5/CSS3 semantics alongside React to maximize accessibility and SEO performance. Optimized all assets for rapid delivery.",
    challenges: "Ensuring cross-device compatibility and maintaining sub-second load times while keeping the UI visually rich.",
    results: "Delivered a fully responsive, highly optimized web experience with improved accessibility and <1s load times.",
    link: "https://my-organisation.vercel.app/",
    github: "https://github.com",
    image: "/aisi-mockup.png",
  },
  {
    id: 5,
    title: "KJ Systems",
    tagline: "Elite healthcare software solutions — demo build",
    tags: ["React.js", "Frontend", "UI Design"],
    isDemo: true,
    problem: "Built to demonstrate frontend development skills — a fully functional demo of an enterprise-level healthcare software company website.",
    solution: "Designed and developed a modern, professional multi-page site with clean navigation, feature sections, and responsive layouts using React and CSS.",
    architecture: "Component-based React architecture with clean separation of pages and reusable UI components. Deployed on Vercel for fast global delivery.",
    challenges: "Recreating an enterprise feel with premium aesthetics while keeping the build lightweight and fast-loading.",
    results: "Demonstrates strong frontend capability — responsive design, smooth navigation, and enterprise-level UI/UX across all screen sizes.",
    link: "https://kj-systems-demo.vercel.app/",
    github: "https://github.com",
    demoNote: "Demo only — built for skill showcase, not a real product.",
  },
];

const ProjectCard = ({ project, activeProject, toggleProject, projectRefs, index }) => (
  <motion.div
    className="project-wrapper"
    key={project.id}
    ref={(el) => (projectRefs.current[project.id] = el)}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
  >
    {/* Thumbnail / Summary Card */}
    <div
      className={`project-card ${activeProject === project.id ? 'active' : ''}`}
      onClick={() => toggleProject(project.id)}
    >
      <div className="project-thumbnail">
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" />
        ) : (
          <div className="thumbnail-placeholder-text">
            <span>{project.title}</span>
            <span className="placeholder-sub">Click to view case study</span>
          </div>
        )}
      </div>
      <div className="project-meta">
        <div className="project-title-row">
          <h3 className="project-title">{project.title}</h3>
          {project.isDemo && (
            <span className="demo-badge">Demo</span>
          )}
        </div>
        <p className="project-tagline">{project.tagline}</p>
        {project.demoNote && (
          <p className="demo-note">⚠️ {project.demoNote}</p>
        )}
        <div className="project-tags-row">
          <div className="project-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="tag">{tag}</span>
            ))}
          </div>
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-live-btn"
              onClick={(e) => e.stopPropagation()}
              title="Open Live Demo"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>

    {/* Expanded Case Study */}
    <AnimatePresence>
      {activeProject === project.id && (
        <motion.div
          className="case-study"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="case-study-header">
            <h3>{project.title} — Case Study</h3>
            <button className="close-btn" onClick={() => toggleProject(project.id)}>
              <X size={18} /> Close
            </button>
          </div>

          <div className="cs-layout">
            <div className="cs-text-column">
              <div className="cs-section">
                <h4 className="cs-heading">The Problem</h4>
                <p className="cs-text">{project.problem}</p>
              </div>
              <div className="cs-section">
                <h4 className="cs-heading">The Solution</h4>
                <p className="cs-text">{project.solution}</p>
              </div>
              <div className="cs-section">
                <h4 className="cs-heading">Architecture & Tech Stack</h4>
                <p className="cs-text">{project.architecture}</p>
              </div>
              <div className="cs-section">
                <h4 className="cs-heading">Engineering Challenges</h4>
                <p className="cs-text">{project.challenges}</p>
              </div>
              <div className="cs-section">
                <h4 className="cs-heading">Measurable Results</h4>
                <p className="cs-text highlight">{project.results}</p>
              </div>
              <div className="cs-actions">
                {project.link && project.link !== "#" && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <ExternalLink size={16} style={{ marginRight: '8px' }} /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
                    <GitBranch size={16} style={{ marginRight: '8px' }} /> Source Code
                  </a>
                )}
              </div>
            </div>

            <div className="cs-visual-column">
              {project.image ? (
                <img src={project.image} alt={`${project.title} UI`} className="cs-img" loading="lazy" />
              ) : (
                <div className="cs-visual-placeholder">
                  <p>Architecture Diagram / Real Dashboard</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const projectRefs = React.useRef({});

  const toggleProject = (id) => {
    if (activeProject === id) {
      setActiveProject(null);
    } else {
      setActiveProject(id);
      setTimeout(() => {
        if (projectRefs.current[id]) {
          const y = projectRefs.current[id].getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <section className="projects section container" id="projects">
      <h2 className="section-title">Selected Work</h2>

      {/* ── AI / ML Projects ── */}
      <div className="projects-category-label">
        <span className="category-pill ai-pill">🤖 AI &amp; ML Projects</span>
      </div>
      <div className="projects-grid">
        {aiProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            activeProject={activeProject}
            toggleProject={toggleProject}
            projectRefs={projectRefs}
            index={index}
          />
        ))}
      </div>

      {/* ── Frontend Projects ── */}
      <div className="projects-category-label" style={{ marginTop: '4rem' }}>
        <span className="category-pill frontend-pill">🎨 Frontend Projects</span>
      </div>
      <div className="projects-grid">
        {frontendProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            activeProject={activeProject}
            toggleProject={toggleProject}
            projectRefs={projectRefs}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
