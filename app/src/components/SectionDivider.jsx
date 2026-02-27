import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import styles from './SectionDivider.module.css'

export default function SectionDivider({ image, number, title }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6])

  return (
    <div ref={ref} className={styles.divider}>
      <motion.div className={styles.imageWrap} style={{ y }}>
        <img src={image} alt={title} className={styles.image} />
      </motion.div>
      <motion.div className={styles.overlay} style={{ opacity }} />
      <div className={styles.content}>
        <motion.span
          className={styles.number}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {String(number).padStart(2, '0')}
        </motion.span>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          {title}
        </motion.h2>
        <motion.div
          className={styles.line}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
