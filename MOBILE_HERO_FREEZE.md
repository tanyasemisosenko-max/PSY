# FREEZE — mobile hero · экран 1 · `.hero-section` / `#hero`

**Дата freeze:** 2026-05-18  
**Статус:** draft / needs mobile rebuild validation  

Mobile hero cannot be considered final yet. The issue is not only screen width, but the original desktop layout logic. Hero must be validated as part of the full mobile rebuild on 360 / 375 / 390 / 414 / 430px.

**Утверждающий коммит:** `1b483de` — *Mobile hero full layout for small screens*  
**Desktop:** без изменений — см. `SCREENS_1-10_FREEZE.md` (1448×1086, `@media (min-width: 961px)`)

---

## Правило

Без нового ТЗ с пометкой **mobile hero** не менять mobile-стили первого экрана в `styles.css` (блоки `@media (max-width: 960px)` и `@media (max-width: 640px)` для hero), а также не ломать утверждённое поведение через правки HTML/JS hero.

**Разрешено:** mobile-правки экранов 2–10, если они не затрагивают селекторы `.hero-section` / `#hero` и не переопределяют hero на mobile.

**Запрещено:** менять desktop hero (≥961px), тексты hero в `index.html`, форму/Google Sheets/Telegram.

---

## Breakpoints

| Диапазон | Назначение |
|----------|------------|
| **≤640px** | **Утверждённый mobile hero** — полноценный вертикальный экран (основной freeze) |
| **641–960px** | Промежуточный tablet/mobile shell для hero (базовые правила ≤960; не отменять без ТЗ) |
| **≥961px** | Desktop freeze — не трогать |

---

## HTML (заморожённая структура)

Секция: `<section class="hero-section">` (до `<main id="top">`).

Порядок блоков:

1. `img.hero-left-composition` (на mobile скрыт CSS)
2. `header.site-header` — логотип «Примерочная себя» (nav и header CTA на mobile скрыты)
3. `.hero` → `.hero-content` (h1, описание, actions, note) → `.hero-photo` → `.hero-benefits` (на ≤640 скрыт)

**Единственная CTA в потоке hero:**  
`<a class="button-primary" href="#contact">Записаться на первую встречу</a>`

**Скрыта на mobile:**  
`<a class="button-secondary" href="#requests">Посмотреть, с чем можно прийти</a>`

---

## CSS — где зафиксировано (`styles.css`)

| Блок | Строки (ориентир) | Файл |
|------|-------------------|------|
| Mobile shell ≤960 (hero + общее) | ~5028–5204 | `styles.css` |
| **Mobile hero утверждённый ≤640** | ~5206–5298 | `styles.css` |
| Viewport | `index.html` meta viewport | без изменений |

---

## Зафиксированное поведение (≤640px)

### 1. Вертикальный экран

- `.hero-section`: `background: #fbf6f0`, `padding: 32px 22px 56px`, `min-height: auto`, `overflow-x: hidden`
- `.hero`: `display: flex`, `flex-direction: column`, `width/max-width: 100%`
- `.hero-content`: `padding: 0`, ширина 100%

### 2. Логотип

- `.hero-section .site-header`: видим (`display: block !important` из блока ≤960), на ≤640 — `padding: 0`, без desktop-градиента
- `.hero-section .logo`: `font-size: 32px`, `margin-bottom: 42px`, перенос строк, без обрезки

### 3. Заголовок h1

- `.hero-section .hero-title` / `#hero h1`: `font-size: 38px`, `line-height: 1.08`, `text-align: left`, `max-width: 100%`, `margin: 0 0 24px`, без desktop-transform

### 4. Подзаголовок

- `.hero-section .hero-description`: `font-size: 20px`, `line-height: 1.45`, `margin: 0 0 32px`, `text-align: left`, `max-width: 100%`

### 5. Одна CTA

- `.hero-section .button-secondary` — скрыт
- `.hero-section .button-primary`: в потоке, `max-width: 340px`, `height: 58px`, `font-size: 18px`, `margin-bottom: 48px`, текст «Записаться на первую встречу»

### 6. Скрытие desktop-декора

- `.hero-section .hero-left-composition` — скрыт
- `.hero-section .hero-benefits` — скрыт
- nav и header «Записаться» в hero — скрыты (≤960)

### 7. Нет sticky CTA

- `.mobile-cta` и аналоги — скрыты
- `body { padding-bottom: 0 }` — нет отступа под fixed-кнопку

### 8. Нет горизонтального скролла

- `overflow-x: hidden` на html/hero/section/container
- ширины 100%, без 1448px shell на mobile

### 9. Отступ до экрана 2

- `.recognition-section`: `margin-top: 32px`, `padding-top: 32px`

---

## Чеклист приёмки (390px)

- Логотип целиком
- Нет кнопки «Записаться» в шапке hero
- Одна CTA в hero
- Нет нижней fixed `.mobile-cta`
- Нет горизонтального скролла
- Desktop ≥961px без изменений

---

## Связанные документы

- `SCREENS_1-10_FREEZE.md` — desktop
- `SCREEN_10_CONTACT_FREEZE.md` — экран 10

**Mobile hero — draft; rebuild validation pending (с 2026-05-18).**