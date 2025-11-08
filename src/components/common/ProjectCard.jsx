import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function ProjectCard({ title, description, image, link, id }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const isUnderConstruction = link === '#' || link.startsWith('#');

  const handleClick = () => {
    if (isUnderConstruction) {
      navigate('/under-construction');
    } else {
      navigate(link);
    }
  };

  return (
    <div
      className="project-card"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: 'pointer', position: 'relative' }}
    >
      <div className="project-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
      </div>

      {isUnderConstruction && isHovered && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 'inherit',
          zIndex: 10
        }}>
          <span style={{
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: '600',
            textAlign: 'center',
            padding: '1rem'
          }}>
            Under Construction
          </span>
        </div>
      )}
    </div>
  );
}
