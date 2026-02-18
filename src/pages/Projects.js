import React from 'react';
import './Projects.css';
import thumb1 from '../assets/project1.svg';
import thumb2 from '../assets/project2.svg';
import thumb3 from '../assets/project3.svg';
import thumb4 from '../assets/project4.svg';

function Projects() {
  const githubUsername = 'amritsharan';

  const projects = [
    {
      title: 'CPU Scheduling Simulator',
      description:
        'A CPU Scheduling Simulator that demonstrates classical scheduling algorithms along with advanced extensions like multicore scheduling, execution tracing. This project is built as a simulation-based system to understand how different cpu scheduling algorithms affect process execution and user experience.',
      link: 'https://github.com/amritsharan/CPU-Scheduling-simulator',
      image: thumb1,
      tags: ['Simulation', 'Systems'],
      featured: true,
    },
    {
      title: 'Mindful Scheduler',
      description: 'A mindful scheduling app that helps plan focused work sessions and gentle reminders.',
      link: 'https://github.com/amritsharan/Mindful-Scheduler',
      image: thumb2,
      tags: ['Productivity', 'Scheduler'],
    },
    {
      title: 'Programming Skill Analyser',
      description: 'Tool for analyzing and visualizing programming skill progress and areas to improve.',
      link: 'https://github.com/amritsharan/programming-skill-analyser',
      image: thumb4,
      tags: ['Analysis', 'Tools'],
    },
  ];

  return (
    <section className="projects-spotlight">
      <div className="container">
        <h2 className="projects-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <article
              className={`project-card ${project.featured ? 'featured' : ''} animate-up`}
              key={project.title}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="card-media">
                {project.image && <img src={project.image} alt={project.title} />}
                {project.featured && <span className="ribbon">Featured</span>}
              </div>

              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.description}</p>

                <div className="card-tags">
                  {project.tags && project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>

                <div className="card-footer">
                  <a className="btn-gh" href={project.link} target="_blank" rel="noopener noreferrer">
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M8 .198a8 8 0 00-2.53 15.59c.4.074.547-.174.547-.387 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.171-.89-1.171-.727-.497.055-.487.055-.487.803.056 1.226.825 1.226.825.714 1.223 1.873.87 2.33.666.072-.517.28-.87.508-1.071-1.776-.202-3.644-.888-3.644-3.952 0-.873.312-1.587.824-2.148-.083-.203-.357-1.018.078-2.12 0 0 .672-.215 2.2.82a7.66 7.66 0 012.003-.269c.68.003 1.367.092 2.004.27 1.526-1.035 2.197-.82 2.197-.82.437 1.102.162 1.917.08 2.12.513.561.824 1.275.824 2.148 0 3.073-1.87 3.747-3.652 3.945.288.249.543.737.543 1.486 0 1.073-.01 1.938-.01 2.201 0 .215.144.464.55.385A8 8 0 008 .198z" fill="currentColor"/>
                    </svg>
                    View GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
