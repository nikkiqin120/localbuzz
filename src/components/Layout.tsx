'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#9B6B48] shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link
                href="/"
                className="flex items-center text-2xl font-bold text-white"
              >
                LocalBuzz
              </Link>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <Link
                href="/"
                className={`text-white/80 hover:text-white px-2 md:px-3 py-2 rounded-md text-sm md:text-base font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md ${
                  isActive('/') ? 'bg-[#9E6B45] text-white shadow-md scale-105' : 'hover:bg-[#9E6B45]'
                }`}
              >
                Travel
              </Link>
              <Link
                href="/home-care"
                className={`text-white/80 hover:text-white px-2 md:px-3 py-2 rounded-md text-sm md:text-base font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md ${
                  isActive('/home-care') ? 'bg-[#9E6B45] text-white shadow-md scale-105' : 'hover:bg-[#9E6B45]'
                }`}
              >
                Home Care
              </Link>
              <Link
                href="/about"
                className={`hidden md:block text-white/80 hover:text-white px-3 py-2 rounded-md text-sm md:text-base font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md ${
                  isActive('/about') ? 'bg-[#9E6B45] text-white shadow-md scale-105' : 'hover:bg-[#9E6B45]'
                }`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`hidden md:block text-white/80 hover:text-white px-3 py-2 rounded-md text-sm md:text-base font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md ${
                  isActive('/contact') ? 'bg-[#9E6B45] text-white shadow-md scale-105' : 'hover:bg-[#9E6B45]'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">VancouverLocalBuzz</h3>
              <p className="text-gray-400">
                Your guide to family-friendly travel destinations and experiences.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home-care"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home Care
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://twitter.com/vancouverzz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/vancouverlocalbuzz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} VancouverLocalBuzz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 