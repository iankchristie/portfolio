import { Layout } from './components/layout/Layout';
import { HeroSection } from './components/sections/HeroSection';
import { AIModelsSection } from './components/sections/AIModelsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { heroContent, aiModels, experience, personalProjects } from './data/content';
import './styles/styles.css';

function App() {
  return (
    <Layout>
      <HeroSection content={heroContent} />
      <AIModelsSection projects={aiModels} />
      <ExperienceSection experiences={experience} />
      <ProjectsSection projects={personalProjects} />
    </Layout>
  );
}

export default App;
