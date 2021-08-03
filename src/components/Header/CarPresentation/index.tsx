/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

export function CarPresentation() {
  return (
    <section className={styles.container}>
        <div></div>
        <img 
          src="/images/mobile/Civic_EXL_2017_3_4_Lado_A_Preto_72dpi@2x.png" 
          alt="Carro Civic" 
          className={styles.car}
        />
        <img 
          src="/images/mobile/Grupo 98.svg"
          alt="Carro Civic" 
          className={styles.nameCar}
        />
    </section>
  )
}