import { principles } from '../../data/content'
import { asset } from '../../data/site'
import styles from './About.module.css'

export function About() {
  return (
    <section className={styles.section} id="about" aria-labelledby="about-title">
      <div className={styles.photo}>
        <img
          src={asset('images/brake.jpg')}
          alt="Механик осматривает двигатель легкового автомобиля в сервисе"
          width={1400}
          height={900}
        />
      </div>
      <div className={styles.copy}>
        <p className="kicker">Сервис</p>
        <h2 id="about-title">Бокс, а не «заедем на пять минут»</h2>
        <p className={styles.lead}>
          GARAGE 59 — независимая мастерская для тех, кому нужен понятный ремонт без
          дилерской очереди и без разговора шёпотом у подъёмника. Есть сканер, пост и
          привычка согласовывать работы заранее.
        </p>
        <ol className={styles.principles}>
          {principles.map((item) => (
            <li key={item.index}>
              <span>{item.index}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
