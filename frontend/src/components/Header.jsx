'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Sun, Moon, Menu as MenuIcon, X, 
  Sparkles, LayoutGrid, Users, Code2,
  Twitter, Instagram, MessageCircle, Mail, ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import logo from '../images/logo.png';
import { useTheme } from '../context/ThemeContext';
import logos from '../data/trustLogos.json';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      // Confiamos puramente en el div absoluto para el color de fondo + opacidad
      borderBottom: '1px solid var(--border-color)',
      zIndex: 50,
      transition: 'border-color 0.3s ease'
    }}>
      {/* Fondo Dinámico con Opacidad */}
      <div className="bg-primary" style={{ position:'absolute', top:0, left:0, right:0, bottom:0, opacity: 0.9, backdropFilter: 'blur(10px)', zIndex: -1 }}></div>

      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '4rem',
        position: 'relative' // relativo al z-index del fondo
      }}>
        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <Image src={logo} alt="Devify Logo" width={180} height={40} style={{ objectFit: 'contain' }} />
        </div>
        
        <nav className="hide-mobile">
          <ul style={{ display: 'flex', gap: '2rem' }}>
            <li><Link href="#features" style={{ fontWeight: 500 }} className="text-secondary hover:text-primary">Beneficios</Link></li>
            <li><Link href="#products" style={{ fontWeight: 500 }} className="text-secondary hover:text-primary">Productos</Link></li>
            <li><Link href="#custom-dev" style={{ fontWeight: 500 }} className="text-secondary hover:text-primary">Software a Medida</Link></li>
            {logos && logos.length > 0 && (
              <li><Link href="#clients" style={{ fontWeight: 500 }} className="text-secondary hover:text-primary">Clientes</Link></li>
            )}
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button 
            onClick={toggleTheme} 
            className="hide-mobile"
            style={{ 
              color: 'var(--text-secondary)',
              padding: '0.5rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s, color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button className="btn btn-primary hide-mobile" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
            Contactar Ventas
          </button>

          {/* Menú Móvil Trigger */}
          <button 
            className="show-mobile"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ 
              color: 'var(--text-primary)', 
              padding: '0.5rem',
              position: 'relative',
              zIndex: 110 // Por encima del overlay (100)
            }}
          >
            {isMenuOpen ? <X size={32} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Navegación Móvil (Overlay Premium) */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'is-open' : ''}`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Link href="#features" className="mobile-menu-link delay-1" onClick={() => setIsMenuOpen(false)}>
            <Sparkles size={24} className="text-accent" /> Beneficios
          </Link>
          <Link href="#products" className="mobile-menu-link delay-2" onClick={() => setIsMenuOpen(false)}>
            <LayoutGrid size={24} className="text-accent" /> Productos
          </Link>
          <Link href="#custom-dev" className="mobile-menu-link delay-3" onClick={() => setIsMenuOpen(false)}>
            <Code2 size={24} className="text-accent" /> Software a Medida
          </Link>
          {logos && logos.length > 0 && (
            <Link href="#clients" className="mobile-menu-link delay-4" onClick={() => setIsMenuOpen(false)}>
              <Users size={24} className="text-accent" /> Clientes
            </Link>
          )}
        </div>
        
        <div className="mobile-menu-footer">
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Hablemos
            </p>
            <a href="mailto:hello@devify.solutions" style={{ fontSize: '1.25rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Mail size={20} /> hello@devify.solutions
            </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#" className="text-secondary hover:text-primary"><Instagram size={24} /></a>
              <a href="#" className="text-secondary hover:text-primary"><Twitter size={24} /></a>
              <a href="#" className="text-secondary hover:text-primary"><MessageCircle size={24} /></a>
            </div>
            <button className="btn btn-primary" style={{ padding: '0.75rem 1.25rem' }}>
              Ventas <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </button>
          </div>
          
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button 
              onClick={toggleTheme}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                color: 'var(--text-primary)',
                fontSize: '1rem',
                fontWeight: 600,
                backgroundColor: 'var(--bg-tertiary)',
                padding: '0.6rem 1.2rem',
                borderRadius: '12px',
                border: '1px solid var(--border-color)'
              }}
            >
              {theme === 'dark' ? <><Sun size={18} /> Modo Claro</> : <><Moon size={18} /> Modo Oscuro</>}
            </button>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>v1.0.4</span>
          </div>
        </div>
      </div>
    </header>
  );
}
