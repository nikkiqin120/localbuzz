import Link from 'next/link'

export default function HomeMaintenance() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Home Maintenance Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Roof Cleaning Section */}
        <Link href="/home-care/roof-cleaning" className="block">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Roof Cleaning Services</h2>
              <p className="text-gray-600 mb-4">
                Professional roof cleaning services to maintain your home's appearance and protect your roof.
              </p>
              <div className="w-full h-[300px] mb-4">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/3nFh0u15rhk"
                  title="Roof Cleaning Service"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Learn More
              </div>
            </div>
          </div>
        </Link>

        {/* Soft Wash Section */}
        <Link href="/home-care/soft-wash" className="block">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Soft Wash Services</h2>
              <p className="text-gray-600 mb-4">
                Gentle yet effective cleaning solutions for your home's exterior surfaces.
              </p>
              <div className="w-full h-[300px] mb-4">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/uzkMwHZf3Y8?cc_load_policy=1&cc_lang_pref=en"
                  title="Soft Wash Service"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Learn More
              </div>
            </div>
          </div>
        </Link>

        {/* Duct Cleaning Section */}
        <Link href="/home-care/duct-cleaning" className="block">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Duct Cleaning Services</h2>
              <p className="text-gray-600 mb-4">
                Professional duct cleaning services for your HVAC system, including furnace, air conditioning, dryer vents, and ventilation systems.
              </p>
              <div className="w-full h-[300px] mb-4">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/2a86xiLlAHo"
                  title="Duct Cleaning Service"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Learn More
              </div>
            </div>
          </div>
        </Link>

        {/* Local Companies Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Local Service Providers</h2>
            <p className="text-gray-600 mb-4">
              Trusted local companies providing quality home maintenance services.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Licensed and insured professionals</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Local Vancouver-based companies</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Competitive pricing</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors mt-4"
            >
              View Providers
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 