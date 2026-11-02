import { asset } from '../../data/site'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.top}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Независимый автосервис</p>
          <div>
            <h1 id="hero-title" className={styles.title}>
              <span>Сначала</span>
              <span className={styles.accent}>диагноз.</span>
              <span>Потом смета.</span>
            </h1>
            <p className={styles.lead}>
              Легковые автомобили: диагностика, ремонт и плановое ТО. Объясняем поломку
              обычным языком и называем стоимость до того, как возьмёмся за ключ.
            </p>
            <div className={styles.actions}>
              <a className="btn" href="#booking">
                Записаться на диагностику
              </a>
              <a className={styles.textLink} href="#services">
                Смотреть услуги и цены
              </a>
            </div>
          </div>
        </div>
        <div className={styles.media}>
          <img
            src={asset('images/hero.jpg')}
            alt="Приводные ремни и ролики двигателя крупным планом"
            width={1800}
            height={1200}
            fetchPriority="high"
          />
          <p className={styles.film}>Пост 59</p>
        </div>
      </div>
      <dl className={styles.meta}>
        <div>
          <dt>Город</dt>
          <dd>Пермь</dd>
        </div>
        <div>
          <dt>Режим</dt>
          <dd>Пн–Сб, 9:00–20:00</dd>
        </div>
        <div>
          <dt>Адрес</dt>
          <dd>ул. Промышленная, 59</dd>
        </div>
      </dl>
    </section>
  )
}
