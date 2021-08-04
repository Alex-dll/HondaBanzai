/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

export function GetHonda() {

  return (
    <section className={styles.container}>
      <h1>PRONTO PARA TER UM HONDA?</h1>
      <p>Conheça os últimos grandes lançamentos da honda.</p>
      <div className={styles.cards}>
      <div className={styles.card}>
        <div className={styles.cardCar}>
          <div className={styles.cardCarMobile}>
            <img src="/images/accord@2x.png" alt="Honda Accord" />
            <p>Novo Honda Accord: a combinação perfeita de três atributos exigidos pelo consumidor: elegância, luxo e alto desempenho.</p>
            <button><img src="/images/mobile/chevron-down.svg" alt="Seta pra Baixo" /></button>
            <button className={styles.buttonDesktop}>CONHEÇA MAIS</button>
          </div>
        </div>
            <button className={styles.buttonMobile}>CONHEÇA MAIS</button>
      </div>
      <div className={`${styles.card} ${styles.cardsDesktop}`}>
        <div className={styles.cardCar}>
          <div className={styles.cardCarMobile}>
            <img src="/images/city@2x.png" alt="Honda City" />
            <p>O City está muito mais moderno e esportivo. Com design único e mais tecnológico do que nunca, ele vai conquistar todos os olhares..</p>
            <button><img src="/images/mobile/chevron-down.svg" alt="Seta pra Baixo" /></button>
            <button className={styles.buttonDesktop}>CONHEÇA MAIS</button>
          </div>
        </div>
            <button className={styles.buttonMobile}>CONHEÇA MAIS</button>
      </div>
      <div className={`${styles.card} ${styles.cardsDesktop}`}>
        <div className={styles.cardCar}>
          <div className={styles.cardCarMobile}>
            <img src="/images/fit_2018@2x.png" alt="Honda Fit" />
            <p>Com seu design inconfundível, o novo Honda Fit traz novidades que vão surpreender a todos e atrair ainda mais fãs.</p>
            <button><img src="/images/mobile/chevron-down.svg" alt="Seta pra Baixo" /></button>
            <button className={styles.buttonDesktop}>CONHEÇA MAIS</button>
          </div>
        </div>
            <button className={styles.buttonMobile}>CONHEÇA MAIS</button>
      </div>
      </div>
    </section>
  )
}