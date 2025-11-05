import { Layout } from '../layout/Layout';

export function Contact() {
  return (
    <Layout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: '1.5rem',
          marginBottom: '2rem',
          color: '#1a1a1a',
          maxWidth: '600px'
        }}>
          Hello! I'm pretty social, please reach out for anything at all!
        </p>
        <a
          href="mailto:iankchristie@gmail.com"
          style={{
            fontSize: '1.25rem',
            color: '#1a1a1a',
            textDecoration: 'none',
            borderBottom: '2px solid #1a1a1a',
            paddingBottom: '2px',
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => {
            e.target.style.color = '#666';
            e.target.style.borderBottomColor = '#666';
          }}
          onMouseOut={(e) => {
            e.target.style.color = '#1a1a1a';
            e.target.style.borderBottomColor = '#1a1a1a';
          }}
        >
          iankchristie@gmail.com
        </a>
      </div>
    </Layout>
  );
}
