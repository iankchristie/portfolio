import { useState } from 'react';
import { ProjectCard } from '../common/ProjectCard';

export function ExperienceSection({ experiences }) {
  const [showAll, setShowAll] = useState(false);
  const ITEMS_TO_SHOW = 9;
  const hasMore = experiences.length > ITEMS_TO_SHOW;
  const displayedExperiences = showAll || !hasMore ? experiences : experiences.slice(0, ITEMS_TO_SHOW);

  return (
    <section className="section engineering-experience">
      <div className="section-header">
        <h2>Engineering Experience</h2>
      </div>
      <div className="project-grid">
        {displayedExperiences.map((experience) => (
          <ProjectCard
            key={experience.id}
            title={experience.title}
            description={experience.description}
            image={experience.image}
            link={experience.link}
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
