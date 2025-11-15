import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';

export function ElCapitan() {
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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(1rem, 2vw, 2rem)',
          marginBottom: '3rem',
          width: '100%'
        }}>
          {[
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
          ].map((image, index) => (
            <div key={index} style={{
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <img
                src={`${import.meta.env.BASE_URL}el_cap/${image}`}
                alt={`El Capitan climb ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          ))}
        </div>

        <ProjectNavigation currentLink="/el-capitan" />
      </div>
    </Layout>
  );
}
