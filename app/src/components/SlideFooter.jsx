import styles from './SlideFooter.module.css'

export default function SlideFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img src="/accent_logo_wh.svg" alt="Акцент" className={styles.logoImg} />
        </div>
        <div className={styles.slogan}>КОМПОНЕНТ ВАШЕГО УСПЕХА</div>
        <div className={styles.contacts}>
          <span>www.accentcomponent.ru</span>
          <span className={styles.sep}>|</span>
          <span>8 800 444-04-38</span>
          <span className={styles.sep}>|</span>
          <span>info@accentcomponent.ru</span>
        </div>
      </div>
    </div>
  )
}
