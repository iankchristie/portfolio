import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';
import { PhotoGallery } from '../common/PhotoGallery';

export function LostArrowSpire() {
  const images = [
    'IMG_3511 (1).jpg',
    'IMG_3518.jpg',
    'IMG_3534.jpg',
    'IMG_3537 (1).jpg',
    'IMG_3539.jpg',
    'PXL_20240604_212425238.MP.jpg',
  ];

  return (
    <Layout showRappeller={true}>
      <div style={{
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(1rem, 3vw, 2rem)'
      }}>
        <ProjectNavigation currentLink="/lost-arrow-spire" position="top" />

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          Lost Arrowhead Spire
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          Fancy Rope Work for Cool Photos
        </p>

        <PhotoGallery
          images={images}
          basePath="las"
          altPrefix="Lost Arrow Spire"
        />

        <ProjectNavigation currentLink="/lost-arrow-spire" />
      </div>
    </Layout>
  );
}
