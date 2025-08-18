'use client'

interface CitySelectorProps {
  selectedCity: string
  onCityChange: (city: string) => void
}

const cities = [
  { id: 'all', name: 'All Cities', description: 'View all choir groups' },
  { id: 'new-york', name: 'New York', description: 'Gospel, Classical, Opera' },
  { id: 'los-angeles', name: 'Los Angeles', description: 'Contemporary, Gospel' },
  { id: 'chicago', name: 'Chicago', description: 'Classical, Opera, Gospel' },
  { id: 'atlanta', name: 'Atlanta', description: 'Gospel, Contemporary' },
  { id: 'nashville', name: 'Nashville', description: 'Contemporary, Gospel' },
  { id: 'boston', name: 'Boston', description: 'Classical, Opera' },
  { id: 'miami', name: 'Miami', description: 'Contemporary, Gospel' },
]

export default function CitySelector({ selectedCity, onCityChange }: CitySelectorProps) {
  return (
    <section id="choirs" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Choir Groups by City
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover vibrant vocal communities across the country, from gospel choirs to classical ensembles
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {cities.map((city) => (
            <button
              key={city.id}
              onClick={() => onCityChange(city.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                selectedCity === city.id
                  ? 'border-primary-600 bg-primary-50 text-primary-900'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-primary-300 hover:bg-primary-25'
              }`}
            >
              <h3 className="font-semibold text-sm mb-1">{city.name}</h3>
              <p className="text-xs text-gray-500">{city.description}</p>
            </button>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Can&apos;t find your city?{' '}
            <a href="#contact" className="text-primary-600 hover:text-primary-700 font-medium">
              Contact us to start a choir group
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
