'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Footer from './Footer'

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

      <Footer />
    </div>
  )
} 