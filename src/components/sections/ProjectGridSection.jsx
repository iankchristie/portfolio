import { useState } from 'react';
import { ProjectCard } from '../common/ProjectCard';

export function ProjectGridSection({
  title,
  items,
  className = '',
  id,
  itemsToShow = 6
}) {
  const [showAll, setShowAll] = useState(false);
  const hasMore = items.length > itemsToShow;
  const displayedItems = showAll || !hasMore ? items : items.slice(0, itemsToShow);

  return (
    <section className={`section ${className}`} id={id}>
      <div className="section-header">
        <h2>{title}</h2>
      </div>
      <div className="project-grid">
        {displayedItems.map((item) => (
          <ProjectCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            link={item.link}
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
