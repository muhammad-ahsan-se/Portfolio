import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight, Mail, MapPin, Menu, X,
  Code2, Sparkles, Layers3, Cpu, Database, Braces, ExternalLink,
  ChevronDown, CheckCircle2, TerminalSquare, Rocket, GraduationCap,
  MousePointer2, Download, Globe2, Zap
} from 'lucide-react';
import './styles.css';
import profilePhoto from './assets/ahsan.jpg';

function GitHubIcon({ size = 17 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .7a11.3 11.3 0 0 0-3.58 22.02c.57.1.78-.25.78-.55v-2.03c-3.18.69-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.52-2.54-.29-5.2-1.27-5.2-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.17A10.9 10.9 0 0 1 12 6.1c.97 0 1.94.13 2.85.38 2.18-1.48 3.14-1.17 3.14-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.39-2.67 5.35-5.22 5.63.41.36.77 1.07.77 2.16v3.2c0 .3.2.65.79.54A11.3 11.3 0 0 0 12 .7Z"/></svg>;
}
function LinkedInIcon({ size = 17 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM2.75 9.75h4.45V21H2.75V9.75ZM9.75 9.75H14v1.54h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.3 2.94 5.3 6.76V21h-4.45v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46V21H9.75V9.75Z"/></svg>;
}

const profile = {
  name: 'Muhammad Ahsan',
  shortName: 'Ahsan',
  role: 'Frontend Developer',
  intro: 'I design and build modern, responsive interfaces with React and JavaScript — turning ideas into clean digital experiences.',
  location: 'Karachi, Pakistan',
  email: 'your-email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://www.linkedin.com/in/yourprofile/'
};

const projects = [
  {
    title: 'AI Chatbot Interface',
    category: 'Frontend / UI',
    description: 'A polished conversational interface with responsive layout, navigation, message states and a focused user experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: Sparkles, accent: 'violet', link: '#'
  },
  {
    title: 'Apple Homepage Clone',
    category: 'Frontend / Responsive',
    description: 'A responsive recreation focused on precise spacing, typography, layout systems and visual hierarchy.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: Layers3, accent: 'cyan', link: '#'
  },
  {
    title: 'Employee Management System',
    category: 'Software / Database',
    description: 'A practical CRUD application built around forms, data handling, structured interfaces and database workflows.',
    tech: ['Python', 'MySQL', 'OOP'],
    icon: Database, accent: 'blue', link: '#'
  },
  {
    title: 'ML Stock Prediction App',
    category: 'AI / Data',
    description: 'A learning project connecting a data-driven prediction workflow with a usable application interface.',
    tech: ['Python', 'ML', 'Data'],
    icon: Cpu, accent: 'pink', link: '#'
  },
  {
    title: 'Amazon-style Navbar',
    category: 'Frontend Practice',
    description: 'A focused UI build for responsive navigation, layout systems and reusable frontend patterns.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: TerminalSquare, accent: 'orange', link: '#'
  },
  {
    title: 'Traffic Light UI',
    category: 'JavaScript Practice',
    description: 'An interaction-focused build for strengthening JavaScript logic, state changes and DOM-driven behaviour.',
    tech: ['JavaScript', 'DOM', 'CSS'],
    icon: Braces, accent: 'green', link: '#'
  }
];

const skills = [
  ['HTML5', 'Semantic structure & accessible markup'],
  ['CSS3', 'Responsive design, layouts & animations'],
  ['JavaScript', 'DOM, async flows, APIs & modern syntax'],
  ['React', 'Components, state, hooks & reusable UI'],
  ['Git / GitHub', 'Version control & project workflow'],
  ['C++', 'OOP, problem solving & DSA foundations'],
  ['Python', 'Scripting, applications & data workflows'],
  ['DSA', 'Algorithms, arrays, linked lists & search'],
  ['MySQL', 'Relational data & CRUD concepts']
];

const journey = [
  ['Foundation', 'Python, C++, OOP, databases and core programming concepts.'],
  ['Frontend', 'HTML, CSS, responsive layouts, JavaScript and modern UI practice.'],
  ['React', 'Components, state, hooks, APIs and reusable frontend architecture.'],
  ['Now', 'Building frontend projects while strengthening DSA and software engineering fundamentals.']
];

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function usePointerFX() {
  useEffect(() => {
    const root = document.documentElement;
    const move = (e) => {
      root.style.setProperty('--mx', `${e.clientX}px`);
      root.style.setProperty('--my', `${e.clientY}px`);
    };
    window.addEventListener('pointermove', move, { passive: true });

    const tiltCards = document.querySelectorAll('[data-tilt]');
    const handlers = [];
    tiltCards.forEach(card => {
      const onMove = (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.setProperty('--rx', `${-y * 5}deg`);
        card.style.setProperty('--ry', `${x * 6}deg`);
        card.style.setProperty('--gx', `${(x + .5) * 100}%`);
        card.style.setProperty('--gy', `${(y + .5) * 100}%`);
      };
      const reset = () => {
        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
      };
      card.addEventListener('pointermove', onMove);
      card.addEventListener('pointerleave', reset);
      handlers.push([card, onMove, reset]);
    });

    return () => {
      window.removeEventListener('pointermove', move);
      handlers.forEach(([card, onMove, reset]) => {
        card.removeEventListener('pointermove', onMove);
        card.removeEventListener('pointerleave', reset);
      });
    };
  }, []);
}

function useScrollUI() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
}

function App() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [loaded, setLoaded] = useState(false);
  const progress = useScrollUI();
  const photoRef = useRef(null);

  useReveal();
  usePointerFX();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 450);
    const sections = ['home', 'about', 'skills', 'projects', 'journey', 'contact']
      .map(id => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] });
    sections.forEach(s => observer.observe(s));

    const parallax = () => {
      if (!photoRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const y = Math.min(window.scrollY * 0.055, 55);
      photoRef.current.style.setProperty('--photo-y', `${y}px`);
    };
    window.addEventListener('scroll', parallax, { passive: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener('scroll', parallax);
    };
  }, []);

  const nav = [
    ['Home', '#home'], ['About', '#about'], ['Skills', '#skills'],
    ['Projects', '#projects'], ['Journey', '#journey'], ['Contact', '#contact']
  ];

  return (
    <div className={`app ${loaded ? 'loaded' : ''}`}>
      <div className="scroll-progress"><span style={{ width: `${progress}%` }} /></div>
      <div className="cursor-glow" />
      <div className="noise" />
      <div className="bg-orb orb-a" />
      <div className="bg-orb orb-b" />
      <div className="bg-orb orb-c" />

      <div className="preloader"><div className="loader-mark">A</div><span>AHsan.dev</span></div>

      <header className="nav-wrap">
        <nav className="navbar container">
          <a className="brand" href="#home" onClick={() => setOpen(false)}>
            <span className="brand-mark">A</span>
            <span className="brand-copy"><strong>Ahsan</strong><small>Frontend Developer</small></span>
          </a>

          <div className={`nav-links ${open ? 'open' : ''}`}>
            {nav.map(([label, href]) => (
              <a className={active === href.slice(1) ? 'active' : ''} key={label} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={15}/></a>
          </div>

          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X/> : <Menu/>}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container section-pad">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="pulse-dot"/> Software Engineering Student <span className="eyebrow-line" /> Frontend Developer</div>
            <p className="hero-kicker">01 — HELLO, I'M AHSAN</p>
            <h1>Interfaces with<br/><span className="gradient-text">character.</span></h1>
            <p className="hero-lead">{profile.intro}</p>

            <div className="hero-actions">
              <a className="btn btn-primary magnetic" href="#projects">Explore my work <ArrowUpRight size={18}/></a>
              <a className="btn btn-ghost magnetic" href="#contact">Get in touch <Mail size={17}/></a>
            </div>

            <div className="hero-meta">
              <span><MapPin size={15}/>{profile.location}</span>
              <span><Code2 size={15}/>React · JavaScript · CSS · C++</span>
            </div>

            <div className="scroll-hint"><MousePointer2 size={14}/><span>Scroll to explore</span><ChevronDown size={14}/></div>
          </div>

          <div className="hero-visual reveal delay-1" ref={photoRef}>
            <div className="photo-aura" />
            <div className="photo-frame" data-tilt>
              <div className="photo-topline"><span>PORTFOLIO / 2026</span><span>01</span></div>
              <div className="photo-wrap">
                <img src={profilePhoto} alt="Muhammad Ahsan" />
                <div className="photo-overlay" />
                <div className="photo-tag tag-role"><span>ROLE</span><strong>Frontend Developer</strong></div>
                <div className="photo-tag tag-stack"><span>STACK</span><strong>React · JS · CSS</strong></div>
              </div>
              <div className="photo-bottom"><span>Building on the web.</span><span className="status-dot" /> Available</div>
            </div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="floating-chip chip-one"><Sparkles size={15}/> React & UI</div>
            <div className="floating-chip chip-two"><Rocket size={15}/> Building mode</div>
          </div>
        </section>

        <section className="marquee-band">
          <div className="marquee-track">
            {['Frontend Development','React','JavaScript','Responsive UI','DSA','C++','Python','Git & GitHub','AI Exploration','Frontend Development','React','JavaScript'].map((x, i) => <span key={i}><i/> {x}</span>)}
          </div>
        </section>

        <section id="about" className="container section-pad about-grid">
          <div className="section-intro reveal">
            <span className="section-label">01 / ABOUT</span>
            <h2>More than code.<br/><span className="muted-gradient">Always learning.</span></h2>
          </div>
          <div className="about-copy reveal delay-1">
            <p className="big-copy">I'm a Software Engineering student who enjoys turning ideas into useful, polished digital experiences.</p>
            <p>My strongest interest is frontend development — especially the details that make an interface feel clear, responsive and alive. Alongside React and JavaScript, I keep building my software engineering foundation through C++, DSA, Python and databases.</p>
            <div className="about-points">
              <div><CheckCircle2 size={18}/><span>Project-first learning</span></div>
              <div><CheckCircle2 size={18}/><span>Clean, responsive UI</span></div>
              <div><CheckCircle2 size={18}/><span>Curiosity across the stack</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="container section-pad">
          <div className="section-head reveal">
            <div><span className="section-label">02 / SKILLS</span><h2>The stack I <span className="gradient-text">build with.</span></h2></div>
            <p>Technologies I use to create interfaces, solve problems and turn concepts into working projects.</p>
          </div>
          <div className="skills-grid">
            {skills.map(([name, desc], i) => (
              <article className={`skill-card reveal delay-${(i % 4) + 1}`} data-tilt key={name}>
                <div className="skill-index">0{i+1}</div><Code2 size={21}/>
                <h3>{name}</h3><p>{desc}</p><span className="card-arrow"><ArrowUpRight size={16}/></span>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="container section-pad">
          <div className="section-head reveal">
            <div><span className="section-label">03 / SELECTED WORK</span><h2>Things I've <span className="gradient-text">built.</span></h2></div>
            <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">View GitHub <ExternalLink size={15}/></a>
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => {
              const Icon = p.icon;
              return (
                <article className={`project-card ${p.accent} reveal delay-${(i % 3) + 1}`} data-tilt key={p.title}>
                  <div className="project-glow"/>
                  <div className="project-number">0{i+1}</div>
                  <div className="project-top">
                    <span className="project-icon"><Icon size={21}/></span>
                    <span className="project-category">{p.category}</span>
                    <a href={p.link} aria-label={p.title}><ArrowUpRight size={19}/></a>
                  </div>
                  <div className="project-body"><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.tech.map(t => <span key={t}>{t}</span>)}</div></div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="journey" className="container section-pad journey-grid">
          <div className="journey-sticky reveal">
            <span className="section-label">04 / JOURNEY</span>
            <h2>Learning.<br/><span className="gradient-text">Building.</span><br/>Repeating.</h2>
            <p>Progress comes from showing up, shipping small things and improving through practice.</p>
          </div>
          <div className="timeline">
            {journey.map(([title, text], i) => (
              <div className="timeline-item reveal" key={title}>
                <div className="timeline-dot">{i+1}</div>
                <div><span>PHASE 0{i+1}</span><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="stats-band">
          <div className="container stats-grid">
            {[['01+', 'Years learning software engineering'], ['06+', 'Project builds & experiments'], ['09', 'Core technologies in active stack'], ['∞', 'Curiosity to keep improving']].map(([n,t], i) => (
              <div className="stat reveal" key={i}><strong>{n}</strong><span>{t}</span></div>
            ))}
          </div>
        </section>

        <section id="contact" className="container section-pad contact-section">
          <div className="contact-card reveal" data-tilt>
            <div className="contact-copy">
              <span className="section-label">05 / CONTACT</span>
              <h2>Let's build something<br/><span className="gradient-text">worth shipping.</span></h2>
              <p>Open to internships, collaboration and frontend projects where I can contribute, learn and build useful products.</p>
              <div className="contact-actions">
                <a className="btn btn-primary magnetic" href={`mailto:${profile.email}`}>Email me <Mail size={17}/></a>
                <a className="btn btn-ghost magnetic" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <LinkedInIcon size={17}/></a>
              </div>
            </div>
            <div className="contact-side">
              <div className="mini-card"><span>FOCUS</span><strong>Frontend + React</strong><Zap size={16}/></div>
              <div className="mini-card"><span>TOOLKIT</span><strong>JS · CSS · Git</strong><Globe2 size={16}/></div>
              <div className="mini-card"><span>BASED IN</span><strong>{profile.location}</strong><MapPin size={16}/></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 {profile.name} — Built with React & curiosity.</span>
          <div><a href={profile.github} target="_blank" rel="noreferrer"><GitHubIcon size={17}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon size={17}/></a><a href={`mailto:${profile.email}`}><Mail size={17}/></a></div>
        </div>
      </footer>

      <a className="back-top" href="#home" aria-label="Back to top"><ChevronDown size={18}/></a>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
