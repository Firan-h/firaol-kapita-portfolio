import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#2c3e50',
      textDecoration: 'none',
    },
    nav: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
    },
    link: {
      textDecoration: 'none',
      color: '#333',
      fontWeight: '500',
    },
    themeBtn: {
      background: 'none',
      border: 'none',
      fontSize: '1.2rem',
      cursor: 'pointer',
    },
  };

  return (
    <header style={styles.header}>
      <Link to="/" style={styles.logo}>
        Firaol Kapita Daba
      </Link>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/projects" style={styles.link}>Projects</Link>
        <Link to="/certificates" style={styles.link}>Certificates</Link> {/* Add this */}
        <Link to="/contact" style={styles.link}>Contact</Link>
        <button 
          onClick={toggleTheme} 
          style={styles.themeBtn}
          aria-label="Toggle theme"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  );
};

export default Header;