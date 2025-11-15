import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';

export function FeatureFlagBot() {
  return (
    <Layout showRappeller={true}>
      <div style={{
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(1rem, 3vw, 2rem)'
      }}>
        <ProjectNavigation currentLink="/feature-flag-bot" position="top" />

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          Square: Feature Flag Bot
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          Monitoring & Alerting System for Feature Flag Deprecation
        </p>

        <div style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          lineHeight: '1.8',
          color: '#1a1a1a',
          marginBottom: '3rem'
        }}>
          <p style={{ marginBottom: '1.5rem' }}>
            This was a small "10% project," but one I was really proud of because it ended up forcing a massive cleanup of our codebase.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Our team had a growing problem: we were drowning in feature flags. We A/B tested and slow-rolled almost everything, which left us with more than 100 flags scattered through the code. They added a ton of complexity, and—unsurprisingly—no one ever cleaned them up.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Adding "clean up old flags" as a formal roadmap task was never going to happen, so we needed another way to guarantee tech-debt sweeping without relying on goodwill or memory.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            The biggest issues were accountability, forgetting, and the lack of a fixed cleanup timeline. We already had a configuration file tracking our feature flags, so I extended each entry with two new fields: owner and clean_by.
          </p>

          <ul style={{
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              owner was the Slack LDAP of the DRI for that flag
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              clean_by was the date they committed to removing it
            </li>
          </ul>

          <p style={{ marginBottom: '1.5rem' }}>
            I wrote a unit test guaranteeing the existence of these fields in the yml file. Then I built an automated script that scanned for all flags past their clean_by date and pinged the owners in a public Slack channel. I collected the historical knowledge, backfilled all the existing flags, and got cleanup commitments from the DRIs. For flags with no active owner, I delegated some and deleted a big chunk myself.
          </p>
        </div>

        <div style={{
          width: '100%',
          maxWidth: '800px',
          margin: '2rem auto',
        }}>
          <img
            src={`${import.meta.env.BASE_URL}feature-flag-cleanup-system.svg`}
            alt="Feature Flag Cleanup System Diagram"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>

        <div style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          lineHeight: '1.8',
          color: '#1a1a1a',
          marginBottom: '3rem'
        }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Within a month, we went from 100+ flags down to just a few dozen—an enormous amount of tech debt wiped out.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            I got kudos for the project in a large org-wide meeting, and I helped a few other teams adopt the same system. If there's anything engineers love more than writing code, it's deleting code. I like to think this project put me firmly in the red for my time at Square.
          </p>
        </div>

        <ProjectNavigation currentLink="/feature-flag-bot" />
      </div>
    </Layout>
  );
}
