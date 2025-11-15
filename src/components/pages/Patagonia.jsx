import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';

export function Patagonia() {
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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(1rem, 2vw, 2rem)',
          marginBottom: '3rem',
          width: '100%'
        }}>
          {[
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
          ].map((image, index) => (
            <div key={index} style={{
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <img
                src={`${import.meta.env.BASE_URL}nols/${image}`}
                alt={`Patagonia ${index + 1}`}
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

        <ProjectNavigation currentLink="/patagonia" />
      </div>
    </Layout>
  );
}
