import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import SlideFooter from './SlideFooter'
import styles from './SlideHero.module.css'

const features = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="4" width="32" height="32" rx="4" stroke="#A41E22" strokeWidth="2"/>
        <text x="20" y="26" textAnchor="middle" fill="#A41E22" fontSize="18" fontWeight="900" fontFamily="Montserrat">15</text>
      </svg>
    ),
    title: '15 лет',
    desc: 'стабильных поставок комплектующих по микроэлектронике'
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" stroke="#A41E22" strokeWidth="2"/>
        <path d="M14 20l4 4 8-8" stroke="#A41E22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Эксклюзивный дистрибьютор',
    desc: 'известных брендов'
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="14" r="6" stroke="#A41E22" strokeWidth="2"/>
        <circle cx="12" cy="28" r="4" stroke="#A41E22" strokeWidth="1.5"/>
        <circle cx="28" cy="28" r="4" stroke="#A41E22" strokeWidth="1.5"/>
        <path d="M20 20v4M16 26l-2-2M24 26l2-2" stroke="#A41E22" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Работаем с крупными клиентами',
    desc: '(включая ВПК) и малым бизнесом'
  }
]

const bottomFeatures = [
  { icon: '📦', text: 'Прямые поставки от производителей и глобальных складов' },
  { icon: '🔍', text: 'Дефицитные позиции: редкие и снятые с производства компоненты' },
  { icon: '🌍', text: 'Собственные склады в Китае, Германии, СПб, Новосибирске' },
]

export default function SlideHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgWrap}>
        <motion.img
          src="/images/AKCENT_1.png"
          alt=""
          className={styles.bgImage}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.topBar}>
        <img src="/accent_logo.png" alt="Акцент" className={styles.logo} />
        <div className={styles.topRight}>
          <span className={styles.bracket}>[</span>
          <div>
            <div className={styles.sloganTop}>КОМПОНЕНТ ВАШЕГО УСПЕХА</div>
            <div className={styles.sloganUrl}>www.accentcomponent.ru</div>
          </div>
          <span className={styles.bracket}>]</span>
        </div>
      </div>

      <div className={styles.content}>
        <AnimatedSection animation="fadeDown" delay={0.2}>
          <p className={styles.tagline}>КОМПОНЕНТ ВАШЕГО УСПЕХА</p>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={0.4}>
          <h1 className={styles.heading}>
            КОМПАНИЯ<br />
            <span className={styles.headingAccent}>«АКЦЕНТ»</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={0.6}>
          <p className={styles.subtitle}>
            Комплексные поставки оборудования<br />
            и компонентов напрямую от ведущих<br />
            производителей со всего мира
          </p>
        </AnimatedSection>

        <div className={styles.features}>
          {features.map((f, i) => (
            <AnimatedSection key={i} animation="fadeUp" delay={0.8 + i * 0.15}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <SlideFooter />
    </section>
  )
}
