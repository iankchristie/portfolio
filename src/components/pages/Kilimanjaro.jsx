import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';
import { PhotoGallery } from '../common/PhotoGallery';

export function Kilimanjaro() {
  const images = [
    'IMG_2050.jpg',
    'IMG_2066.jpg',
    'IMG_2067.jpg',
    'IMG_2092.jpg',
    'IMG_2107 (1).jpg',
    'IMG_2119.jpg',
    'IMG_2132.JPG',
  ];

  return (
    <Layout showRappeller={true}>
      <div style={{
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(1rem, 3vw, 2rem)'
      }}>
        <ProjectNavigation currentLink="/kilimanjaro" position="top" />

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          Kilimanjaro
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          The Tallest Mountain in Africa with Pops
        </p>

        <PhotoGallery
          images={images}
          basePath="kilimanjaro"
          altPrefix="Kilimanjaro"
        />

        <ProjectNavigation currentLink="/kilimanjaro" />
      </div>
    </Layout>
  );
}
