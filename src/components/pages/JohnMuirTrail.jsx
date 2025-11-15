import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';
import { PhotoGallery } from '../common/PhotoGallery';

export function JohnMuirTrail() {
  const images = [
    'DSCF5974.JPG',
    'DSCF7201.JPG',
    'DSCF7267.JPG',
    '_DSF6469 (1).JPG',
    'DSCF7334.JPG',
    'IMG_3223.jpg',
    'IMG_3322.jpg',
    'IMG_3386.jpg',
    'IMG_3450.jpg',
    'IMG_3899.jpg',
    'IMG_3595.jpg',
    'IMG_3741.jpg',
    'IMG_3754.jpg',
    'IMG_3281.jpg',
    'IMG_3684.jpg',
  ];

  return (
    <Layout showRappeller={true}>
      <div style={{
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(1rem, 3vw, 2rem)'
      }}>
        <ProjectNavigation currentLink="/john-muir-trail" position="top" />

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          John Muir Trail
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          15 Days in the Most Beautiful Place on Earth
        </p>

        <PhotoGallery
          images={images}
          basePath="jmt"
          altPrefix="John Muir Trail"
        />

        <ProjectNavigation currentLink="/john-muir-trail" />
      </div>
    </Layout>
  );
}
