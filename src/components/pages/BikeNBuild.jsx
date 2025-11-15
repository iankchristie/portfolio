import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';

export function BikeNBuild() {
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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(1rem, 2vw, 2rem)',
          marginBottom: '3rem',
          width: '100%'
        }}>
          {[
            'bnb_map.jpg',
            'IMG_0613.JPG',
            'IMG_0664.JPG',
            'IMG_3787.JPG',
            'IMG_3841.JPG',
            'IMG_4365 (1).JPG',
            'IMG_4393.JPG',
          ].map((image, index) => (
            <div key={index} style={{
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <img
                src={`${import.meta.env.BASE_URL}bnb/${image}`}
                alt={`Bike'n Build ${index + 1}`}
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

        <ProjectNavigation currentLink="/bike-n-build" />
      </div>
    </Layout>
  );
}
