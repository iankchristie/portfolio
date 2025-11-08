import { useState } from 'react';
import { ProjectCard } from '../common/ProjectCard';

export function ProjectsSection({ projects }) {
  const [showAll, setShowAll] = useState(false);
  const ITEMS_TO_SHOW = 9;
  const hasMore = projects.length > ITEMS_TO_SHOW;
  const displayedProjects = showAll || !hasMore ? projects : projects.slice(0, ITEMS_TO_SHOW);

  return (
    <section className="section personal-projects">
      <div className="section-header">
        <h2>Personal Projects</h2>
      </div>
      <div className="project-grid">
        {displayedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
      {hasMore && (
        <div className="see-more-container">
          <button
            className="see-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'See Less' : 'See More'}
          </button>
        </div>
      )}
    </section>
  );
}
