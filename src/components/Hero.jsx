import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const skills = [
  "Generative AI",
  "Prompt Engineering",
  "React.js",
  "WordPress",
  "Predictive Modeling",
  "NLP Workflows",
  "Python",
  "Intelligent Systems"
];

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let ticker = setTimeout(() => { handleType(); }, typingSpeed);
    return () => clearTimeout(ticker);
  }, [text, isDeleting]);

  const handleType = () => {
    const i = loopNum % skills.length;
    const fullText = skills[i];
    setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
    setTypingSpeed(isDeleting ? 50 : 100);
    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(500);
    }
  };

  return (
    <section className="hero section container" id="home">
      <div className="hero-layout">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.h1
            className="hero-title"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
          >
            Lingala Sampath Kumar
          </motion.h1>

          <motion.p
            className="hero-value-prop"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
          >
            Building intelligent, data-driven solutions that automate workflows and solve complex problems using <br />
            <span className="typewriter-text" style={{
              color: '#FFFFFF',
              fontWeight: 600,
              background: 'var(--accent-primary)',
              padding: '4px 12px',
              borderRadius: '4px',
              borderRight: '2px solid #FFFFFF',
              display: 'inline-block',
              marginTop: '0.75rem',
              minWidth: '80px',
              maxWidth: '100%',
              minHeight: '1.5em',
              whiteSpace: 'nowrap',
              overflowWrap: 'break-word',
              wordBreak: 'break-word'
            }}>
              {text}
            </span>
          </motion.p>



          {/* Stats */}
          <motion.div
            className="hero-stats"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
          >
            <div className="stat-card">
              <span className="stat-number">4+</span>
              <span className="stat-label">Key Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">15+</span>
              <span className="stat-label">Tech Skills</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">3+</span>
              <span className="stat-label">Certifications</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">2026</span>
              <span className="stat-label">Graduation</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-scroll-indicator"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
          >
            <span className="muted">Scroll to explore</span>
            <svg className="scroll-arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </motion.div>
        </motion.div>

        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <div className="hero-image-backdrop"></div>
            <div className="hero-image-dots"></div>
            <img src="/profile.jpg" alt="Lingala Sampath Kumar" loading="lazy" />
            <div className="hero-badge">
              <strong>AI &amp; ML Engineering</strong>
              <span className="badge-subtext">B.Tech (AI &amp; ML)</span>
              <span className="badge-highlight">KITS, Guntur | 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
