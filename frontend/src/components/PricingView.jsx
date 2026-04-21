'use client';

import { useState } from 'react';
import { Check, Sparkles, ShieldCheck } from 'lucide-react';
import Checkbox from './common/Checkbox';
import styles from '../styles/components/PricingView.module.css';

export default function PricingView({ product }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly', 'biannual', 'annual'
  const [selectedAddons, setSelectedAddons] = useState([]);

  const handleAddonChange = (addonId) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) ? prev.filter(id => id !== addonId) : [...prev, addonId]
    );
  };

  const calculatePrice = (baseMonthlyPrice) => {
    let multiplier = 1;
    let discount = 0;
    
    if (billingCycle === 'biannual') {
      multiplier = 6;
      discount = 0.10; // 10% de descuento
    } else if (billingCycle === 'annual') {
      multiplier = 12;
      discount = 0.20; // 20% de descuento
    }

    const planTotal = (baseMonthlyPrice * multiplier) * (1 - discount);
    
    // Calcular complementos (add-ons)
    const addonsTotal = product.addons
      .filter(a => selectedAddons.includes(a.id))
      .reduce((sum, addon) => sum + (addon.monthlyPrice * multiplier * (1 - discount)), 0);

    return Math.round(planTotal + addonsTotal);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL').format(price);
  };

  const getPriceLabel = () => {
    if (billingCycle === 'monthly') return '/ mes';
    if (billingCycle === 'biannual') return '/ semestral';
    if (billingCycle === 'annual') return '/ anual';
  };

  if (!product) return null;

  return (
    <div className={`container animate-fade-in-up ${styles.viewContainer}`}>
      {/* Información del Cabezal */}
      <div className={`text-center ${styles.headerContainer}`}>
        <div className={styles.headerGlow} />
        <span className={styles.badge}>
          Precios Flexibles
        </span>
        <h2 className={styles.title}>
          Planes para <span className={styles.titleHighlight}>{product.title}</span>
        </h2>
        <p className={`text-secondary ${styles.subtitle}`}>
          Elige el plan y complementos que mejor se adapten a tu negocio. Ahorra hasta un <strong>20%</strong> con planes anuales.
        </p>
      </div>

      {/* Selector de Ciclo de Facturación */}
      <div className={styles.cycleSelectorWrapper}>
        <div className={styles.cycleSelectorInner}>
          {[
            { id: 'monthly', label: 'Mensual', badge: null },
            { id: 'biannual', label: 'Semestral', badge: '-10%' },
            { id: 'annual', label: 'Anual', badge: '-20%' }
          ].map((cycle) => (
            <button
              key={cycle.id}
              onClick={() => setBillingCycle(cycle.id)}
              className={`${styles.cycleBtn} ${billingCycle === cycle.id ? styles.cycleBtnActive : styles.cycleBtnInactive}`}
            >
              {cycle.label}
              {cycle.badge && (
                <span className={`${styles.cycleBadge} ${billingCycle === cycle.id ? styles.cycleBadgeActive : styles.cycleBadgeInactive}`}>
                  {cycle.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tarjetas de Precios */}
      <div className={styles.plansGrid}>
        {product.plans.map((plan, idx) => (
          <div key={idx} className={`${styles.planCard} ${plan.isPopular ? styles.planPopular : styles.planRegular}`}>
            {plan.isPopular && <div className={styles.planPopularBg} />}
            {plan.isPopular && (
              <div className={styles.planPopularBadge}>
                <Sparkles size={14} /> Más Popular
              </div>
            )}
            
            <h3 className={styles.planName}>{plan.name}</h3>
            <p className={`text-secondary ${styles.planDesc}`}>{plan.description}</p>
            
            <div className={styles.planPriceWrapper}>
              <span className={styles.planPrice}>${formatPrice(calculatePrice(plan.monthlyPrice))}</span>
              <span className={`text-secondary ${styles.planCycle}`}> {getPriceLabel()}</span>
            </div>

            <button className={`${styles.planBtn} ${plan.isPopular ? styles.planBtnPopular : styles.planBtnRegular}`}>
              Comenzar con {plan.name}
            </button>

            <ul className={styles.planFeatures}>
              {plan.features.map((feat, i) => (
                <li key={i} className={styles.planFeatureItem}>
                  <div className={`${styles.featureIconWrapper} ${plan.isPopular ? styles.featureIconPopular : styles.featureIconRegular}`}>
                    <Check size={16} />
                  </div>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Sección de Complementos (Add-ons) */}
      {product.addons && product.addons.length > 0 && (
        <div className={styles.addonsContainer}>
          <div className={styles.addonsGlow} />

          <div className={styles.addonsHeader}>
            <div className={styles.addonsIconWrapper}>
              <ShieldCheck size={28} />
            </div>
            <h3 className={styles.addonsTitle}>Complementos Exclusivos</h3>
          </div>
          
          <p className={`text-secondary ${styles.addonsDesc}`}>
            Personaliza y potencia tu plan agregando herramientas avanzadas a tu suscripción. Selecciónalos para incluirlos en el cálculo total.
          </p>
          
          <div className={styles.addonsGrid}>
            {product.addons.map((addon) => (
              <label 
                key={addon.id} 
                className={`${styles.addonCard} ${selectedAddons.includes(addon.id) ? styles.addonSelected : styles.addonUnselected}`}
              >
                {selectedAddons.includes(addon.id) && <div className={styles.addonCornerTriangle} />}
                
                <Checkbox 
                  checked={selectedAddons.includes(addon.id)}
                  onChange={() => handleAddonChange(addon.id)}
                />

                <div className={styles.addonContentWrapper}>
                  <h4 className={styles.addonName}>{addon.name}</h4>
                  <p className="text-secondary" style={{ fontSize: '0.95rem', marginBottom: '1rem', lineHeight: 1.5 }}>
                    {addon.description}
                  </p>
                  <span className={styles.addonPriceBadge}>
                    +${formatPrice(addon.monthlyPrice)}/mes
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
