// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Get In Touch</h1>
        <p>Available for freelance work and full-time opportunities</p>
      </div>

      <div style={styles.content}>
        <div style={styles.contactInfo}>
          <div style={styles.contactCard}>
            <h3>📧 Email</h3>
            <p>firaol.kapita@gmail.com</p>
            <a href="mailto:firaol.kapita@gmail.com" style={styles.link}>
              Send Email
            </a>
          </div>

          <div style={styles.contactCard}>
            <h3>📱 Telegram</h3>
            <p>t.me/@firafiran</p>
            <a href="https://t.me/firafiran" target="_blank" rel="noopener noreferrer" style={styles.link}>
              Message on Telegram
            </a>
          </div>

          <div style={styles.contactCard}>
            <h3>📍 Location</h3>
            <p>Ambo, Ethiopia</p>
            <p>Available for remote work worldwide</p>
          </div>

          <div style={styles.contactCard}>
            <h3>💼 Hire Me</h3>
            <p>Looking for Frontend/Full-Stack Developer roles</p>
            <p>Specialized in React, Node.js, and modern web technologies</p>
          </div>
        </div>

       <div style={styles.formSection}>
  <h2>Send a Message</h2>
  <form 
    action="https://formspree.io/f/xdkgqokd" 
    method="POST"
    style={styles.form}
  >
    <input 
      type="text" 
      name="name" 
      placeholder="Your Name" 
      style={styles.input} 
      required 
    />
    <input 
      type="email" 
      name="_replyto" 
      placeholder="Your Email" 
      style={styles.input} 
      required 
    />
    <textarea 
      name="message" 
      placeholder="Your Message" 
      rows="5" 
      style={styles.textarea}
      required
    ></textarea>
    <button type="submit" style={styles.submitButton}>
      Send Message
    </button>
  </form>
</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    minHeight: '80vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
  },
  contactInfo: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
  },
  contactCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    border: '1px solid #eaeaea',
  },
  link: {
    color: '#3498db',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '0.5rem',
  },
  formSection: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '1rem',
  },
  textarea: {
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '1rem',
    resize: 'vertical',
  },
  submitButton: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '1rem',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default Contact;