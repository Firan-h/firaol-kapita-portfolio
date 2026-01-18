// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.profileHeader}>
        <h1 style={styles.name}>Firaol Kapita</h1>
        <h2 style={styles.title}>Full-Stack Developer</h2>
        <p style={styles.tagline}>MSc Information Technology | Web Development & DBA Certified</p>
      </div>

      <div style={styles.content}>
        <div style={styles.leftPanel}>
          <div style={styles.contactCard}>
            <h3 style={styles.sectionTitle}>Contact</h3>
            <p style={styles.contactItem}>📧 firaol.kapita@gmail.com</p>
            <p style={styles.contactItem}>📱 t.me/@firafiran</p>
            <p style={styles.contactItem}>📍 Ambo, Ethiopia</p>
            <p style={styles.contactItem}>🗣️ English, Afan Oromo, Amharic</p>
          </div>

          <div style={styles.skillsCard}>
            <h3 style={styles.sectionTitle}>Technical Skills</h3>
            <div style={styles.skillsGrid}>
              <span style={styles.skill}>HTML5</span>
              <span style={styles.skill}>CSS3</span>
              <span style={styles.skill}>ReactJS</span>
              <span style={styles.skill}>Node.js</span>
              <span style={styles.skill}>MySQL</span>
              <span style={styles.skill}>MongoDB</span>
              <span style={styles.skill}>PHP</span>
              <span style={styles.skill}>MERN Stack</span>
            </div>
          </div>

          <div style={styles.educationCard}>
            <h3 style={styles.sectionTitle}>Education</h3>
            <p><strong>MSc Information Technology</strong></p>
            <p>Ambo University · GPA: 3.88/4.0</p>
            <p><strong>Web Development & DBA Certification</strong></p>
            <p>Holistic Level V · 2025</p>
            <p><strong>BSc Information Technology</strong></p>
            <p>GPA: 3.92/4.0</p>
          </div>
        </div>

        <div style={styles.rightPanel}>
          <div style={styles.summaryCard}>
            <h3 style={styles.sectionTitle}>Professional Summary</h3>
            <p>Full-Stack Developer with Master's degree in Information Technology and certification in Web Development & Database Administration. Skilled in modern web technologies including React, Node.js, and MySQL. Strong academic background with research experience in machine learning for social media content analysis.</p>
          </div>

          <div style={styles.experienceCard}>
            <h3 style={styles.sectionTitle}>Experience</h3>
            <p><strong>Web Developer & Part-Time Trainer</strong></p>
            <p>Private · Ambo · 07/2022 - 12/2025</p>
            <ul style={styles.list}>
              <li>Full-stack development through academic projects (e-commerce, inventory systems)</li>
              <li>Technologies: React, Node.js, MySQL</li>
              <li>Trained others in web technologies</li>
              <li>Built functional applications independently</li>
            </ul>
          </div>

          <div style={styles.certificatesCard}>
            <h3 style={styles.sectionTitle}>Certificates & Awards</h3>
            <ul style={styles.list}>
              <li>Web Development & Database Administration (Level V)</li>
              <li>WordPress for Professionals</li>
              <li>Multiple online certifications</li>
              <li>Academic excellence awards</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    minHeight: '80vh',
    backgroundColor: '#f5f7fa',
  },
  profileHeader: {
    textAlign: 'center',
    marginBottom: '3rem',
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  name: {
    fontSize: '2.8rem',
    color: '#2c3e50',
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '1.8rem',
    color: '#3498db',
    marginBottom: '1rem',
  },
  tagline: {
    fontSize: '1.2rem',
    color: '#7f8c8d',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '2rem',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  leftPanel: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  rightPanel: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  contactCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  skillsCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  educationCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  summaryCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  experienceCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  certificatesCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  sectionTitle: {
    color: '#2c3e50',
    borderBottom: '2px solid #3498db',
    paddingBottom: '0.5rem',
    marginBottom: '1rem',
    fontSize: '1.3rem',
  },
  contactItem: {
    margin: '0.5rem 0',
    fontSize: '1rem',
  },
  skillsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  skill: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
  },
  list: {
    paddingLeft: '1.2rem',
    lineHeight: '1.6',
  },
};

export default About;