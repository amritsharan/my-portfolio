import React from 'react';
import './Projects.css';

function Projects() {
  const githubUsername = 'amritsharan'; // 🔁 Replace with your GitHub username

  const projects = [
    {
      title: 'Login Redirect App',
      description: 'A simple Java Swing login app with redirect functionality.',
      link: `https://github.com/${githubUsername}/Contineo-login-portal`,
    },
    {
      title: 'Mario Game in Java',
      description: 'A Mario-style platformer game developed using Java and Swing.',
      link: `https://github.com/${githubUsername}/Mario`,
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio built using React.',
      link: `https://github.com/${githubUsername}/my-portfolio`,
    },
    {
      title: 'Climate & Environmental Advisory',
      description: 'An advisory project focused on climate and environmental solutions.',
      link: `https://github.com/${githubUsername}/Climate-Environment-Advisor`, // replace with exact repo name
    },
    // Add more projects here if needed
  ];

  return (
    <div className="projects-container">
      <h2>🚀 My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              🔗 View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
