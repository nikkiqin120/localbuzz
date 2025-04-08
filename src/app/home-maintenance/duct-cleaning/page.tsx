import Link from 'next/link'

export default function DuctCleaning() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link
          href="/home-maintenance"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home Maintenance
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-8">Professional Duct Cleaning Services</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Duct Cleaning Process</h2>
              <div className="w-full h-[300px] mb-6">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/2a86xiLlAHo"
                  title="Duct Cleaning Process"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="prose max-w-none">
                <p className="text-gray-600">
                  Watch our professional team demonstrate the thorough duct cleaning process.
                  The video includes English subtitles for better understanding.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Professional Duct Cleaning?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Improves indoor air quality and reduces allergens</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Enhances HVAC system efficiency and lifespan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Reduces energy costs and improves system performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Professional cleaning of all duct types (furnace, AC, dryer, ventilation)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                Get a free quote for your duct cleaning project.
              </p>
              <Link
                href="/contact"
                className="inline-block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 