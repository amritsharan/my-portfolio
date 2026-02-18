import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="container">
        <h2 className="center">👨‍💻 About Me</h2>
        <div className="about-grid">
          <div className="animate-up" style={{animationDelay:'60ms'}}>
            <p>
              Hi! I'm <strong>Amrit S R</strong>, a passionate 3rd-year Computer Science Engineering student at <strong>Siddaganga Institute of Technology, Tumkur</strong>.
            </p>
            <p>
              I enjoy building clean, responsive websites and Java-based applications. I love learning new technologies and applying them in real-world projects, and I'm working toward becoming a full-stack developer.
            </p>
          </div>

          <aside className="animate-up" style={{animationDelay:'120ms'}}>
            <h3>💡 Skills & Technologies</h3>
            <ul className="skills">
              <li>Java</li>
              <li>C++</li>
              <li>Python</li>
              <li>HTML & CSS</li>
              <li>JavaScript & React</li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default About;
