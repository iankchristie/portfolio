import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';

export function TuolumneTripleCrown() {
  return (
    <Layout showRappeller={true}>
      <div style={{
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(1rem, 3vw, 2rem)'
      }}>
        <ProjectNavigation currentLink="/tuolumne-triple-crown" position="top" />

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          Tuolumne Triple Crown
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          One of the Best Days in the Mountains
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(1rem, 2vw, 2rem)',
          marginBottom: '3rem',
          width: '100%'
        }}>
          {[
            'IMG_2053.jpg',
            'IMG_2057 (1).jpg',
            'IMG_2068.jpg',
            'IMG_2079.jpg',
            'IMG_2089.jpg',
            'IMG_2092.jpg',
            'IMG_2096.jpg',
            'IMG_2117.jpg',
            'IMG_2122.jpg',
            'IMG_2123.jpg',
            'IMG_2354.jpg',
            'PXL_20231008_015414691.MP.jpg',
            'PXL_20231008_045520070.MP.jpg',
          ].map((image, index) => (
            <div key={index} style={{
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <img
                src={`${import.meta.env.BASE_URL}triplecrown/${image}`}
                alt={`Tuolumne Triple Crown ${index + 1}`}
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

        <ProjectNavigation currentLink="/tuolumne-triple-crown" />
      </div>
    </Layout>
  );
}
