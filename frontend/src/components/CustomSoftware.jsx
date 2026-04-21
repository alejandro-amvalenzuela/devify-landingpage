'use client';

import { Layout, Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from '../styles/components/CustomSoftware.module.css';

export default function CustomSoftware() {
  const sectionRef = useScrollReveal({ threshold: 0.1 });

  const services = [
    {
      icon: <Layout size={32} />,
      title: 'Desarrollo Web Premium',
      description: 'Construimos aplicaciones web de alto rendimiento, seguras y escalables. Desde plataformas SaaS hasta portales corporativos complejos.',
      features: ['Arquitecturas Modernas (Next.js/React)', 'SEO & Rendimiento Optimizado', 'Seguridad de Grado Empresarial', 'UX/UI de Alta Gama']
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Aplicaciones Móviles',
      description: 'Creamos experiencias móviles nativas e híbridas que cautivan a los usuarios. Enfocados en fluidez, diseño y valor de negocio.',
      features: ['iOS & Android (React Native)', 'Diseño Centrado en el Usuario', 'Integración con APIs y Cloud', 'Rendimiento Fluido']
    }
  ];

  return (
    <section className={styles.section} ref={sectionRef} id="custom-dev">
      <div className={styles.container}>
        <div className={`${styles.header} reveal-up`}>
          <span className={styles.subtitle}>Software a Medida</span>
          <h2 className={styles.title}>Transformamos tus Desafíos en Soluciones Digitales</h2>
          <p className={styles.description}>
            No solo escribimos código; diseñamos el motor tecnológico que impulsará tu negocio. Especializados en crear software robusto, escalable y con una interfaz impecable.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, idx) => (
            <div key={idx} className={`${styles.card} reveal-up delay-${(idx + 1) * 200}`}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardContent}>{service.description}</p>
              <ul className={styles.featureList}>
                {service.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <div className={styles.bullet} /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`${styles.ctaContainer} reveal-up delay-400`}>
          <a href="mailto:hello@devify.solutions" className={styles.ctaBtn}>
            Cuéntanos tu proyecto <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
