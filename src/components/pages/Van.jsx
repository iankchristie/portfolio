import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';
import { PhotoGallery } from '../common/PhotoGallery';

export function Van() {
  const images = [
    'MVIMG_20200112_164543.jpg',
    'MVIMG_20200201_183638.jpg',
    'MVIMG_20200301_125225.jpg',
    'MVIMG_20200501_164723 (1).jpg',
    'MVIMG_20200509_175245 (1).jpg',
    'MVIMG_20200515_071907 (1).jpg',
    'IMG_6425 Large.jpeg',
  ];

  return (
    <Layout showRappeller={true}>
      <div style={{
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(1rem, 3vw, 2rem)'
      }}>
        <ProjectNavigation currentLink="/van" position="top" />

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          Van
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          Bob the Van Builder: Yes We Can!
        </p>

        <PhotoGallery
          images={images}
          basePath="van"
          altPrefix="Van build"
        />

        <ProjectNavigation currentLink="/van" />
      </div>
    </Layout>
  );
}
