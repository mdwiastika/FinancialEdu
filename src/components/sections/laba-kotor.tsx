'use client'

import { TrendingUp } from 'lucide-react'
import ScrollAnimation from '@/components/animations/scroll-animation'
import TextAnimation from '@/components/animations/text-animation'
import StaggeredChildren from '@/components/animations/staggered-children'
import HoverCard from '@/components/animations/hover-card'
import FloatingAnimation from '@/components/animations/floating-animation'
import { motion } from 'framer-motion'

export default function LabaKotor() {
  return (
    <section
      id="laba-kotor"
      className="py-20 bg-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
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
                <FloatingAnimation yOffset={8} duration={8}>
                  <HoverCard className="bg-gradient-to-br from-purple-900 to-slate-900 rounded-3xl p-8 border border-purple-500/30 shadow-2xl">
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-sm text-purple-400 mb-2 font-medium">
                          GROSS PROFIT
                        </div>
                        <motion.div
                          className="text-4xl font-bold text-white"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          Rp 80,000,000
                        </motion.div>
                        <motion.div
                          className="text-purple-300"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                        >
                          Margin: 40%
                        </motion.div>
                      </div>

                      <StaggeredChildren
                        className="space-y-4"
                        staggerDelay={0.2}
                        childrenDelay={1}
                      >
                        <div className="bg-emerald-500/20 rounded-2xl p-4 border border-emerald-500/30">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-emerald-300 font-semibold">
                                Total Pendapatan
                              </div>
                              <div className="text-sm text-emerald-400">
                                Revenue
                              </div>
                            </div>
                            <div className="text-2xl font-bold text-emerald-400">
                              200M
                            </div>
                          </div>
                        </div>

                        <motion.div
                          className="text-center text-slate-400 font-mono text-2xl"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 4,
                          }}
                        >
                          -
                        </motion.div>

                        <div className="bg-red-500/20 rounded-2xl p-4 border border-red-500/30">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-red-300 font-semibold">
                                HPP
                              </div>
                              <div className="text-sm text-red-400">
                                Cost of Goods Sold
                              </div>
                            </div>
                            <div className="text-2xl font-bold text-red-400">
                              120M
                            </div>
                          </div>
                        </div>

                        <motion.div
                          className="text-center text-slate-400 font-mono text-2xl"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 4,
                            delay: 1,
                          }}
                        >
                          =
                        </motion.div>

                        <motion.div
                          className="bg-purple-500/30 rounded-2xl p-4 border border-purple-400"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: '0 0 25px rgba(168, 85, 247, 0.4)',
                          }}
                        >
                          <div className="text-center">
                            <div className="text-purple-300 font-semibold">
                              Laba Kotor
                            </div>
                            <div className="text-3xl font-bold text-white">
                              80M
                            </div>
                          </div>
                        </motion.div>
                      </StaggeredChildren>
                    </div>
                  </HoverCard>
                </FloatingAnimation>

                {/* Floating Chart */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-purple-500 rounded-2xl p-4 shadow-lg"
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 2 }}
                  whileHover={{ rotate: 20, scale: 1.1 }}
                >
                  <TrendingUp className="h-8 w-8 text-white" />
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
                    className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center"
                    whileHover={{ rotate: -90, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TrendingUp className="h-6 w-6 text-white" />
                  </motion.div>
                  <div className="text-sm font-medium text-purple-400 uppercase tracking-wider">
                    04 / Profitability
                  </div>
                </div>

                <TextAnimation
                  text="LABA KOTOR"
                  tag="h2"
                  className="text-5xl lg:text-7xl font-bold text-white leading-none"
                />
              </div>
            </ScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation delay={0.2}>
                <h3 className="text-2xl font-bold text-purple-400">
                  Bongkar Rahasia Laba Kotor Anda: Raih Kendali Penuh Keuangan!
                </h3>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Ingin punya kendali penuh atas keuangan bisnis Anda? Mulailah
                  dengan memahami Laba Kotor! Ini adalah kunci pertama untuk
                  membuka pintu profitabilitas.
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <motion.div
                  className="bg-slate-800 rounded-3xl p-8 border border-slate-700"
                  whileHover={{
                    scale: 1.02,
                    borderColor: 'rgba(168, 85, 247, 0.5)',
                  }}
                >
                  <div className="space-y-4">
                    <motion.div
                      className="text-purple-400 font-semibold"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      Filter Pertama Profitabilitas
                    </motion.div>
                    <p className="text-slate-300">
                      Laba kotor memberi tahu Anda pendapatan murni yang
                      dihasilkan dari penjualan, setelah biaya langsung produksi
                      tertutupi.
                    </p>
                  </div>
                </motion.div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.5}>
                <motion.div
                  className="bg-purple-900/50 rounded-3xl p-8 border border-purple-500/30"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-sm text-purple-400 mb-3 font-medium">
                    RUMUS AJAIB
                  </div>
                  <motion.div
                    className="text-2xl font-mono text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <span className="text-purple-400">Laba Kotor</span> =
                    <span className="text-emerald-400"> Pendapatan</span> -
                    <span className="text-red-400"> HPP</span>
                  </motion.div>
                </motion.div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
