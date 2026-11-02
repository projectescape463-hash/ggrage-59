import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.brand}>
          <span>59</span> GARAGE 59
        </p>
        <p>
          Концепт для портфолио. Цены, адрес, телефон, гарантийные условия и фотографии —
          демонстрационные, не обещание действующего сервиса.
        </p>
        <a href="#top">Наверх</a>
      </div>
    </footer>
  )
}
