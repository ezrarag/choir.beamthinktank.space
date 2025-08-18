'use client'

import { useState } from 'react'
import { Heart, Music, Users, Building } from 'lucide-react'

const donationAmounts = [
  { amount: 25, description: 'Music Sheet' },
  { amount: 50, description: 'Vocal Lesson' },
  { amount: 100, description: 'Choir Performance' },
  { amount: 250, description: 'Music Education Program' },
  { amount: 500, description: 'Community Concert' },
  { amount: 1000, description: 'Facility Development' },
]

const impactMetrics = [
  { icon: Music, value: '500+', label: 'Students Trained' },
  { icon: Users, value: '25+', label: 'Choir Groups' },
  { icon: Building, value: '8', label: 'Cities Served' },
  { icon: Heart, value: '$2.5M+', label: 'Funds Raised' },
]

export default function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState<number>(100)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [isProcessing, setIsProcessing] = useState(false)

  const handleDonation = async () => {
    setIsProcessing(true)
    // TODO: Integrate with Stripe checkout
    console.log('Processing donation:', selectedAmount || customAmount)
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
      alert('Thank you for your donation! This would redirect to Stripe checkout in production.')
    }, 2000)
  }

  return (
    <section id="donate" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Support Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your donation directly supports choir performances, music education programs, 
            and facility development across our network of vocal arts communities.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <metric.icon className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {metric.value}
              </div>
              <div className="text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Donation Options */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Choose Your Impact
              </h3>
              
              <div className="space-y-4 mb-6">
                {donationAmounts.map((option) => (
                  <button
                    key={option.amount}
                    onClick={() => {
                      setSelectedAmount(option.amount)
                      setCustomAmount('')
                    }}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                      selectedAmount === option.amount
                        ? 'border-primary-600 bg-primary-50 text-primary-900'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-primary-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold">${option.amount}</div>
                        <div className="text-sm text-gray-500">{option.description}</div>
                      </div>
                      {selectedAmount === option.amount && (
                        <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Custom Amount
                </label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(0)
                  }}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <button
                onClick={handleDonation}
                disabled={isProcessing}
                className="w-full btn-primary text-lg py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Processing...' : 'Donate Now'}
              </button>
            </div>

            {/* Impact Description */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Your Impact
              </h3>
              
              <div className="space-y-6">
                <div className="p-6 bg-primary-50 rounded-lg border border-primary-200">
                  <h4 className="font-semibold text-primary-900 mb-2">
                    Community Concerts
                  </h4>
                  <p className="text-primary-700 text-sm">
                    Free performances that bring communities together through music
                  </p>
                </div>

                <div className="p-6 bg-accent-50 rounded-lg border border-accent-200">
                  <h4 className="font-semibold text-accent-900 mb-2">
                    Music Education Programs
                  </h4>
                  <p className="text-accent-700 text-sm">
                    Vocal training and music theory classes for all skill levels
                  </p>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Facility Development
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Building and maintaining rehearsal spaces and performance venues
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Tax Deductible:</strong> BEAM Choir & Vocal Arts Foundation is a 501(c)(3) 
                  nonprofit organization. Your donation is tax deductible to the extent allowed by law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
