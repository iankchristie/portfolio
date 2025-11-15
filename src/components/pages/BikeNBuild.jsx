import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';
import { PhotoGallery } from '../common/PhotoGallery';

export function BikeNBuild() {
  const images = [
    'bnb_map.jpg',
    'IMG_0613.JPG',
    'IMG_0664.JPG',
    'IMG_3787.JPG',
    'IMG_3841.JPG',
    'IMG_4365 (1).JPG',
    'IMG_4393.JPG',
  ];

  return (
    <Layout showRappeller={true}>
      <div style={{
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(1rem, 3vw, 2rem)'
      }}>
        <ProjectNavigation currentLink="/bike-n-build" position="top" />

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          Bike'n Build
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          Cross Country Bike Trip from Rhode Island to Seattle
        </p>

        <PhotoGallery
          images={images}
          basePath="bnb"
          altPrefix="Bike'n Build"
        />

        <ProjectNavigation currentLink="/bike-n-build" />
      </div>
    </Layout>
  );
}
