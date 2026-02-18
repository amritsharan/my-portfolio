import React, { useState } from 'react';
import './Resume.css';

export default function Resume() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    { q: 'What kind of projects do you work on?', a: 'Mostly web apps, tooling with React on the front and Python/Java on the back. I also build algorithmic and research-oriented projects such as simulations.' },
    { q: 'Are you open to collaboration?', a: 'Yes — I welcome collaborations on interesting projects, research, and open-source work.' },
    { q: 'Preferred way to contact?', a: 'Email or LinkedIn are preferred. GitHub for code-related discussions.' },
    { q: 'How fast do you reply?', a: 'I typically respond within 24 hours.' },
    { q: 'Will you build my entire app for free?', a: 'I do not build full applications for free, but I am open to paid projects, collaborations, and mentorship.' },
  ];

  const toggle = (i) => setOpenFAQ(openFAQ === i ? null : i);

  return (
    <div className="resume-page">
      <div className="container">
        <div className="resume-grid">
          <div className="resume-left card">
            <div className="resume-head">
              <h2>Resume</h2>
            </div>

            <div className="resume-actions">
              <a className="btn" href="/resume.pdf" download>
                ⬇ Download PDF
              </a>
              <a className="btn" style={{ marginLeft: 12 }} href="/resume.pdf" target="_blank" rel="noreferrer">
                🔍 Preview
              </a>
            </div>

            <div className="resume-embed">
              <iframe src="/resume.pdf#toolbar=0" title="Resume PDF" frameBorder="0" />
            </div>
          </div>

          <aside className="resume-right">
            <div className="card profile-snapshot">
              <img src="/profile.jpg" alt="Profile" className="profile-photo" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <h3>Amrit S R</h3>
              <p className="muted">3rd-year CSE • Full-stack enthusiast</p>
            </div>

            <div className="card info-box">
              <h4>Profile Snapshot</h4>
              <p className="muted">Passionate developer focused on building performant systems and practical projects with clean architecture.</p>
              <p className="contact"><a className="contact-link" href="mailto:amritsr2005@gmail.com">Email</a></p>
              <p className="contact"><a className="contact-link" href="https://www.linkedin.com/in/amrit-s-r-17a515309/" target="_blank" rel="noreferrer">LinkedIn</a></p>
              <p className="contact"><a className="contact-link" href="https://github.com/amritsharan" target="_blank" rel="noreferrer">GitHub</a></p>
            </div>

            <div className="card info-box">
              <h4>Core Strengths</h4>
              <div className="chips">
                <span>Java</span>
                <span>Python</span>
                <span>React</span>
                <span>DSA</span>
                <span>Systems</span>
              </div>
            </div>

            <div className="card info-box stats-box">
              <h4>Highlights</h4>
              <div className="stats">
                <div className="stat"><strong>10+</strong><div className="muted">Projects</div></div>
                <div className="stat"><strong>&lt;24h</strong><div className="muted">Response</div></div>
                <div className="stat"><strong>Open</strong><div className="muted">To Collaboration</div></div>
              </div>
            </div>

            <div className="card info-box faq-box">
              <h4>FAQ</h4>
              <div className="faq-list">
                {faqs.map((f, i) => (
                  <div key={i} className={`faq-item ${openFAQ === i ? 'open' : ''}`}>
                    <button className="faq-q" onClick={() => toggle(i)}>{f.q} <span className="plus">{openFAQ === i ? '−' : '+'}</span></button>
                    {openFAQ === i && <div className="faq-a">{f.a}</div>}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
