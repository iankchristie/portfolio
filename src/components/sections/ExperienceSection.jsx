import { ProjectGridSection } from './ProjectGridSection';

export function ExperienceSection({ experiences }) {
  return (
    <ProjectGridSection
      title="Engineering Experience"
      items={experiences}
      className="engineering-experience"
    />
  );
}
