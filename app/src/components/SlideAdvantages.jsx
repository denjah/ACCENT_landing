import AnimatedSection from './AnimatedSection'
import SlideFooter from './SlideFooter'
import styles from './SlideAdvantages.module.css'

const sections = [
  {
    color: 'red',
    title: 'Сервис и логистика',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="3" y="18" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="21" y="18" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M15 24h6M18 6v12M12 12l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    items: [
      'Собственные склады (Китай, Германия, РФ)',
      'Бесплатные образцы (4000+ проектов)',
      'Бесплатная доставка при регулярных поставках'
    ]
  },
  {
    color: 'navy',
    title: 'Инжиниринг',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M18 6v4M18 26v4M6 18h4M26 18h4M9.5 9.5l2.8 2.8M23.7 23.7l2.8 2.8M9.5 26.5l2.8-2.8M23.7 12.3l2.8-2.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    items: [
      'Подбор аналогов, тестирование',
      'Выезд на производство, консультации',
      'Готовые инженерные решения'
    ]
  },
  {
    color: 'red',
    title: 'Документация',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M10 4h12l8 8v20a2 2 0 01-2 2H10a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="2"/>
        <path d="M22 4v8h8M14 18h8M14 22h8M14 26h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    items: [
      'Все необходимые сертификаты и разрешения',
      'Техническая документация в комплекте'
    ]
  }
]

export default function SlideAdvantages() {
  return (
    <section className={styles.slide}>
      <div className={styles.bgDecor} />
      <div className={styles.content}>
        <AnimatedSection animation="fadeLeft" delay={0.1}>
          <h2 className={styles.heading}>
            НАШИ ПРЕИМУЩЕСТВА <span className={styles.accent}>И УСЛОВИЯ</span>
          </h2>
        </AnimatedSection>

        <div className={styles.grid}>
          {sections.map((s, i) => (
            <AnimatedSection key={i} animation="fadeUp" delay={0.2 + i * 0.15}>
              <div className={`${styles.card} ${styles[s.color]}`}>
                <div className={styles.cardIcon}>{s.icon}</div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <ul className={styles.cardList}>
                  {s.items.map((item, j) => (
                    <li key={j} className={styles.cardItem}>
                      <span className={styles.bullet} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      <SlideFooter />
    </section>
  )
}
