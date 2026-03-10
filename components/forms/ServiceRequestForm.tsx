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
    <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
      <h3 className="text-lg font-semibold text-slate-100">Request Services</h3>
      <p className="mt-1 text-sm text-slate-300">Mock form state for Phase 1. Backend wiring can replace this without UI changes.</p>

      <form className="mt-4 grid gap-3" onSubmit={handleSubmit}>
        <label className="grid gap-1 text-sm text-slate-200">
          Offering
          <select
            value={offeringId}
            onChange={(event) => setOfferingId(event.target.value)}
            className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm"
          >
            {offerings.map((offering) => (
              <option key={offering.id} value={offering.id}>
                {offering.title}
              </option>
            ))}
          </select>
        </label>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-1 text-sm text-slate-200">
            Budget (USD)
            <input
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm"
            />
          </label>
          <label className="grid gap-1 text-sm text-slate-200">
            Frequency
            <select
              value={frequency}
              onChange={(event) => setFrequency(event.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm"
            >
              <option value="one-time">One-time</option>
              <option value="monthly">Monthly</option>
              <option value="series">Series</option>
              <option value="custom">Custom</option>
            </select>
          </label>
        </div>

        <label className="grid gap-1 text-sm text-slate-200">
          Notes
          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            rows={4}
            className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm"
            placeholder="Goals, audience, schedule preferences..."
          />
        </label>

        <button type="submit" className="rounded-lg bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-200">
          Submit Request
        </button>
      </form>

      {submitted ? (
        <div className="mt-4 rounded-lg border border-emerald-400/35 bg-emerald-500/10 p-3 text-sm text-emerald-200">
          Request captured in mock state for <strong>{selected?.title ?? 'selected offering'}</strong> with a {frequency} frequency and ${budget} budget.
        </div>
      ) : null}
    </section>
  )
}
