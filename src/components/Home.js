// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>Firaol Kapita</h1>
          <h2 style={styles.subtitle}>Full-Stack Developer</h2>
          <p style={styles.description}>
            MSc in Information Technology graduate specializing in modern web technologies.
            Building efficient, scalable solutions with React, Node.js, and cloud platforms.
          </p>
          
          <div style={styles.buttons}>
            <Link to="/projects" style={styles.primaryBtn}>
              View My Work
            </Link>
            <Link to="/contact" style={styles.secondaryBtn}>
              Get In Touch
            </Link>
          </div>
        </div>
        
        {/* Tech Badges */}
        <div style={styles.techBadges}>
          <div style={styles.badge}>React</div>
          <div style={styles.badge}>Node.js</div>
          <div style={styles.badge}>JavaScript</div>
          <div style={styles.badge}>MySQL</div>
          <div style={styles.badge}>MongoDB</div>
           <div style={styles.badge}>PHP</div>
            <div style={styles.badge}>HTML5</div>
             <div style={styles.badge}>CSS3</div>
              <div style={styles.badge}>BootStrap</div>
               <div style={styles.badge}>TailwindCss</div>
          <div style={styles.badge}>AWS</div>
        </div>
      </div>

      {/* Features Section */}
      <div style={styles.features}>
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>🎓</div>
          <h3>Strong Education</h3>
          <p>MSc in IT with 3.88/4.0 GPA. Specialized in web development and database administration.</p>
        </div>
        
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>💻</div>
          <h3>Full-Stack Skills</h3>
          <p>Proficient in both frontend (React) and backend (Node.js, PHP) development with database expertise.</p>
        </div>
        
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>🚀</div>
          <h3>Project Experience</h3>
          <p>Developed e-commerce and inventory systems. Experienced in academic and practical projects.</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div style={styles.stats}>
        <div style={styles.statItem}>
          <h4>3+ Years</h4>
          <p>Development Experience</p>
        </div>
        <div style={styles.statItem}>
          <h4>15+ Projects</h4>
          <p>Completed</p>
        </div>
        <div style={styles.statItem}>
          <h4>100%</h4>
          <p>Academic Excellence</p>
        </div>
        <div style={styles.statItem}>
          <h4>3.9 GPA</h4>
          <p>Bachelor's Degree</p>
        </div>
      </div>

      {/* CTA Section */}
      <div style={styles.ctaSection}>
        <h2>Ready to Build Something Amazing?</h2>
        <p>Let's discuss how I can contribute to your team or project.</p>
        <Link to="/contact" style={styles.ctaButton}>
          Start Conversation with Firaol
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
  },
  hero: {
    padding: '6rem 2rem 4rem',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
    letterSpacing: '-0.5px',
  },
  subtitle: {
    fontSize: '1.8rem',
    fontWeight: '300',
    marginBottom: '1.5rem',
    opacity: 0.9,
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '3rem',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginBottom: '4rem',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    backgroundColor: 'white',
    color: '#667eea',
    padding: '1rem 2.5rem',
    borderRadius: '30px',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '600',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s',
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    color: 'white',
    padding: '1rem 2.5rem',
    border: '2px solid white',
    borderRadius: '30px',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '600',
    transition: 'all 0.3s',
  },
  techBadges: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
    marginTop: '3rem',
  },
  badge: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '0.8rem 1.5rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    padding: '5rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  featureCard: {
    backgroundColor: 'white',
    padding: '2.5rem 2rem',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: '1.5rem',
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    padding: '3rem 2rem',
    backgroundColor: 'white',
    margin: '2rem auto',
    maxWidth: '1000px',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
  },
  statItem: {
    textAlign: 'center',
    padding: '1.5rem',
  },
  statItemh4: {
    fontSize: '2.5rem',
    color: '#667eea',
    marginBottom: '0.5rem',
  },
  ctaSection: {
    textAlign: 'center',
    padding: '5rem 2rem',
    backgroundColor: '#1a202c',
    color: 'white',
  },
  ctaButton: {
    display: 'inline-block',
    backgroundColor: '#667eea',
    color: 'white',
    padding: '1.2rem 3rem',
    borderRadius: '30px',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: '600',
    marginTop: '2rem',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
    transition: 'transform 0.3s',
  },
};

export default Home;