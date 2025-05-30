'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [current, setCurrent] = useState('')

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

  // Handle smooth scrolling for hash links
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setCurrent(hash)
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 80
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
  }, [pathname, searchParams])

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.3 + i * 0.1,
      },
    }),
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: 'afterChildren',
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const mobileNavItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, delay: 0.5 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full backdrop-blur-sm border-b z-50 ${
        scrolled
          ? 'bg-slate-900/95 border-slate-700 shadow-lg'
          : 'bg-slate-900/80 border-slate-800'
      }`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href={'/'}>
            <motion.div className="flex items-center" variants={logoVariants}>
              <motion.div
                className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded transform rotate-45 mr-3"
                whileHover={{ rotate: 135, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <h1 className="text-2xl font-bold text-white">Excelerate</h1>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  custom={index}
                  variants={navItemVariants}
                >
                  <Link
                    href={item.href}
                    className={`hover:text-orange-400 font-medium transition-colors duration-300 relative group ${
                      item.href === current
                        ? 'text-orange-400'
                        : 'text-slate-300'
                    }`}
                  >
                    {item.label}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full"
                      transition={{ duration: 0.3 }}
                      whileHover={{ width: '100%' }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="hidden md:block"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <a
              href="/all-in-one-financial.xlsx"
              download={true}
              className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-2 rounded-full cursor-pointer inline-block"
            >
              Download Excel
            </a>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    className="cursor-pointer"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    className="cursor-pointer"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="px-2 pt-2 pb-6 space-y-3 bg-slate-900 border-t border-slate-700">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    variants={mobileNavItemVariants}
                    custom={index}
                  >
                    <Link
                      href={item.href}
                      className={`hover:text-orange-400 block px-3 py-2 font-medium ${
                        current === item.href
                          ? 'text-orange-400'
                          : 'text-slate-300'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={mobileNavItemVariants}
                  custom={navItems.length}
                >
                  <a href="/all-in-one-financial.xlsx" download={true}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold w-full mt-4 cursor-pointer">
                        Download Excel
                      </Button>
                    </motion.div>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
