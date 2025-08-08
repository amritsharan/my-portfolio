import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2>👨‍💻 About Me</h2>
      <p>
        Hi! I'm <strong>Amrit S R</strong>, a passionate 2nd-year Computer Science Engineering student at <strong>Siddaganga Institute of Technology, Tumkur</strong>. <br /><br />
        I enjoy building clean, responsive websites and Java-based applications. I love learning new technologies and applying them in real-world projects. I'm also actively preparing for GATE 2026 and aiming to become a full-stack developer.
      </p>

      <h3>💡 Skills & Technologies</h3>
      <ul>
        <li>Java, C++, Python</li>
        <li>HTML, CSS, JavaScript</li>
        <li>React.js (beginner)</li>
        <li>Git & GitHub</li>
        <li>DSA, Algorithms, OOP</li>
      </ul>
    </div>
  );
}

export default About;
