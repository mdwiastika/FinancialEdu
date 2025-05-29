'use client'

import { Button } from '@/components/ui/button'
import { ExternalLink, Factory } from 'lucide-react'
import ScrollAnimation from '@/components/animations/scroll-animation'
import TextAnimation from '@/components/animations/text-animation'
import StaggeredChildren from '@/components/animations/staggered-children'
import HoverCard from '@/components/animations/hover-card'
import { motion } from 'framer-motion'

export default function BiayaProduksi() {
  return (
    <section
      id="biaya-produksi"
      className="py-20 bg-slate-100 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#000_1px,_transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollAnimation>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center"
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Factory className="h-6 w-6 text-orange-400" />
                  </motion.div>
                  <div className="text-sm font-medium text-slate-600 uppercase tracking-wider">
                    01 / Fundamental
                  </div>
                </div>

                <TextAnimation
                  text="BIAYA PRODUKSI"
                  tag="h2"
                  className="text-5xl lg:text-7xl font-bold text-slate-900 leading-none"
                />
              </div>
            </ScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation delay={0.2}>
                <h3 className="text-2xl font-bold text-slate-800">
                  Ungkap Rahasia Biaya Produksi: Ambil Alih Kendali Keuangan
                  Bisnis Anda!
                </h3>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Mau punya pegangan kuat atas keuangan bisnis? Mulailah dengan
                  memahami Biaya Produksi! Ini adalah elemen penting yang
                  menunjukkan total pengeluaran untuk menciptakan produk atau
                  layanan Anda.
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <motion.div
                  className="bg-slate-900 rounded-3xl p-8 text-white"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-sm text-orange-400 mb-3 font-medium">
                    RUMUS FORMULA
                  </div>
                  <div className="text-xl font-mono">
                    <motion.span
                      className="text-orange-400"
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      Biaya Produksi
                    </motion.span>{' '}
                    =
                    <br />
                    <motion.span
                      className="text-emerald-400"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      Bahan Baku
                    </motion.span>{' '}
                    +
                    <motion.span
                      className="text-blue-400"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      {' Upah TK'}
                    </motion.span>{' '}
                    +
                    <motion.span
                      className="text-purple-400"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      {' Overhead'}
                    </motion.span>
                  </div>
                </motion.div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.5}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 rounded-full text-lg">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Buka Template Excel
                  </Button>
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
                <HoverCard className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-sm text-slate-500 mb-2">
                        BREAKDOWN BIAYA
                      </div>
                      <motion.div
                        className="text-3xl font-bold text-slate-900"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        Rp 100,000,000
                      </motion.div>
                    </div>

                    <StaggeredChildren
                      className="space-y-4"
                      staggerDelay={0.15}
                      childrenDelay={0.8}
                    >
                      <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-2xl">
                        <div>
                          <div className="font-semibold text-slate-900">
                            Bahan Baku
                          </div>
                          <div className="text-sm text-slate-600">
                            50% dari total
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-emerald-600">
                          50M
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-2xl">
                        <div>
                          <div className="font-semibold text-slate-900">
                            Upah Tenaga Kerja
                          </div>
                          <div className="text-sm text-slate-600">
                            30% dari total
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-blue-600">
                          30M
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-purple-50 rounded-2xl">
                        <div>
                          <div className="font-semibold text-slate-900">
                            Biaya Overhead
                          </div>
                          <div className="text-sm text-slate-600">
                            20% dari total
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-purple-600">
                          20M
                        </div>
                      </div>
                    </StaggeredChildren>
                  </div>
                </HoverCard>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-orange-500 rounded-2xl p-4 shadow-lg"
                  initial={{ scale: 0, rotate: 20 }}
                  animate={{ scale: 1, rotate: 12 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  whileHover={{ rotate: 0, scale: 1.1 }}
                >
                  <div className="text-black font-bold text-sm">STEP 1</div>
                </motion.div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
