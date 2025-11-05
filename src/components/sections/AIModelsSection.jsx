import { ProjectCard } from '../common/ProjectCard';

export function AIModelsSection({ projects }) {
  return (
    <section className="section ai-models" id="work">
      <div className="section-header">
        <h2>AI Models</h2>
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
