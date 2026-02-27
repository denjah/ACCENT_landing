import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import SlideFooter from './SlideFooter'
import styles from './SlidePartners.module.css'

const brands = [
  'logo_ACTEL.png', 'logo_INTEL.png', 'logo_DATAVISSION.png', 'logo_SAMSUNG.png',
  'logo_AXEN.png', 'logo_FUJITSU.png', 'logo_MITSUBISHI.png', 'logo_MACOM.png',
  'logo_SIMICONDUCT.png', 'FAITHFULL.png', 'logo_WISKA.png', 'logo_LAPPKABEL.png',
  'logo_ETE.png', 'logo_SPANSION.png', 'logo_CTS.png', 'logo_TOSHIBA.png',
  'logo_ANALOGDEVICES.png', 'logo_ATIMEL.png', 'logo_NXP.png', 'logo_GLENAIR.png',
  'logo_AMPHENON.png', 'logo_TUSONIX.png', 'logo_ST.png', 'logo_SEMIKRON.png',
  'logo_INFINEON.png', 'logo_RFMD.png', 'logo_TEXASINSTR.png', 'logo_WINSTAR.png',
  'logo_ALTERA.png', 'logo_XILINX.png', 'logo_MICROCHIP.png', 'logo_BIMED.png',
]

const regions = [
  { flag: '🇨🇳', name: 'КИТАЙ' },
  { flag: '🇪🇺', name: 'ЕВРОПА' },
  { flag: '🇺🇸', name: 'США' },
  { flag: '🇷🇺', name: 'РОССИЯ' },
]

export default function SlidePartners() {
  return (
    <section className={styles.slide}>
      <div className={styles.content}>
        <div className={styles.topRow}>
          <AnimatedSection animation="fadeLeft" delay={0.1}>
            <h2 className={styles.heading}>
              НАШИ ПАРТНЕРЫ<br />
              <span className={styles.accent}>ПО ВСЕМУ МИРУ</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fadeRight" delay={0.2}>
            <div className={styles.rightBlock}>
              <p className={styles.desc}>
                Официальные поставки от ведущих производителей электронных компонентов.
              </p>
              <div className={styles.regions}>
                {regions.map((r, i) => (
                  <span key={i} className={styles.region}>
                    <span className={styles.flag}>{r.flag}</span>
                    {r.name}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className={styles.grid}>
          {brands.map((b, i) => (
            <motion.div
              key={b}
              className={styles.brandCard}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.05 * (i % 8) }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={`/brands/${b}`}
                alt={b.replace(/logo_|\.png/g, '')}
                className={styles.brandLogo}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <SlideFooter />
    </section>
  )
}
