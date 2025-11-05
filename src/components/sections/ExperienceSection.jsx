import { ProjectCard } from '../common/ProjectCard';

export function ExperienceSection({ experiences }) {
  return (
    <section className="section engineering-experience">
      <div className="section-header">
        <h2>Engineering Experience</h2>
      </div>
      <div className="project-grid">
        {experiences.map((experience) => (
          <ProjectCard
            key={experience.id}
            title={experience.title}
            description={experience.description}
            image={experience.image}
            link={experience.link}
          />
        ))}
      </div>
    </section>
  );
}
