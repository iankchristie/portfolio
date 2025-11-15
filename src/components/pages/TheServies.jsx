import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';

export function TheServies() {
  return (
    <Layout showRappeller={true}>
      <div style={{
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(1rem, 3vw, 2rem)'
      }}>
        <ProjectNavigation currentLink="/the-servies" position="top" />

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          The Servies
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          The Dundies Inspired Work Offsite
        </p>

        <div style={{
          position: 'relative',
          paddingBottom: '56.25%',
          height: 0,
          overflow: 'hidden',
          maxWidth: '800px',
          marginBottom: '3rem',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
            src="https://www.youtube.com/embed/emxloRess5Q"
            title="The Servies"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          lineHeight: '1.6',
          color: '#333',
          marginBottom: '3rem',
          maxWidth: '800px'
        }}>
          <p style={{ marginBottom: '1rem' }}>
            I love the kind of events that start as a joke and then snowball into something real. That's exactly what happened with the Servies. One day at lunch we were joking about The Office, and someone suggested doing a Dundies-style award show for our offsite. Since we were the Services team at Square, we decided to call it "The Servies."
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Rohini and I took the idea seriously—and we actually pulled it off. It turned into a fun creative outlet for a ton of people on the team. We rented out a mini-golf course that had a party room upstairs and formed our own "Party Planning Committee." Our designers printed parody Oscar-style promotional posters with our teammates' faces photoshopped over the actors. A small group made an Office-style opening sequence set to the same theme song, but featuring Square- and software-engineering-related scenes. Another team wrote superlatives for everyone. Our GM even lent us his Burning Man sound system. I took on the Michael Scott role and MC'd the whole thing.
          </p>
          <p>
            Unfortunately, I can't find any photos from the event—and the video might be a little too risqué to put online anyway.
          </p>
        </div>

        <ProjectNavigation currentLink="/the-servies" />
      </div>
    </Layout>
  );
}
