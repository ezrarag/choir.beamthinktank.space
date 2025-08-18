'use client'

import { useState } from 'react'
import { Target, Music, Users, Building, Star, Award, Trophy } from 'lucide-react'

const thresholds = [
  {
    amount: 50000,
    icon: Music,
    title: 'Community Concert Series',
    description: 'Monthly free concerts in local communities',
    status: 'achieved',
    progress: 100,
    color: 'green'
  },
  {
    amount: 100000,
    icon: Users,
    title: 'Music Education Programs',
    description: 'Vocal training classes for 200+ students',
    status: 'achieved',
    progress: 100,
    color: 'green'
  },
  {
    amount: 250000,
    icon: Building,
    title: 'Rehearsal Facility',
    description: 'Dedicated space for choir rehearsals',
    status: 'in-progress',
    progress: 75,
    color: 'blue'
  },
  {
    amount: 500000,
    icon: Star,
    title: 'Professional Recording Studio',
    description: 'High-quality recording for performances',
    status: 'pending',
    progress: 30,
    color: 'yellow'
  },
  {
    amount: 1000000,
    icon: Award,
    title: 'National Choir Festival',
    description: 'Annual gathering of all choir groups',
    status: 'pending',
    progress: 15,
    color: 'yellow'
  },
  {
    amount: 2500000,
    icon: Trophy,
    title: 'Music Academy Campus',
    description: 'Full-scale music education facility',
    status: 'pending',
    progress: 5,
    color: 'gray'
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'achieved':
      return 'bg-green-100 text-green-800 border-green-200'
    case 'in-progress':
      return 'bg-blue-100 text-blue-800 border-blue-200'
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

const getProgressColor = (status: string) => {
  switch (status) {
    case 'achieved':
      return 'bg-green-500'
    case 'in-progress':
      return 'bg-blue-500'
    case 'pending':
      return 'bg-yellow-500'
    default:
      return 'bg-gray-300'
  }
}

export default function FundThresholds() {
  const [selectedThreshold, setSelectedThreshold] = useState<number | null>(null)

  const totalRaised = 187500 // Current amount raised
  const nextThreshold = thresholds.find(t => t.status === 'pending')

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fund Thresholds & Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how your donations unlock new programs and initiatives that transform 
            communities through vocal arts and music education.
          </p>
        </div>

        {/* Current Progress */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Current Progress
              </h3>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                ${totalRaised.toLocaleString()}
              </div>
              <p className="text-gray-600">
                raised of ${nextThreshold?.amount.toLocaleString()} goal
              </p>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <div 
                className="bg-gradient-to-r from-primary-500 to-primary-600 h-4 rounded-full transition-all duration-500"
                style={{ width: `${(totalRaised / (nextThreshold?.amount || 1)) * 100}%` }}
              ></div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                <span className="font-medium">${(nextThreshold?.amount || 0) - totalRaised}</span> more needed for {nextThreshold?.title}
              </p>
            </div>
          </div>
        </div>

        {/* Thresholds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {thresholds.map((threshold, index) => (
            <div 
              key={index}
              className={`card cursor-pointer transition-all duration-300 hover:shadow-lg ${
                selectedThreshold === index ? 'ring-2 ring-primary-500' : ''
              }`}
              onClick={() => setSelectedThreshold(selectedThreshold === index ? null : index)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg">
                  <threshold.icon className="h-6 w-6 text-primary-600" />
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(threshold.status)}`}>
                  {threshold.status.replace('-', ' ')}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ${threshold.amount.toLocaleString()}
              </h3>
              
              <h4 className="font-medium text-gray-800 mb-2">
                {threshold.title}
              </h4>
              
              <p className="text-gray-600 text-sm mb-4">
                {threshold.description}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(threshold.status)}`}
                  style={{ width: `${threshold.progress}%` }}
                ></div>
              </div>
              
              <div className="text-right">
                <span className="text-sm font-medium text-gray-700">
                  {threshold.progress}% Complete
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Help Us Reach the Next Milestone
            </h3>
            <p className="text-primary-100 mb-6">
              Every donation brings us closer to unlocking new programs and expanding our impact.
            </p>
            <a href="#donate" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
              Make a Donation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
