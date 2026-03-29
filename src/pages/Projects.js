import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'CPU Scheduling Simulator',
      description:
        'A simulation-driven project that demonstrates classical CPU scheduling algorithms, multicore behavior, and execution tracing to make systems concepts easier to understand.',
      link: 'https://github.com/amritsharan/CPU-Scheduling-simulator',
      image: '/CPU Scheduling Simulator.png',
      tags: ['Simulation', 'Systems', 'Java'],
      featured: true,
      outcome: 'Built to explain algorithm behavior through visual feedback and comparison.',
    },
    {
      title: 'Quantum Assisted Drug Discovery Simulation',
      description:
        'A research-oriented simulation project exploring how quantum-assisted methods can support drug discovery workflows. The project focuses on modeling candidate evaluation, analyzing molecular interaction patterns, and studying how computational techniques can contribute to faster scientific exploration.',
      link: 'https://github.com/amritsharan',
      image: '/Quantum assisted drug discovery simulation.png',
      tags: ['Research Project', 'Simulation', 'Quantum Computing', 'Drug Discovery'],
      featured: true,
      outcome: 'Selected for a research conference, highlighting my interest in combining computing, simulation, and scientific problem solving.',
    },
    {
      title: 'Programming Skill Analyser',
      description:
        'A tool for analyzing programming skill progress, identifying weaker areas, and presenting improvement paths more clearly.',
      link: 'https://github.com/amritsharan/programming-skill-analyser',
      image: '/programming skill analyser.png',
      tags: ['Analysis', 'Tools', 'Python'],
      outcome: 'Designed around reflection, measurement, and actionable insight.',
    },
  ];

  return (
    <section className="projects-spotlight">
      <div className="container">
        <div className="projects-heading animate-up">
          <h2 className="projects-title">Projects that reflect how I think, learn, and build.</h2>
          <p>
            I like projects that combine technical depth with practical clarity. These are a few examples of work that
            helped me grow as a developer while solving a concrete problem.
          </p>
        </div>

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
                <p className="card-outcome">{project.outcome}</p>

                <div className="card-tags">
                  {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>

                <div className="card-footer">
                  <a className="btn-gh" href={project.link} target="_blank" rel="noopener noreferrer">
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M8 .198a8 8 0 00-2.53 15.59c.4.074.547-.174.547-.387 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.171-.89-1.171-.727-.497.055-.487.055-.487.803.056 1.226.825 1.226.825.714 1.223 1.873.87 2.33.666.072-.517.28-.87.508-1.071-1.776-.202-3.644-.888-3.644-3.952 0-.873.312-1.587.824-2.148-.083-.203-.357-1.018.078-2.12 0 0 .672-.215 2.2.82a7.66 7.66 0 012.003-.269c.68.003 1.367.092 2.004.27 1.526-1.035 2.197-.82 2.197-.82.437 1.102.162 1.917.08 2.12.513.561.824 1.275.824 2.148 0 3.073-1.87 3.747-3.652 3.945.288.249.543.737.543 1.486 0 1.073-.01 1.938-.01 2.201 0 .215.144.464.55.385A8 8 0 008 .198z" fill="currentColor" />
                    </svg>
                    View GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-cta card animate-up" style={{ animationDelay: '260ms' }}>
          <div>
            <span className="panel-kicker">More on GitHub</span>
            <h3>There&apos;s more experimentation behind the scenes.</h3>
            <p>
              I regularly use GitHub to document progress, explore ideas, and practice building beyond classroom work.
            </p>
          </div>
          <a className="btn btn-secondary" href="https://github.com/amritsharan" target="_blank" rel="noreferrer">
            Visit Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
