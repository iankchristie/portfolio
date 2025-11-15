import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';
import { PhotoGallery } from '../common/PhotoGallery';

export function Patagonia() {
  const images = [
    'DSCN0457.JPG',
    'DSC_0183.JPG',
    'DSC_0231 (1).JPG',
    'DSC_0294.JPG',
    'IMG_0078.JPG',
    'IMG_0084.JPG',
    'IMG_0100.JPG',
    'IMG_0230.JPG',
    'IMG_0241.JPG',
    'IMG_0246.JPG',
    'IMG_0284.JPG',
    'IMG_0308.JPG',
    'IMG_0450.JPG',
    'IMG_0918.JPG',
    'IMG_7966.jpg',
    'IMG_8220.jpg',
    'IMG_8423.jpg',
    'zIMG_0004.JPG',
    'zIMG_0016.JPG',
  ];

  return (
    <Layout showRappeller={true}>
      <div style={{
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(1rem, 3vw, 2rem)'
      }}>
        <ProjectNavigation currentLink="/patagonia" position="top" />

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          Patagonia
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          A semester in Patagonia
        </p>

        <PhotoGallery
          images={images}
          basePath="nols"
          altPrefix="Patagonia"
        />

        <ProjectNavigation currentLink="/patagonia" />
      </div>
    </Layout>
  );
}
