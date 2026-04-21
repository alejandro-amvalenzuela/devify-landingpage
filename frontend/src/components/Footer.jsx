import { Instagram, MessageCircle, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          {/* Columna de Marca */}
          <div style={{ flex: '1 1 100%', maxWidth: '400px' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>Devify</span>
            </div>
            <p className="text-secondary" style={{ lineHeight: 1.6, marginBottom: '2rem', maxWidth: '300px' }}>
              Construimos el software que impulsa el futuro. Diseño premium y rendimiento excepcional.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" className="text-secondary hover:text-primary"><Instagram size={20} /></a>
              <a href="#" className="text-secondary hover:text-primary"><Twitter size={20} /></a>
              <a href="#" className="text-secondary hover:text-primary"><MessageCircle size={20} /></a>
              <a href="mailto:hello@devify.solutions" className="text-secondary hover:text-primary"><Mail size={20} /></a>
            </div>
          </div>

          {/* Links Cols */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '1.5rem' }}>Compañía</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#" className="text-secondary hover:text-primary">Sobre Nosotros</a></li>
              <li><a href="#" className="text-secondary hover:text-primary">Carreras</a></li>
              <li><a href="#" className="text-secondary hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-secondary hover:text-primary">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '1.5rem' }}>Legal</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#" className="text-secondary hover:text-primary">Términos de Servicio</a></li>
              <li><a href="#" className="text-secondary hover:text-primary">Política de Privacidad</a></li>
              <li><a href="#" className="text-secondary hover:text-primary">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} Devify Solutions. Todos los derechos reservados.
          </p>
          <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
            Diseñado y desarrollado en LATAM.
          </p>
        </div>
      </div>
    </footer>
  );
}
