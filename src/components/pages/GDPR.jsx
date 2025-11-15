import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';

export function GDPR() {
  return (
    <Layout showRappeller={true}>
      <div style={{
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(1rem, 3vw, 2rem)'
      }}>
        <ProjectNavigation currentLink="/gdpr" position="top" />

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          Square: GDPR Compliance
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          Durable System for PII Tracking
        </p>

        <div style={{
          width: '100%',
          maxWidth: '800px',
          margin: '2rem auto',
        }}>
          <img
            src={`${import.meta.env.BASE_URL}pii-compliance-process4.svg`}
            alt="PII Compliance Process Diagram"
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
            It sounds odd, but I was actually really excited to get the project to implement GDPR Compliance on the Square Appointments team. It wasn't the biggest project I worked on, but I'm really happy with the quality of work here. A few other teams took shortcut approaches that created a mountain of tech debt and long-term compliance pain—we managed to avoid that entirely.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            For those that don't know, stands for General Data Protection Regulations. It's a standard of consumer data protection imposed by the EU. It's an immensely complicated set of requirements, but it boils down to: consumers have a right to know what data you have on them and they have the power to control/delete that data.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Square is an enormous company with highly distributed data, and naturally they went with a fan-out strategy for implementation. Every PII containing entity would have to comply with a standardized API, implemented as an RPC endpoint. The workflow behind those APIs was full of edge cases and async steps, but it essentially came down to implementing two core endpoints:
          </p>

          <ol style={{
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>Return all consumer information</li>
            <li style={{ marginBottom: '0.5rem' }}>Delete all consumer PII</li>
          </ol>

          <p style={{ marginBottom: '1.5rem' }}>
            Our service alone had over 40 tables and hundreds of fields. It wasn't too hard to search the database, pull in the institutional-knowledge folks, classify each field as PII or not, and wire up the endpoints. Bada-bing, bada-boom.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            But the real challenge was long-term compliance. The product never stopped evolving—new fields were constantly being added or modified. Engineers would update the schema without realizing they were also on the hook for keeping GDPR compliance intact.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            To make compliance future-proof, I created a pii.yml file that listed every database field and whether it contained PII. This shifted all that tribal knowledge into version-controlled code. Then I built a suite of unit tests that forced ongoing correctness:
          </p>

          <ol style={{
            paddingLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              A metaprogramming test to ensure that the fields in schema.sql matched the fields in pii.yml.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              A deletion-coverage test to guarantee that if a field was marked as PII, the delete script actually removed it and returned proof of deletion.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              A database-level deletion test confirming that data was truly removed—not just "pretend deleted" in a response.
            </li>
          </ol>

          <p style={{ marginBottom: '1.5rem' }}>
            This setup ensured long-term GDPR compliance, made future engineers aware of the rules automatically, and eliminated the possibility of quiet regressions or accidental noncompliance.
          </p>
        </div>

        <ProjectNavigation currentLink="/gdpr" />
      </div>
    </Layout>
  );
}
