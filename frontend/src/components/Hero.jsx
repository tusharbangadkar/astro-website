import React from 'react'
import ZodiacWheel from './ZodiacWheel.jsx'

const WHATSAPP_NUMBER = '917776079346'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I would like to book a consultation.')}`

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">✶ Tantra Kriya &amp; Vastu Consultations</span>
          <h1>
            Real remedies for love, wealth, <em>and protection</em>
          </h1>
          <p>
            One-on-one consultations with Astrologer Anshuuvman Mishrra — Vashikaran
            remedies, prosperity rituals, protection kriyas, and on-site Vastu visits,
            guided by traditional Tantra practice.
          </p>
          <div className="hero-actions">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn btn-primary">
              Book on WhatsApp
            </a>
            <a href="#services" className="btn btn-ghost">See all services</a>
          </div>
          <div className="hero-facts">
            <div><strong>5</strong>Tantra Kriya &amp; Vastu services</div>
            <div><strong>4.9 / 5</strong>average rating</div>
            <div><strong>WhatsApp</strong>booking &amp; support</div>
          </div>
        </div>

        <div className="hero-wheel-wrap">
          <ZodiacWheel className="hero-wheel" />
        </div>
      </div>
    </section>
  )
}
