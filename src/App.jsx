import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import HomeProjects from './components/HomeProjects'
import ProjectsPage from './components/ProjectsPage'
import ExperiencePage from './components/ExperiencePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import './App.css'

/* ── Down-arrow SVG (no icon library) ─────────────── */
function Arrow({ open }) {
  return (
    <svg
      className={`nav-arrow${open ? ' nav-arrow-open' : ''}`}
      width="11" height="11"
      viewBox="0 0 11 11"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1.5 3.5L5.5 7.5L9.5 3.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Single reusable nav button ────────────────────── */
function NavItem({ label, to, id, active }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  return (
    <div className="nav-item-wrap" ref={ref}>
      <button
        id={id}
        className={`nav-btn${active ? ' active' : ''}`}
        onClick={() => navigate(to)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {label}
        <Arrow open={open} />
      </button>
    </div>
  );
}

/* ── Shared NavBar ─────────────────────────────────── */
function NavBar() {
  const location = useLocation();
  const p = location.pathname;

  return (
    <nav className="minimal-nav">
      <Link to="/" className="logo">Lingala Sampath Kumar</Link>
      <div className="nav-links">
        <NavItem label="Work"         to="/projects"   id="nav-work"       active={p === '/projects'} />
        <NavItem label="Projects"     to="/projects"   id="nav-projects"   active={p === '/projects'} />
        <NavItem label="Experience"   to="/experience" id="nav-experience" active={p === '/experience'} />
        <NavItem label="About"        to="/about"      id="nav-about"      active={p === '/about'} />
        <NavItem label="Get in Touch" to="/contact"    id="nav-contact"    active={p === '/contact'} />
      </div>
    </nav>
  );
}

/* ── Home ─────────────────────────────────────────── */
function Home() {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollTop;
      const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(`${(total / max) * 100}%`);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="app">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: scrollProgress }} />
      </div>
      <NavBar />
      <main>
        <Hero />
        <Skills />
        <HomeProjects />
        <Experience />
        <About />
      </main>
      <Footer />
    </div>
  );
}

/* ── Page wrapper ─────────────────────────────────── */
function PageWrapper({ children }) {
  return (
    <div className="app">
      <NavBar />
      {children}
    </div>
  );
}

/* ── App ──────────────────────────────────────────── */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/projects"   element={<PageWrapper><ProjectsPage /></PageWrapper>} />
        <Route path="/experience" element={<PageWrapper><ExperiencePage /></PageWrapper>} />
        <Route path="/about"      element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/contact"    element={<PageWrapper><ContactPage /></PageWrapper>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
