import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import SlideFooter from './SlideFooter'
import styles from './SlideCTA.module.css'

const benefits = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="12" width="32" height="20" rx="3" stroke="white" strokeWidth="2"/>
        <path d="M12 12V8a8 8 0 0116 0v4" stroke="white" strokeWidth="2"/>
        <path d="M20 22v4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    text: 'Прямые поставки без наценок посредников'
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="10" width="28" height="8" rx="2" stroke="white" strokeWidth="2"/>
        <rect x="6" y="22" width="28" height="8" rx="2" stroke="white" strokeWidth="2"/>
        <circle cx="12" cy="14" r="2" fill="white"/>
        <circle cx="28" cy="26" r="2" fill="white"/>
      </svg>
    ),
    text: 'Работа с дефицитом и снятыми компонентами'
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="16" width="14" height="14" rx="2" stroke="white" strokeWidth="2"/>
        <rect x="22" y="16" width="14" height="14" rx="2" stroke="white" strokeWidth="2"/>
        <path d="M11 10v6M29 10v6M18 23h4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    text: 'Собственные склады — скорость и надежность'
  }
]

export default function SlideCTA() {
  return (
    <section className={styles.slide}>
      <div className={styles.bgWrap}>
        <img src="/images/AKCENT_8.png" alt="" className={styles.bgImage} />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.mainGrid}>
          <div className={styles.leftCol}>
            <AnimatedSection animation="fadeLeft" delay={0.1}>
              <h2 className={styles.heading}>
                ГОТОВЫ ОБСУДИТЬ<br />ВАШ ПРОЕКТ?
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.3}>
              <p className={styles.subtitle}>
                Сделайте первый шаг к бесперебойным поставкам электронных компонентов.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.4}>
              <div className={styles.ctaCard}>
                <h3 className={styles.ctaTitle}>Начните с просчета</h3>
                <p className={styles.ctaDesc}>
                  Отправьте ваш <strong>BOM-лист</strong> и получите коммерческое предложение.
                </p>
                <div className={styles.ctaBadge}>
                  <span className={styles.ctaBadgeIcon}>⏰</span>
                  <span className={styles.ctaBadgeText}>Ответ за 24 часа</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.benefitsList}>
              {benefits.map((b, i) => (
                <AnimatedSection key={i} animation="fadeRight" delay={0.3 + i * 0.15}>
                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>{b.icon}</div>
                    <span className={styles.benefitText}>{b.text}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="fadeUp" delay={0.7}>
              <div className={styles.contactsBlock}>
                <a href="https://www.accentcomponent.ru" className={styles.contactUrl}>
                  WWW.ACCENTCOMPONENT.RU
                </a>
                <a href="tel:88004440438" className={styles.contactPhone}>
                  8 800 444-04-38
                </a>
                <a href="mailto:info@accentcomponent.ru" className={styles.contactEmail}>
                  INFO@ACCENTCOMPONENT.RU
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      <SlideFooter />
    </section>
  )
}
