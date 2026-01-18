// src/components/Certificates.js
import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      title: "Cover Letter",
      description: "Application for Full-Stack Developer Position",
      file: "/documents/Firaol_Kapita_Cover_Letter.pdf",
      type: "pdf",
      preview: "📄"
    },
    {
      title: "Resume",
      description: "Full professional resume with education and experience",
      file: "/documents/Resume_Firaol_Kapita.pdf",
      type: "pdf",
      preview: "📄"
    },
    {
      title: "MSc Certificate",
      description: "Master of Science in Information Technology",
      file: "/certificates/msc_certificate.png",
      type: "image",
      preview: "🎓"
    },
    {
      title: "Web Development Certification",
      description: "Level V Web Development & Database Administration",
      file: "/certificates/web_dev_certificate.jpg",
      type: "image",
      preview: "💻"
    },
    {
      title: "Academic Excellence Award",
      description: "3.92/4.0 GPA Bachelor's Degree",
      file: "/certificates/award_certificate.png",
      type: "image",
      preview: "🏆"
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Certificates & Documents</h1>
        <p>Proof of qualifications and professional documents for hiring managers</p>
      </div>

      <div style={styles.documentsSection}>
        <h2 style={styles.sectionTitle}>Application Documents</h2>
        <div style={styles.documentsGrid}>
          {certificates.slice(0, 2).map((doc, index) => (
            <div key={index} style={styles.documentCard}>
              <div style={styles.documentIcon}>{doc.preview}</div>
              <h3>{doc.title}</h3>
              <p>{doc.description}</p>
              <div style={styles.documentActions}>
                <a 
                  href={doc.file} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.viewButton}
                >
                  View Document
                </a>
                <a 
                  href={doc.file} 
                  download
                  style={styles.downloadButton}
                >
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.certificatesSection}>
        <h2 style={styles.sectionTitle}>Certificates & Awards</h2>
        <div style={styles.certificatesGrid}>
          {certificates.slice(2).map((cert, index) => (
            <div key={index} style={styles.certificateCard}>
              <div style={styles.certificateIcon}>{cert.preview}</div>
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
              <a 
                href={cert.file} 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.certificateButton}
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.instructions}>
        <h3>For Hiring Managers:</h3>
        <ul style={styles.instructionList}>
          <li>Click "View Document" to open in browser</li>
          <li>Click "Download PDF" to save to your device</li>
          <li>All documents are verified and authentic</li>
          <li>Contact me for any verification needed</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    minHeight: '80vh',
    backgroundColor: '#f8fafc',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  documentsSection: {
    marginBottom: '4rem',
  },
  certificatesSection: {
    marginBottom: '3rem',
  },
  sectionTitle: {
    color: '#2d3748',
    borderBottom: '3px solid #667eea',
    paddingBottom: '0.5rem',
    marginBottom: '2rem',
    fontSize: '1.8rem',
  },
  documentsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem',
  },
  documentCard: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    border: '1px solid #e2e8f0',
    transition: 'transform 0.3s',
  },
  certificateCard: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    border: '1px solid #e2e8f0',
    textAlign: 'center',
    transition: 'transform 0.3s',
  },
  documentIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  certificateIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  documentActions: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1.5rem',
  },
  viewButton: {
    flex: 1,
    backgroundColor: '#667eea',
    color: 'white',
    padding: '0.8rem',
    borderRadius: '5px',
    textDecoration: 'none',
    textAlign: 'center',
    fontWeight: '500',
  },
  downloadButton: {
    flex: 1,
    backgroundColor: '#48bb78',
    color: 'white',
    padding: '0.8rem',
    borderRadius: '5px',
    textDecoration: 'none',
    textAlign: 'center',
    fontWeight: '500',
  },
  certificateButton: {
    display: 'inline-block',
    backgroundColor: '#667eea',
    color: 'white',
    padding: '0.8rem 1.5rem',
    borderRadius: '5px',
    textDecoration: 'none',
    marginTop: '1rem',
    fontWeight: '500',
  },
  certificatesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  instructions: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    marginTop: '3rem',
  },
  instructionList: {
    paddingLeft: '1.5rem',
    lineHeight: '1.8',
  },
};

export default Certificates;