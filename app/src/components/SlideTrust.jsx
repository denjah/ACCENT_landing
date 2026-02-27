import AnimatedSection from './AnimatedSection'
import SlideFooter from './SlideFooter'
import styles from './SlideTrust.module.css'

const credentials = [
  {
    icon: '/icons/icon_palata.svg',
    title: 'Член ТПП РФ',
    desc: 'Торгово-промышленная палата Российской Федерации'
  },
  {
    icon: '/icons/icon_opk.svg',
    title: 'Реестр ОПК',
    desc: 'Аккредитованный поставщик для Оборонно-промышленного комплекса'
  },
  {
    icon: '/icons/icon_ohvat.svg',
    title: 'Федеральный охват',
    desc: 'Работаем с предприятиями в 15+ регионах России'
  }
]

const certificates = [
  {
    color: '#E91E63',
    title: 'ГОСТ РВ',
    subtitle: 'Военный регистр',
    code: 'CERTIFICATE NO. 001592',
    iconSrc: '/icons/icon_pct.svg'
  },
  {
    color: '#1B2A4A',
    title: 'ISO 9001',
    subtitle: 'Менеджмент качества',
    code: 'CERTIFICATE NO. ISO-2024',
    iconSrc: '/icons/icon_iso.svg'
  },
  {
    color: '#1976D2',
    title: 'European Register',
    subtitle: 'International Level',
    code: 'EU CERTIFIED',
    iconSrc: '/icons/icon_eu.svg'
  }
]

export default function SlideTrust() {
  return (
    <section className={styles.slide}>
      <div className={styles.content}>
        <AnimatedSection animation="fadeLeft" delay={0.1}>
          <h2 className={styles.heading}>
            ДОВЕРИЕ,<br />
            ПОДТВЕРЖДЕННОЕ <span className={styles.accent}>ДЕЛОМ</span>
          </h2>
          <div className={styles.headingLine} />
        </AnimatedSection>

        <div className={styles.mainGrid}>
          <div className={styles.leftCol}>
            <AnimatedSection animation="fadeUp" delay={0.15}>
              <div className={styles.statusBadge}>
                <span className={styles.statusIcons}>🏛️ ⚙️ 💎</span>
                <div>
                  <div className={styles.statusLabel}>СТАТУС</div>
                  <div className={styles.statusValue}>Проверенный поставщик</div>
                </div>
              </div>
            </AnimatedSection>

            {credentials.map((c, i) => (
              <AnimatedSection key={i} animation="fadeLeft" delay={0.25 + i * 0.1}>
                <div className={styles.credCard}>
                  <div className={styles.credIcon}>
                    <img src={c.icon} alt={c.title} width="48" height="48" />
                  </div>
                  <div>
                    <div className={styles.credTitle}>{c.title}</div>
                    <div className={styles.credDesc}>{c.desc}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className={styles.rightCol}>
            {certificates.map((c, i) => (
              <AnimatedSection key={i} animation="scaleIn" delay={0.3 + i * 0.15}>
                <div className={styles.certCard} style={{ borderColor: c.color }}>
                  <div className={styles.certIcon} style={{ background: c.color }}>
                    <img src={c.iconSrc} alt={c.title} width="64" height="64" style={{ objectFit: 'contain' }} />
                  </div>
                  <div className={styles.certBody}>
                    <div className={styles.certSubtitle}>СТАНДАРТ</div>
                    <div className={styles.certTitle} style={{ color: c.color }}>{c.title}</div>
                    <div className={styles.certDesc}>{c.subtitle}</div>
                    <div className={styles.certCode}>{c.code}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
      <SlideFooter />
    </section>
  )
}
