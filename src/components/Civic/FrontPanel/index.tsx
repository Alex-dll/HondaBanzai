/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

export function FrontPanel() {

  return (    
    <section className={styles.container}>
          <div>
            <img src="/images/mobile/Retângulo 11@2x.png" alt="Painel" className={styles.mobile} />
            <img src="/images/desktop/Grupo 74@2x.png" alt="Painel" className={styles.desktop} />
          </div>
          <div className={styles.content}>
            <h3>PREPARE-SE PARA ALGO REALMENTE NOVO</h3>
            <p>O Novo Civic Geração 10 vem completo de série. Conheça a versão perfeita para você.</p>
          </div>
    </section>
  )
}