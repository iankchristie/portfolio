import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';

export function JohnMuirTrail() {
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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(1rem, 2vw, 2rem)',
          marginBottom: '3rem',
          width: '100%'
        }}>
          {[
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
          ].map((image, index) => (
            <div key={index} style={{
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <img
                src={`${import.meta.env.BASE_URL}jmt/${image}`}
                alt={`John Muir Trail ${index + 1}`}
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

        <ProjectNavigation currentLink="/john-muir-trail" />
      </div>
    </Layout>
  );
}
