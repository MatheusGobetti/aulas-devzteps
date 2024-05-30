import styles from './Vaso.module.css';

interface VasoProps {
  color?: 'primary' | 'secondary' | 'warning' | 'danger' | 'neutral';
}

export const Vaso = ({ color = 'neutral' }: VasoProps) => {
  return (
    <button className={`${styles.vaso} ${styles[color]}`}>Vaso</button>
  )
}
