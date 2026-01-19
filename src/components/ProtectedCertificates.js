import React, { useState } from 'react';

const ProtectedCertificates = () => {
  const [showForm, setShowForm] = useState(false);
  const [reason, setReason] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [pdfPreview, setPdfPreview] = useState({ show: false, url: '', name: '' });

  // Public Documents
  const publicDocuments = [
    { 
      name: 'Cover Letter', 
      desc: 'Professional introduction and qualifications',
      icon: '📄',
      fileUrl: '/documents/Firaol_Kapita_Cover_Letter.pdf',
      fileName: 'Firaol_Kapita_Cover_Letter.pdf',
      fileType: 'PDF',
      size: '245 KB'
    },
    { 
      name: 'Resume / CV', 
      desc: 'Full professional experience and skills',
      icon: '📋',
      fileUrl: '/documents/Resume_Firaol_Kapita.pdf',
      fileName: 'Resume_Firaol_Kapita.pdf',
      fileType: 'PDF', 
      size: '312 KB'
    }
  ];

  // Protected Certificates
  const protectedCertificates = [
    { name: 'MSc Certificate', desc: 'Master of Science in Information Technology', icon: '🎓' },
    { name: 'BSc Certificate', desc: 'Bachelor\'s Degree Certificate', icon: '📜' },
    { name: 'Web Development Level V', desc: 'Web Development & Database Administration', icon: '💻' },
    { name: 'Academic Excellence Award', desc: '3.92/4.0 GPA Achievement', icon: '🏆' }
  ];

  // Smart PDF Preview with multiple methods
  const handleViewPDF = (fileUrl, fileName) => {
    // Method 1: Try Google Docs Viewer (most reliable)
    const googleDocsUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(window.location.origin + fileUrl)}&embedded=true`;
    
    // Method 2: Direct PDF link
    const directUrl = window.location.origin + fileUrl;
    
    // Show preview modal with both options
    setPdfPreview({
      show: true,
      url: googleDocsUrl,
      directUrl: directUrl,
      name: fileName
    });
  };

  // Download PDF
  const handleDownloadPDF = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Open PDF in new tab (fallback)
  const openDirectPDF = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Formspree submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData();
    formData.append('_subject', 'Certificate Access Request');
    formData.append('visitor_email', email);
    formData.append('reason', reason);
    formData.append('_replyto', email);
    formData.append('request_type', 'Certificate Access');

    try {
      const response = await fetch('https://formspree.io/f/xdkgqokd', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setSubmitMessage('✅ Request sent! You\'ll receive verified copies via email.');
        setReason('');
        setEmail('');
        setTimeout(() => {
          setShowForm(false);
          setSubmitMessage('');
        }, 3000);
      } else {
        setSubmitMessage('❌ Failed. Try emailing firaol.kapita@gmail.com directly.');
      }
    } catch (error) {
      setSubmitMessage('❌ Network error. Please check connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openEmailClient = () => {
    const emailBody = `Dear Firaol,\n\nI request access to your certificates for:\n${reason}\n\nMy Email: ${email}\n\nBest regards,`;
    window.location.href = `mailto:firaol.kapita@gmail.com?subject=Certificate Access Request&body=${encodeURIComponent(emailBody)}`;
    setShowForm(false);
    setReason('');
    setEmail('');
  };

  // PDF Preview Modal
  const PdfPreviewModal = () => (
    <div style={styles.modalOverlay}>
      <div style={styles.modal}>
        <div style={styles.modalHeader}>
          <h3 style={styles.modalTitle}>📄 {pdfPreview.name}</h3>
          <button 
            onClick={() => setPdfPreview({ show: false, url: '', name: '' })}
            style={styles.closeButton}
          >
            ✕
          </button>
        </div>
        
        <div style={styles.previewContainer}>
          <iframe
            src={pdfPreview.url}
            style={styles.pdfFrame}
            title={`PDF Preview - ${pdfPreview.name}`}
            allow="autoplay"
          />
        </div>
        
        <div style={styles.modalFooter}>
          <div style={styles.previewInfo}>
            <p style={styles.infoText}>
              <strong>Preview not working?</strong> Try these options:
            </p>
          </div>
          <div style={styles.actionButtons}>
            <button
              onClick={() => openDirectPDF(pdfPreview.directUrl)}
              style={styles.openDirectButton}
            >
              🔗 Open in New Tab
            </button>
            <button
              onClick={() => handleDownloadPDF(pdfPreview.directUrl, pdfPreview.name)}
              style={styles.downloadButton}
            >
              ⬇️ Download PDF
            </button>
            <button
              onClick={() => setPdfPreview({ show: false, url: '', name: '' })}
              style={styles.closeModalButton}
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📁 My Public Documents & Certificates</h2>
      
      {/* PUBLIC DOCUMENTS */}
      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <h3 style={styles.sectionTitle}>📄 Public Documents</h3>
          <p style={styles.sectionSubtitle}>Preview or download instantly</p>
        </div>
        
        <div style={styles.documentsGrid}>
          {publicDocuments.map((doc, i) => (
            <div key={i} style={styles.documentCard}>
              <div style={styles.docHeader}>
                <div style={styles.docIconContainer}>
                  <span style={styles.docIcon}>{doc.icon}</span>
                </div>
                <div style={styles.docInfo}>
                  <h4 style={styles.docName}>{doc.name}</h4>
                  <p style={styles.docDesc}>{doc.desc}</p>
                </div>
              </div>
              
              <div style={styles.docMeta}>
                <span style={styles.fileTypeBadge}>
                  <span style={styles.badgeDot}></span>
                  {doc.fileType}
                </span>
                <span style={styles.fileSize}>{doc.size}</span>
              </div>
              
              <div style={styles.actionsContainer}>
                <div style={styles.actionButtonsRow}>
                  <button
                    onClick={() => handleViewPDF(doc.fileUrl, doc.fileName)}
                    style={styles.previewButton}
                  >
                    <span style={styles.buttonIcon}>👁️</span>
                    <span>Preview</span>
                  </button>
                  <button
                    onClick={() => handleDownloadPDF(doc.fileUrl, doc.fileName)}
                    style={styles.downloadActionButton}
                  >
                    <span style={styles.buttonIcon}>⬇️</span>
                    <span>Download</span>
                  </button>
                </div>
                <div style={styles.quickActions}>
                  <button
                    onClick={() => openDirectPDF(window.location.origin + doc.fileUrl)}
                    style={styles.quickLinkButton}
                  >
                    Open Directly
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={styles.pdfTips}>
          <div style={styles.tipIcon}>💡</div>
          <div>
            <p style={styles.tipTitle}>Smart Preview Tips:</p>
            <ul style={styles.tipList}>
              <li>Use <strong>Preview</strong> for quick viewing</li>
              <li>Use <strong>Download</strong> to save the file</li>
              <li>Use <strong>Open Directly</strong> if preview doesn't work</li>
              <li>Works on Chrome, Firefox, Safari, Edge</li>
            </ul>
          </div>
        </div>
      </div>

      {/* PROTECTED CERTIFICATES */}
      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <h3 style={styles.sectionTitle}>🔒 Protected Certificates</h3>
          <p style={styles.sectionSubtitle}>Request access for verified copies</p>
        </div>
        
        <div style={styles.certList}>
          {protectedCertificates.map((cert, i) => (
            <div key={i} style={styles.certItem}>
              <span style={styles.certIcon}>{cert.icon}</span>
              <div style={styles.certInfo}>
                <strong style={styles.certName}>{cert.name}</strong>
                <p style={styles.certDesc}>{cert.desc}</p>
              </div>
              <span style={styles.lockIcon}>🔒</span>
            </div>
          ))}
        </div>

        <div style={styles.protectionNote}>
          <div style={styles.noteIcon}>⚠️</div>
          <div>
            <p style={styles.noteTitle}>Verification Required</p>
            <p>These certificates require verification for access.</p>
            <p>Request access to receive verified copies via email.</p>
          </div>
        </div>

        {!showForm ? (
          <div style={styles.requestBox}>
            <button 
              onClick={() => setShowForm(true)}
              style={styles.requestButton}
            >
              🔓 Request Certificate Access
            </button>
            <p style={styles.noteText}>We'll send verified copies to your email</p>
          </div>
        ) : (
          <div style={styles.formContainer}>
            <div style={styles.formHeader}>
              <h3 style={styles.formTitle}>📨 Request Certificate Access</h3>
            </div>
            
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Your Email *</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.input}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Purpose *</label>
                <textarea
                  placeholder="Why do you need these certificates?"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  style={styles.textarea}
                  rows="3"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              {submitMessage && (
                <div style={submitMessage.includes('✅') ? styles.successMessage : styles.errorMessage}>
                  {submitMessage}
                </div>
              )}
              
              <div style={styles.formActions}>
                <button 
                  type="submit" 
                  style={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : '📧 Send Request'}
                </button>
                
                <button 
                  type="button" 
                  onClick={openEmailClient}
                  style={styles.emailButton}
                  disabled={isSubmitting}
                >
                  📩 Open Email
                </button>
                
                <button 
                  type="button" 
                  onClick={() => setShowForm(false)}
                  style={styles.cancelButton}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* PDF PREVIEW MODAL */}
      {pdfPreview.show && <PdfPreviewModal />}
    </div>
  );
};

// Styles
const styles = {
  container: {
    background: 'white',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
    margin: '30px auto',
    maxWidth: '1000px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  title: {
    color: '#1a237e',
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: '36px',
    fontWeight: '700',
    background: 'linear-gradient(90deg, #1a237e, #311b92)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  
  // Document Cards
  documentsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
    gap: '25px',
    marginBottom: '30px',
  },
  documentCard: {
    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
    borderRadius: '14px',
    padding: '28px',
    border: '1px solid #e3e8f4',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
      borderColor: '#d0d7f0',
    }
  },
  docHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '22px',
  },
  docIconContainer: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '12px',
    padding: '16px',
    marginRight: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.25)',
  },
  docIcon: {
    fontSize: '28px',
    color: 'white',
  },
  docInfo: {
    flex: 1,
  },
  docName: {
    color: '#1a237e',
    fontSize: '22px',
    margin: '0 0 6px 0',
    fontWeight: '600',
  },
  docDesc: {
    color: '#5c6bc0',
    fontSize: '14px',
    margin: '0',
    lineHeight: '1.5',
  },
  docMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 0',
    marginBottom: '22px',
    borderTop: '1px solid #e8edff',
    borderBottom: '1px solid #e8edff',
  },
  fileTypeBadge: {
    background: '#e8edff',
    color: '#3949ab',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  badgeDot: {
    width: '8px',
    height: '8px',
    background: '#3949ab',
    borderRadius: '50%',
  },
  fileSize: {
    color: '#7986cb',
    fontSize: '14px',
    fontWeight: '500',
  },
  
  // Action Buttons
  actionsContainer: {
    marginTop: '20px',
  },
  actionButtonsRow: {
    display: 'flex',
    gap: '12px',
    marginBottom: '12px',
  },
  previewButton: {
    flex: 1,
    background: 'linear-gradient(135deg, #4fc3f7 0%, #29b6f6 100%)',
    color: 'white',
    border: 'none',
    padding: '14px 20px',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    boxShadow: '0 4px 12px rgba(41, 182, 246, 0.25)',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(41, 182, 246, 0.4)',
    }
  },
  downloadActionButton: {
    flex: 1,
    background: 'linear-gradient(135deg, #66bb6a 0%, #43a047 100%)',
    color: 'white',
    border: 'none',
    padding: '14px 20px',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    boxShadow: '0 4px 12px rgba(67, 160, 71, 0.25)',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(67, 160, 71, 0.4)',
    }
  },
  buttonIcon: {
    fontSize: '18px',
  },
  quickActions: {
    display: 'flex',
    justifyContent: 'center',
  },
  quickLinkButton: {
    background: 'transparent',
    color: '#5c6bc0',
    border: '1px solid #c5cae9',
    padding: '10px 20px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s',
    ':hover': {
      background: '#f3f4ff',
      borderColor: '#9fa8da',
    }
  },
  
  // PDF Tips
  pdfTips: {
    background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
    borderRadius: '12px',
    padding: '24px',
    marginTop: '30px',
    border: '1px solid #90caf9',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
  },
  tipIcon: {
    fontSize: '32px',
    color: '#1565c0',
  },
  tipTitle: {
    color: '#0d47a1',
    fontSize: '16px',
    fontWeight: '600',
    margin: '0 0 10px 0',
  },
  tipList: {
    color: '#1e88e5',
    fontSize: '14px',
    margin: '0',
    paddingLeft: '20px',
    lineHeight: '1.6',
  },
  
  // Modal Styles
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.85)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '20px',
  },
  modal: {
    background: 'white',
    borderRadius: '16px',
    width: '90%',
    maxWidth: '900px',
    height: '85vh',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    overflow: 'hidden',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 24px',
    background: 'linear-gradient(135deg, #1a237e 0%, #311b92 100%)',
    color: 'white',
  },
  modalTitle: {
    margin: 0,
    fontSize: '20px',
    fontWeight: '600',
  },
  closeButton: {
    background: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    border: 'none',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.3s',
    ':hover': {
      background: 'rgba(255, 255, 255, 0.3)',
    }
  },
  previewContainer: {
    flex: 1,
    padding: '0',
    overflow: 'hidden',
  },
  pdfFrame: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
  modalFooter: {
    padding: '20px 24px',
    background: '#f8f9fa',
    borderTop: '1px solid #e0e0e0',
  },
  previewInfo: {
    marginBottom: '16px',
  },
  infoText: {
    color: '#666',
    fontSize: '14px',
    margin: '0 0 8px 0',
  },
  actionButtons: {
    display: 'flex',
    gap: '12px',
  },
  openDirectButton: {
    flex: 1,
    background: '#2196f3',
    color: 'white',
    border: 'none',
    padding: '12px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'background 0.3s',
    ':hover': {
      background: '#1976d2',
    }
  },
  downloadButton: {
    flex: 1,
    background: '#4caf50',
    color: 'white',
    border: 'none',
    padding: '12px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'background 0.3s',
    ':hover': {
      background: '#388e3c',
    }
  },
  closeModalButton: {
    flex: 1,
    background: '#9e9e9e',
    color: 'white',
    border: 'none',
    padding: '12px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.3s',
    ':hover': {
      background: '#757575',
    }
  },
  
  // ... (rest of the styles from previous code - certList, protectionNote, form styles)
};

// Add missing styles
Object.assign(styles, {
  section: {
    marginBottom: '40px',
  },
  sectionHeader: {
    marginBottom: '30px',
  },
  sectionTitle: {
    color: '#1a237e',
    fontSize: '28px',
    marginBottom: '8px',
    fontWeight: '600',
  },
  sectionSubtitle: {
    color: '#5c6bc0',
    fontSize: '16px',
    fontWeight: '500',
  },
  
  // Certificates
  certList: {
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e8edff 100%)',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '30px',
    border: '1px solid #e3e8f4',
  },
  certItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    borderBottom: '1px solid #e8edff',
    transition: 'background 0.3s',
    ':hover': {
      background: 'rgba(255, 255, 255, 0.5)',
    }
  },
  certIcon: {
    fontSize: '32px',
    marginRight: '20px',
    minWidth: '50px',
  },
  certInfo: {
    flex: 1,
  },
  certName: {
    color: '#1a237e',
    fontSize: '18px',
    marginBottom: '6px',
    fontWeight: '600',
  },
  certDesc: {
    color: '#5c6bc0',
    fontSize: '14px',
    margin: 0,
  },
  lockIcon: {
    fontSize: '28px',
    color: '#f44336',
    marginLeft: '20px',
  },
  
  protectionNote: {
    background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)',
    border: '1px solid #ffd54f',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '30px',
    color: '#856404',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
  },
  noteIcon: {
    fontSize: '32px',
  },
  noteTitle: {
    fontWeight: '600',
    marginBottom: '8px',
    fontSize: '17px',
  },
  
  requestBox: {
    textAlign: 'center',
    padding: '30px',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e8edff 100%)',
    borderRadius: '12px',
    border: '1px solid #e3e8f4',
  },
  requestButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '18px 40px',
    borderRadius: '12px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 6px 20px rgba(102, 126, 234, 0.3)',
    marginBottom: '15px',
    ':hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
    }
  },
  noteText: {
    color: '#5c6bc0',
    fontSize: '15px',
    fontStyle: 'italic',
  },
  
  // Form
  formContainer: {
    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
    padding: '32px',
    borderRadius: '16px',
    border: '1px solid #e3e8f4',
    boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
  },
  formHeader: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  formTitle: {
    color: '#1a237e',
    fontSize: '26px',
    marginBottom: '10px',
    fontWeight: '600',
  },
  form: {
    width: '100%',
  },
  formGroup: {
    marginBottom: '24px',
  },
  label: {
    display: 'block',
    color: '#1a237e',
    fontSize: '15px',
    fontWeight: '600',
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '15px 18px',
    border: '2px solid #e3e8f4',
    borderRadius: '10px',
    fontSize: '16px',
    fontFamily: 'inherit',
    transition: 'all 0.3s',
    backgroundColor: 'white',
    ':focus': {
      outline: 'none',
      borderColor: '#667eea',
      boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)',
    }
  },
  textarea: {
    width: '100%',
    padding: '15px 18px',
    border: '2px solid #e3e8f4',
    borderRadius: '10px',
    fontSize: '16px',
    fontFamily: 'inherit',
    resize: 'vertical',
    minHeight: '120px',
    transition: 'all 0.3s',
    backgroundColor: 'white',
    ':focus': {
      outline: 'none',
      borderColor: '#667eea',
      boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)',
    }
  },
  formActions: {
    display: 'flex',
    gap: '15px',
    marginTop: '30px',
  },
  submitButton: {
    flex: 2,
    background: 'linear-gradient(135deg, #66bb6a 0%, #43a047 100%)',
    color: 'white',
    border: 'none',
    padding: '18px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 4px 15px rgba(67, 160, 71, 0.25)',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(67, 160, 71, 0.4)',
    },
    ':disabled': {
      background: '#bdbdbd',
      cursor: 'not-allowed',
      transform: 'none',
      boxShadow: 'none',
    }
  },
  emailButton: {
    flex: 1,
    background: 'linear-gradient(135deg, #ffb74d 0%, #ff9800 100%)',
    color: 'white',
    border: 'none',
    padding: '18px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    ':hover': {
      background: 'linear-gradient(135deg, #ffa726 0%, #f57c00 100%)',
    },
    ':disabled': {
      background: '#bdbdbd',
      cursor: 'not-allowed',
    }
  },
  cancelButton: {
    flex: 1,
    background: '#bdbdbd',
    color: 'white',
    border: 'none',
    padding: '18px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.3s',
    ':hover': {
      background: '#9e9e9e',
    },
    ':disabled': {
      background: '#e0e0e0',
      cursor: 'not-allowed',
    }
  },
  successMessage: {
    background: 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)',
    color: '#155724',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '25px',
    border: '1px solid #b1dfbb',
    textAlign: 'center',
    fontSize: '15px',
    fontWeight: '600',
  },
  errorMessage: {
    background: 'linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%)',
    color: '#721c24',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '25px',
    border: '1px solid #f1b0b7',
    textAlign: 'center',
    fontSize: '15px',
    fontWeight: '600',
  },
});

export default ProtectedCertificates;