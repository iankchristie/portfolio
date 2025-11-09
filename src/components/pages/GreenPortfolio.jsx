import { Layout } from '../layout/Layout';

export function GreenPortfolio() {
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
          GreenPortfolio: Cloud Architecture
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          GCP Environment Setup using Terraform
        </p>

        <div style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          lineHeight: '1.8',
          color: '#1a1a1a',
          marginBottom: '3rem'
        }}>
          <p style={{ marginBottom: '1.5rem' }}>
            I had always wanted to build a personal carbon accounting app. The idea was that it would use the Plaid API and use your credit, banking, and investing information to determine your personal carbon footprint. It could monitor and suggest ways to reduce it. I gave a crack at it in 2023, but the side project ended when I realized how much legal and operational work would go into such an app.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            In February 2024, during the ClimateBase fellowship, I connected with GreenPortfolio, a company monitoring the climate impact of investment funds. They were looking to build a product that matched consumers with sustainably oriented financial advisors. I joined initially as a contractor and later as an advisor, taking the lead on backend architecture and engineering. The team was small: the founder, a PM, a marketer, two data scientists, a frontend engineer, and a backend intern. I coordinated engineering work across the team while owning the backend stack and features.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Several technology decisions had already been made: Bubble.io for the frontend to keep costs low, GCP for the backend as the most carbon-efficient provider, and Python to align with the data science team.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Because I wasn't a full-time hire, I focused heavily on building a system that was intuitive, well-documented, extensible, and resilient.
          </p>

          <div style={{
            width: '100%',
            maxWidth: '50%',
            margin: '2rem auto',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}architecture-diagram.png`}
              alt="GreenPortfolio Architecture Diagram"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Infrastructure & Resilience
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            I built isolated staging and production environments so junior engineers could experiment safely. Terraform kept environments in sync and handled provisioning for Artifact Registry, Cloud Run, Cloud SQL, Cloud Storage, and Cloud Monitoring. At previous jobs (e.g., Square) Terraform could get messy at scale, but on this codebase—with careful structure and help from LLMs—it worked extremely well.
          </p>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            CI/CD
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            All code lived in GitHub, and I built a GitHub Actions CI/CD pipeline that:
          </p>

          <ul style={{
            marginBottom: '1.5rem',
            paddingLeft: '2rem'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>ran tests,</li>
            <li style={{ marginBottom: '0.5rem' }}>built and pushed artifacts to Artifact Registry,</li>
            <li style={{ marginBottom: '0.5rem' }}>automatically deployed to staging,</li>
            <li style={{ marginBottom: '0.5rem' }}>supported a single-command promotion to production,</li>
            <li style={{ marginBottom: '0.5rem' }}>included rollback scripts for fast recovery.</li>
          </ul>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Backend Services
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            The client communicated through a standard REST API served by Flask.
          </p>

          <ul style={{
            marginBottom: '1.5rem',
            paddingLeft: '2rem'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>Pydantic validated incoming requests</li>
            <li style={{ marginBottom: '0.5rem' }}>Flask-SQLAlchemy integrated with a Postgres database on CloudSQL</li>
            <li style={{ marginBottom: '0.5rem' }}>Flask-migrate handled schema migrations</li>
          </ul>

          <p style={{ marginBottom: '1.5rem' }}>
            I also built tooling for database recovery and rollback to guard against corruption.
          </p>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Monitoring
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            I set up Cloud Monitoring and real-time Slack alerts for application health, performance issues, and failures.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            I'm quite proud of this work. It was my first time building such a devops system from scratch and I really enjoyed the process.
          </p>
        </div>
      </div>
    </Layout>
  );
}
