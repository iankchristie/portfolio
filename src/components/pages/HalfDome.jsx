import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';
import { PhotoGallery } from '../common/PhotoGallery';

export function HalfDome() {
  const images = [
    'IMG_3566.jpg',
    'IMG_3571.jpg',
    'IMG_3586.jpg',
    'IMG_3592.jpg',
    'IMG_3598.jpg',
    'IMG_3606.jpg',
    'IMG_3624 (1).jpg',
    'IMG_3632.jpg',
    'IMG_3641.jpg',
    'PXL_20240606_024317075.MP.jpg',
    'PXL_20240607_015956428.MP.jpg',
    'PXL_20240607_182214943.MP (1).jpg',
  ];

  return (
    <Layout showRappeller={true}>
      <div style={{
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(1rem, 3vw, 2rem)'
      }}>
        <ProjectNavigation currentLink="/half-dome" position="top" />

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          Half Dome
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          30th Birthday Celebration!
        </p>

        <PhotoGallery
          images={images}
          basePath="halfdome"
          altPrefix="Half Dome"
        />

        <ProjectNavigation currentLink="/half-dome" />
      </div>
    </Layout>
  );
}
