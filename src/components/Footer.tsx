import Link from 'next/link';
import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center text-center">
          <div className="max-w-xs">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Your local guide to Vancouver's hidden gems and must-visit spots.
            </p>
          </div>
          <div className="max-w-xs">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="max-w-xs">
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <SocialIcons />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vancouver Local Buzz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 