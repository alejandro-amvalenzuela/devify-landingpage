export default function HeroBanner() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '4rem' // espacio para el cabezal
    }}>
      {/* Luces de Fondo Animadas (Blobs) */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'clamp(300px, 80vw, 600px)',
        height: 'clamp(300px, 80vw, 600px)',
        background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0) 70%)',
        filter: 'blur(60px)',
        zIndex: -1,
        animation: 'blobDance 15s infinite alternate ease-in-out'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '25%',
        width: 'clamp(250px, 60vw, 500px)',
        height: 'clamp(250px, 60vw, 500px)',
        background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, rgba(139,92,246,0) 70%)', // Acento púrpura
        filter: 'blur(60px)',
        zIndex: -1,
        animation: 'blobDanceReverse 18s infinite alternate ease-in-out'
      }} />

      <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="animate-fade-in-up" style={{
          fontSize: 'clamp(3rem, 5vw, 4.5rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: '1.5rem',
          color: 'var(--text-primary)'
        }}>
          Transformamos Ideas en <br/>
          <span className="text-gradient-shimmer" style={{ paddingRight: '4px' }}>Software Excepcional</span>
        </h1>
        
        <p className="text-secondary animate-fade-in-up delay-100" style={{
          fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
          maxWidth: '800px',
          margin: '0 auto 3rem auto',
          lineHeight: 1.6
        }}>
          Desarrollo de aplicaciones web y móviles a medida. Arquitecturas escalables, diseño premium y rendimiento inigualable para tu negocio.
        </p>

        <div className="animate-fade-in-up delay-200" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Explorar Soluciones
          </button>
          <button className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Agendar Demo
          </button>
        </div>
      </div>
    </section>
  );
}
