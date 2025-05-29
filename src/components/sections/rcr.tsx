'use client'

import { Button } from '@/components/ui/button'
import {
  ExternalLink,
  BarChart3,
  CheckCircle,
  XCircle,
  Minus,
} from 'lucide-react'
import ScrollAnimation from '@/components/animations/scroll-animation'
import TextAnimation from '@/components/animations/text-animation'
import StaggeredChildren from '@/components/animations/staggered-children'
import HoverCard from '@/components/animations/hover-card'
import FloatingAnimation from '@/components/animations/floating-animation'
import { motion } from 'framer-motion'

export default function RCR() {
  return (
    <section id="rcr" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
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
                <FloatingAnimation yOffset={15} duration={5}>
                  <HoverCard className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-8 border border-indigo-500/30 shadow-2xl">
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-sm text-indigo-400 mb-2 font-medium">
                          RETURN COST RATIO
                        </div>
                        <motion.div
                          className="text-5xl font-bold text-white"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                        >
                          1.38
                        </motion.div>
                        <motion.div
                          className="flex items-center justify-center space-x-2 mt-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                        >
                          <CheckCircle className="h-5 w-5 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">
                            Bisnis Menguntungkan
                          </span>
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
                          animate={{ scale: [1, 1.4, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 4,
                          }}
                        >
                          ÷
                        </motion.div>

                        <div className="bg-red-500/20 rounded-2xl p-4 border border-red-500/30">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-red-300 font-semibold">
                                Total Biaya
                              </div>
                              <div className="text-sm text-red-400">
                                Total Cost
                              </div>
                            </div>
                            <div className="text-2xl font-bold text-red-400">
                              145M
                            </div>
                          </div>
                        </div>

                        <motion.div
                          className="text-center text-slate-400 font-mono text-2xl"
                          animate={{ scale: [1, 1.4, 1] }}
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
                          className="bg-indigo-500/30 rounded-2xl p-4 border border-indigo-400"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: '0 0 25px rgba(99, 102, 241, 0.4)',
                          }}
                        >
                          <div className="text-center">
                            <div className="text-indigo-300 font-semibold">
                              RCR
                            </div>
                            <div className="text-4xl font-bold text-white">
                              1.38
                            </div>
                          </div>
                        </motion.div>
                      </StaggeredChildren>

                      {/* Interpretation Guide */}
                      <motion.div
                        className="bg-slate-800/50 rounded-2xl p-4 border border-slate-600"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 2 }}
                      >
                        <div className="text-sm font-semibold text-slate-300 mb-3">
                          Interpretasi RCR:
                        </div>
                        <StaggeredChildren
                          className="space-y-2 text-sm"
                          staggerDelay={0.1}
                          childrenDelay={2.2}
                        >
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-emerald-400" />
                            <span className="text-slate-300">
                              RCR {'>'} 1: Bisnis untung 📈
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Minus className="h-4 w-4 text-yellow-400" />
                            <span className="text-slate-300">
                              RCR = 1: Impas (BEP) ⚖️
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <XCircle className="h-4 w-4 text-red-400" />
                            <span className="text-slate-300">
                              RCR {'<'} 1: Bisnis rugi 📉
                            </span>
                          </div>
                        </StaggeredChildren>
                      </motion.div>
                    </div>
                  </HoverCard>
                </FloatingAnimation>

                {/* Floating Chart Icon */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-indigo-500 rounded-2xl p-4 shadow-lg"
                  initial={{ scale: 0, rotate: 25 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 2.5 }}
                  whileHover={{ rotate: 25, scale: 1.1 }}
                >
                  <BarChart3 className="h-8 w-8 text-white" />
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
                    className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center"
                    whileHover={{ rotate: 180, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <BarChart3 className="h-6 w-6 text-white" />
                  </motion.div>
                  <div className="text-sm font-medium text-indigo-400 uppercase tracking-wider">
                    06 / Performance
                  </div>
                </div>

                <TextAnimation
                  text="RCR RATIO"
                  tag="h2"
                  className="text-5xl lg:text-7xl font-bold text-white leading-none"
                />
              </div>
            </ScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation delay={0.2}>
                <h3 className="text-2xl font-bold text-indigo-400">
                  Yuk, kenalan sama RCR (Return Cost Ratio), si jagoan buat
                  ngukur untung bisnis kamu!
                </h3>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Jadi, RCR ini kasih tahu kamu seberapa banyak uang yang kamu
                  hasilkan dibanding biaya yang kamu keluarin. Semakin tinggi
                  angkanya, makin cuan deh! 💰
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <motion.div
                  className="bg-slate-800 rounded-3xl p-8 border border-slate-700"
                  whileHover={{
                    scale: 1.02,
                    borderColor: 'rgba(99, 102, 241, 0.5)',
                  }}
                >
                  <div className="space-y-4">
                    <motion.div
                      className="text-indigo-400 font-semibold"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      Manfaat RCR untuk Bisnis:
                    </motion.div>
                    <StaggeredChildren
                      className="space-y-2 text-slate-300"
                      staggerDelay={0.1}
                      childrenDelay={0.6}
                    >
                      <div>• Cek seberapa oke strategi bisnismu</div>
                      <div>• Ambil keputusan cerdas</div>
                      <div>• Bikin investor makin naksir usaha kamu</div>
                      <div>• Menilai efisiensi usaha</div>
                    </StaggeredChildren>
                  </div>
                </motion.div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.5}>
                <motion.div
                  className="bg-indigo-900/50 rounded-3xl p-8 border border-indigo-500/30"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-sm text-indigo-400 mb-3 font-medium">
                    CARA HITUNG GAMPANG
                  </div>
                  <motion.div
                    className="text-2xl font-mono text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <span className="text-indigo-400">RCR</span> =
                    <span className="text-emerald-400"> Total Pendapatan</span>{' '}
                    ÷<span className="text-red-400"> Total Biaya</span>
                  </motion.div>
                </motion.div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.6}>
                <motion.div
                  className="bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-3xl p-6 border border-indigo-400/30"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
                  }}
                >
                  <motion.p
                    className="text-slate-300 font-semibold text-center"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    Jangan lupa rutin cek RCR biar bisnismu tetap lancar dan
                    untung terus! 🚀
                  </motion.p>
                </motion.div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
