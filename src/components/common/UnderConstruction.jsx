import { Link } from 'react-router-dom';
import { Layout } from '../layout/Layout';

export function UnderConstruction() {
  return (
    <Layout showRappeller={true} rappellerImage="/construction-rapeller.png">
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          Under Construction
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#666',
          marginBottom: '2rem',
          maxWidth: '600px'
        }}>
          This page is currently being built. Check back soon!
        </p>
        <Link
          to="/"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#1a1a1a',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#1a1a1a'}
        >
          ← Back to Home
        </Link>
      </div>
    </Layout>
  );
}
