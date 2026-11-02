import { useEffect, useRef, useState } from 'react'
import { photos } from '../../data/content'
import styles from './Gallery.module.css'

type Photo = (typeof photos)[number]

export function Gallery() {
  const [current, setCurrent] = useState<Photo | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (current && !dialog.open) dialog.showModal()
    if (!current && dialog.open) dialog.close()
  }, [current])

  return (
    <section className={styles.section} id="gallery" aria-labelledby="gallery-title">
      <div className={`container ${styles.head}`}>
        <p className="kicker">Пост</p>
        <h2 id="gallery-title">Свет, металл, доступ к узлам</h2>
        <p>Кадры задают характер бокса. Это концепт, не отчёт с конкретного дня.</p>
      </div>
      <div className={styles.grid}>
        {photos.map((photo) => (
          <button
            key={photo.src}
            type="button"
            className={styles.card}
            aria-label={`Открыть фото: ${photo.caption}`}
            onClick={() => setCurrent(photo)}
          >
            <img src={photo.src} alt="" width={1400} height={900} />
            <span>
              <small>{photo.index}</small>
              {photo.caption}
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="photo-title"
        onClose={() => setCurrent(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
      >
        {current ? (
          <figure>
            <img src={current.src} alt={current.alt} />
            <figcaption>
              <span id="photo-title">{current.caption}</span>
              <small>{current.index}</small>
            </figcaption>
            <button type="button" onClick={() => dialogRef.current?.close()}>
              Закрыть
            </button>
          </figure>
        ) : null}
      </dialog>
    </section>
  )
}
