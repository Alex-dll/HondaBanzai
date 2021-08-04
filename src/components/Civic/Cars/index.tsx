/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

export function Cars() {
  return (
    <section className={styles.container}>
      <h1>A EMOÇÃO DE DIRIGIR LEVA VOCÊ MAIS LONGE</h1>
      <div>
        <aside>
          <img src="/images/desktop/Retângulo 16@2x.png" alt="Lateral do Carro" />
          <img src="/images/desktop/Retângulo 19@2x.png" alt="Trazeira do Carro" />
          <img src="/images/desktop/Retângulo 21@2x.png" alt="Frente do Carro" />
        </aside>
          <img src="/images/juntosi@2x.png" alt="2 Hondas" />
      </div>
      <p>
        O novo Civic Geração 10 traz um design único mudando a categoria de sedãs para sempre.
         Ele garante a melhor dirigibilidade com o máximo em sofisticação e conforto, 
         atribuído por seu design interno e diferenciada ergonomia.
      </p>
    </section>
  )
}