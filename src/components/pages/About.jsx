import { Layout } from '../layout/Layout';

export function About() {
  return (
    <Layout showRappeller={true} rappellerImage={`${import.meta.env.BASE_URL}construction-rapeller.png`}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '3rem',
          marginBottom: '2rem',
          color: '#1a1a1a'
        }}>
          About
        </h1>

        <div style={{
          width: '100%',
          fontSize: '1.125rem',
          lineHeight: '1.8',
          color: '#1a1a1a'
        }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Coming Soon!
          </p>
        </div>
      </div>
    </Layout>
  );
}
