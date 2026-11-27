import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './AboutTeaser.css'

export default function AboutTeaser() {
  const cardRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      card.classList.add('is-visible')
      return
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      }),
      { threshold: 0.16 },
    )
    observer.observe(card)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about-teaser" aria-labelledby="about-teaser-heading">
      <div className="about-teaser__inner">
        <div ref={cardRef} className="about-teaser__card">
          <h2 id="about-teaser-heading" className="about-teaser__heading">Judging Criteria</h2>
          <p className="about-teaser__subheading">Built with purpose. Evaluated on impact.</p>
          <p className="about-teaser__text">
            Every project is evaluated out of 100 marks by at least two judges. The evaluation
            considers social impact, innovation, problem-solving, functionality, user experience,
            technical implementation, and presentation.
          </p>
          <p className="about-teaser__prompt">Want to understand how your project will be scored?</p>
          <Link to="/rules#evaluation-criteria" className="about-teaser__link">
            View Full Evaluation Criteria →
          </Link>
        </div>
      </div>
    </section>
  )
}
