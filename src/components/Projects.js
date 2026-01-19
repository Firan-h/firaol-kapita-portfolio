// src/components/Projects.js
import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'React Portfolio Website',
      description: 'A modern, responsive portfolio website built with React to showcase my skills, projects, and professional background. Features dynamic theming, smooth navigation, and contact form integration. This very website demonstrates my frontend development capabilities and attention to UX/UI design principles.',
      status: 'Completed & Deployed',
      tech: ['React', 'React Router', 'JavaScript', 'CSS3', 'Formspree', 'React Hooks', 'Git', 'GitHub Pages'],
      features: [
        'Fully responsive design for all screen sizes',
        'Dark/light mode toggle with localStorage persistence',
        'Multi-page navigation using React Router',
        'Functional contact form with Formspree backend',
        'Interactive project showcase with detailed cards',
        'Professional about section with skills visualization',
        'Optimized performance with lazy loading',
        'SEO-friendly structure and metadata',
        'Deployed on GitHub Pages'
      ],
      color: '#3498db',
      liveLink: 'https://firan-h.github.io/firaol-kapita-portfolio',
      githubLink: 'https://github.com/Firan-h/firaol-kapita-portfolio'
    },
    {
      id: 2,
      title: 'Restaurant Premeal System',
      description: 'A comprehensive restaurant management system allowing customers to pre-order meals, customize dishes, and schedule pickups. Features include real-time inventory tracking, automated billing, and customer loyalty programs.',
      status: 'In Progress',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API', 'Socket.io'],
      features: [
        'Menu customization with dietary options',
        'Real-time order tracking dashboard',
        'Automated inventory management',
        'Customer review and rating system',
        'Mobile-responsive PWA design',
        'Admin panel for restaurant management'
      ],
      color: '#FF6B6B'
    },
    {
      id: 3,
      title: 'E-Commerce Platform for Computer Accessories',
      description: 'Full-featured online marketplace specializing in computer accessories and peripherals. Includes advanced search filters, product comparisons, and secure payment integration.',
      status: 'In Progress',
      tech: ['React', 'Redux', 'Firebase', 'Material-UI', 'PayPal API', 'JWT'],
      features: [
        'Advanced product filtering and search',
        'Shopping cart with persistent storage',
        'User authentication and profiles',
        'Order history and tracking system',
        'Admin dashboard for inventory management',
        'Product recommendation engine'
      ],
      color: '#4ECDC4'
    },
    {
      id: 4,
      title: 'Personal Tech Blog & Portfolio',
      description: 'A modern blogging platform showcasing my technical expertise, project documentation, and programming tutorials. Integrated with code snippet highlighting and comment system.',
      status: 'Completed',
      tech: ['Next.js', 'GraphQL', 'PostgreSQL', 'Tailwind CSS', 'Markdown', 'Prisma'],
      features: [
        'SEO optimized articles with metadata',
        'Code syntax highlighting for tutorials',
        'Dark/light mode toggle',
        'Newsletter subscription system',
        'Project showcase gallery',
        'Comment system with moderation'
      ],
      color: '#45B7D1'
    },
    {
      id: 5,
      title: 'University Library Management System',
      description: 'Digital library system for academic institutions with book tracking, reservation system, and digital resource management. Includes AI-powered book recommendations.',
      status: 'Planning Phase',
      tech: ['React', 'Python Django', 'PostgreSQL', 'Redis', 'Machine Learning', 'Docker'],
      features: [
        'RFID-based book tracking system',
        'Digital resource repository',
        'Automated overdue notifications',
        'Research paper database',
        'Statistical analytics dashboard',
        'AI book recommendation engine'
      ],
      color: '#96CEB4'
    },
    {
      id: 6,
      title: 'Fitness Tracker Mobile App',
      description: 'Comprehensive fitness application with workout planning, nutrition tracking, and progress analytics. Includes social features for community challenges.',
      status: 'In Progress',
      tech: ['React Native', 'Firebase', 'Chart.js', 'Google Fit API', 'Node.js', 'Expo'],
      features: [
        'Custom workout plan generator',
        'Calorie and nutrition tracker',
        'Progress visualization charts',
        'Social challenges and leaderboards',
        'Integration with wearable devices',
        'Water intake and sleep tracking'
      ],
      color: '#FFEAA7'
    },
    {
      id: 7,
      title: 'Agricultural Marketplace',
      description: 'Platform connecting farmers directly with consumers and retailers. Features include crop monitoring, price tracking, and logistics coordination.',
      status: 'Planning Phase',
      tech: ['React', 'Node.js', 'MySQL', 'Leaflet Maps', 'Twilio API', 'Stripe'],
      features: [
        'Crop inventory management system',
        'Real-time price comparisons',
        'Weather integration for farming',
        'Delivery scheduling system',
        'Mobile payment integration',
        'Farm-to-table tracking'
      ],
      color: '#DDA0DD'
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>My Projects</h1>
        <p style={styles.subtitle}>Showcasing my technical skills and development journey</p>
        <div style={styles.stats}>
          <div style={styles.stat}>
            <span style={styles.statNumber}>{projects.length}</span>
            <span style={styles.statLabel}>Total Projects</span>
          </div>
          <div style={styles.stat}>
            <span style={styles.statNumber}>{projects.filter(p => p.status === 'In Progress').length}</span>
            <span style={styles.statLabel}>In Progress</span>
          </div>
          <div style={styles.stat}>
            <span style={styles.statNumber}>{projects.filter(p => p.status.includes('Completed')).length}</span>
            <span style={styles.statLabel}>Completed</span>
          </div>
        </div>
      </div>

      <div style={styles.projectsGrid}>
        {projects.map(project => (
          <div key={project.id} style={{...styles.projectCard, borderTop: `5px solid ${project.color}`}}>
            <div style={styles.cardHeader}>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <span style={{
                ...styles.statusBadge,
                backgroundColor: project.status.includes('Completed') ? '#4CAF50' : 
                               project.status === 'In Progress' ? '#2196F3' : '#FF9800'
              }}>
                {project.status}
              </span>
            </div>
            
            <p style={styles.projectDescription}>{project.description}</p>
            
            <div style={styles.techStack}>
              {project.tech.map(tech => (
                <span key={tech} style={styles.techTag}>{tech}</span>
              ))}
            </div>
            
            <div style={styles.features}>
              <h4 style={styles.featuresTitle}>Key Features:</h4>
              <ul style={styles.featuresList}>
                {project.features.map((feature, index) => (
                  <li key={index} style={styles.featureItem}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div style={styles.cardFooter}>
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.viewButton}
                >
                  Live Demo
                </a>
              )}
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.codeButton}
                >
                  View Code
                </a>
              )}
              {!project.liveLink && !project.githubLink && (
                <button style={styles.viewButton} disabled>
                  Coming Soon
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div style={styles.callToAction}>
        <h2>Interested in Collaborating?</h2>
        <p>I'm open to discussing project ideas, freelance work, or full-time opportunities.</p>
       <a href="/contact" style={styles.ctaButton}>Get In Touch with Firaol</a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    minHeight: '80vh',
    backgroundColor: '#f8f9fa',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: '3rem',
    color: '#2c3e50',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#7f8c8d',
    marginBottom: '2rem',
  },
  stats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    marginTop: '2rem',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#3498db',
  },
  statLabel: {
    fontSize: '0.9rem',
    color: '#7f8c8d',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  projectCard: {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '1.5rem',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    display: 'flex',
    flexDirection: 'column',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
    },
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1rem',
  },
  projectTitle: {
    fontSize: '1.5rem',
    color: '#2c3e50',
    margin: 0,
    flex: 1,
  },
  statusBadge: {
    padding: '0.3rem 0.8rem',
    borderRadius: '20px',
    color: 'white',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    marginLeft: '1rem',
    whiteSpace: 'nowrap',
  },
  projectDescription: {
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    flex: 1,
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1.5rem',
  },
  techTag: {
    backgroundColor: '#ecf0f1',
    color: '#2c3e50',
    padding: '0.3rem 0.8rem',
    borderRadius: '15px',
    fontSize: '0.8rem',
  },
  features: {
    marginBottom: '1.5rem',
  },
  featuresTitle: {
    fontSize: '1rem',
    color: '#2c3e50',
    marginBottom: '0.5rem',
  },
  featuresList: {
    paddingLeft: '1.2rem',
    margin: 0,
  },
  featureItem: {
    color: '#555',
    marginBottom: '0.3rem',
    fontSize: '0.9rem',
  },
  cardFooter: {
    display: 'flex',
    gap: '1rem',
    marginTop: 'auto',
  },
  viewButton: {
    flex: 1,
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    padding: '0.8rem',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'block',
    fontSize: '0.9rem',
    ':hover': {
      backgroundColor: '#2980b9',
    },
    ':disabled': {
      backgroundColor: '#95a5a6',
      cursor: 'not-allowed',
    },
  },
  codeButton: {
    flex: 1,
    backgroundColor: 'transparent',
    color: '#3498db',
    border: '2px solid #3498db',
    padding: '0.8rem',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'block',
    fontSize: '0.9rem',
    ':hover': {
      backgroundColor: '#3498db',
      color: 'white',
    },
  },
  callToAction: {
    textAlign: 'center',
    marginTop: '4rem',
    padding: '3rem',
    backgroundColor: '#2c3e50',
    color: 'white',
    borderRadius: '10px',
  },
  ctaButton: {
    display: 'inline-block',
    backgroundColor: '#3498db',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '30px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: '1rem',
    fontSize: '1.1rem',
    ':hover': {
      backgroundColor: '#2980b9',
    },
  },
};

export default Projects;