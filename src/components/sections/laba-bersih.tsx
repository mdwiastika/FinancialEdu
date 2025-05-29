'use client'

import { DollarSign } from 'lucide-react'
import ScrollAnimation from '@/components/animations/scroll-animation'
import TextAnimation from '@/components/animations/text-animation'
import StaggeredChildren from '@/components/animations/staggered-children'
import HoverCard from '@/components/animations/hover-card'
import FloatingAnimation from '@/components/animations/floating-animation'
import { motion } from 'framer-motion'

export default function LabaBersih() {
  return (
    <section
      id="laba-bersih"
      className="py-20 bg-emerald-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_#10b981_2px,_transparent_2px),_radial-gradient(circle_at_75%_75%,_#10b981_2px,_transparent_2px)] bg-[length:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollAnimation>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <DollarSign className="h-6 w-6 text-white" />
                  </motion.div>
                  <div className="text-sm font-medium text-emerald-600 uppercase tracking-wider">
                    05 / Bottom Line
                  </div>
                </div>

                <TextAnimation
                  text="LABA BERSIH"
                  tag="h2"
                  className="text-5xl lg:text-7xl font-bold text-slate-900 leading-none"
                />
              </div>
            </ScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation delay={0.2}>
                <h3 className="text-2xl font-bold text-emerald-600">
                  Sobat bisnis kira-kira udah tau mengenai laba bersih belum
                  nih?
                </h3>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <motion.div
                  className="bg-white rounded-3xl p-8 shadow-lg border border-emerald-200"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <div className="space-y-4">
                    <motion.div
                      className="text-emerald-600 font-semibold"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 4,
                      }}
                    >
                      Indikator Utama Keberlanjutan
                    </motion.div>
                    <p className="text-slate-700 leading-relaxed">
                      Laba bersih sangat penting untuk mengukur keberhasilan,
                      mengambil keputusan strategis, menarik investor, dan
                      merencanakan keuangan.
                    </p>
                  </div>
                </motion.div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Laba bersih adalah keuntungan akhir yang diperoleh bisnis
                  setelah mengurangi semua biaya operasional, non-operasional,
                  dan pajak dari pendapatan total.
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={0.5}>
                <motion.div
                  className="bg-slate-900 rounded-3xl p-8 text-white"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-sm text-emerald-400 mb-3 font-medium">
                    FORMULA FINAL
                  </div>
                  <div className="text-lg font-mono space-y-2">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
                      <span className="text-emerald-400">Laba Bersih</span> =
                    </motion.div>
                    <motion.div
                      className="pl-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9, duration: 0.5 }}
                    >
                      <span className="text-blue-400">Pendapatan Total</span> -
                    </motion.div>
                    <motion.div
                      className="pl-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1, duration: 0.5 }}
                    >
                      (<span className="text-red-400">Biaya Operasional</span> +
                      <span className="text-orange-400"> Non-Op</span> +
                      <span className="text-purple-400"> Pajak</span>)
                    </motion.div>
                  </div>
                </motion.div>
              </ScrollAnimation>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-5">
            <ScrollAnimation
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
              }}
            >
              <div className="relative">
                {/* Main Card */}
                <FloatingAnimation yOffset={12} duration={6}>
                  <HoverCard className="bg-white rounded-3xl p-8 shadow-2xl border border-emerald-200">
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-sm text-emerald-600 mb-2 font-medium">
                          NET PROFIT
                        </div>
                        <motion.div
                          className="text-4xl font-bold text-slate-900"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          Rp 55,000,000
                        </motion.div>
                        <motion.div
                          className="text-emerald-600 font-semibold"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                        >
                          Net Margin: 27.5%
                        </motion.div>
                      </div>

                      <StaggeredChildren
                        className="space-y-3"
                        staggerDelay={0.1}
                        childrenDelay={1}
                      >
                        <div className="bg-blue-50 rounded-xl p-3 border border-blue-200">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-700">
                              Pendapatan Total
                            </span>
                            <span className="font-bold text-blue-600">
                              200M
                            </span>
                          </div>
                        </div>

                        <motion.div
                          className="text-center text-slate-400"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 5,
                          }}
                        >
                          -
                        </motion.div>

                        <div className="bg-red-50 rounded-xl p-3 border border-red-200">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-700">
                              Biaya Operasional
                            </span>
                            <span className="font-bold text-red-600">120M</span>
                          </div>
                        </div>

                        <div className="bg-orange-50 rounded-xl p-3 border border-orange-200">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-700">
                              Biaya Non-Operasional
                            </span>
                            <span className="font-bold text-orange-600">
                              15M
                            </span>
                          </div>
                        </div>

                        <div className="bg-purple-50 rounded-xl p-3 border border-purple-200">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-700">Pajak</span>
                            <span className="font-bold text-purple-600">
                              10M
                            </span>
                          </div>
                        </div>

                        <motion.div
                          className="text-center text-slate-400"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 5,
                            delay: 1,
                          }}
                        >
                          =
                        </motion.div>

                        <motion.div
                          className="bg-emerald-500 rounded-xl p-4 text-white"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
                          }}
                        >
                          <div className="text-center">
                            <div className="font-semibold">Laba Bersih</div>
                            <div className="text-2xl font-bold">55M</div>
                          </div>
                        </motion.div>
                      </StaggeredChildren>
                    </div>
                  </HoverCard>
                </FloatingAnimation>

                {/* Success Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-emerald-500 rounded-2xl p-4 shadow-lg transform -rotate-12"
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: -12 }}
                  transition={{ duration: 0.5, delay: 2 }}
                  whileHover={{ rotate: 0, scale: 1.1 }}
                >
                  <div className="text-white font-bold text-sm">PROFIT!</div>
                </motion.div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
