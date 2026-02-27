import { useEffect } from 'react'
import SlideHero from './components/SlideHero'
import SlideAdvantages from './components/SlideAdvantages'
import SlideGeography from './components/SlideGeography'
import SlideSolutions from './components/SlideSolutions'
import SlidePartners from './components/SlidePartners'
import SlideCases from './components/SlideCases'
import SlideTrust from './components/SlideTrust'
import SlideCTA from './components/SlideCTA'
import SectionDivider from './components/SectionDivider'
import './App.css'

const dividers = [
  { image: '/images/AKCENT_1.png', number: 1, title: 'О компании' },
  { image: '/images/AKCENT_2.png', number: 2, title: 'Преимущества' },
  { image: '/images/AKCENT_3.png', number: 3, title: 'География' },
  { image: '/images/AKCENT_4.png', number: 4, title: 'Решения' },
  { image: '/images/AKCENT_5.png', number: 5, title: 'Партнеры' },
  { image: '/images/AKCENT_6.png', number: 6, title: 'Кейсы' },
  { image: '/images/AKCENT_7.png', number: 7, title: 'Доверие' },
  { image: '/images/AKCENT_8.png', number: 8, title: 'Контакты' },
]

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="app">
      <SectionDivider {...dividers[0]} />
      <SlideHero />

      <SectionDivider {...dividers[1]} />
      <SlideAdvantages />

      <SectionDivider {...dividers[2]} />
      <SlideGeography />

      <SectionDivider {...dividers[3]} />
      <SlideSolutions />

      <SectionDivider {...dividers[4]} />
      <SlidePartners />

      <SectionDivider {...dividers[5]} />
      <SlideCases />

      <SectionDivider {...dividers[6]} />
      <SlideTrust />

      <SectionDivider {...dividers[7]} />
      <SlideCTA />
    </div>
  )
}
