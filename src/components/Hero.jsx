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
          <motion.h4
            className="hero-subtitle"
            style={{ color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 600 }}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
          >
            GET EVERY SINGLE SOLUTIONS.
          </motion.h4>

          <motion.h1
            className="hero-title"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
          >
            I'm Developer <br/>
            Lingala Sampath
          </motion.h1>

          <motion.p
            className="hero-value-prop"
            style={{ fontSize: '0.95rem', maxWidth: '480px', color: 'var(--text-secondary)' }}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
          >
            Building intelligent, data-driven solutions that automate workflows and solve complex problems using <br />
            <span className="typewriter-text" style={{
              color: 'var(--bg-secondary)',
              fontWeight: 600,
              background: 'var(--accent-primary)',
              padding: '4px 12px',
              borderRadius: '4px',
              borderRight: '2px solid var(--bg-secondary)',
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

          <motion.div
            className="hero-cta-group"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
          >
            <button className="btn-primary" style={{ padding: '0.8rem 2rem', borderRadius: '4px', border: 'none', fontWeight: 700, fontSize: '0.95rem', background: 'var(--accent-primary)', color: '#FFFFFF' }}>Learn More</button>
            <button className="btn-secondary" style={{ padding: '0.8rem 2rem', borderRadius: '4px', border: '1px solid var(--accent-primary)', background: 'transparent', color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.95rem' }}>Hire Me</button>
          </motion.div>




        </motion.div>

        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img src="/profile.jpg" alt="Lingala Sampath" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
