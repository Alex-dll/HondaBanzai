/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

export function CarDetails() {
  
  return (
    <section className={styles.container}>
      <div className={styles.containerCart}>
        <div className={styles.cart}>
          <img src="/images/07-DIRECAO_ELETRICA@2x.png" alt="Direção Eletrica" />
          <h3>Direção com Assistência</h3>
          <p>Sistema de estabilidade reforça automaticamente o retorno da direção, auxiliando o motorista em situações onde o carro está ameaçado de instabilidade.</p>
        </div>
        <div className={styles.cart2}>
          <img src="/images/08-VIDROS_ELETRICOS@2x.png" alt="Vidros Eletricos" />
          <h3>Vidros elétricos com subida</h3>
          <p>Todas as portas possuem vidros elétricos com a fução &#34;um toque&#34; e sistema de segurança antiesmagamento.</p>
        </div>
        <div className={styles.cart3}>
          <img src="/images/01-CAMBIO_AUTOMATICO@2x.png" alt="Cambio automatico" />
          <h3>Direção com Assistência</h3>
          <p>O câmbio com transmissão CVT de 7 velocidade com Paddle Shift (aletas) proporciona conforto ao trocar de marchas.</p>
        </div>
      </div>
    </section>
  ) 
}