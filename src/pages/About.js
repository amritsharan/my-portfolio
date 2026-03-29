import React from 'react';
import './About.css';

function About() {
  const skillGroups = [
    { label: 'Languages', items: ['C', 'C++', 'Python', 'JavaScript'] },
    { label: 'Frontend', items: ['React', 'HTML', 'CSS', 'Responsive UI'] },
    { label: 'Strengths', items: ['Problem solving', 'System thinking', 'Project building'] },
  ];

  const highlights = [
    'Learning by shipping projects instead of only completing assignments.',
    'Interested in the intersection of software engineering, tooling, and usability.',
    'Comfortable moving from planning and logic to implementation and iteration.',
  ];

  return (
    <div className="about-container">
      <div className="container">
        <div className="section-heading animate-up">
          <span className="eyebrow">About Me</span>
          <h2>Grounded in fundamentals, motivated by real-world building.</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy animate-up" style={{ animationDelay: '60ms' }}>
            <p>
              I&apos;m <strong>Amrit S R</strong>, a 3rd-year Computer Science Engineering (Artificial Intelligence and
              Machine Learning) student at <strong> Siddaganga Institute of Technology, Tumkur</strong>. I enjoy the
              process of taking an idea from a rough concept to a polished, usable result.
            </p>
            <p>
              My work so far spans responsive websites, core programming with C and C++, and learning projects that help me
              understand how systems behave. I&apos;m especially motivated by projects that make complex workflows easier
              to see, use, or improve.
            </p>
            <div className="highlight-list">
              {highlights.map((item) => (
                <div key={item} className="highlight-item card">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="about-sidebar animate-up" style={{ animationDelay: '120ms' }}>
            <div className="card skill-card">
              <h3>Skills & Technologies</h3>
              <div className="skill-groups">
                {skillGroups.map((group) => (
                  <div key={group.label} className="skill-group">
                    <span>{group.label}</span>
                    <ul className="skills">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="card value-card">
              <h3>What I bring</h3>
              <p>
                Curiosity, consistency, and a strong willingness to learn fast while staying accountable for the
                details that make a project feel complete.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default About;
