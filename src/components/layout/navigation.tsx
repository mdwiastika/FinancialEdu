'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '#biaya-produksi', label: 'Biaya Produksi' },
    { href: '#hpp', label: 'HPP' },
    { href: '#bep', label: 'BEP' },
    { href: '#laba-kotor', label: 'Laba Kotor' },
    { href: '#laba-bersih', label: 'Laba Bersih' },
    { href: '#rcr', label: 'RCR' },
  ]

  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Cek adanya hash (anchor) di url
    const hash = window.location.hash
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 80
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
  }, [pathname, searchParams])

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded transform rotate-45 mr-3"></div>
            <h1 className="text-2xl font-bold text-white">Exelerate</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-300 hover:text-orange-400 font-medium transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <a
              href="/all-in-one-financial.xlsx"
              download={true}
              className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-2 rounded-full cursor-pointer"
            >
              Download Excel
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-6 space-y-3 bg-slate-900 border-t border-slate-700">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-300 hover:text-orange-400 block px-3 py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="/all-in-one-financial.xlsx"
                download={true}
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold w-full mt-4 cursor-pointer"
              >
                Download Excel
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
