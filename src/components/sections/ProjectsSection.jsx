import { ProjectCard } from '../common/ProjectCard';

export function ProjectsSection({ projects }) {
  return (
    <section className="section personal-projects">
      <div className="section-header">
        <h2>Personal Projects</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
