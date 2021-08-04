/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

export function Contacts() {
  return (
    <section className={styles.container}>
      <div className={styles.carts}>
        <div className={styles.cart1}>
          <img src="/images/facebook-placeholder-for-locate-places-on-maps.svg" alt="Pin" />
          <p>Encontre uma <br />
            <strong>CONCESSIONÁRIA</strong>
          </p>
        </div>
        <div className={styles.cart2}>
          <p>CENTRAL DE ATENDIMENTO<br />
            <strong>(31) 3123-1234</strong>
          </p>
        </div>
      </div>
      <h2>SIGA A BANZAI NAS REDES SOCIAIS</h2>
      <div className={styles.social}>
        <img src="/images/Caminho 87.svg" alt="Facebook" />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        <img src="/images/Grupo 81.svg" alt="Twitter" />
      </div>
    </section>
  )
}