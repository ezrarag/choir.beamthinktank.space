'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import type { ChoralParticipantProfile, VoicePart } from '@/types/domain'
import { choralProfiles } from '@/lib/data/seed'

interface ChoralProfileHubProps {
  initialProfileId?: string
}

export default function ChoralProfileHub({ initialProfileId = 'profile-paul-choral' }: ChoralProfileHubProps) {
  const [selectedProfileId, setSelectedProfileId] = useState(initialProfileId)
  const profile = choralProfiles.find((p) => p.id === selectedProfileId) || choralProfiles[0]

  // Repertoire & Stems Player State
  const [selectedRepertoireIndex, setSelectedRepertoireIndex] = useState(0)
  const activeWork = profile.repertoire[selectedRepertoireIndex] || profile.repertoire[0]
  const [activeStemPart, setActiveStemPart] = useState<string>('Tenor')
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPitchPipeActive, setIsPitchPipeActive] = useState(false)

  // Audio Context Ref for Pitch Pipe Tone Generator
  const audioCtxRef = useRef<AudioContext | null>(null)
  const oscillatorRef = useRef<OscillatorNode | null>(null)

  useEffect(() => {
    if (activeWork) {
      const defaultStem =
        activeWork.stems.find((s) => s.isIsolatedDefault) || activeWork.stems[0]
      if (defaultStem) {
        setActiveStemPart(defaultStem.part)
      }
    }
  }, [activeWork])

  // Pitch pipe sound trigger (A440 or C523)
  const togglePitchPipe = (freq = 440) => {
    if (isPitchPipeActive) {
      if (oscillatorRef.current) {
        oscillatorRef.current.stop()
        oscillatorRef.current.disconnect()
        oscillatorRef.current = null
      }
      setIsPitchPipeActive(false)
    } else {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
        const ctx = audioCtxRef.current || new AudioContextClass()
        audioCtxRef.current = ctx

        if (ctx.state === 'suspended') {
          ctx.resume()
        }

        const osc = ctx.createOscillator()
        const gain = ctx.createGain()

        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, ctx.currentTime)

        // Soft attack & decay
        gain.gain.setValueAtTime(0.001, ctx.currentTime)
        gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.1)

        osc.connect(gain)
        gain.connect(ctx.destination)

        osc.start()
        oscillatorRef.current = osc
        setIsPitchPipeActive(true)
      } catch (err) {
        console.error('AudioContext error:', err)
      }
    }
  }

  // Cleanup oscillator on unmount
  useEffect(() => {
    return () => {
      if (oscillatorRef.current) {
        try {
          oscillatorRef.current.stop()
          oscillatorRef.current.disconnect()
        } catch {
          // ignore
        }
      }
    }
  }, [])

  return (
    <div className="space-y-10">
      {/* 1. Senior Supervisor Precedent Banner */}
      <div className="border border-theatre-gold-500/30 bg-gradient-to-r from-theatre-burgundy-950 via-theatre-dark-900 to-theatre-dark-950 p-4 sm:p-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-full bg-radial from-theatre-gold-500/10 to-transparent pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[11px] font-theatre-cinzel uppercase tracking-[0.25em] text-theatre-gold-400">
              <span>Architectural Precedent</span>
              <span>·</span>
              <span className="text-theatre-parchment-400">Decoupled Identity Model</span>
            </div>
            <p className="text-xs sm:text-sm text-theatre-parchment-200 leading-relaxed font-sans max-w-3xl">
              In the BEAM ecosystem, <strong className="text-theatre-gold-300">Identity ≠ Role ≠ Service</strong>.
              Participants maintain their universal live CV in <code className="text-theatre-gold-400">business</code> / <code className="text-theatre-gold-400">home</code>, while the <code className="text-theatre-gold-400">choir</code> domain hosts their vocal classifications, rehearsal stems, and liturgical part assignments.
            </p>
          </div>

          {/* Persona Switcher */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <span className="text-[10px] uppercase tracking-wider text-theatre-parchment-400 mr-1">
              Select Profile:
            </span>
            {choralProfiles.map((p) => {
              const isSelected = p.id === selectedProfileId
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedProfileId(p.id)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-all duration-200 ${
                    isSelected
                      ? 'bg-theatre-gold-500 text-theatre-dark-950 font-semibold shadow'
                      : 'border border-theatre-gold-500/30 text-theatre-parchment-300 hover:border-theatre-gold-400'
                  }`}
                >
                  {p.displayName.split(' ')[0]} ({p.voicePart})
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* 2. Main Artist Dossier Header */}
      <section className="theatre-card p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            {/* Headshot with antique gold frame */}
            <div className="relative h-28 w-28 sm:h-32 sm:w-32 shrink-0 border-2 border-theatre-gold-500/60 bg-theatre-dark-800 p-1">
              <div className="h-full w-full overflow-hidden">
                {profile.headshotUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={profile.headshotUrl}
                    alt={profile.displayName}
                    className="h-full w-full object-cover grayscale contrast-125"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center font-theatre-cinzel text-3xl text-theatre-gold-400">
                    {profile.displayName[0]}
                  </div>
                )}
              </div>
            </div>

            {/* Vocal Artist Header Details */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="voice-badge-satb">
                  {profile.voicePart}
                </span>
                {profile.secondaryVoicePart && (
                  <span className="text-[10px] uppercase tracking-wider text-theatre-parchment-400 border border-slate-700 px-2 py-0.5">
                    Alt: {profile.secondaryVoicePart}
                  </span>
                )}
                <span className="text-[10px] uppercase tracking-[0.2em] text-theatre-gold-400 font-semibold">
                  {profile.guildRole.replace('_', ' ')}
                </span>
              </div>

              <h1 className="font-theatre-serif text-3xl sm:text-4xl text-theatre-parchment-50 font-normal">
                {profile.displayName}
              </h1>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-theatre-parchment-400">
                <span>
                  <strong className="text-theatre-gold-400">Universal Role:</strong> {profile.universalRole}
                </span>
                <span>·</span>
                <span>
                  <strong className="text-theatre-gold-400">Domain Source:</strong> {profile.originDomain}
                </span>
                <span>·</span>
                <span>{profile.email}</span>
              </div>

              <p className="text-xs sm:text-sm text-theatre-parchment-300 max-w-2xl leading-relaxed pt-1 font-sans">
                {profile.bioPlaybill}
              </p>
            </div>
          </div>

          {/* Hours & BEAM Coin Ledger Badge */}
          <div className="flex flex-row md:flex-col gap-3 shrink-0 border border-theatre-gold-500/20 bg-theatre-dark-950/60 p-4 min-w-[200px]">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-theatre-parchment-400">
                Rehearsal Ledger
              </span>
              <div className="font-theatre-serif text-2xl font-bold text-theatre-gold-300">
                {profile.uncompensatedHoursTotal} hrs
              </div>
              <span className="text-[10px] text-theatre-parchment-500">Uncompensated tracked</span>
            </div>
            <div className="border-t border-theatre-gold-500/20 pt-2">
              <span className="text-[10px] uppercase tracking-widest text-theatre-parchment-400">
                BEAM Coin Honorarium
              </span>
              <div className="font-theatre-serif text-2xl font-bold text-theatre-gold-400">
                {profile.beamCoinBalance} ℔
              </div>
              <span className="text-[10px] text-theatre-parchment-500">Redeemable in ecosystem</span>
            </div>
          </div>
        </div>

        {/* 3. Vocal Range Staff & Diction Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4 border-t border-theatre-gold-500/20">
          {/* Vocal Range & Tessitura Visualizer */}
          <div className="lg:col-span-2 space-y-3 bg-theatre-dark-950/80 p-5 border border-theatre-gold-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-theatre-cinzel text-xs uppercase tracking-[0.2em] text-theatre-gold-300">
                  Vocal Compass & Tessitura
                </span>
                <span className="text-[10px] text-theatre-parchment-400">
                  (C2 through C6 Piano Pitch Map)
                </span>
              </div>
              {/* Pitch Pipe Reference Button */}
              <button
                onClick={() => togglePitchPipe(profile.pitchPipePreference === 'C523' ? 523.25 : 440)}
                className={`text-[10px] uppercase tracking-wider px-2.5 py-1 border transition-colors ${
                  isPitchPipeActive
                    ? 'bg-theatre-gold-400 text-theatre-dark-950 font-bold border-theatre-gold-400 animate-pulse'
                    : 'border-theatre-gold-500/40 text-theatre-gold-400 hover:bg-theatre-gold-500/10'
                }`}
                title="Sound reference tuning tone"
              >
                {isPitchPipeActive ? '🔊 Stop Pitch Pipe' : `🎵 Sound ${profile.pitchPipePreference || 'A440'}`}
              </button>
            </div>

            {/* Visual Pitch Range Bar */}
            <div className="space-y-2 pt-2">
              <div className="relative h-9 bg-theatre-dark-900 border border-theatre-gold-500/30 flex items-center px-2">
                {/* Visual keys notation */}
                <div className="absolute inset-0 flex justify-between px-3 text-[9px] font-mono text-theatre-parchment-500 items-center pointer-events-none opacity-40">
                  <span>C2</span>
                  <span>E2</span>
                  <span>A2</span>
                  <span>C3</span>
                  <span>E3</span>
                  <span>A3</span>
                  <span>C4 (Middle)</span>
                  <span>E4</span>
                  <span>A4</span>
                  <span>C5</span>
                  <span>E5</span>
                  <span>C6</span>
                </div>

                {/* Range Bar Indicator */}
                <div
                  className="relative h-5 rounded-none bg-gradient-to-r from-theatre-gold-600 via-theatre-gold-400 to-theatre-gold-300 shadow-sm flex items-center justify-between px-2 text-[10px] font-mono font-bold text-theatre-dark-950 mx-auto"
                  style={{
                    width: profile.voicePart.includes('Tenor')
                      ? '52%'
                      : profile.voicePart.includes('Bass')
                      ? '56%'
                      : '48%',
                    marginLeft: profile.voicePart.includes('Bass')
                      ? '12%'
                      : profile.voicePart.includes('Tenor')
                      ? '30%'
                      : '46%',
                  }}
                >
                  <span>{profile.vocalAttributes.rangeLowest}</span>
                  <span className="text-[9px] uppercase tracking-widest opacity-80">
                    Tessitura: {profile.vocalAttributes.tessitura}
                  </span>
                  <span>{profile.vocalAttributes.rangeHighest}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between text-[11px] text-theatre-parchment-400 pt-1">
                <span>
                  <strong className="text-theatre-parchment-200">Timbre / Quality:</strong>{' '}
                  {profile.vocalAttributes.vocalToneQuality}
                </span>
                <span>
                  <strong className="text-theatre-parchment-200">Solfège Mastery:</strong>{' '}
                  <span className="text-theatre-gold-300 font-semibold capitalize">
                    {profile.vocalAttributes.sightReadingProficiency.replace('_', ' ')}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Diction & Traditions Competencies */}
          <div className="space-y-3 bg-theatre-dark-950/80 p-5 border border-theatre-gold-500/20">
            <h4 className="font-theatre-cinzel text-xs uppercase tracking-[0.2em] text-theatre-gold-300">
              Languages & Vocal Traditions
            </h4>
            <div className="space-y-2.5">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-theatre-parchment-400 block mb-1">
                  Choral Diction Fluency:
                </span>
                <div className="flex flex-wrap gap-1">
                  {profile.vocalAttributes.languagesDiction.map((lang) => (
                    <span
                      key={lang}
                      className="text-[10px] border border-theatre-gold-500/30 bg-theatre-dark-900 px-2 py-0.5 text-theatre-parchment-300"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-theatre-parchment-400 block mb-1">
                  Repertoire Traditions:
                </span>
                <div className="flex flex-wrap gap-1">
                  {profile.vocalAttributes.traditions.map((trad) => (
                    <span
                      key={trad}
                      className="text-[10px] border border-theatre-burgundy-700/60 bg-theatre-burgundy-950/50 px-2 py-0.5 text-theatre-gold-300"
                    >
                      {trad}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Repertoire Binder & Sectional Rehearsal Stems Player */}
      <section id="stems" className="scroll-mt-24 theatre-card p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-theatre-gold-500/20 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-theatre-gold-400">
              <span>Section Practice</span>
              <span>·</span>
              <span>Stems Desk</span>
            </div>
            <h2 className="font-theatre-serif text-2xl sm:text-3xl text-theatre-parchment-50 font-normal">
              Active Repertoire Binder & Part Isolation
            </h2>
          </div>

          <div className="text-xs text-theatre-parchment-400">
            Assigned Part: <span className="text-theatre-gold-300 font-semibold">{profile.voicePart}</span>
          </div>
        </div>

        {/* Work Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          {profile.repertoire.map((rep, idx) => {
            const isCurrent = idx === selectedRepertoireIndex
            return (
              <button
                key={rep.id}
                onClick={() => setSelectedRepertoireIndex(idx)}
                className={`text-left p-3 border transition-all duration-200 flex-1 min-w-[220px] ${
                  isCurrent
                    ? 'border-theatre-gold-400 bg-theatre-dark-850 shadow-md'
                    : 'border-theatre-gold-500/20 bg-theatre-dark-950/60 hover:border-theatre-gold-500/50'
                }`}
              >
                <div className="text-[10px] uppercase tracking-wider text-theatre-gold-400 font-medium">
                  {rep.composer}
                </div>
                <div className="font-theatre-serif text-base text-theatre-parchment-100 font-semibold truncate">
                  {rep.title}
                </div>
                <div className="flex items-center gap-2 mt-1 text-[10px] text-theatre-parchment-400">
                  <span>{rep.voicing}</span>
                  <span>·</span>
                  <span className="capitalize text-theatre-gold-300">
                    {rep.masteryStatus.replace('_', ' ')}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Stems Audio Player Unit */}
        {activeWork && (
          <div className="border border-theatre-gold-500/30 bg-theatre-dark-950 p-5 space-y-5">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-theatre-cinzel uppercase tracking-[0.25em] text-theatre-gold-400">
                  Now Practicing
                </span>
                <h3 className="font-theatre-serif text-2xl text-theatre-parchment-50">
                  {activeWork.title} — {activeWork.composer}
                </h3>
                <p className="text-xs text-theatre-parchment-400 mt-0.5">
                  {activeWork.notes}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs text-theatre-parchment-400 font-mono">
                  Key: {activeWork.keySignature || 'Standard'} · {activeWork.tempoBpm || 80} BPM
                </span>
                <a
                  href={activeWork.sheetMusicUrl || '#'}
                  className="theatre-btn-outline text-[10px] py-1.5 px-3"
                  onClick={(e) => {
                    e.preventDefault()
                    alert(`Opening score for ${activeWork.title} (${profile.voicePart} part)`)
                  }}
                >
                  📄 View Choral Score
                </a>
              </div>
            </div>

            {/* Voice Part Isolation Selector */}
            <div className="space-y-2">
              <div className="text-[10px] uppercase tracking-[0.2em] text-theatre-parchment-400">
                Select Stem to Solo / Isolate:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {activeWork.stems.map((stem) => {
                  const isPartActive = activeStemPart === stem.part
                  const isSingerPart = profile.voicePart.includes(stem.part)
                  return (
                    <button
                      key={stem.part}
                      onClick={() => setActiveStemPart(stem.part)}
                      className={`p-3 text-center border transition-all ${
                        isPartActive
                          ? 'border-theatre-gold-400 bg-theatre-gold-500/20 text-theatre-gold-200 font-semibold'
                          : 'border-theatre-gold-500/20 bg-theatre-dark-900 text-theatre-parchment-300 hover:border-theatre-gold-500/50'
                      }`}
                    >
                      <div className="text-xs uppercase tracking-wider">{stem.part}</div>
                      <div className="text-[9px] text-theatre-parchment-400 mt-0.5">
                        {isSingerPart ? '★ Your Section' : 'Practice Track'}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Audio Playback Controls */}
            <div className="flex items-center justify-between bg-theatre-dark-900 border border-theatre-gold-500/20 p-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="h-10 w-10 flex items-center justify-center bg-theatre-gold-400 hover:bg-theatre-gold-300 text-theatre-dark-950 font-bold transition-all shadow"
                >
                  {isPlaying ? '⏸' : '▶'}
                </button>
                <div>
                  <div className="text-xs font-semibold text-theatre-gold-300">
                    {activeStemPart} Stem ({activeWork.title})
                  </div>
                  <div className="text-[10px] text-theatre-parchment-400">
                    {isPlaying ? 'Playing isolated sectional track...' : 'Paused — ready for section practice'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-theatre-parchment-400">
                <span className="hidden sm:inline">Pitch Pipe Reference:</span>
                <button
                  onClick={() => togglePitchPipe(440)}
                  className="px-2 py-1 text-[10px] border border-theatre-gold-500/30 text-theatre-gold-300 hover:bg-theatre-gold-500/10"
                >
                  A440 Tuning
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 5. Choral Commitments, Call Times & Attire Specifications */}
      <section className="theatre-card p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-theatre-gold-500/20 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-theatre-gold-400">
              <span>Logistics & Robes</span>
              <span>·</span>
              <span>Call Board</span>
            </div>
            <h2 className="font-theatre-serif text-2xl sm:text-3xl text-theatre-parchment-50 font-normal">
              Rehearsal Calls & Staged Engagements
            </h2>
          </div>
          <div className="text-xs text-theatre-parchment-400">
            Fitted Robe Size: <strong className="text-theatre-gold-300">{profile.robeSize || 'Regular / L'}</strong>
          </div>
        </div>

        <div className="space-y-3">
          {profile.commitments.map((comm) => (
            <div
              key={comm.id}
              className="border border-theatre-gold-500/20 bg-theatre-dark-950/70 p-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-theatre-cinzel tracking-wider text-theatre-gold-400 border border-theatre-gold-500/30 px-2 py-0.5">
                    {comm.date}
                  </span>
                  <span className="text-xs text-theatre-parchment-300 font-semibold">
                    {comm.eventTitle}
                  </span>
                </div>
                <p className="text-xs text-theatre-parchment-400 font-sans">
                  {comm.repertoireSummary}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-theatre-parchment-400 pt-1">
                  <span>📍 {comm.stage}</span>
                  <span>⏱ Call: <strong className="text-theatre-gold-300">{comm.callTime}</strong> (Perf: {comm.performanceTime})</span>
                  <span>
                    👔 Attire:{' '}
                    <strong className="text-theatre-parchment-200 capitalize">
                      {comm.attire.replace('_', ' ')}
                    </strong>
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-theatre-gold-500/15">
                <div className="text-right">
                  <div className="text-xs font-semibold text-theatre-gold-400">
                    +{comm.beamCoinReward} ℔ BEAM
                  </div>
                  <div className="text-[10px] text-theatre-parchment-500">
                    {comm.uncompensatedRehearsalHours} hrs uncompensated
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 border border-theatre-gold-500/40 bg-theatre-gold-500/10 text-theatre-gold-300">
                  {comm.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Navigation to Other Guild Services */}
      <div className="flex flex-wrap items-center justify-between p-6 border border-theatre-gold-500/30 bg-theatre-dark-900/60 gap-4">
        <div>
          <h4 className="font-theatre-serif text-lg text-theatre-parchment-100">
            Commission or Augment with the Guild
          </h4>
          <p className="text-xs text-theatre-parchment-400">
            Engage the full 60-voice SATB chorus, book masterclass clinics, or commission custom vocal arrangements.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/services" className="theatre-btn-gold text-[10px] py-2 px-4">
            Box Office & Services
          </Link>
          <Link href="/join" className="theatre-btn-outline text-[10px] py-2 px-4">
            Audition Guidelines
          </Link>
        </div>
      </div>
    </div>
  )
}
