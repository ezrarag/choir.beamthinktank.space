'use client'

interface ChoirShowcaseProps {
  selectedCity: string
}

const choirData = {
  'all': [
    { type: 'Gospel', city: 'New York', name: 'Harlem Gospel Choir', description: 'Traditional gospel music with contemporary flair', image: '/api/placeholder/300/200' },
    { type: 'Classical', city: 'Boston', name: 'Boston Classical Ensemble', description: 'Professional classical vocal performances', image: '/api/placeholder/300/200' },
    { type: 'Opera', city: 'Chicago', name: 'Chicago Opera Chorus', description: 'Operatic excellence in the Windy City', image: '/api/placeholder/300/200' },
    { type: 'Contemporary', city: 'Los Angeles', name: 'LA Contemporary Voices', description: 'Modern vocal arrangements and compositions', image: '/api/placeholder/300/200' },
  ],
  'new-york': [
    { type: 'Gospel', city: 'New York', name: 'Harlem Gospel Choir', description: 'Traditional gospel music with contemporary flair', image: '/api/placeholder/300/200' },
    { type: 'Classical', city: 'New York', name: 'NYC Classical Chorus', description: 'World-class classical performances', image: '/api/placeholder/300/200' },
    { type: 'Opera', city: 'New York', name: 'Metropolitan Opera Chorus', description: 'Operatic excellence at the Met', image: '/api/placeholder/300/200' },
  ],
  'los-angeles': [
    { type: 'Contemporary', city: 'Los Angeles', name: 'LA Contemporary Voices', description: 'Modern vocal arrangements and compositions', image: '/api/placeholder/300/200' },
    { type: 'Gospel', city: 'Los Angeles', name: 'LA Gospel Collective', description: 'Contemporary gospel music', image: '/api/placeholder/300/200' },
  ],
  'chicago': [
    { type: 'Classical', city: 'Chicago', name: 'Chicago Classical Ensemble', description: 'Professional classical vocal performances', image: '/api/placeholder/300/200' },
    { type: 'Opera', city: 'Chicago', name: 'Chicago Opera Chorus', description: 'Operatic excellence in the Windy City', image: '/api/placeholder/300/200' },
    { type: 'Gospel', city: 'Chicago', name: 'Chicago Gospel Choir', description: 'Soulful gospel music', image: '/api/placeholder/300/200' },
  ],
  'atlanta': [
    { type: 'Gospel', city: 'Atlanta', name: 'Atlanta Gospel Choir', description: 'Traditional southern gospel', image: '/api/placeholder/300/200' },
    { type: 'Contemporary', city: 'Atlanta', name: 'ATL Contemporary Voices', description: 'Modern vocal music', image: '/api/placeholder/300/200' },
  ],
  'nashville': [
    { type: 'Contemporary', city: 'Nashville', name: 'Nashville Vocal Collective', description: 'Contemporary vocal arrangements', image: '/api/placeholder/300/200' },
    { type: 'Gospel', city: 'Nashville', name: 'Nashville Gospel Choir', description: 'Country gospel music', image: '/api/placeholder/300/200' },
  ],
  'boston': [
    { type: 'Classical', city: 'Boston', name: 'Boston Classical Ensemble', description: 'Professional classical vocal performances', image: '/api/placeholder/300/200' },
    { type: 'Opera', city: 'Boston', name: 'Boston Opera Chorus', description: 'Operatic excellence', image: '/api/placeholder/300/200' },
  ],
  'miami': [
    { type: 'Contemporary', city: 'Miami', name: 'Miami Contemporary Voices', description: 'Latin-influenced contemporary music', image: '/api/placeholder/300/200' },
    { type: 'Gospel', city: 'Miami', name: 'Miami Gospel Choir', description: 'Caribbean gospel music', image: '/api/placeholder/300/200' },
  ],
}

export default function ChoirShowcase({ selectedCity }: ChoirShowcaseProps) {
  const choirs = choirData[selectedCity as keyof typeof choirData] || choirData.all

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choir Groups & Performances
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the diverse vocal talents and musical traditions across our network
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {choirs.map((choir, index) => (
            <div key={index} className="card group hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <span className="text-primary-600 font-medium">{choir.type}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                    {choir.type}
                  </span>
                  <span className="text-sm text-gray-500">{choir.city}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {choir.name}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {choir.description}
                </p>
                
                <div className="pt-4">
                  <button className="btn-secondary w-full">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join a Choir Group
            </h3>
            <p className="text-gray-600 mb-6">
              Ready to find your voice? Explore our vocal training programs and join a choir in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Find Training Programs
              </button>
              <button className="btn-secondary">
                Contact Local Choirs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
