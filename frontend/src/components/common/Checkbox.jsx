import { Check } from 'lucide-react';
import styles from '../../styles/components/Checkbox.module.css';

export default function Checkbox({ checked, onChange }) {
  return (
    <div className={styles.checkboxWrapper}>
      <div className={`${styles.checkboxVisual} ${checked ? styles.checked : styles.unchecked}`}>
        {checked && <Check size={16} color="var(--white)" strokeWidth={3} />}
      </div>
      <input 
        type="checkbox" 
        checked={checked}
        onChange={onChange}
        className={styles.hiddenInput}
      />
    </div>
  );
}
