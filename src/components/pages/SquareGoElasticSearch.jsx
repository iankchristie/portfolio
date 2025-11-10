import { useState } from 'react';
import { Layout } from '../layout/Layout';
import { ProjectNavigation } from '../navigation/ProjectNavigation';

export function SquareGoElasticSearch() {
  const [isCodeExpanded, setIsCodeExpanded] = useState(false);

  return (
    <Layout showRappeller={true}>
      <div style={{
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(1rem, 3vw, 2rem)'
      }}>
        <ProjectNavigation currentLink="/projects/square-go-elastic-search" position="top" />

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}>
          Square: Go Elastic Search
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#666',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          Before AI there was Elastic Search
        </p>

<div style={{
  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
  lineHeight: '1.8',
  color: '#1a1a1a',
  marginBottom: '3rem'
}}>
  <p style={{ marginBottom: '1.5rem' }}>
    For most of its history, Square built software exclusively for merchants. It didn't have a consumer-facing product. Over time, it became clear that Square needed a way to bring buyers directly into the ecosystem—making it easier for customers to discover merchants, view availability, and book services. That's how Square Go was started: Square's first consumer marketplace app.
  </p>

  <p style={{ marginBottom: '1.5rem' }}>
    I had the opportunity to join the team as one of the founding backend engineers.
  </p>

  <div style={{
    width: '100%',
    maxWidth: '600px',
    margin: '2rem auto',
  }}>
    <img
      src={`${import.meta.env.BASE_URL}square-go.jpg`}
      alt="Square Go"
      style={{
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
    />
  </div>

  <p style={{ marginBottom: '1.5rem' }}>
    One of the biggest engineering obstacles was unifying Square's merchant data. Merchant information lived across many different services and datastores, each optimized for merchant-scoped transactional integrity rather than consumer lookup patterns. To make the app fluid, the backend needed to answer questions like "Show me barbers within 3 miles who have availability tomorrow afternoon" and return results instantly. Doing those kinds of geoqueries and text searches directly against the transactional source-of-truth systems would be too slow and too expensive, especially at the scale Square operates.
  </p>

  <p style={{ marginBottom: '1.5rem' }}>
    The solution we built resembled a Command Query Responsibility Segregation (CQRS) architecture, where reads were served by a separate system optimized for fast search. Elasticsearch made that possible. Rather than behaving like a traditional database, Elasticsearch is more like a distributed search and analytics engine. Data is stored in indices that are broken into shards and distributed across multiple nodes, giving the system both high availability and horizontal scalability.
  </p>

  <p style={{ marginBottom: '1.5rem' }}>
    Internally, Elasticsearch transforms data into an inverted index—a structure tailored for fast text search. That meant when a user typed something like "haircut" or "massage," Elasticsearch didn't need to scan every record. It already had a map of terms to merchants, so matching was effectively instantaneous. For location-based queries, Elasticsearch stores geospatial data using specialized data types that can quickly compute a bounding box or radius search, returning only merchants within the target area.
  </p>

  <div style={{ marginBottom: '1.5rem' }}>
    <div style={{
      position: 'relative',
      width: '100%',
      overflow: 'hidden'
    }}>
      <pre style={{
        backgroundColor: '#f5f5f5',
        padding: '1.5rem',
        borderRadius: '8px',
        overflowX: 'auto',
        fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
        lineHeight: '1.6',
        border: '1px solid #e0e0e0',
        maxHeight: isCodeExpanded ? 'none' : '150px',
        overflowY: 'hidden',
        maxWidth: '100%',
        boxSizing: 'border-box',
        margin: 0,
        whiteSpace: 'pre'
      }}>
        <code>{`{
  "query": {
    "bool": {
      "must": [
        {
          "multi_match": {
            "query": "beard shave",
            "fields": ["name", "description", "services"],
            "fuzziness": "AUTO"
          }
        }
      ],
      "filter": {
        "geo_distance": {
          "distance": "3mi",
          "location": {
            "lat": 37.7749,
            "lon": -122.4194
          }
        }
      }
    }
  },
  "sort": [
    {
      "_geo_distance": {
        "location": {
          "lat": 37.7749,
          "lon": -122.4194
        },
        "order": "asc",
        "unit": "mi"
      }
    }
  ],
  "size": 50
}`}</code>
      </pre>

      {!isCodeExpanded && (
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'linear-gradient(to bottom, rgba(245, 245, 245, 0), rgba(245, 245, 245, 1))',
          pointerEvents: 'none',
          borderRadius: '0 0 8px 8px'
        }} />
      )}
    </div>

    <button
      onClick={() => setIsCodeExpanded(!isCodeExpanded)}
      style={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        border: 'none',
        padding: '0.75rem 1.5rem',
        borderRadius: '6px',
        fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
        cursor: 'pointer',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        transition: 'background-color 0.2s',
        marginTop: '1rem'
      }}
      onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
      onMouseLeave={(e) => e.target.style.backgroundColor = '#1a1a1a'}
    >
      {isCodeExpanded ? '▼' : '▶'} {isCodeExpanded ? 'Show Less' : 'Show More'}
    </button>
  </div>

  <p style={{ marginBottom: '1.5rem' }}>
    The other interesting advantage of Elasticsearch is its support for fuzzy matching. Users don’t always type queries perfectly—someone might search for “barbr” instead of “barber,” or use pluralization or abbreviations. Elasticsearch stores tokenized and analyzed versions of merchant names and descriptions, allowing it to compute edit distance and score partial matches. In a way, this behaves like a lightweight, rule-based form of AI: instead of matching exact text, Elasticsearch estimates intent by scoring how close a query is to known terms, then ranking results accordingly. While it’s not using neural embeddings the way newer vector databases do, the design solves a surprisingly similar problem: letting humans ask imperfect questions and still get meaningful answers. For a consumer product, that mattered.
  </p>

  <p style={{ marginBottom: '1.5rem' }}>
    The ingestion pipeline fed Elasticsearch with merchant metadata, categories, text descriptions, and geocoordinates. Because Elasticsearch favored speed over strict consistency, data updates were indexed asynchronously. That led to minor lag between the source-of-truth systems and what users saw in the app, but that tradeoff was acceptable. Search and discovery didn’t require perfect real-time accuracy. More importantly, bookings were never finalized through Elasticsearch; whenever a user attempted to schedule an appointment, the request was routed back to the canonical booking database, ensuring the transaction itself was strongly consistent. Even if search results were a few seconds behind, bookings were guaranteed correct.
  </p>

  <div style={{
    width: '100%',
    maxWidth: '600px',
    margin: '2rem auto',
  }}>
    <img
      src={`${import.meta.env.BASE_URL}square-go-arch.png`}
      alt="Square Go Architecture"
      style={{
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
    />
  </div>

  <p style={{ marginBottom: '1.5rem' }}>
    In practice, this architecture gave us a fast, resilient, fault-tolerant read layer capable of handling consumer traffic with very low latency. It turned what would have been slow queries—full-table scans, geo-filters, fuzzy text matching—into sub-second searches across millions of listings. And because Elasticsearch clusters can scale simply by adding nodes, the system was ready for national rollout.
  </p>
</div>

        <ProjectNavigation currentLink="/projects/square-go-elastic-search" />
      </div>
    </Layout>
  );
}
