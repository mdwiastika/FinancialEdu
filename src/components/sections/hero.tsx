'use client'

import { Button } from '@/components/ui/button'
import { ArrowDown, Sparkles } from 'lucide-react'
import ScrollAnimation from '@/components/animations/scroll-animation'
import TextAnimation from '@/components/animations/text-animation'
import FloatingAnimation from '@/components/animations/floating-animation'
import { motion } from 'framer-motion'
import BackgroundParticles from '@/components/animations/background-particles'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-900 relative overflow-hidden pt-20">
      {/* Background Elements */}
      <BackgroundParticles color="#f97316" count={30} />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative pb-32 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <ScrollAnimation>
              <div className="flex items-center space-x-2 text-orange-400 mt-4 lg:mt-0">
                <Sparkles className="h-6 w-6" />
                <span className="font-medium">
                  Financial Education Platform
                </span>
              </div>
            </ScrollAnimation>

            <div className="space-y-4">
              <motion.h1
                className="text-6xl lg:text-8xl font-bold text-white leading-none"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                Exele
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  rate
                </span>
              </motion.h1>

              <TextAnimation
                text="Kuasai konsep keuangan bisnis dengan mudah dan praktis"
                tag="div"
                className="text-2xl lg:text-3xl font-light text-slate-300 max-w-lg"
                delay={0.4}
              />
            </div>

            <ScrollAnimation delay={0.6}>
              <div className="space-y-4 text-slate-400 max-w-lg">
                <p>
                  Web kece yang bakal jadi sahabat terbaik kamu buat ngelola
                  bisnis! Kalau kamu baru mulai usaha dan masih bingung soal
                  hitung-hitungan bisnis kayak biaya produksi, HPP, BEP, laba
                  kotor, laba bersih, sampai RCR, tenang aja! Excelerate hadir
                  buat bantu kamu ngerti semua itu dengan gampang dan praktis.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="#biaya-produksi">
                    <Button
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 rounded-full cursor-pointer"
                    >
                      Mulai Belajar
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="/all-in-one-financial.xlsx" download={true}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 rounded-full cursor-pointer"
                    >
                      Download Template
                    </Button>
                  </a>
                </motion.div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right Side - Visual Element */}
          <ScrollAnimation
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
          >
            <div className="relative">
              <FloatingAnimation yOffset={15} duration={5}>
                <div className="relative">
                  {/* Main Card */}
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 shadow-2xl">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white">
                          Dashboard Keuangan
                        </h3>
                        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-700/50 rounded-xl p-4">
                          <div className="text-sm text-slate-400 mb-1">
                            Total Revenue
                          </div>
                          <div className="text-2xl font-bold text-emerald-400">
                            Rp 200M
                          </div>
                        </div>
                        <div className="bg-slate-700/50 rounded-xl p-4">
                          <div className="text-sm text-slate-400 mb-1">
                            Net Profit
                          </div>
                          <div className="text-2xl font-bold text-orange-400">
                            Rp 55M
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">
                            BEP Achievement
                          </span>
                          <span className="text-emerald-400">138%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: '75%' }}
                            transition={{
                              duration: 1.5,
                              delay: 1,
                              ease: 'easeOut',
                            }}
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-orange-500 rounded-2xl p-4 shadow-lg"
                    initial={{ scale: 0, rotate: 10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <div className="text-black font-bold text-lg">
                      RCR: 1.38
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-emerald-500 rounded-2xl p-4 shadow-lg"
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    <div className="text-black font-bold text-lg">
                      ROI: +27%
                    </div>
                  </motion.div>
                </div>
              </FloatingAnimation>
            </div>
          </ScrollAnimation>
        </div>

        {/* Scroll Indicator */}
        <Link href="#biaya-produksi">
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <motion.div
              className="bg-orange-500 rounded-full p-4 cursor-pointer"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: 'loop',
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowDown className="h-6 w-6 text-black" />
            </motion.div>
          </div>
        </Link>
      </div>
    </section>
  )
}
