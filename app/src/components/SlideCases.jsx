import AnimatedSection from './AnimatedSection'
import SlideFooter from './SlideFooter'
import styles from './SlideCases.module.css'

const cases = [
  {
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 28l6 6 10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    category: 'Доступность и скорость',
    title: 'КП ЗА 1 ЧАС ОТ МИРОВЫХ ПОСТАВЩИКОВ',
    desc: 'Отправляйте запрос и в течение часа получите предложение от глобальных поставщиков, включая санкционные регионы',
    color: 'red'
  },
  {
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <rect x="8" y="20" width="40" height="24" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M18 20v-6a10 10 0 0120 0v6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="28" cy="32" r="4" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    category: 'Азия',
    title: 'ПРЯМЫЕ ПОСТАВКИ ИЗ КИТАЯ',
    desc: 'Качественная альтернатива европейским ценам. Выбирайте оптимальный вариант',
    color: 'navy'
  },
  {
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="20" r="8" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 42c0-6 3.6-10 8-10s8 4 8 10" stroke="currentColor" strokeWidth="2"/>
        <circle cx="16" cy="24" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="40" cy="24" r="5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    category: 'Подбор аналогов',
    title: 'ТЕХНИЧЕСКИЕ СПЕЦИАЛИСТЫ ВСЕГДА ГОТОВЫ ПОМОЧЬ',
    desc: 'Получите рекомендации по подбору аналогов от наших экспертов',
    color: 'red'
  }
]

const bottomFeatures = [
  { icon: '🛡️', text: 'Гарантия качества' },
  { icon: '🚚', text: 'Оперативная логистика' },
  { icon: '⚙️', text: 'Техническая поддержка' },
  { icon: '🏛️', text: 'Акцент — это надежно' },
]

export default function SlideCases() {
  return (
    <section className={styles.slide}>
      <div className={styles.bgOverlay} />
      <div className={styles.content}>
        <AnimatedSection animation="fadeLeft" delay={0.1}>
          <h2 className={styles.heading}>
            РЕАЛЬНЫЕ РЕШЕНИЯ <span className={styles.accent}>ДЛЯ БИЗНЕСА</span>
          </h2>
        </AnimatedSection>

        <div className={styles.grid}>
          {cases.map((c, i) => (
            <AnimatedSection key={i} animation="fadeUp" delay={0.2 + i * 0.15}>
              <div className={styles.card}>
                <div className={`${styles.cardCategory} ${styles[c.color]}`}>
                  <div className={styles.cardCatIcon}>{c.icon}</div>
                  <span>{c.category}</span>
                </div>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardDesc}>{c.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeUp" delay={0.7}>
          <div className={styles.bottomBar}>
            {bottomFeatures.map((f, i) => (
              <div key={i} className={styles.bottomItem}>
                <span className={styles.bottomIcon}>{f.icon}</span>
                <span className={styles.bottomText}>{f.text}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
      <SlideFooter />
    </section>
  )
}
