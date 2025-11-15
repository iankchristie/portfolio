import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';
import { PhotoGallery } from '../common/PhotoGallery';

export function GrandCanyon() {
  const images = [
    '2070CE8E-CABB-4CD3-9DE6-5E82271C1E91.jpeg',
    '6E6AD638-A48F-4E4F-BE41-374383291B71.jpeg',
    'C1EFB1A8-BEA8-4C46-AD8D-69A1027E43EC.jpeg',
    'DSC00001 2.JPG',
    'DSC00011 3.JPG',
    'DSC00014.JPG',
    'DSC_1685.JPG',
    'DSC_1877.JPG',
    'DSC_2094.JPG',
    'DSC_2535.JPG',
    'DSC_2714.JPG',
    'DSC_2740.JPG',
    'IMG_5163 (1).JPG',
    'IMG_5226.JPG',
    'IMG_5315.JPG',
    'IMG_5422.JPG',
    'IMG_5587.JPG',
    'IMG_5644.JPG',
    'IMG_5708.JPG',
    'IMG_5746.JPG',
    'IMG_5761.JPG',
    'IMG_5999.JPG',
    'IMG_6057.JPG',
    'IMG_9780.JPG',
    'DSC00001 5.JPG',
  ];

  return (
    <Layout showRappeller={true}>
      <div style={{
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(1rem, 3vw, 2rem)'
      }}>
        <ProjectNavigation currentLink="/grand-canyon" position="top" />

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          The Grand Canyon
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          18 Days in the Most Beautiful Place on Earth
        </p>

        <PhotoGallery
          images={images}
          basePath="grand_canyon"
          altPrefix="Grand Canyon"
        />

        <ProjectNavigation currentLink="/grand-canyon" />
      </div>
    </Layout>
  );
}
