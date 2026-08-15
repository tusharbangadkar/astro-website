// // import React, { useEffect, useState } from 'react'
// // import { fetchServices } from '../api.js'

// // const FALLBACK_SERVICES = [
// //   { id: 1, name: 'Vashikaran Kriya', description: 'Vashikaran & Attraction Remedies for love, relationship, and married life problems.', category: 'Tantra Kriya', price: 7000 },
// //   { id: 2, name: 'Jan Dhan Aakarshan Kriya', description: 'Business & Career Success Rituals for prosperity and wealth blessing.', category: 'Tantra Kriya', price: 21000 },
// //   { id: 3, name: 'Uchchatan Stambhan Kriya', description: 'Protection & Spiritual Shielding Rituals for negative energy and evil eye removal.', category: 'Tantra Kriya', price: 12000 },
// //   { id: 4, name: 'House Construction Visit (As Per Vastu)', description: 'On-site guidance during construction to align the property with Vastu principles.', category: 'Vastu', price: 3000 },
// //   { id: 5, name: 'Vastu Correction Visit', description: 'On-site visit to identify and correct Vastu doshas in an existing home or workplace.', category: 'Vastu', price: 1200 },
// // ]

// // function formatRupees(amount) {
// //   if (amount === undefined || amount === null) return ''
// //   return `₹${Number(amount).toLocaleString('en-IN')}`
// // }

// // export default function Services() {
// //   const [services, setServices] = useState(FALLBACK_SERVICES)

// //   useEffect(() => {
// //     fetchServices()
// //       .then((data) => { if (data && data.length) setServices(data) })
// //       .catch(() => { /* keep fallback list if the API is unreachable */ })
// //   }, [])

// //   const categories = [...new Set(services.map((s) => s.category || 'Services'))]

// //   return (
// //     <section id="services" className="section services">
// //       <div className="container">
// //         <div className="services-header">
// //           <div>
// //             <span className="eyebrow">✶ What we offer</span>
// //             <h2 className="section-title">Astrology Chart Analysis, Numerology, Tantra Kriya &amp; Vastu services</h2>
// //             <p className="section-lede">
// //               Traditional remedies and on-site consultations, priced individually
// //               depending on the ritual or visit.
// //             </p>
// //           </div>
// //           <div className="fee-badge">PRICES IN ₹ &middot; PER SERVICE</div>
// //         </div>

// //         {categories.map((category) => (
// //           <div key={category} style={{ marginBottom: 44 }}>
// //             <h3 style={{
// //               fontFamily: 'var(--font-mono)',
// //               fontSize: 13,
// //               letterSpacing: '0.1em',
// //               textTransform: 'uppercase',
// //               color: 'var(--gold)',
// //               margin: '0 0 18px',
// //             }}>
// //               {category} services
// //             </h3>
// //             <div className="service-grid">
// //               {services.filter((s) => (s.category || 'Services') === category).map((service, i) => (
// //                 <div className="service-card" key={service.id ?? service.name}>
// //                   <span className="service-index">{String(i + 1).padStart(2, '0')}</span>
// //                   <h3>{service.name}</h3>
// //                   <p>{service.description}</p>
// //                   <div className="service-meta">
// //                     <span>Consultation</span>
// //                     <span>{formatRupees(service.price)}</span>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   )
// // }
// import React, { useEffect, useState } from 'react'
// import { fetchServices } from '../api.js'

// const FALLBACK_SERVICES = [
//   { id: 1, name: 'Birth Chart (Kundli) Analysis', description: '', category: 'Astrology & Numerology', price: 700 },
//   { id: 2, name: 'Career & Profession Guidance', description: '', category: 'Astrology & Numerology', price: 700 },
//   { id: 3, name: 'Finance & Business Guidance', description: '', category: 'Astrology & Numerology', price: 700 },
//   { id: 4, name: 'Legal & Court Case Astrology', description: '', category: 'Astrology & Numerology', price: 700 },
//   { id: 5, name: 'Foreign Travel & Settlement Analysis', description: '', category: 'Astrology & Numerology', price: 700 },
//   { id: 6, name: 'Marriage & Relationship (Kundli Matching)', description: '', category: 'Astrology & Numerology', price: 700 },
//   { id: 7, name: 'Child & Education Guidance', description: '', category: 'Astrology & Numerology', price: 700 },
//   { id: 8, name: 'Health Astrology Guidance', description: '', category: 'Astrology & Numerology', price: 700 },
//   { id: 9, name: 'Dosha Analysis (Mangal, Kaal Sarp, Pitru, etc.)', description: '', category: 'Astrology & Numerology', price: 700 },
//   { id: 10, name: 'Graha Shanti & Puja Guidance', description: '', category: 'Astrology & Numerology', price: 700 },
//   { id: 11, name: 'Shubh Ashubh Muhurat', description: '', category: 'Astrology & Numerology', price: 700 },
//   { id: 12, name: 'Yearly Horoscope (Varshaphal)', description: '', category: 'Astrology & Numerology', price: 700 },
//   { id: 13, name: 'Daily/Monthly Horoscope Consultation', description: '', category: 'Astrology & Numerology', price: 700 },
//   { id: 14, name: 'Gemstone Recommendations', description: '', category: 'Astrology & Numerology', price: 700 },
//   { id: 15, name: 'Personalized Mantra & Spiritual Remedies', description: '', category: 'Astrology & Numerology', price: 700 },
// ]

