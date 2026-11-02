export const PHONE_DISPLAY = '+7 (342) 000-59-59'
export const PHONE_HREF = 'tel:+73420005959'
export const ADDRESS = 'г. Пермь, ул. Промышленная, 59'
export const HOURS = 'Пн–Сб, 9:00–20:00'
export const HOURS_NOTE = 'Воскресенье — выходной'

export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const NAV = [
  { href: '#services', label: 'Услуги' },
  { href: '#about', label: 'Сервис' },
  { href: '#process', label: 'Порядок' },
  { href: '#gallery', label: 'Пост' },
  { href: '#faq', label: 'Вопросы' },
  { href: '#contacts', label: 'Контакты' },
] as const
