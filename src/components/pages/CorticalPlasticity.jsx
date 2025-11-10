import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';

export function CorticalPlasticity() {
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
          Cortical Plasticity
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          NeuroBiologic Model for the Development of Direction Selectivity
        </p>

        <ProjectNavigation currentLink="/projects/cortical-plasticity" />

        <div style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          lineHeight: '1.8',
          color: '#1a1a1a',
          marginBottom: '3rem'
        }}>
          <p style={{ marginBottom: '1.5rem' }}>
            This was my undergraduate thesis working with Dr. Stephen Van Hooser on producing a computational model of directional selectivity.
          </p>
        </div>

        <div style={{
          width: '100%',
          marginTop: '2rem',
          marginBottom: '3rem'
        }}>
          <iframe
            src={`${import.meta.env.BASE_URL}cortical.pdf#navpanes=0`}
            style={{
              width: '100%',
              height: '800px',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            title="Cortical Plasticity Research Paper"
          />
        </div>

        <ProjectNavigation currentLink="/projects/cortical-plasticity" />
      </div>
    </Layout>
  );
}
