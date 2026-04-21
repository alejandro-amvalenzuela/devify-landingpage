import { X } from 'lucide-react';
import styles from '../../styles/components/Modal.module.css';

export default function Modal({ isOpen, onClose, title, description, children, maxWidth = '1200px' }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.overlayBackground}></div>

      <div className={styles.modalWindow} style={{ maxWidth }}>
        {/* Cabezal */}
        <div className={styles.header}>
          <div className={styles.headerBackground}></div>
          <div className={styles.headerContent}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)' }}>{title}</h2>
            {description && <p className="text-secondary">{description}</p>}
          </div>
          <button onClick={onClose} className={styles.closeButton}>
            <X size={24} />
          </button>
        </div>

        {/* Cuerpo */}
        <div className={styles.body}>
          {children}
        </div>
      </div>
    </div>
  );
}
