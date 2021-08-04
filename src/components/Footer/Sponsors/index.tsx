/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

export function Sponsors() {
  return (
    <section className={styles.container}>
        <img src="/images/logo.png" alt="Logo Honda" />
      <div className={styles.ibama}>
        <p>Todos juntos fazem um trânsito melhor</p>
        <img src="/images/logo_ibama@2x.png" alt="Logo Ibama" />
      </div>
    </section>
  )
}