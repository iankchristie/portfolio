import { useState } from 'react';
import { Layout } from '../layout/Layout';
import { projects } from '../../data/content';
import { ProjectCard } from '../common/ProjectCard';

export function Projects() {
  const [selectedTag, setSelectedTag] = useState(null);

  // Get unique tags from all projects
  const allTags = [...new Set(projects.flatMap(project => project.tags))];

  // Filter projects based on selected tag
  const filteredProjects = selectedTag === null
    ? projects
    : projects.filter(project => project.tags.includes(selectedTag));

  const selectTag = (tag) => {
    if (tag === 'all') {
      // When "All" is clicked, clear selected tag
      setSelectedTag(null);
    } else {
      // When any other tag is clicked, select only that tag
      setSelectedTag(tag);
    }
  };

  // Check if "All" should be considered selected (when no tag is selected)
  const isAllSelected = selectedTag === null;

  return (
    <Layout>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        <h1 style={{
          fontSize: '3rem',
          marginBottom: '2rem',
          color: '#1a1a1a',
          textAlign: 'center'
        }}>
          Projects
        </h1>

        {/* Tag filters */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {/* All button */}
          <button
            onClick={() => selectTag('all')}
            style={{
              padding: '0.5rem 1.5rem',
              backgroundColor: isAllSelected ? '#1a1a1a' : 'white',
              color: isAllSelected ? 'white' : '#1a1a1a',
              border: '2px solid #1a1a1a',
              borderRadius: '24px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
              textTransform: 'capitalize'
            }}
            onMouseOver={(e) => {
              if (!isAllSelected) {
                e.target.style.backgroundColor = '#f5f5f5';
              }
            }}
            onMouseOut={(e) => {
              if (!isAllSelected) {
                e.target.style.backgroundColor = 'white';
              }
            }}
          >
            All
          </button>

          {/* Other tags */}
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => selectTag(tag)}
              style={{
                padding: '0.5rem 1.5rem',
                backgroundColor: selectedTag === tag ? '#1a1a1a' : 'white',
                color: selectedTag === tag ? 'white' : '#1a1a1a',
                border: '2px solid #1a1a1a',
                borderRadius: '24px',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textTransform: 'capitalize'
              }}
              onMouseOver={(e) => {
                if (selectedTag !== tag) {
                  e.target.style.backgroundColor = '#f5f5f5';
                }
              }}
              onMouseOut={(e) => {
                if (selectedTag !== tag) {
                  e.target.style.backgroundColor = 'white';
                }
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="project-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p style={{
            textAlign: 'center',
            color: '#666',
            fontSize: '1.25rem',
            marginTop: '3rem'
          }}>
            No projects found with the selected tags.
          </p>
        )}
      </div>
    </Layout>
  );
}
