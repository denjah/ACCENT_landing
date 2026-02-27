import AnimatedSection from './AnimatedSection'
import SlideFooter from './SlideFooter'
import styles from './SlideSolutions.module.css'

const problems = [
  {
    number: '01',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="#A41E22" strokeWidth="2"/>
        <path d="M16 16l16 16M32 16L16 32" stroke="#A41E22" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    pains: [
      'Срывы сроков поставок',
      'Риски контрафакта',
      'Сложная таможенная очистка'
    ],
    solutionTitle: 'Прямые поставки со складов',
    solutions: [
      'Собственные склады: Китай, Германия, СПб, Новосибирск',
      'Работа под товарной маркой «Китэй» и глобальных брендов',
      'Отгрузка в день заказа при наличии на складе'
    ]
  },
  {
    number: '02',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="12" width="32" height="6" rx="2" stroke="#A41E22" strokeWidth="2"/>
        <path d="M12 18v16h24V18" stroke="#A41E22" strokeWidth="2"/>
        <path d="M20 26h8M24 22v8" stroke="#A41E22" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    pains: [
      'Простой производства из-за отсутствия деталей',
      'Снятие компонентов с производства (EOL)',
      'Санкционные ограничения'
    ],
    solutionTitle: 'Работа с редкими позициями',
    solutions: [
      'Поставка снятых с производства компонентов',
      'Работа с санкционной продукцией',
      'Прямые и брокерские каналы поиска'
    ]
  },
  {
    number: '03',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="18" r="8" stroke="#A41E22" strokeWidth="2"/>
        <path d="M24 26v8M18 38c0-4 2.7-6 6-6s6 2 6 6" stroke="#A41E22" strokeWidth="2" strokeLinecap="round"/>
        <path d="M36 30l-4 4M12 30l4 4" stroke="#A41E22" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    pains: [
      'Неверие в качество без тестов',
      'Кассовые разрывы',
      'Нет места для хранения запасов'
    ],
    solutionTitle: 'Инженерная поддержка и гибкость',
    solutions: [
      'Бесплатные образцы для тестирования в лаборатории',
      'Финансовая гибкость, индивидуальные условия',
      'Ответственное хранение товара на нашем складе'
    ]
  }
]

export default function SlideSolutions() {
  return (
    <section className={styles.slide}>
      <div className={styles.content}>
        <AnimatedSection animation="fadeLeft" delay={0.1}>
          <h2 className={styles.heading}>
            РЕШЕНИЯ, КОТОРЫЕ<br />
            <span className={styles.accent}>ЗАКРЫВАЮТ ВАШИ ЗАДАЧИ</span>
          </h2>
        </AnimatedSection>

        <div className={styles.grid}>
          {problems.map((p, i) => (
            <AnimatedSection key={i} animation="fadeUp" delay={0.2 + i * 0.15}>
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>{p.icon}</div>
                    <span className={styles.problemLabel}>ПРОБЛЕМА №{p.number}</span>
                  </div>
                  <ul className={styles.painList}>
                    {p.pains.map((pain, j) => (
                      <li key={j} className={styles.painItem}>{pain}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.arrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4v16M6 14l6 6 6-6" stroke="#A41E22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.cardBottom}>
                  <h4 className={styles.solutionTitle}>{p.solutionTitle}</h4>
                  <ul className={styles.solutionList}>
                    {p.solutions.map((sol, j) => (
                      <li key={j} className={styles.solutionItem}>
                        <span className={styles.bullet} />
                        {sol}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      <SlideFooter />
    </section>
  )
}
