import { ProjectGridSection } from './ProjectGridSection';

export function AIModelsSection({ projects }) {
  return (
    <ProjectGridSection
      title="AI Models"
      items={projects}
      className="ai-models"
      id="work"
    />
  );
}
