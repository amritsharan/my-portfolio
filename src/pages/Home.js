import React, { useState } from 'react';
import '../Home.css';

const Home = () => {
  const [imgLoaded, setImgLoaded] = useState(true);

  const stats = [
    { value: '3rd Year', label: 'CSE (AI & ML) student building real products' },
    { value: '10+', label: 'portfolio and practice projects' },
    { value: 'Full Stack', label: 'from UI flows to backend logic' },
  ];

  const focusAreas = [
    'Responsive web interfaces with React',
    'C and C++ problem solving',
    'Project-based learning with systems and tools',
  ];

  const gateSubjects = [
    'Operating Systems',
    'Computer Organization',
    'Digital Circuits',
    'Algorithms',
    'DBMS',
  ];

  return (
    <div className="home-container">
      <div className="container">
        <section className="hero">
          <div className="intro animate-up" style={{ animationDelay: '60ms' }}>
            <h1>
              Building thoughtful software with a learner&apos;s mindset and an engineer&apos;s discipline.
            </h1>
            <p>
              I&apos;m <span className="name">Amrit S R</span>, a Computer Science Engineering (Artificial Intelligence and
              Machine Learning) student focused on turning coursework, curiosity, and hands-on experiments into
              practical web and software projects.
            </p>
            <div className="cta">
              <a className="btn" href="/projects">See Projects</a>
              <a className="btn btn-secondary" href="/resume">Open Resume</a>
            </div>
            <div className="hero-stats">
              {stats.map((item) => (
                <div key={item.label} className="hero-stat card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="hero-aside animate-soft" style={{ animationDelay: '140ms' }}>
            <div className="profile-card card">
              <div className="profile-glow" />
              {imgLoaded && (
                <img
                  src="/profile.jpeg"
                  alt="Profile"
                  className="avatar-img"
                  onError={(e) => {
                    setImgLoaded(false);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}
              {!imgLoaded && <div className="avatar">AS</div>}
              <h3>Amrit S R</h3>
              <p className="muted">CSE (AI & ML) student, builder, and curious full-stack developer</p>
              <ul className="focus-list">
                {focusAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
              <div className="availability">
                <span className="status-dot" />
                Open to internships, collaborations, and project discussions
              </div>
            </div>
          </aside>
        </section>

        <section className="gate-highlight card animate-up" style={{ animationDelay: '220ms' }}>
          <div className="gate-copy">
            <span className="panel-kicker">GATE 2026</span>
            <h2>Appeared for the GATE 2026 CS paper with strong core CS preparation.</h2>
            <p>
              I have already taken the <strong>GATE 2026</strong> exam in <strong>Computer Science and Information Technology</strong>,
              with focused preparation across core subjects and a strong interest in system-level thinking.
            </p>
          </div>
          <div className="gate-subjects">
            {gateSubjects.map((subject) => (
              <span key={subject} className="gate-chip">{subject}</span>
            ))}
          </div>
        </section>

        <section className="home-panels">
          <article className="panel card animate-up" style={{ animationDelay: '200ms' }}>
            <span className="panel-kicker">What I care about</span>
            <h2>Useful products, clear interfaces, and steady improvement.</h2>
            <p>
              My best work usually starts with a practical problem: scheduling, analysis, or making a workflow easier
              to understand. I enjoy shaping those ideas into interfaces that feel simple and dependable.
            </p>
          </article>

          <article className="panel panel-accent card animate-up" style={{ animationDelay: '260ms' }}>
            <span className="panel-kicker">Right now</span>
            <h2>Growing through projects that combine logic, design, and implementation.</h2>
            <p>
              I&apos;m actively building portfolio projects, strengthening DSA and systems thinking, and looking for
              opportunities where I can contribute while learning quickly.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Home;
