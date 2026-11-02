import { useState } from 'react'
import { faqs } from '../../data/content'
import styles from './Faq.module.css'

export function Faq() {
  const [openId, setOpenId] = useState<number | null>(0)

  return (
    <section className={styles.section} id="faq" aria-labelledby="faq-title">
      <div className={styles.wrap}>
        <p className="kicker">Вопросы</p>
        <h2 id="faq-title">Коротко, до того как звонить</h2>
        <div className={styles.list}>
          {faqs.map((item, index) => {
            const open = openId === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`
            return (
              <div key={item.q} className={styles.item}>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenId(open ? null : index)}
                >
                  {item.q}
                  <span aria-hidden="true">{open ? '–' : '+'}</span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`${styles.panel} ${open ? styles.open : ''}`}
                >
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