// function formatRupees(amount) {
//   if (amount === undefined || amount === null) return ''
//   return `₹${Number(amount).toLocaleString('en-IN')}`
// }

// export default function Services() {
//   const [services, setServices] = useState(FALLBACK_SERVICES)

//   useEffect(() => {
//     fetchServices()
//       .then((data) => { if (data && data.length) setServices(data) })
//       .catch(() => { /* keep fallback list if the API is unreachable */ })
//   }, [])

//   const categories = [...new Set(services.map((s) => s.category || 'Services'))]

//   return (
//     <section id="services" className="section services">
//       <div className="container">
//         <div className="services-header">
//           <div>
//             <span className="eyebrow">✶ What we offer</span>
//             <h2 className="section-title">Astrology &amp; Numerology Services</h2>
//             <p className="section-lede">
//               One-on-one consultations covering every major life question, priced
//               simply per service.
//             </p>
//           </div>
//           <div className="fee-badge">PRICES IN ₹ &middot; PER SERVICE</div>
//         </div>

//         {categories.map((category) => (
//           <div key={category} style={{ marginBottom: 44 }}>
//             <h3 style={{
//               fontFamily: 'var(--font-mono)',
//               fontSize: 13,
//               letterSpacing: '0.1em',
//               textTransform: 'uppercase',
//               color: 'var(--gold)',
//               margin: '0 0 18px',
//             }}>
//               {category} services
//             </h3>
//             <div className="service-grid">
//               {services.filter((s) => (s.category || 'Services') === category).map((service, i) => (
//                 <div className="service-card" key={service.id ?? service.name}>
//                   <span className="service-index">{String(i + 1).padStart(2, '0')}</span>
//                   <h3>{service.name}</h3>
//                   {service.description && <p>{service.description}</p>}
//                   <div className="service-meta">
//                     <span>Consultation</span>
//                     <span>{formatRupees(service.price)}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }


import React, { useEffect, useState } from 'react'
import { fetchServices } from '../api.js'

// Fallback data shown if the backend API is unreachable.
// Keep this in sync with backend/src/main/resources/data.sql.
const FALLBACK_SERVICES = [
  // Astrology & Numerology (merged into 3 focused services)
  { id: 1, name: 'Kundli & Life Guidance', description: 'Birth chart analysis covering career and profession, finance and business, marriage and relationships, child and education, health, foreign travel and settlement, and legal or court matters.', category: 'Astrology & Numerology', price: 700 },
  { id: 2, name: 'Dosha & Remedial Guidance', description: 'Dosha analysis (Mangal, Kaal Sarp, Pitru, and others) along with Graha Shanti and puja guidance, gemstone recommendations, and personalized mantra and spiritual remedies.', category: 'Astrology & Numerology', price: 700 },
  { id: 3, name: 'Timing & Horoscope Guidance', description: 'Shubh Ashubh Muhurat for auspicious timing, along with yearly (Varshaphal), monthly, and daily horoscope consultations.', category: 'Astrology & Numerology', price: 700 },

  // Tantra Kriya
  { id: 4, name: 'Vashikaran Kriya', description: 'Vashikaran & Attraction Remedies for love, relationship, and married life problems.', category: 'Tantra Kriya', price: 7000 },
  { id: 5, name: 'Jan Dhan Aakarshan Kriya', description: 'Business & Career Success Rituals for prosperity and wealth blessing.', category: 'Tantra Kriya', price: 21000 },
  { id: 6, name: 'Uchchatan Stambhan Kriya', description: 'Protection & Spiritual Shielding Rituals for negative energy and evil eye removal.', category: 'Tantra Kriya', price: 12000 },

  // Vastu
  { id: 7, name: 'House Construction Visit (As Per Vastu)', description: 'On-site guidance during construction to align the property with Vastu principles.', category: 'Vastu', price: 3000 },
  { id: 8, name: 'Vastu Correction Visit', description: 'On-site visit to identify and correct Vastu doshas in an existing home or workplace.', category: 'Vastu', price: 1200 },
]

// Fixed display order for category sections, regardless of the order
// services come back from the API.
const CATEGORY_ORDER = ['Astrology & Numerology', 'Tantra Kriya', 'Vastu']

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

  const presentCategories = new Set(services.map((s) => s.category || 'Services'))
  const categories = [
    ...CATEGORY_ORDER.filter((c) => presentCategories.has(c)),
    ...[...presentCategories].filter((c) => !CATEGORY_ORDER.includes(c)),
  ]

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="services-header">
          <div>
            <span className="eyebrow">✶ What we offer</span>
            <h2 className="section-title">Astrology, Numerology, Tantra Kriya &amp; Vastu Services</h2>
            <p className="section-lede">
              One-on-one consultations and on-site visits covering every major
              life question, priced simply per service.
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
                  {service.description && <p>{service.description}</p>}
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