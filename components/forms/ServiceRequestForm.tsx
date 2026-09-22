'use client'

import { FormEvent, useState } from 'react'
import type { Offering } from '@/types/domain'

interface ServiceRequestFormProps {
  offerings: Offering[]
}

export default function ServiceRequestForm({ offerings }: ServiceRequestFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [offeringId, setOfferingId] = useState(offerings[0]?.id ?? '')
  const [budget, setBudget] = useState('5000')
  const [frequency, setFrequency] = useState('one-time')
  const [notes, setNotes] = useState('')

  const selected = offerings.find((item) => item.id === offeringId)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="request-form" className="theatre-card p-6 sm:p-8 space-y-5">
      <div className="border-b border-theatre-gold-500/20 pb-3">
        <span className="text-[10px] font-theatre-cinzel uppercase tracking-[0.25em] text-theatre-gold-400">
          Choral Guild Box Office
        </span>
        <h3 className="font-theatre-serif text-2xl sm:text-3xl text-theatre-parchment-50 font-normal">
          Commission or Request Vocal Services
        </h3>
        <p className="mt-1 text-xs text-theatre-parchment-400 font-sans">
          Specify your ensemble size requirements, project budget, and desired rehearsal or recording timeframe.
        </p>
      </div>

      <form className="mt-4 grid gap-4" onSubmit={handleSubmit}>
        <label className="grid gap-1.5 text-xs uppercase tracking-wider text-theatre-parchment-300">
          Offering Package
          <select
            value={offeringId}
            onChange={(event) => setOfferingId(event.target.value)}
            className="border border-theatre-gold-500/40 bg-theatre-dark-950 px-3 py-2.5 text-xs text-theatre-parchment-100 focus:border-theatre-gold-400 outline-none"
          >
            {offerings.map((offering) => (
              <option key={offering.id} value={offering.id}>
                {offering.title} ({offering.category})
              </option>
            ))}
          </select>
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1.5 text-xs uppercase tracking-wider text-theatre-parchment-300">
            Project Budget (USD)
            <input
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
              className="border border-theatre-gold-500/40 bg-theatre-dark-950 px-3 py-2.5 text-xs text-theatre-parchment-100 focus:border-theatre-gold-400 outline-none"
            />
          </label>
          <label className="grid gap-1.5 text-xs uppercase tracking-wider text-theatre-parchment-300">
            Frequency / Model
            <select
              value={frequency}
              onChange={(event) => setFrequency(event.target.value)}
              className="border border-theatre-gold-500/40 bg-theatre-dark-950 px-3 py-2.5 text-xs text-theatre-parchment-100 focus:border-theatre-gold-400 outline-none"
            >
              <option value="one-time">One-time Staged Production</option>
              <option value="monthly">Monthly Liturgical Residency</option>
              <option value="series">Masterclass Series</option>
              <option value="custom">Custom Choral Commission</option>
            </select>
          </label>
        </div>

        <label className="grid gap-1.5 text-xs uppercase tracking-wider text-theatre-parchment-300">
          Notes & Repertoire Preferences
          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            rows={4}
            className="border border-theatre-gold-500/40 bg-theatre-dark-950 px-3 py-2.5 text-xs text-theatre-parchment-100 focus:border-theatre-gold-400 outline-none"
            placeholder="Describe voicing needs (e.g. 24-voice SATB, Tenor Soloist, or Studio backing vocals)..."
          />
        </label>

        <button type="submit" className="theatre-btn-gold text-xs py-3">
          Submit Commission Request
        </button>
      </form>

      {submitted ? (
        <div className="mt-4 border border-theatre-gold-500/60 bg-theatre-dark-850 p-4 text-xs text-theatre-parchment-200">
          <div className="font-theatre-serif text-lg text-theatre-gold-300 font-semibold mb-1">
            Request Recorded in Guild Desk
          </div>
          Commission inquiry captured for <strong>{selected?.title ?? 'selected offering'}</strong> with a {frequency} timeline and proposed ${budget} allocation.
        </div>
      ) : null}
    </section>
  )
}
