'use client';

import { useScrollReveal } from '../hooks/useScrollReveal';
import logos from '../data/trustLogos.json';

export default function TrustLogos() {
  const sectionRef = useScrollReveal({ threshold: 0.1 });

  if (!logos || logos.length === 0) return null;

  return (
    <section id="clients" ref={sectionRef} style={{
      padding: '4rem 0',
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)',
      overflow: 'hidden'
    }}>
      <div className="container text-center reveal-up">
        <p className="text-secondary" style={{
          fontSize: '0.9rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '2px',
          marginBottom: '2.5rem'
        }}>
          Empresas que confían en nuestra tecnología
        </p>

        <div className="reveal-up delay-100" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4rem',
          flexWrap: 'wrap',
          opacity: 0.6
        }}>
          {logos.map((logo, idx) => (
            <div key={idx} style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              color: 'var(--text-secondary)',
              filter: 'grayscale(100%)',
              transition: 'filter 0.3s ease, color 0.3s ease, opacity 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'grayscale(0%)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'grayscale(100%)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
