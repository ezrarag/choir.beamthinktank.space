'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CitySelector from '@/components/CitySelector'
import ChoirShowcase from '@/components/ChoirShowcase'
import DonationSection from '@/components/DonationSection'
import FundThresholds from '@/components/FundThresholds'
import Footer from '@/components/Footer'

export default function Home() {
  const [selectedCity, setSelectedCity] = useState<string>('all')

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CitySelector 
        selectedCity={selectedCity} 
        onCityChange={setSelectedCity} 
      />
      <ChoirShowcase selectedCity={selectedCity} />
      <DonationSection />
      <FundThresholds />
      <Footer />
    </main>
  )
}
