import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';

export function SquareAndroid() {
  return (
    <Layout showRappeller={true}>
      <div style={{
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(1rem, 3vw, 2rem)'
      }}>
        <ProjectNavigation currentLink="/projects/square-android" position="top" />

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          Square: Fully Reactive Android App
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          Overview of Android Architecture at Square Appointments
        </p>

        <div style={{
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          lineHeight: '1.8',
          color: '#1a1a1a',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Caliber of Square Android
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            Little-known fact: outside of Google, Square has arguably been the most influential Android engineering company in the world. A surprising number of the most widely used Android frameworks and libraries originated there, including:
          </p>

          <ul style={{
            marginBottom: '1.5rem',
            paddingLeft: '2rem'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>Dagger (Jesse Wilson) — dependency injection</li>
            <li style={{ marginBottom: '0.5rem' }}>Retrofit (Jake Wharton) — type-safe HTTP client</li>
            <li style={{ marginBottom: '0.5rem' }}>LeakCanary (Pierre-Yves Ricau) — memory leak detection</li>
            <li style={{ marginBottom: '0.5rem' }}>Workflow (Ray Ryan) — state management and navigation</li>
            <li style={{ marginBottom: '0.5rem' }}>SQLDelight (Alec Kazakova) — Kotlin/SQL type-safe database layer with codegen</li>
            <li style={{ marginBottom: '0.5rem' }}>Moshi — JSON serialization</li>
            <li style={{ marginBottom: '0.5rem' }}>OkHttp / Okio — the backbone HTTP and I/O libraries used across Android</li>
            <li style={{ marginBottom: '0.5rem' }}>Picasso — image loading</li>
          </ul>

          <p style={{ marginBottom: '1.5rem' }}>
            This level of open-source leadership on the Android platform was a major reason I wanted to join Square.
          </p>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Role in the Workflow Framework
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            I joined as one of two engineers building a brand-new Android app for the Square Appointments vertical—greenfield architecture, no legacy code. Even better, I got to work directly with Ray Ryan and Zach Klippenstein as they developed the Workflow framework. Our app became the first production test case and I served as one of the primary sources of engineering feedback for the first six months of the framework's existence.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Conceptually, Workflow settled into a React-like, unidirectional-dataflow architecture, written in Kotlin. It handled navigation, orchestration, and basic screen-level state. But most of our deeper state didn't actually live in Workflow's internal state machine—it came from a system we designed for end-to-end reactivity.
          </p>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            color: '#1a1a1a'
          }}>
            Ground-Up Reactivity
          </h2>

          <div style={{
            width: '100%',
            maxWidth: '800px',
            margin: '2rem auto',
          }}>
            <img
              src={`${import.meta.env.BASE_URL}reactive-app.png`}
              alt="Reactive App Architecture Diagram"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>

          <p style={{ marginBottom: '1.5rem' }}>
            Our product involved multiple merchants editing shared business data concurrently. Stale reads could lead to conflicting writes, so we needed a guarantee that every device stayed synchronized with the latest data. We built a fully reactive pipeline—from backend services to SQLite on the device.
          </p>

          <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
            Step 1 — Push-based synchronization
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            When a merchant updated data, the backend wrote to its primary datastore and then dispatched a push notification using Google's Push Notification Service (now Firebase Cloud Messaging). This notification signaled that new data was available, triggering a delta sync.
          </p>

          <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
            Step 2 — Constrained Object Graph Synchronization
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            We designed an incremental sync protocol we called Constrained Object Graph Synchronization:
          </p>

          <ul style={{
            marginBottom: '1.5rem',
            paddingLeft: '2rem'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>Every entity in the backend database had an updated_at timestamp.</li>
            <li style={{ marginBottom: '0.5rem' }}>Each device stored a sync_cursor representing the most recent update it had applied.</li>
            <li style={{ marginBottom: '0.5rem' }}>During sync, the device sent its cursor to the server.</li>
            <li style={{ marginBottom: '0.5rem' }}>The server returned only objects updated since that timestamp, plus a new cursor.</li>
            <li style={{ marginBottom: '0.5rem' }}>The client persisted both the object graph and the updated cursor.</li>
          </ul>

          <p style={{ marginBottom: '1.5rem' }}>
            This avoided full refreshes and scaled cleanly as merchants grew more complex.
          </p>

          <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
            Step 3 — Protobuf-backed storage
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            To avoid schema migration headaches, objects were stored on-device as serialized Protocol Buffers. We enforced stable schema practices—no renaming fields, no deleting, no changing tag ordinals—to keep backward compatibility across app versions.
          </p>

          <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
            Step 4 — Reactive local reads with SQLDelight
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Data was stored in SQLite with SQLDelight on top. One of SQLDelight's strongest features is observable queries: any query can be subscribed to, and changes to underlying tables trigger reactive updates.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            We built a layered data system:
          </p>

          <ul style={{
            marginBottom: '1.5rem',
            paddingLeft: '2rem'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>Data Stores: keyed lookups that subscribed to SQLDelight queries, deserialized protobufs, and emitted typed entities as observables.</li>
            <li style={{ marginBottom: '0.5rem' }}>Intermediate Stores: composed multiple data sources, transforming and aggregating them into richer domain models—still fully reactive.</li>
            <li style={{ marginBottom: '0.5rem' }}>ViewModel Stores: the UI layer subscribed to these to drive screen rendering. When data changed anywhere upstream—server, local DB, intermediate models—the UI updated automatically.</li>
          </ul>

          <p style={{ marginBottom: '1.5rem' }}>
            What we ended up with was a fully reactive data pipeline:
          </p>

          <p style={{ marginBottom: '1.5rem', fontStyle: 'italic', textAlign: 'center' }}>
            backend → push notification → delta sync → SQLite → SQLDelight observable queries → UI view models → screens update instantly
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            No manual refresh, no stale data, no conflicts.
          </p>
        </div>

        <ProjectNavigation currentLink="/projects/square-android" />
      </div>
    </Layout>
  );
}
