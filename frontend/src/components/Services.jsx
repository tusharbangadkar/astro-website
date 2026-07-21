import React, { useEffect, useState } from 'react'
import { fetchServices } from '../api.js'

const FALLBACK_SERVICES = [
  { id: 1, name: 'Vashikaran Kriya', description: 'Vashikaran & Attraction Remedies for love, relationship, and married life problems.', category: 'Tantra Kriya', price: 7000 },
  { id: 2, name: 'Jan Dhan Aakarshan Kriya', description: 'Business & Career Success Rituals for prosperity and wealth blessing.', category: 'Tantra Kriya', price: 21000 },
  { id: 3, name: 'Uchchatan Stambhan Kriya', description: 'Protection & Spiritual Shielding Rituals for negative energy and evil eye removal.', category: 'Tantra Kriya', price: 12000 },
  { id: 4, name: 'House Construction Visit (As Per Vastu)', description: 'On-site guidance during construction to align the property with Vastu principles.', category: 'Vastu', price: 3000 },
  { id: 5, name: 'Vastu Correction Visit', description: 'On-site visit to identify and correct Vastu doshas in an existing home or workplace.', category: 'Vastu', price: 1200 },
]

function formatRupees(amount) {
  if (amount === undefined || amount === null) return ''
  return `₹${Number(amount).toLocaleString('en-IN')}`
}

export default function Services() {
  const [services, setServices] = useState(FALLBACK_SERVICES)

  useEffect(() => {
    fetchServices()
      .then((data) => { if (data && data.length) setServices(data) })
      .catch(() => { /* keep fallback list if the API is unreachable */ })
  }, [])

  const categories = [...new Set(services.map((s) => s.category || 'Services'))]

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="services-header">
          <div>
            <span className="eyebrow">✶ What we offer</span>
            <h2 className="section-title">Tantra Kriya &amp; Vastu services</h2>
            <p className="section-lede">
              Traditional remedies and on-site consultations, priced individually
              depending on the ritual or visit.
            </p>
          </div>
          <div className="fee-badge">PRICES IN ₹ &middot; PER SERVICE</div>
        </div>

        {categories.map((category) => (
          <div key={category} style={{ marginBottom: 44 }}>
            <h3 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              margin: '0 0 18px',
            }}>
              {category} services
            </h3>
            <div className="service-grid">
              {services.filter((s) => (s.category || 'Services') === category).map((service, i) => (
                <div className="service-card" key={service.id ?? service.name}>
                  <span className="service-index">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <div className="service-meta">
                    <span>Consultation</span>
                    <span>{formatRupees(service.price)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
