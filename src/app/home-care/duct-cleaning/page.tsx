'use client';

import QuoteForm from '@/components/QuoteForm';

export default function DuctCleaning() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Content Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Professional Duct Cleaning Services</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Improve your home's air quality with our professional duct cleaning services. 
              We thoroughly clean your HVAC system, including furnace, air conditioning, 
              dryer vents, and ventilation systems to ensure clean, healthy air throughout your home.
            </p>

            <h2>Our Comprehensive Service Includes</h2>
            <ul>
              <li>Complete HVAC system inspection</li>
              <li>Air duct cleaning and sanitization</li>
              <li>Furnace and AC duct maintenance</li>
              <li>Dryer vent cleaning</li>
              <li>Air quality assessment</li>
            </ul>

            <h2>Why Clean Your Ducts?</h2>
            <ul>
              <li>Removes dust, allergens, and contaminants</li>
              <li>Improves indoor air quality</li>
              <li>Increases HVAC efficiency</li>
              <li>Reduces energy costs</li>
              <li>Extends equipment life</li>
            </ul>

            <h2>Signs You Need Duct Cleaning</h2>
            <ul>
              <li>Visible dust around vents</li>
              <li>Increased allergy symptoms</li>
              <li>Musty odors from vents</li>
              <li>Higher energy bills</li>
              <li>Recent renovation work</li>
            </ul>

            <div className="mt-8">
              <h2>Our Professional Approach</h2>
              <ul>
                <li>State-of-the-art equipment</li>
                <li>Certified technicians</li>
                <li>Thorough cleaning process</li>
                <li>EPA-approved products</li>
                <li>Complete system inspection</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quote Form Section */}
        <div>
          <QuoteForm service="Duct Cleaning" />
        </div>
      </div>
    </div>
  );
} 