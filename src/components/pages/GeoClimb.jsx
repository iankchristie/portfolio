import { Layout } from '../layout/Layout';

export function GeoClimb() {
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

          <p style={{ marginBottom: '1.5rem' }}>
            View the midpoint research paper documenting early progress and findings.
          </p>
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
      </div>
    </Layout>
  );
}
