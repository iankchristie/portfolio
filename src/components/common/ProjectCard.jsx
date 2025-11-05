export function ProjectCard({ title, description, image, link }) {
  return (
    <div className="project-card">
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
