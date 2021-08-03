/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

export function Contact() {
  return (
    <aside className={styles.container}>
      <div className={styles.content}>
        <div>
          <img src="/images/Grupo 45.svg" alt="Telefone" />
          <p>Solicitar um <br />
            <span>CONTATO</span>
          </p>
        </div>
        <form>
          <div>
            <input type="text" placeholder="Nome" />
          </div>
          <div>
            <input type="text" placeholder="E-mail" />
          </div>
          <div>
            <input type="text" placeholder="Telefone" />
          </div>
          <div>
            <select name="Escolha o horário">
              <option disabled selected>Escolha o horário</option>
              <option value="Matutino">Matutino</option>
              <option value="Verspertino">Verspertino</option>
              <option value="Noturno">Noturno</option>
            </select>
          </div>
          <div>
            <select name="Escolha a unidade">
              <option disabled selected>Escolha a unidade</option>
              <option value="DF">DF</option>
              <option value="MG">MG</option>
              <option value="SP">SP</option>
            </select>
          </div>
          <button>AGENDAR TEST DRIVE</button>
        </form>
      </div>
    </aside>
  )
}