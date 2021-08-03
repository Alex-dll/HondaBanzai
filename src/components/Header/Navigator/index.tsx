/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

export function Navigator() {
  return (
    <div className={styles.container}>
      <nav className={styles.content}>
        <ul>
          <img src="/images/home-button.svg" alt="Ir para o Portal Banzai" />
          <p>Ir para o Portal Banzai</p>
        </ul>
        <div>
          <ul>
            <img src="/images/facebook-placeholder-for-locate-places-on-maps.svg" alt="Encontre uma concessionária" />
            <p>Encontre uma concessionária</p>
          </ul>
          <ul>
            <img src="/images/black-envelope.svg" alt="Fale Conosco" />
            <p>Fale Conosco</p>
          </ul>
        </div>
      </nav>
    </div>
  )
}