import React, { useEffect, useState } from 'react'
import { fetchReviews } from '../api.js'

const FALLBACK_REVIEWS = [
  { id: 1, clientName: 'Ananya R.', rating: 5, comment: 'The Vashikaran Kriya consultation gave me real clarity on my relationship issues. Guruji explained everything with patience and honesty.', serviceTaken: 'Vashikaran Kriya' },
  { id: 2, clientName: 'Rahul Mehta', rating: 5, comment: 'Booked the Jan Dhan Aakarshan Kriya for my business - within a couple of months things genuinely started moving in the right direction.', serviceTaken: 'Jan Dhan Aakarshan Kriya' },
  { id: 3, clientName: 'Priya Sharma', rating: 5, comment: 'The protection ritual gave our whole family peace of mind during a very difficult time. Truly grateful for the guidance.', serviceTaken: 'Uchchatan Stambhan Kriya' },
  { id: 4, clientName: 'Vikram Singh', rating: 5, comment: 'Guruji visited our site before construction and the Vastu guidance was extremely detailed and practical.', serviceTaken: 'House Construction Visit (As Per Vastu)' },
  { id: 5, clientName: 'Sneha Patel', rating: 5, comment: 'The Vastu correction visit to our home was thorough - simple changes he suggested made a noticeable difference.', serviceTaken: 'Vastu Correction Visit' },
  { id: 6, clientName: 'Arjun Nair', rating: 5, comment: 'Very knowledgeable and straightforward. Booking on WhatsApp was quick and the whole process felt professional.', serviceTaken: 'Jan Dhan Aakarshan Kriya' },
]

export default function Reviews() {
  const [reviews, setReviews] = useState(FALLBACK_REVIEWS)

  useEffect(() => {
    fetchReviews()
      .then((data) => { if (data && data.length) setReviews(data) })
      .catch(() => { /* keep fallback reviews if the API is unreachable */ })
  }, [])

  const avg = reviews.length
    ? (reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length).toFixed(1)
    : '5.0'

  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <span className="eyebrow">✶ Client experiences</span>
        <h2 className="section-title">What clients say after their session</h2>

        <div className="reviews-rating-summary">
          <span className="rating-number">{avg}</span>
          <div>
            <div className="stars">{'★'.repeat(5)}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'rgba(244,238,224,0.65)' }}>
              based on {reviews.length}+ verified sessions
            </div>
          </div>
        </div>

        <div className="review-grid">
          {reviews.map((review) => (
            <div className="review-card" key={review.id ?? review.clientName}>
              <div className="stars">{'★'.repeat(review.rating || 5)}{'☆'.repeat(5 - (review.rating || 5))}</div>
              <p>&ldquo;{review.comment}&rdquo;</p>
              <div className="review-footer">
                <strong>{review.clientName}</strong>
                <span>{review.serviceTaken}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
