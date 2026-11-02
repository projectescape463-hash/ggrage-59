import { steps } from '../../data/content'
import styles from './Process.module.css'

export function Process() {
  return (
    <section className={styles.section} id="process" aria-labelledby="process-title">
      <div className="container">
        <p className="kicker">Порядок</p>
        <h2 id="process-title">Пять шагов, без сюрприза в счёте</h2>
        <ol className={styles.steps}>
          {steps.map((step) => (
            <li key={step.index}>
              <span>{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
