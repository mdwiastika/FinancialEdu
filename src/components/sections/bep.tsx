'use client'
import { Target } from 'lucide-react'
import ScrollAnimation from '@/components/animations/scroll-animation'
import TextAnimation from '@/components/animations/text-animation'
import StaggeredChildren from '@/components/animations/staggered-children'
import HoverCard from '@/components/animations/hover-card'
import FloatingAnimation from '@/components/animations/floating-animation'
import { motion } from 'framer-motion'

export default function BEP() {
  return (
    <section id="bep" className="py-20 bg-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_#f97316_25%,_transparent_25%,_transparent_75%,_#f97316_75%,_#f97316),_linear-gradient(45deg,_#f97316_25%,_transparent_25%,_transparent_75%,_#f97316_75%,_#f97316)] bg-[length:20px_20px] bg-[position:0_0,_10px_10px]"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollAnimation>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center"
                    whileHover={{ rotate: 180, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Target className="h-6 w-6 text-white" />
                  </motion.div>
                  <div className="text-sm font-medium text-orange-600 uppercase tracking-wider">
                    03 / Critical Point
                  </div>
                </div>

                <TextAnimation
                  text="BEP BREAK EVEN"
                  tag="h2"
                  className="text-5xl lg:text-7xl font-bold text-slate-900 leading-none"
                />
              </div>
            </ScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation delay={0.2}>
                <h3 className="text-2xl font-bold text-orange-600">
                  Pernah nggak sih kamu mikir? Sebenarnya, berapa banyak produk
                  yang harus kita jual biar ga rugi?
                </h3>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <motion.div
                  className="bg-white rounded-3xl p-8 shadow-lg border border-orange-200"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <div className="space-y-4">
                    <motion.div
                      className="text-orange-600 font-semibold"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 3,
                      }}
                    >
                      Nah, jawabannya ada di BEP!
                    </motion.div>
                    <p className="text-slate-700 leading-relaxed">
                      BEP itu titik impas, di mana total pendapatan sama dengan
                      total biaya. Jadi usahamu belum untung, tapi juga ga
                      nombok.
                    </p>
                  </div>
                </motion.div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <motion.div
                  className="bg-slate-900 rounded-3xl p-8 text-white"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-sm text-orange-400 mb-3 font-medium">
                    FORMULA BEP
                  </div>
                  <div className="text-xl font-mono space-y-2">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <span className="text-orange-400">BEP (unit)</span> =
                    </motion.div>
                    <motion.div
                      className="pl-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      <span className="text-emerald-400">Biaya Tetap</span> ÷
                    </motion.div>
                    <motion.div
                      className="pl-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      (<span className="text-blue-400">Harga Jual</span> -{' '}
                      <span className="text-purple-400">Biaya Variabel</span>)
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
                <FloatingAnimation yOffset={10} duration={7}>
                  <HoverCard className="bg-white rounded-3xl p-8 shadow-2xl border border-orange-200">
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-sm text-orange-600 mb-2 font-medium">
                          BREAK EVEN POINT
                        </div>
                        <motion.div
                          className="text-3xl font-bold text-slate-900"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          10,000 Unit
                        </motion.div>
                        <motion.div
                          className="text-lg text-slate-600"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                        >
                          Rp 150,000,000
                        </motion.div>
                      </div>

                      <StaggeredChildren
                        className="space-y-4"
                        staggerDelay={0.15}
                        childrenDelay={1}
                      >
                        <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-semibold text-slate-900">
                                Biaya Tetap
                              </div>
                              <div className="text-sm text-slate-600">
                                Fixed Cost
                              </div>
                            </div>
                            <div className="text-xl font-bold text-emerald-600">
                              50M
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-semibold text-slate-900">
                                Harga Jual/Unit
                              </div>
                              <div className="text-sm text-slate-600">
                                Selling Price
                              </div>
                            </div>
                            <div className="text-xl font-bold text-blue-600">
                              15K
                            </div>
                          </div>
                        </div>

                        <div className="bg-purple-50 rounded-2xl p-4 border border-purple-200">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-semibold text-slate-900">
                                Biaya Variabel/Unit
                              </div>
                              <div className="text-sm text-slate-600">
                                Variable Cost
                              </div>
                            </div>
                            <div className="text-xl font-bold text-purple-600">
                              10K
                            </div>
                          </div>
                        </div>
                      </StaggeredChildren>

                      <motion.div
                        className="bg-orange-500 rounded-2xl p-4 text-white text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: '0 0 20px rgba(249, 115, 22, 0.4)',
                        }}
                      >
                        <div className="font-semibold">Contribution Margin</div>
                        <div className="text-2xl font-bold">
                          Rp 5,000 / Unit
                        </div>
                      </motion.div>
                    </div>
                  </HoverCard>
                </FloatingAnimation>

                {/* Target Icon */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-orange-500 rounded-full p-4 shadow-lg"
                  initial={{ scale: 0, rotate: 45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  whileHover={{ rotate: 45, scale: 1.1 }}
                >
                  <Target className="h-8 w-8 text-white" />
                </motion.div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
