'use client'

import { Button } from '@/components/ui/button'
import { ExternalLink, ShoppingCart } from 'lucide-react'
import ScrollAnimation from '@/components/animations/scroll-animation'
import TextAnimation from '@/components/animations/text-animation'
import StaggeredChildren from '@/components/animations/staggered-children'
import HoverCard from '@/components/animations/hover-card'
import FloatingAnimation from '@/components/animations/floating-animation'
import { motion } from 'framer-motion'

export default function HPP() {
  return (
    <section id="hpp" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ScrollAnimation
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
              }}
            >
              <div className="relative">
                {/* Main Card */}
                <FloatingAnimation yOffset={12} duration={6}>
                  <HoverCard className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 shadow-2xl">
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-sm text-emerald-400 mb-2 font-medium">
                          HPP CALCULATION
                        </div>
                        <motion.div
                          className="text-3xl font-bold text-white"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          Rp 90,000,000
                        </motion.div>
                      </div>

                      <StaggeredChildren
                        className="space-y-4"
                        staggerDelay={0.2}
                        childrenDelay={0.8}
                      >
                        <div className="bg-slate-700/50 rounded-2xl p-4">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-300">
                              Persediaan Awal
                            </span>
                            <span className="text-xl font-bold text-emerald-400">
                              25M
                            </span>
                          </div>
                        </div>

                        <motion.div
                          className="text-center text-slate-400 font-mono text-lg"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 3,
                          }}
                        >
                          +
                        </motion.div>

                        <div className="bg-slate-700/50 rounded-2xl p-4">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-300">
                              Pembelian Bersih
                            </span>
                            <span className="text-xl font-bold text-blue-400">
                              80M
                            </span>
                          </div>
                        </div>

                        <motion.div
                          className="text-center text-slate-400 font-mono text-lg"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 3,
                            delay: 0.5,
                          }}
                        >
                          -
                        </motion.div>

                        <div className="bg-slate-700/50 rounded-2xl p-4">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-300">
                              Persediaan Akhir
                            </span>
                            <span className="text-xl font-bold text-orange-400">
                              15M
                            </span>
                          </div>
                        </div>
                      </StaggeredChildren>

                      <motion.div
                        className="border-t border-slate-600 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                      >
                        <motion.div
                          className="bg-emerald-500/20 rounded-2xl p-4 border border-emerald-500/30"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)',
                          }}
                        >
                          <div className="text-center">
                            <div className="text-emerald-400 font-medium">
                              HASIL HPP
                            </div>
                            <div className="text-2xl font-bold text-white">
                              Rp 90,000,000
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </HoverCard>
                </FloatingAnimation>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-emerald-500 rounded-2xl p-3 shadow-lg"
                  initial={{ scale: 0, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  <ShoppingCart className="h-6 w-6 text-black" />
                </motion.div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <ScrollAnimation>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ShoppingCart className="h-6 w-6 text-black" />
                  </motion.div>
                  <div className="text-sm font-medium text-emerald-400 uppercase tracking-wider">
                    02 / Essential
                  </div>
                </div>

                <TextAnimation
                  text="HPP HARGA POKOK"
                  tag="h2"
                  className="text-5xl lg:text-7xl font-bold text-white leading-none"
                />
              </div>
            </ScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation delay={0.2}>
                <h3 className="text-2xl font-bold text-emerald-400">
                  Sobat bisnis, udah pada tahu tentang HPP alias Harga Pokok
                  Penjualan belum?
                </h3>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <p className="text-lg text-slate-300 leading-relaxed">
                  HPP ini penting banget loh buat ngukur efisiensi produksi,
                  nentuin harga jual, dan pastinya bikin bisnis tetap
                  kompetitif! 🚀
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <motion.div
                  className="bg-slate-800 rounded-3xl p-8 border border-slate-700"
                  whileHover={{
                    scale: 1.02,
                    borderColor: 'rgba(16, 185, 129, 0.5)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-sm text-emerald-400 mb-3 font-medium">
                    FORMULA OPTIONS
                  </div>
                  <div className="space-y-3 font-mono text-lg">
                    <motion.div
                      className="text-white"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <span className="text-emerald-400">HPP</span> = Persediaan
                      Awal + Pembelian Bersih - Persediaan Akhir
                    </motion.div>
                    <motion.div
                      className="text-slate-400 text-center"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      atau
                    </motion.div>
                    <motion.div
                      className="text-white"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      <span className="text-emerald-400">HPP</span> = Persediaan
                      Item - Persediaan Akhir
                    </motion.div>
                  </div>
                </motion.div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
