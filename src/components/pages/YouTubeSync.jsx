import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';

export function YouTubeSync() {
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
          YouTube Video Synchronization Protocol
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          Video Interleaving for Continuous Offline Content
        </p>

        <ProjectNavigation currentLink="/projects/youtube-sync" />

        <div style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          lineHeight: '1.8',
          color: '#1a1a1a',
          marginBottom: '3rem'
        }}>
          <blockquote style={{
            borderLeft: '4px solid #1a1a1a',
            paddingLeft: '1.5rem',
            marginLeft: '0',
            marginBottom: '2rem',
            fontStyle: 'italic',
            color: '#333'
          }}>
            <p style={{ marginBottom: '0.5rem' }}>
              "The best minds of my generation are thinking about how to make people click ads… That sucks."
            </p>
            <p style={{ marginBottom: '0', fontSize: '0.9em', color: '#666' }}>
              — Jeff Hammerbacher
            </p>
          </blockquote>

          <p style={{ marginBottom: '1.5rem' }}>
            At one point, I guess I was one of those "best minds." I worked at Google on the YouTube Mobile Infrastructure team, and the biggest thing I took away from that experience was the company's relentless, scientific approach to increasing watch time. Every feature—big or small—was A/B tested to measure its impact on how long people stayed on the platform.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            One guiding principle was that users should always have something to watch, even offline. I worked on a project focused on maximizing how many videos a user could access without a connection. At the time, when the app performed a manual sync, it would delete all previously downloaded videos before redownloading the new selection. That meant users could easily run out of time and end up with nothing saved.
          </p>

          <div style={{
            width: '100%',
            maxWidth: '600px',
            margin: '2rem auto',
          }}>
            <object
              data={`${import.meta.env.BASE_URL}process1_animation.svg`}
              type="image/svg+xml"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}process1_animation.svg`}
                alt="Old process: Delete all videos before downloading"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              />
            </object>
          </div>

          <p style={{ marginBottom: '1.5rem' }}>
            The solution was to batch deletions and downloads, interleaving both processes so that users always maintained some content while new videos were coming in.
          </p>

          <div style={{
            width: '100%',
            maxWidth: '600px',
            margin: '2rem auto',
          }}>
            <object
              data={`${import.meta.env.BASE_URL}process2_animation.svg`}
              type="image/svg+xml"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}process2_animation.svg`}
                alt="New process: Interleaved deletions and downloads"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              />
            </object>
          </div>

          <p style={{ marginBottom: '1.5rem' }}>
            The features I worked on increased watch time by 0.08%. YouTube had just crossed 2 billion watch hours per day, which means the changes I helped build were responsible for an additional 1,600,000 hours of YouTube watched per day.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            I hope some of those hours made people better.
          </p>
        </div>

        <ProjectNavigation currentLink="/projects/youtube-sync" />
      </div>
    </Layout>
  );
}
