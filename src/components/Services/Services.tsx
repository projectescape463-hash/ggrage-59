import { services } from '../../data/services'
import styles from './Services.module.css'

export function Services() {
  return (
    <section className={styles.section} id="services" aria-labelledby="services-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.intro}>
          <p className="kicker">Услуги</p>
          <h2 id="services-title">Ориентир по работам, не витрина пакетов</h2>
          <p>
            Цены ниже — старт для типовой легковой. Точную сумму называем после осмотра:
            пробег, доступ к узлу и запчасти меняют итог сильнее, чем строка в прайсе.
          </p>
        </div>
        <ol className={styles.list}>
          {services.map((service) => (
            <li key={service.id} id={service.id}>
              <span className={styles.index}>{service.index}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
              <p className={styles.price}>
                <strong>{service.price}</strong>
                <span>{service.note}</span>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
