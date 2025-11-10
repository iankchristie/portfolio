import { Link } from 'react-router-dom';
import { projectsWithPages } from '../../data/content';

export function ProjectNavigation({ currentLink, position = 'bottom' }) {
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
      gap: '2rem',
      ...(position === 'top' ? {
        padding: '0 0 2rem 0',
        marginBottom: '1rem'
      } : {
        padding: '3rem 0 0 0',
        marginTop: '2rem',
      })
    },
    button: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '0.5rem',
      textDecoration: 'none',
      color: '#666',
      transition: 'all 0.2s ease',
      maxWidth: '45%',
      flex: '1'
    },
    buttonHover: {
      color: '#1a1a1a'
    },
    label: {
      fontSize: '0.875rem',
      color: 'inherit',
      fontWeight: '400',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    title: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#1a1a1a',
      lineHeight: '1.4'
    },
    arrow: {
      fontSize: '1rem',
      display: 'inline-block',
      transition: 'transform 0.2s ease'
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
            e.currentTarget.style.color = navStyles.buttonHover.color;
            const arrow = e.currentTarget.querySelector('[data-arrow="prev"]');
            if (arrow) arrow.style.transform = 'translateX(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = navStyles.button.color;
            const arrow = e.currentTarget.querySelector('[data-arrow="prev"]');
            if (arrow) arrow.style.transform = 'translateX(0)';
          }}
        >
          <span style={navStyles.label}>
            <span style={navStyles.arrow} data-arrow="prev">←</span>
            Previous
          </span>
          <span style={navStyles.title}>{prevProject.title}</span>
        </Link>
      ) : (
        <div style={navStyles.spacer} />
      )}

      {nextProject ? (
        <Link
          to={nextProject.link}
          style={{...navStyles.button, alignItems: 'flex-end', textAlign: 'right'}}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = navStyles.buttonHover.color;
            const arrow = e.currentTarget.querySelector('[data-arrow="next"]');
            if (arrow) arrow.style.transform = 'translateX(4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = navStyles.button.color;
            const arrow = e.currentTarget.querySelector('[data-arrow="next"]');
            if (arrow) arrow.style.transform = 'translateX(0)';
          }}
        >
          <span style={navStyles.label}>
            Next
            <span style={navStyles.arrow} data-arrow="next">→</span>
          </span>
          <span style={navStyles.title}>{nextProject.title}</span>
        </Link>
      ) : (
        <div style={navStyles.spacer} />
      )}
    </nav>
  );
}
