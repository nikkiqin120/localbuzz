'use client';

import QuoteForm from '@/components/QuoteForm';

export default function RoofCleaning() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Content Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Professional Roof Cleaning Services</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Keep your roof in pristine condition with our professional roof cleaning services. 
              We use safe and effective methods to remove moss, algae, and debris, protecting 
              your roof's integrity and enhancing your home's curb appeal.
            </p>

            <h2>Our Roof Cleaning Process</h2>
            <ul>
              <li>Thorough inspection of your roof's condition</li>
              <li>Safe and effective cleaning methods</li>
              <li>Removal of moss, algae, and debris</li>
              <li>Treatment to prevent future growth</li>
              <li>Complete cleanup after service</li>
            </ul>

            <h2>Benefits of Professional Roof Cleaning</h2>
            <ul>
              <li>Extends roof life</li>
              <li>Improves energy efficiency</li>
              <li>Enhances curb appeal</li>
              <li>Prevents damage from organic growth</li>
              <li>Maintains warranty compliance</li>
            </ul>

            <div className="mt-8">
              <h2>Why Choose Us?</h2>
              <ul>
                <li>Experienced and certified technicians</li>
                <li>Eco-friendly cleaning solutions</li>
                <li>Competitive pricing</li>
                <li>Fully insured service</li>
                <li>Satisfaction guaranteed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quote Form Section */}
        <div>
          <QuoteForm service="Roof Cleaning" />
        </div>
      </div>
    </div>
  );
} 