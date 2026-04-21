'use client';

import { 
  Bot, 
  Zap, 
  Inbox, 
  BarChart4, 
  Phone, 
  Link as LinkIcon, 
  Cpu, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Puzzle
} from 'lucide-react';
import styles from '../styles/components/AutomationDetails.module.css';

export default function AutomationDetails() {
  const benefits = [
    { icon: <Clock size={24} className="text-accent" />, title: 'Ahorro de Cientos de Horas', desc: 'Las tareas repetitivas desaparecen por completo.' },
    { icon: <TrendingUp size={24} className="text-accent" />, title: 'Reducción de Costos', desc: 'Menos trabajo manual significa menos gastos innecesarios.' },
    { icon: <Zap size={24} className="text-accent" />, title: 'Procesos Rápidos', desc: 'Las automatizaciones trabajan y procesan en segundos.' },
    { icon: <ShieldCheck size={24} className="text-accent" />, title: 'Menos Errores Humanos', desc: 'Los procesos automatizados siguen reglas y lógicas exactas.' }
  ];

  const features = [
    {
      icon: <Inbox size={32} />,
      title: 'Captura Automática de Clientes',
      items: [
        'Se registra automáticamente en tu CRM',
        'Se envía un correo de bienvenida instantáneo',
        'Se asigna al vendedor adecuado',
        'Se crea una tarea de seguimiento'
      ],
      desc: 'Todo ocurre en segundos y sin intervención humana cuando alguien completa un formulario o envía un mensaje.'
    },
    {
      icon: <BarChart4 size={32} />,
      title: 'Reportes Automáticos de tu Negocio',
      items: [
        'Consolidar datos de múltiples sistemas',
        'Generar reportes automáticos en PDF/Excel',
        'Enviar métricas diarias o semanales a tu equipo',
        'Alertar por Slack o Email cuando ocurre algo importante'
      ],
      desc: 'Olvídate de recopilar datos manualmente. Tu negocio siempre tiene información actualizada.'
    },
    {
      icon: <Phone size={32} />,
      title: 'Atención Automática a Clientes',
      items: [
        'Respuestas automáticas por email o WhatsApp',
        'Confirmación automatizada de citas o pedidos',
        'Recordatorios automáticos a clientes',
        'Seguimientos de ventas y post-venta'
      ],
      desc: 'Mejora la experiencia del cliente enormemente sin necesidad de aumentar tu equipo de trabajo.'
    },
    {
      icon: <LinkIcon size={32} />,
      title: 'Integración Total de Sistemas',
      items: [
        'CRMs (HubSpot, Salesforce, Pipedrive)',
        'Bases de datos y ERPs',
        'Formularios y Typeform',
        'Plataformas de pago (Stripe, PayPal)'
      ],
      desc: 'Toda tu información fluye automáticamente entre sistemas gracias a integraciones vía API y n8n.'
    },
    {
      icon: <Cpu size={32} />,
      title: 'Automatización + Inteligencia Artificial',
      items: [
        'Clasificar solicitudes de clientes con IA',
        'Analizar mensajes o correos entrantes',
        'Generar respuestas inteligentes a clientes',
        'Procesar grandes volúmenes de documentos (OCR + IA)'
      ],
      desc: 'Convierte tus procesos en sistemas inteligentes que aprenden, leen, procesan información y optimizan el trabajo.'
    }
  ];

  return (
    <div className={`container ${styles.viewContainer}`}>
      {/* Sección de Introducción */}
      <div className={styles.heroSection}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.heroIconWrapper}>
            <Bot size={56} className={styles.heroIconGlow} />
          </div>
          <h2 className={styles.heroTitle}>Automatiza tu Negocio</h2>
          <p className={styles.heroDesc}>
            Muchas empresas pierden decenas de horas al mes en tareas manuales: copiar datos, enviar correos, generar reportes, registrar clientes o mover información entre sistemas. <strong>Con nuestras automatizaciones empresariales basadas en n8n, tu negocio puede operar de forma automática</strong>, conectando todas tus herramientas y ejecutando procesos sin intervención humana.
          </p>
          <div className={styles.tagsContainer}>
            <div className={styles.tag}>
              Más productivo
            </div>
            <div className={styles.tag}>
              Cero tareas repetitivas
            </div>
          </div>
        </div>
      </div>

      {/* Cuadrícula de Ejemplos */}
      <div className={styles.gridHeader}>
        <h3 className={styles.gridTitle}>Tu empresa en piloto automático</h3>
        <p className={styles.gridDesc}>Creamos flujos inteligentes que conectan tus sistemas, desde la captura hasta el reporte.</p>
      </div>

      <div className={styles.featuresGrid}>
        {features.map((feat, idx) => (
          <div key={idx} className={styles.featureCard}>
            <div className={styles.featureIconWrapper}>
              <div className={styles.featureIconInner}>{feat.icon}</div>
              <div className={styles.featureIconGlow} />
            </div>
            <h4 className={styles.featureTitle}>{feat.title}</h4>
            <p className={styles.featureDesc}>{feat.desc}</p>
            <ul className={styles.featureList}>
              {feat.items.map((item, i) => (
                <li key={i} className={styles.featureListItem}>
                  <div className={styles.featureListBullet} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Resultados y Cierre */}
      <div className={styles.resultsSection}>
        <div className={styles.resultsContent}>
          <div className={styles.resultsHeader}>
            <Puzzle size={32} className="text-accent" />
            <h3 className={styles.resultsTitle}>Automatizaciones a tu medida</h3>
          </div>
          <p className={styles.resultsDesc}>
            Cada negocio tiene procesos diferentes. Por eso analizamos cómo trabaja tu empresa y desarrollamos automatizaciones personalizadas que optimizan toda tu operación. <br /><br />
            <strong>No vendemos herramientas. Creamos sistemas que trabajan por ti.</strong>
          </p>
          <div className={styles.resultsBenefitsGrid}>
            {benefits.map((ben, idx) => (
              <div key={idx} className={styles.benefitItem}>
                <div className={styles.benefitTitleWrapper}>
                  {ben.icon} <span className={styles.benefitTitle}>{ben.title}</span>
                </div>
                <span className={styles.benefitDesc}>{ben.desc}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.ctaCard}>
          <h4 className={styles.ctaTitle}>Empieza hoy</h4>
          <p className={styles.ctaDesc}>Solicita una asesoría gratuita y descubre qué procesos pueden automatizarse en tu negocio.</p>
          <button className={styles.ctaBtn}>
            Agendar Asesoría Gratuita
          </button>
          <p className={styles.ctaFooter}><em>Tu negocio debería trabajar para ti, no al revés.</em></p>
        </div>
      </div>
    </div>
  );
}
