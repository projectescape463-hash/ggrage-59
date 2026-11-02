import { useEffect, useState } from 'react'
import { NAV, PHONE_DISPLAY, PHONE_HREF } from '../../data/site'
import styles from './Header.module.css'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a className={styles.logo} href="#top" onClick={() => setOpen(false)}>
          <span className={styles.badge}>59</span>
          <span>
            Garage
            <small>Пермь</small>
          </span>
        </a>

        <nav
          id="site-nav"
          className={`${styles.nav} ${open ? styles.open : ''}`}
          aria-label="Разделы"
        >
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className={styles.navPhone} href={PHONE_HREF}>
            {PHONE_DISPLAY}
          </a>
        </nav>

        <div className={styles.tools}>
          <a className={styles.phone} href={PHONE_HREF}>
            {PHONE_DISPLAY}
          </a>
          <a className={styles.book} href="#booking" onClick={() => setOpen(false)}>
            Запись
          </a>
          <button
            type="button"
            className={styles.burger}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className={styles.burgerLines} aria-hidden="true" />
            <span className="sr-only">{open ? 'Закрыть меню' : 'Открыть меню'}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
