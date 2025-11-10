import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';

export function PhysicalWeb() {
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
          The Physical Web
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          Bluetooth Beacon Integration with Chrome
        </p>

        <ProjectNavigation currentLink="/projects/physical-web" />

        <div style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          lineHeight: '1.8',
          color: '#1a1a1a',
          marginBottom: '3rem'
        }}>
          <p style={{ marginBottom: '1.5rem' }}>
            My first team at Google was the Physical Web project under Chrome. It was a valiant effort to bring the web to the real world.  The idea was to use Bluetooth Low Energy beacons that broadcast a URL tied to a real-world location. Think of a QRCode that you didn't have to scan because it would send a push notification to you. Walk through a museum and the painting in front of you could broadcast a link with its history. Sit down in a conference room and the beacon could broadcast a link to the current meeting so attendees could join instantly. It was a clever vision—lightweight, frictionless, and web-native. Here are some cool examples of it's ideal use:
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            marginBottom: '2rem',
            maxWidth: '400px',
            margin: '0 auto 2rem auto'
          }}>
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <iframe
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
                src="https://www.youtube.com/embed/b0GDk-53fTo"
                title="Physical Web Example 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <iframe
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
                src="https://www.youtube.com/embed/ysxB_PXFImE"
                title="Physical Web Example 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <iframe
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
                src="https://www.youtube.com/embed/-Y77cUI_z30"
                title="Physical Web Example 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <p style={{ marginBottom: '1.5rem' }}>
            In reality, the business goal was to serve ads to people as they moved throughout the world. Walk past a coffee shop and receive a ping: "Come in for $2 off your next latte!" In the worst case, the system was a privacy and security nightmare. Malicious actors could track people's movements, or broadcast unwanted—even obscene—content. The same frictionless experience that made the technology appealing also made it dangerous.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Five months after I joined, the project was sunset and I had to find a new team. It was a great introduction to Big Tech.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            After leaving Google, I took a box of unused beacons and loaded my old personal website onto them. Then I left the beacons scattered across random locations in San Francisco, hoping to generate a little stir. Realistically, the product was so unpopular that I doubt anyone ever saw a notification. You had to opt-in. The service may have been shut down before I even deployed them—and if not, my domain was probably blocklisted immediately. But I still like to think I gave a few strangers a moment of confusion and some former coworkers a good laugh.
          </p>
        </div>

        <ProjectNavigation currentLink="/projects/physical-web" />
      </div>
    </Layout>
  );
}
