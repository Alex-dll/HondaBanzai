/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

export function Contact() {
  return (
    <aside className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contact}>
          <img src="/images/Grupo 45.svg" alt="Telefone" />
          <p>Solicitar um <br />
            <span>CONTATO</span>
          </p>
        </div>
        <form className={styles.form}>
          <div className={styles.input}>
            <input type="text" placeholder="Nome" required/>
            <img src="/images/Grupo 32.svg" alt="Pessoa" />
          </div>
          <div className={styles.input}>
            <input type="text" placeholder="E-mail" required/>
            <img src="/images/black-envelope.svg" alt="Envelope" />
          </div>
          <div className={styles.input}>
            <input type="text" placeholder="Telefone" required/>
            <img src="/images/call-answer.svg" alt="Telefone" />
          </div>
          <div className={styles.select}>
            <select name="Escolha o horário" required>
              <option disabled selected>Escolha o horário</option>
              <option value="Matutino">Matutino</option>
              <option value="Verspertino">Verspertino</option>
              <option value="Noturno">Noturno</option>
            </select>
            <img src="/images/clock-circular-outline.svg" alt="Pessoa" />
          </div>
          <div className={styles.select}>
            <select name="Escolha a unidade" required>
              <option disabled selected>Escolha a unidade</option>
              <option value="DF">DF</option>
              <option value="MG">MG</option>
              <option value="SP">SP</option>
            </select>
            <img src="/images/facebook-placeholder-for-locate-places-on-maps.svg" alt="Pessoa" />
          </div>
          <button className={styles.button}>AGENDAR TEST DRIVE</button>
        </form>
      </div>
    </aside>
  )
}