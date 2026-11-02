import { ADDRESS, HOURS, HOURS_NOTE, PHONE_DISPLAY, PHONE_HREF } from '../../data/site'
import styles from './Contacts.module.css'

export function Contacts() {
  return (
    <section className={styles.section} id="contacts" aria-labelledby="contacts-title">
      <h2 id="contacts-title" className="sr-only">
        Контакты
      </h2>
      <div className={`container ${styles.grid}`}>
        <div>
          <h3>Как добраться</h3>
          <p>{ADDRESS}</p>
          <p className={styles.note}>Адрес демонстрационный.</p>
        </div>
        <div>
          <h3>Часы</h3>
          <p>{HOURS}</p>
          <p className={styles.note}>{HOURS_NOTE}</p>
        </div>
        <div>
          <h3>Телефон</h3>
          <p>
            <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
          </p>
          <p className={styles.note}>Номер демонстрационный.</p>
        </div>
      </div>
    </section>
  )
}
