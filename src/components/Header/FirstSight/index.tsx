/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

export function FirstSight() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <img src="/images/logo.png" alt="Honda Banzai" />
        <div>
          <p>CENTRAL DE ATENDIMENTO</p>
          <strong>(31) 3123-1234</strong>
        </div>
      </div>
    </section>
  )
} 