'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import Modal from './common/Modal';
import Checkbox from './common/Checkbox';
import styles from '../styles/components/PricingModal.module.css';

export default function PricingModal({ isOpen, onClose, product }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'mensual', 'semestral', 'anual'
  const [selectedAddons, setSelectedAddons] = useState({});

  if (!isOpen || !product) return null;

  // Formateador de precios (CLP)
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL').format(price);
  };

  // Modificadores de precio
  const getMultiplier = () => {
    if (billingCycle === 'biannual') return 6 * 0.9; // 10% de descuento
    if (billingCycle === 'annual') return 12 * 0.8; // 20% de descuento
    return 1;
  };

  const getCycleLabel = () => {
    if (billingCycle === 'biannual') return '/semestre';
    if (billingCycle === 'annual') return '/año';
    return '/mes';
  };

  const toggleAddon = (addonId) => {
    setSelectedAddons(prev => ({
      ...prev,
      [addonId]: !prev[addonId]
    }));
  };

  const calculateAddonsTotal = () => {
    return product.addons.reduce((total, addon) => {
      return total + (selectedAddons[addon.id] ? (addon.monthlyPrice * getMultiplier()) : 0);
    }, 0);
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={`Planes para ${product.title}`}
      description="Elige el plan y complementos que mejor se adapten a tu negocio."
      maxWidth="1200px"
    >
      {/* Selector de Ciclo de Facturación */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
        <div className={styles.billingToggle}>
          <button 
            onClick={() => setBillingCycle('monthly')}
            className={`${styles.billingBtn} ${billingCycle === 'monthly' ? styles.billingBtnActive : styles.billingBtnInactive}`}>
            Mensual
          </button>
          <button 
            onClick={() => setBillingCycle('biannual')}
            className={`${styles.billingBtn} ${billingCycle === 'biannual' ? styles.billingBtnActive : styles.billingBtnInactive}`}>
            Semestral <span className={styles.discountBadge}>-10%</span>
          </button>
          <button 
            onClick={() => setBillingCycle('annual')}
            className={`${styles.billingBtn} ${billingCycle === 'annual' ? styles.billingBtnActive : styles.billingBtnInactive}`}>
            Anual <span className={styles.discountBadge}>-20%</span>
          </button>
        </div>
      </div>

      {/* Tarjetas de Precios */}
      <div className={styles.plansGrid}>
        {product.plans.map((plan, idx) => {
          const basePrice = plan.monthlyPrice * getMultiplier();
          const addonsTotal = calculateAddonsTotal();
          const finalPrice = basePrice + addonsTotal;

          return (
            <div key={idx} className={`${styles.planCard} ${plan.isPopular ? styles.planCardPopular : styles.planCardRegular}`}>
              {plan.isPopular && (
                <div className={styles.popularBadge}>
                  MÁS POPULAR
                </div>
              )}
              
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>{plan.name}</h3>
              <p className="text-secondary" style={{ marginBottom: '2rem', height: '48px' }}>{plan.description}</p>
              
              <div style={{ marginBottom: '2.5rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: 800 }}>${formatPrice(finalPrice)}</span>
                <span className="text-secondary" style={{ marginLeft: '4px' }}>{getCycleLabel()}</span>
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', flexGrow: 1 }}>
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Check size={20} className="text-accent" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ lineHeight: 1.5 }}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`btn ${plan.isPopular ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%' }}>
                Seleccionar {plan.name}
              </button>
            </div>
          );
        })}
      </div>

      {/* Sección de Complementos (Add-ons) */}
      <div className={styles.addonsSection}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Complementos Adicionales</h3>
        <p className="text-secondary" style={{ marginBottom: '2rem' }}>Mejora tu plan con estas funciones extra (El costo se suma a todos los planes).</p>
        
        <div className={styles.addonsGrid}>
          {product.addons.map(addon => {
            const addonPrice = addon.monthlyPrice * getMultiplier();
            const isSelected = selectedAddons[addon.id];
            
            return (
              <label key={addon.id} className={`${styles.addonLabel} ${isSelected ? styles.addonSelected : styles.addonUnselected}`}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Checkbox 
                    checked={isSelected || false}
                    onChange={() => toggleAddon(addon.id)}
                  />
                  <div>
                    <h4 style={{ fontWeight: 600 }}>{addon.name}</h4>
                    <p className="text-secondary" style={{ fontSize: '0.9rem' }}>{addon.description}</p>
                  </div>
                </div>
                <div style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>
                  +${formatPrice(addonPrice)} <span style={{ fontSize: '0.8rem', fontWeight: 400 }}>{getCycleLabel()}</span>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </Modal>
  );
}  );
}
