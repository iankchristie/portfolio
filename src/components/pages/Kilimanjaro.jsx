import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';

export function Kilimanjaro() {
  return (
    <Layout showRappeller={true}>
      <div style={{
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(1rem, 3vw, 2rem)'
      }}>
        <ProjectNavigation currentLink="/kilimanjaro" position="top" />

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          Kilimanjaro
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          The Tallest Mountain in Africa with Pops
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(1rem, 2vw, 2rem)',
          marginBottom: '3rem',
          width: '100%'
        }}>
          {[
            'IMG_2050.jpg',
            'IMG_2066.jpg',
            'IMG_2067.jpg',
            'IMG_2092.jpg',
            'IMG_2107 (1).jpg',
            'IMG_2119.jpg',
            'IMG_2132.JPG',
          ].map((image, index) => (
            <div key={index} style={{
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <img
                src={`${import.meta.env.BASE_URL}kilimanjaro/${image}`}
                alt={`Kilimanjaro ${index + 1}`}
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

        <ProjectNavigation currentLink="/kilimanjaro" />
      </div>
    </Layout>
  );
}
