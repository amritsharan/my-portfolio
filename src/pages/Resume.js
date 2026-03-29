import React, { useState } from 'react';
import './Resume.css';

export default function Resume() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      q: 'What kind of projects do you work on?',
      a: 'Mostly web apps, tooling with React on the front and C, C++, or Python for problem solving and core technical work. I also build algorithmic and research-oriented projects such as simulations.',
    },
    {
      q: 'Are you open to collaboration?',
      a: 'Yes, I welcome collaborations on interesting projects, research, and open-source work.',
    },
    { q: 'Preferred way to contact?', a: 'Email or LinkedIn are preferred. GitHub is great for code-related discussions.' },
    { q: 'How fast do you reply?', a: 'I typically respond within 24 hours.' },
    {
      q: 'Will you build my entire app for free?',
      a: 'I do not build full applications for free, but I am open to paid projects, collaborations, and mentorship.',
    },
  ];

  const toggle = (i) => setOpenFAQ(openFAQ === i ? null : i);

  return (
    <div className="resume-page">
      <div className="container">
        <div className="resume-grid">
          <div className="resume-left card">
            <div className="resume-head">
              <span className="eyebrow">Resume</span>
              <h2>Resume</h2>
              <p className="muted">
                A quick snapshot of my education, project work, and technical direction.
              </p>
            </div>

            <div className="resume-actions">
              <a className="btn" href="/resume.pdf" download>
                Download PDF
              </a>
              <a className="btn btn-secondary resume-preview-btn" href="/resume.pdf" target="_blank" rel="noreferrer">
                Preview
              </a>
            </div>

            <div className="resume-mobile-tip">
              <h3>Best on mobile</h3>
              <p>
                Open the resume in a new tab or download the PDF for a full-screen view that is easier to read on
                phones.
              </p>
            </div>

            <div className="resume-mobile-view">
              <div className="resume-mobile-card">
                <span className="resume-mobile-label">Mobile View</span>
                <h3>Open the full resume for the best reading experience.</h3>
                <p>
                  On smaller phones, the PDF preview is hidden so you can open the resume clearly in full screen.
                </p>
                <div className="resume-mobile-actions">
                  <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">
                    Open Resume
                  </a>
                  <a className="btn btn-secondary" href="/resume.pdf" download>
                    Download PDF
                  </a>
                </div>
              </div>
            </div>

            <div className="resume-embed">
              <iframe src="/resume.pdf#toolbar=0" title="Resume PDF" />
            </div>
          </div>

          <aside className="resume-right">
            <div className="card profile-snapshot">
              <img src="/profile.jpg" alt="Profile" className="profile-photo" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <h3>Amrit S R</h3>
              <p className="muted">3rd-year CSE (AI & ML) student focused on full-stack and systems-oriented projects</p>
            </div>

            <div className="card info-box">
              <h4>Profile Snapshot</h4>
              <p className="muted">Passionate developer focused on building practical projects with clean architecture and steady iteration.</p>
              <p className="contact"><a className="contact-link" href="mailto:amritsr2005@gmail.com">Email</a></p>
              <p className="contact"><a className="contact-link" href="https://www.linkedin.com/in/amrit-s-r-17a515309/" target="_blank" rel="noreferrer">LinkedIn</a></p>
              <p className="contact"><a className="contact-link" href="https://github.com/amritsharan" target="_blank" rel="noreferrer">GitHub</a></p>
            </div>

            <div className="card info-box">
              <h4>Core Strengths</h4>
              <div className="chips">
                <span>C</span>
                <span>C++</span>
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
                  <div key={f.q} className={`faq-item ${openFAQ === i ? 'open' : ''}`}>
                    <button className="faq-q" onClick={() => toggle(i)}>{f.q} <span className="plus">{openFAQ === i ? '-' : '+'}</span></button>
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
