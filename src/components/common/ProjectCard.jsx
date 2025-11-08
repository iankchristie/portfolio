import { useNavigate } from 'react-router-dom';

export function ProjectCard({ title, description, image, link, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Check if this is GeoClimb project
    if (title === 'GeoClimb') {
      navigate('/projects/geoclimb');
    } else {
      navigate('/under-construction');
    }
  };

  return (
    <div className="project-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="project-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
      </div>
    </div>
  );
}
