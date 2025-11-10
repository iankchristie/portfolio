import { Link } from 'react-router-dom';
import { projectsWithPages } from '../../data/content';

export function ProjectNavigation({ currentLink }) {
  // Find the current project index
  const currentIndex = projectsWithPages.findIndex(project => project.link === currentLink);

  if (currentIndex === -1) return null;

  const prevProject = currentIndex > 0 ? projectsWithPages[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsWithPages.length - 1 ? projectsWithPages[currentIndex + 1] : null;

  const navStyles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1rem',
      padding: '1.5rem 0',
      borderTop: '1px solid #e0e0e0',
      borderBottom: '1px solid #e0e0e0',
      marginBottom: '2rem'
    },
    button: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '1rem',
      borderRadius: '8px',
      backgroundColor: '#f5f5f5',
      textDecoration: 'none',
      color: '#1a1a1a',
      transition: 'all 0.2s ease',
      maxWidth: '45%',
      flex: '1'
    },
    buttonHover: {
      backgroundColor: '#e8e8e8',
      transform: 'translateY(-2px)'
    },
    label: {
      fontSize: '0.875rem',
      color: '#666',
      marginBottom: '0.25rem',
      fontWeight: '500'
    },
    title: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#1a1a1a'
    },
    spacer: {
      flex: '1',
      maxWidth: '45%'
    }
  };

  return (
    <nav style={navStyles.container}>
      {prevProject ? (
        <Link
          to={prevProject.link}
          style={navStyles.button}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = navStyles.buttonHover.backgroundColor;
            e.currentTarget.style.transform = navStyles.buttonHover.transform;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = navStyles.button.backgroundColor;
            e.currentTarget.style.transform = 'none';
          }}
        >
          <span style={navStyles.label}>← Previous</span>
          <span style={navStyles.title}>{prevProject.title}</span>
        </Link>
      ) : (
        <div style={navStyles.spacer} />
      )}

      {nextProject ? (
        <Link
          to={nextProject.link}
          style={{...navStyles.button, alignItems: 'flex-end'}}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = navStyles.buttonHover.backgroundColor;
            e.currentTarget.style.transform = navStyles.buttonHover.transform;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = navStyles.button.backgroundColor;
            e.currentTarget.style.transform = 'none';
          }}
        >
          <span style={navStyles.label}>Next →</span>
          <span style={navStyles.title}>{nextProject.title}</span>
        </Link>
      ) : (
        <div style={navStyles.spacer} />
      )}
    </nav>
  );
}
