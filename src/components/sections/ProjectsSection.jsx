import { ProjectGridSection } from './ProjectGridSection';

export function ProjectsSection({ projects }) {
  return (
    <ProjectGridSection
      title="Personal Projects"
      items={projects}
      className="personal-projects"
    />
  );
}
