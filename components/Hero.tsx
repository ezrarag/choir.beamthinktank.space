export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Voices,{' '}
            <span className="text-accent-300">Building Community</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-100 leading-relaxed">
            Supporting gospel, classical, opera, and contemporary vocal arts through 
            community concerts, music education, and facility development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#donate" 
              className="btn-primary text-lg px-8 py-3 bg-white text-primary-700 hover:bg-gray-100"
            >
              Support Our Mission
            </a>
            <a 
              href="#choirs" 
              className="btn-secondary text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary-700"
            >
              Explore Choirs
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
