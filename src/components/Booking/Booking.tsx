import { useState } from 'react'
import type { FormEvent } from 'react'
import { services } from '../../data/services'
import { PHONE_DISPLAY, PHONE_HREF } from '../../data/site'
import styles from './Booking.module.css'

type Fields = {
  name: string
  phone: string
  car: string
  service: string
  date: string
  comment: string
}

type Errors = Partial<Record<keyof Fields, string>>

const empty: Fields = {
  name: '',
  phone: '',
  car: '',
  service: '',
  date: '',
  comment: '',
}

function todayIso() {
  const date = new Date()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}

function validate(values: Fields): Errors {
  const errors: Errors = {}
  if (values.name.trim().length < 2) errors.name = 'Укажите имя'
  if (values.phone.replace(/\D/g, '').length < 10) errors.phone = 'Нужен телефон из 10–11 цифр'
  if (values.car.trim().length < 2) errors.car = 'Напишите марку и модель'
  if (!values.service) errors.service = 'Выберите, с чем приедете'
  if (!values.date) errors.date = 'Выберите удобный день'
  return errors
}

export function Booking() {
  const [values, setValues] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [done, setDone] = useState(false)

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setValues((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next = validate(values)
    setErrors(next)
    const first = Object.keys(next)[0]
    if (first) {
      document.getElementById(first)?.focus()
      return
    }
    setDone(true)
  }

  return (
    <section className={styles.section} id="booking" aria-labelledby="booking-title">
      <div className={`container ${styles.layout}`}>
        <div>
          <p className="kicker">Запись</p>
          <h2 id="booking-title">Поставьте машину на диагностику</h2>
          <p className={styles.lead}>
            Опишите симптом в двух словах. Мы перезвоним и подтвердим время. Форма
            демонстрационная: данные остаются на этой странице и никуда не отправляются.
          </p>
          <p className={styles.phoneLine}>
            Или сразу по телефону{' '}
            <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
          </p>
        </div>

        {done ? (
          <div className={styles.success} role="status">
            <p className={styles.successMark}>59</p>
            <h3>Заявка собрана</h3>
            <p>
              {values.name.trim()}, для {values.car.trim()} выбран день {values.date}. В
              рабочей версии сервиса здесь ушло бы подтверждение администратору. Сейчас
              сообщение никуда не передаётся.
            </p>
            <button
              type="button"
              className="btn"
              onClick={() => {
                setValues(empty)
                setDone(false)
              }}
            >
              Заполнить ещё раз
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={onSubmit} noValidate>
            <div className={styles.field}>
              <label htmlFor="name">Имя</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                value={values.name}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                onChange={(event) => update('name', event.target.value)}
              />
              {errors.name ? <p id="name-error">{errors.name}</p> : null}
            </div>
            <div className={styles.field}>
              <label htmlFor="phone">Телефон</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+7"
                value={values.phone}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                onChange={(event) => update('phone', event.target.value)}
              />
              {errors.phone ? <p id="phone-error">{errors.phone}</p> : null}
            </div>
            <div className={styles.field}>
              <label htmlFor="car">Марка и модель</label>
              <input
                id="car"
                name="car"
                autoComplete="off"
                placeholder="Например, Kia Ceed"
                value={values.car}
                aria-invalid={Boolean(errors.car)}
                aria-describedby={errors.car ? 'car-error' : undefined}
                onChange={(event) => update('car', event.target.value)}
              />
              {errors.car ? <p id="car-error">{errors.car}</p> : null}
            </div>
            <div className={styles.field}>
              <label htmlFor="service">С чем приедете</label>
              <select
                id="service"
                name="service"
                value={values.service}
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? 'service-error' : undefined}
                onChange={(event) => update('service', event.target.value)}
              >
                <option value="">Выберите</option>
                <option value="Пока не знаю">Пока не знаю — нужна диагностика</option>
                {services.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
              {errors.service ? <p id="service-error">{errors.service}</p> : null}
            </div>
            <div className={`${styles.field} ${styles.full}`}>
              <label htmlFor="date">Удобный день</label>
              <input
                id="date"
                name="date"
                type="date"
                min={todayIso()}
                value={values.date}
                aria-invalid={Boolean(errors.date)}
                aria-describedby={errors.date ? 'date-error' : undefined}
                onChange={(event) => update('date', event.target.value)}
              />
              {errors.date ? <p id="date-error">{errors.date}</p> : null}
            </div>
            <div className={`${styles.field} ${styles.full}`}>
              <label htmlFor="comment">Симптом, если уже понятен</label>
              <textarea
                id="comment"
                name="comment"
                rows={4}
                maxLength={500}
                value={values.comment}
                onChange={(event) => update('comment', event.target.value)}
              />
            </div>
            <div className={styles.submit}>
              <button type="submit" className="btn">
                Оставить заявку
              </button>
              <p>Демо. Нажимая кнопку, вы ничего не отправляете на сервер.</p>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
