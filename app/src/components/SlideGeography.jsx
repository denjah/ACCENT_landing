import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import AnimatedSection from './AnimatedSection'
import SlideFooter from './SlideFooter'
import styles from './SlideGeography.module.css'

function AnimatedCounter({ end, suffix = '', duration = 2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const step = end / (duration * 60)
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString('ru-RU')}{suffix}
    </span>
  )
}

const stats = [
  { value: 15, suffix: '', label: 'лет', desc: 'на рынке микроэлектроники' },
  { value: 100000, suffix: '+', label: 'позиций', desc: 'на складе' },
  { value: 1300, suffix: '+', label: 'проектов', desc: 'реализованных' },
  { value: 50, suffix: '+', label: 'заводов', desc: 'производителей' },
  { value: 70, suffix: '+', label: 'брендов', desc: 'в портфеле' },
  { value: 20, suffix: '+', label: 'санкционных', desc: 'производителей' },
]

const trustItems = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 8h20v4H4zM6 12v10h16V12M10 16h8" stroke="#A41E22" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Член ТПП РФ',
    desc: 'Торгово-промышленная палата'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#A41E22" strokeWidth="2"/>
        <path d="M14 8v6l4 2" stroke="#A41E22" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Участие в ВПК',
    desc: 'Поставки для оборонного комплекса'
  }
]

export default function SlideGeography() {
  return (
    <section className={styles.slide}>
      <div className={styles.mapBg} />
      <div className={styles.content}>
        <AnimatedSection animation="fadeLeft" delay={0.1}>
          <h2 className={styles.heading}>
            ГЕОГРАФИЯ, <span className={styles.accent}>ЦИФРЫ, ДОСТИЖЕНИЯ</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={0.15}>
          <div className={styles.geoTags}>
            <span className={styles.tag}>
              <span className={styles.tagDot} style={{ background: '#A41E22' }} />
              4 Склада
            </span>
            <span className={styles.tag}>
              <span className={styles.tagDot} style={{ background: '#1B2A4A' }} />
              30+ Партнеров
            </span>
          </div>
          <div className={styles.flagRow}>
            <span className={styles.flagTag}>
              <span className={styles.flag}>🇨🇳</span> Китай
            </span>
            <span className={styles.flagTag}>
              <span className={styles.flag}>🇪🇺</span> Европа
            </span>
            <span className={styles.flagTag}>
              <span className={styles.flag}>🇺🇸</span> США
            </span>
            <span className={styles.flagTag}>
              <span className={styles.flag}>🇷🇺</span> Россия
            </span>
            <span className={styles.flagTag}>
              <span className={styles.flag}>🇯🇵</span> Япония
            </span>
            <span className={styles.flagTag}>
              <span className={styles.flag}>🇰🇷</span> Корея
            </span>
            <span className={styles.flagTag}>
              <span className={styles.flag}>🇹🇼</span> Тайвань
            </span>
          </div>
        </AnimatedSection>

        <div className={styles.statsGrid}>
          {stats.map((s, i) => (
            <AnimatedSection key={i} animation="scaleIn" delay={0.2 + i * 0.1}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <div className={styles.statLabel}>{s.label}</div>
                <div className={styles.statDesc}>{s.desc}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeUp" delay={0.8}>
          <div className={styles.trustBlock}>
            <h3 className={styles.trustTitle}>СТАТУС И ДОВЕРИЕ</h3>
            <div className={styles.trustItems}>
              {trustItems.map((t, i) => (
                <div key={i} className={styles.trustItem}>
                  <div className={styles.trustIcon}>{t.icon}</div>
                  <div>
                    <div className={styles.trustName}>{t.title}</div>
                    <div className={styles.trustDesc}>{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
      <SlideFooter />
    </section>
  )
}
