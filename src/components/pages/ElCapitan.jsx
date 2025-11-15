import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';
import { PhotoGallery } from '../common/PhotoGallery';

export function ElCapitan() {
  const images = [
    'PXL_20250506_014517272.MP.jpg',
    'PXL_20250507_134117322.MP.jpg',
    'IMG_5098.jpeg',
    'IMG_5108.jpeg',
    'IMG_5111.jpeg',
    'IMG_5126.jpeg',
    'IMG_5141.jpeg',
    'IMG_5145.jpeg',
    'IMG_5872.jpeg',
    'PXL_20250511_021409865.MP.jpg',
    'PXL_20250511_025932182.MP.jpg',
    'PXL_20250511_031359987.MP.jpg',
    'PXL_20250511_194101839.jpg',
    'PXL_20250511_215305005.jpg',
    'PXL_20250512_182303807.MP.jpg'
  ];

  return (
    <Layout showRappeller={true}>
      <div style={{
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(1rem, 3vw, 2rem)'
      }}>
        <ProjectNavigation currentLink="/el-capitan" position="top" />

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          El Capitan
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          Picking the Nose and Going Up It
        </p>

        <PhotoGallery
          images={images}
          basePath="el_cap"
          altPrefix="El Capitan climb"
        />

        <ProjectNavigation currentLink="/el-capitan" />
      </div>
    </Layout>
  );
}
