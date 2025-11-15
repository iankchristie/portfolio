import { useState } from 'react';

export function CollapsibleCode({ code, language = 'javascript' }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
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
          maxHeight: isExpanded ? 'none' : '150px',
          overflowY: 'hidden',
          maxWidth: '100%',
          boxSizing: 'border-box',
          margin: 0,
          whiteSpace: 'pre'
        }}>
          <code>{code}</code>
        </pre>

        {!isExpanded && (
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
        onClick={() => setIsExpanded(!isExpanded)}
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
        {isExpanded ? '▼' : '▶'} {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
}
