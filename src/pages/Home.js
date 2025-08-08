import React from 'react';
import '../Home.css'; // Optional: create this file for custom styles

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Hello, I'm <span className="name">Amrit</span> 👋</h1>
        <p>Welcome to my portfolio website.</p>
        <p>I'm a passionate Computer Science Engineering student with a goal to crack GATE 2026 and become a full-stack developer.</p>

        <a href="/resume" className="btn">View Resume</a>
      </section>
    </div>
  );
};

export default Home;
