import { NavLink } from 'react-router-dom';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        {/* brand removed as requested */}

        <nav className="nav-links">
          <NavLink to="/" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
          <NavLink to="/projects" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink>
          <NavLink to="/resume" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Resume</NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
