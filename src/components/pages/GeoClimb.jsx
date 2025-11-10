import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';

export function GeoClimb() {
  // Images from the geo_climb folder
  const geoClimbImages = [
    `${import.meta.env.BASE_URL}geo_climb/IMG_1220.jpg`,
    `${import.meta.env.BASE_URL}geo_climb/IMG_1224.jpg`,
    `${import.meta.env.BASE_URL}geo_climb/IMG_1226.jpg`,
    `${import.meta.env.BASE_URL}geo_climb/IMG_1252_(1).jpg`,
    `${import.meta.env.BASE_URL}geo_climb/IMG_1249_Large.jpeg`,
    `${import.meta.env.BASE_URL}geo_climb/IMG_5074_(1).jpg`
  ];
  return (
    <Layout showRappeller={true}>
      <div style={{
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(1rem, 3vw, 2rem)'
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          GeoClimb
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          Geologic Foundation Model Aimed at Detecting Novel Climbing Areas
        </p>

        <ProjectNavigation currentLink="/projects/geoclimb" />

        <div style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          lineHeight: '1.8',
          color: '#1a1a1a',
          marginBottom: '3rem'
        }}>
          <p style={{ marginBottom: '1.5rem' }}>
            By combining data from Mountain Project(existing climbing locations), Sentinel-II satellite imagery, Digital Elevation Models (DEM) and lithology data I built a model that identifies geographic areas of interest that might contain undiscovered rock climbing opportunities.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            The real test? Taking the model's predictions into the field. When the model highlighted a promising location in Rocky Mountain National Park some friends and I decided to investigate. We hiked out to the predicted area and discovered quality rock that had never been climbed before.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            That day, we established a new route: <strong>"Adventure is Out There" (5.6)</strong>.
          </p>
        </div>

        {/* Image Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          width: '100%',
          marginTop: '2rem',
          marginBottom: '3rem'
        }}>
          {geoClimbImages.map((image, index) => (
            <div
              key={index}
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#f5f5f5'
              }}
            >
              <img
                src={image}
                alt={`GeoClimb project ${index + 1}`}
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

        <div style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          lineHeight: '1.8',
          color: '#1a1a1a'
        }}>
          <h3 style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
            marginTop: '3rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Final Report
          </h3>
        </div>


        <div style={{
          width: '100%',
          marginTop: '2rem',
          marginBottom: '3rem'
        }}>
          <iframe
            src={`${import.meta.env.BASE_URL}GeoClimb_Final_report.pdf#navpanes=0`}
            style={{
              width: '100%',
              height: '800px',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            title="GeoClimb Final Research Paper"
          />
        </div>

        <div style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          lineHeight: '1.8',
          color: '#1a1a1a'
        }}>
          <h3 style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
            marginTop: '3rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Midpoint Report
          </h3>
        </div>

        <div style={{
          width: '100%',
          marginTop: '2rem',
          marginBottom: '3rem'
        }}>
          <iframe
            src={`${import.meta.env.BASE_URL}GeoClimb_Midpoint.pdf#navpanes=0`}
            style={{
              width: '100%',
              height: '800px',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            title="GeoClimb Midpoint Research Paper"
          />
        </div>

        <ProjectNavigation currentLink="/projects/geoclimb" />
      </div>
    </Layout>
  );
}
