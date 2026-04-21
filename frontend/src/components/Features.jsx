'use client';

import { Server, ShieldCheck, Zap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Features() {
  const sectionRef = useScrollReveal({ threshold: 0.1 });

  const features = [
    {
      icon: <Zap size={32} className="text-accent" />,
      title: 'Rendimiento Extremo',
      description: 'Optimizamos cada línea de código para que tu aplicación responda en milisegundos, garantizando la mejor experiencia de usuario.'
    },
    {
      icon: <Server size={32} className="text-accent" />,
      title: 'Arquitectura Escalable',
      description: 'Diseñamos sistemas preparados para crecer contigo. Soporte para alto tráfico concurrente sin caída de servicio.'
    },
    {
      icon: <ShieldCheck size={32} className="text-accent" />,
      title: 'Seguridad Empresarial',
      description: 'Implementamos estándares de seguridad líderes en la industria para proteger tus datos y los de tus clientes.'
    }
  ];

  return (
    <section id="features" className="section-padding bg-secondary" ref={sectionRef} style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="text-center reveal-up" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
            ¿Qué te permiten nuestros productos?
          </h2>
          <p className="text-secondary" style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Transformamos la complejidad operativa en ventajas competitivas mediante soluciones tecnológicas avanzadas.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {features.map((feature, idx) => (
            <div key={idx} className={`bg-tertiary reveal-up delay-${(idx + 1) * 100}`} style={{
              padding: '2.5rem 2rem',
              borderRadius: '16px',
              border: '1px solid var(--border-color)',
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease',
              cursor: 'default',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.borderColor = 'var(--accent-primary)';
              const iconContainer = e.currentTarget.querySelector('.icon-container');
              if(iconContainer) {
                iconContainer.style.backgroundColor = 'var(--accent-primary)';
                iconContainer.querySelector('svg').style.color = '#ffffff';
                iconContainer.style.transform = 'scale(1.15) rotate(-5deg)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'var(--border-color)';
              const iconContainer = e.currentTarget.querySelector('.icon-container');
              if(iconContainer) {
                iconContainer.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
                iconContainer.querySelector('svg').style.color = 'var(--accent-primary)';
                iconContainer.style.transform = 'scale(1) rotate(0)';
              }
            }}
            >
              <div className="icon-container" style={{
                width: '64px',
                height: '64px',
                borderRadius: '12px',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                transition: 'background-color 0.3s ease'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>{feature.title}</h3>
              <p className="text-secondary" style={{ lineHeight: 1.6 }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
