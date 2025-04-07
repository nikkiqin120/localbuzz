import Link from 'next/link'

export default function SoftWash() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/home-maintenance"
        className="inline-block text-blue-600 hover:text-blue-800 mb-6"
      >
        ← Back to Home Maintenance
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 mb-8">Professional Soft Wash Services</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Soft Wash Process</h2>
          <p className="text-gray-600 mb-6">
            Soft washing is a gentle yet effective cleaning method that uses low-pressure water and specialized cleaning solutions to safely remove dirt, algae, and other contaminants from your home's exterior surfaces.
          </p>
          
          <div className="w-full h-[300px] mb-6">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/uzkMwHZf3Y8?cc_load_policy=1&cc_lang_pref=en"
              title="Soft Wash Process"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Soft Washing?</h3>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Gentle cleaning that won't damage your surfaces</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Environmentally friendly cleaning solutions</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Long-lasting results with protective treatments</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Safe for all exterior surfaces including siding, fences, and decks</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Services</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">House Washing</h3>
              <p className="text-gray-600">
                Complete exterior cleaning of your home using our gentle soft wash technique.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fence Cleaning</h3>
              <p className="text-gray-600">
                Restore your fence's appearance with our specialized soft wash treatment.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deck & Patio Cleaning</h3>
              <p className="text-gray-600">
                Safely clean and restore your outdoor living spaces.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-4">
              Contact us today for a free quote and professional soft wash service.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 