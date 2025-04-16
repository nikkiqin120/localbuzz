'use client';

import QuoteForm from '@/components/QuoteForm';

export default function SoftWash() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Content Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Professional Soft Wash Services</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Our soft wash service is a gentle yet effective cleaning method that removes dirt, 
              algae, and other contaminants from your home's exterior surfaces without causing 
              any damage. Perfect for siding, stucco, and other delicate surfaces.
            </p>

            <h2>What is Soft Washing?</h2>
            <p>
              Soft washing uses low-pressure water combined with specialized cleaning solutions 
              to safely clean exterior surfaces. This method is more effective and longer-lasting 
              than traditional pressure washing, while being gentler on your property.
            </p>

            <h2>Our Soft Wash Process</h2>
            <ul>
              <li>Surface inspection and preparation</li>
              <li>Application of eco-friendly cleaning solutions</li>
              <li>Gentle rinsing with low pressure</li>
              <li>Treatment to prevent future growth</li>
              <li>Final inspection and cleanup</li>
            </ul>

            <h2>Surfaces We Clean</h2>
            <ul>
              <li>Vinyl and wood siding</li>
              <li>Stucco and EIFS</li>
              <li>Brick and concrete</li>
              <li>Decks and fences</li>
              <li>Patios and walkways</li>
            </ul>

            <div className="mt-8">
              <h2>Benefits of Soft Washing</h2>
              <ul>
                <li>Safe for all exterior surfaces</li>
                <li>Longer-lasting results</li>
                <li>Kills algae and bacteria</li>
                <li>Improves curb appeal</li>
                <li>Protects your investment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quote Form Section */}
        <div>
          <QuoteForm service="Soft Wash" />
        </div>
      </div>
    </div>
  );
} 