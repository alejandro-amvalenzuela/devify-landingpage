'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import productsData from '../data/products.json';

export default function Products() {
  const sectionRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="products" className="section-padding bg-primary" ref={sectionRef}>
      <div className="container">
        <div className="reveal-up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
              Nuestros Productos
            </h2>
            <p className="text-secondary" style={{ fontSize: '1.1rem', maxWidth: '600px' }}>
              Soluciones pre-construidas y altamente personalizables para acelerar tu salida al mercado.
            </p>
          </div>
          <button className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Ver todos los productos <ArrowRight size={18} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          {productsData.map((product, idx) => (
            <div key={idx} className={`reveal-up delay-${(idx + 1) * 100} product-card-responsive`} style={{
              display: 'flex',
              flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
              gap: 'clamp(2rem, 5vw, 4rem)',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              {/* Contenedor de Imagen */}
              <div style={{
                flex: '1 1 620px',
                height: 'clamp(350px, 40vh, 400px)',
                background: 'linear-gradient(135deg, var(--bg-tertiary) 0%, rgba(59,130,246,0.1) 100%)',
                borderRadius: '24px',
                border: '1px solid var(--border-color)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
              }}>
                {product.images && product.images.length > 0 ? (
                  <Image 
                    src={product.images[0]} 
                    alt={product.title} 
                    fill 
                    style={{ objectFit: 'cover' }}
                    className="hover-scale"
                  />
                ) : (
                  <>
                    <div style={{
                      position: 'absolute',
                      top: 0, left: 0, right: 0, bottom: 0,
                      background: 'linear-gradient(45deg, transparent 45%, rgba(150,150,150,0.05) 50%, transparent 55%)',
                      backgroundSize: '200% 200%',
                      animation: 'shimmer 3s infinite linear'
                    }} />
                    <div style={{ textAlign: 'center', color: 'var(--text-secondary)', zIndex: 1 }}>
                      <p style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent-primary)' }}>Vista Previa Interfaz</p>
                      <h4 style={{ fontSize: '1.75rem', marginTop: '0.5rem', color: 'var(--text-primary)', fontWeight: 700 }}>{product.title}</h4>
                    </div>
                  </>
                )}
              </div>

              {/* Contenido */}
              <div style={{ flex: '1 1 400px' }}>
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                  {product.tags.map(tag => (
                    <div key={tag} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.6rem 1.25rem',
                      borderRadius: '14px',
                      backgroundColor: 'var(--bg-tertiary)',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      border: '1px solid var(--border-color)',
                      boxShadow: '0 4px 12px -2px rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s ease'
                    }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        backgroundColor: 'var(--accent-primary)',
                        boxShadow: '0 0 10px var(--accent-glow)'
                      }} />
                      {tag}
                    </div>
                  ))}
                </div>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>{product.title}</h3>
                <p className="text-secondary" style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                  {product.description}
                </p>
                {product.showDetails && (
                  <Link href={`/pricing/${product.id}`} style={{ 
                    padding: '0.85rem 1.75rem', 
                    color: 'var(--accent-primary)',
                    backgroundColor: 'rgba(59, 130, 246, 0.08)',
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.75rem',
                    borderRadius: '999px',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 10px 20px -10px rgba(59, 130, 246, 0.5)';
                    e.currentTarget.querySelector('svg').style.transform = 'translateX(4px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.08)';
                    e.currentTarget.style.color = 'var(--accent-primary)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.querySelector('svg').style.transform = 'translateX(0)';
                  }}
                  >
                    Conocer características y planes <ArrowRight size={18} style={{ transition: 'transform 0.3s ease' }} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
