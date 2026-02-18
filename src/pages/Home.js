import React, { useState } from 'react';
import '../Home.css'; // Optional: create this file for custom styles

const Home = () => {
  const [imgLoaded, setImgLoaded] = useState(true);

  return (
    <div className="home-container">
      <div className="container">
        <section className="hero">
          <div className="intro animate-up" style={{animationDelay:'60ms'}}>
            <h1>Hello, I'm <span className="name">Amrit</span> 👋</h1>
            <p>Welcome — I'm a 3rd-year Computer Science Engineering student and a full-stack projects enthusiast.</p>
            <div className="cta">
              <a className="btn" href="/projects">See Projects</a>
              <a style={{marginLeft:12}} className="btn" href="/contact">Contact Me</a>
            </div>
          </div>

          <aside className="hero-aside animate-up" style={{animationDelay:'140ms'}}>
            <div className="profile-card card">
              {imgLoaded && (
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="avatar-img"
                  onError={(e)=>{ setImgLoaded(false); e.currentTarget.style.display='none'; }}
                />
              )}
              {!imgLoaded && <div className="avatar">AS</div>}
              <h3>Amrit S R</h3>
              <p className="muted">CSE Student • Full-stack enthusiast</p>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default Home;
