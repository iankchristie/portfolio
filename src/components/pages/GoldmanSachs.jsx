import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';

export function GoldmanSachs() {
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
          Goldman Sachs Internship
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          The Single Time I've Used AngularJS
        </p>

        <ProjectNavigation currentLink="/projects/goldman-sachs" />

        <div style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          lineHeight: '1.8',
          color: '#1a1a1a',
          marginBottom: '3rem'
        }}>
          <p style={{ marginBottom: '1.5rem' }}>
            At the time, Goldman had roughly 30,000 employees, with around 10,000 working in technology. They had a surprisingly strong argument for calling themselves a tech company. I interned as a front-end web developer using AngularJS, helping their sales services team build a drag-and-drop interface for querying their massive data lake.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            It was about a decade ago now, so the specifics of the project are fuzzy. What I do remember clearly is that I didn't enjoy AngularJS—at all. It pushed me away from web development for a few years and nudged me toward mobile and backend work instead.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Still, it was a good summer and a good place to turn 21. I did well and got a return offer, but I left knowing the lifestyle wasn't for me.
          </p>
        </div>

        <ProjectNavigation currentLink="/projects/goldman-sachs" />
      </div>
    </Layout>
  );
}
