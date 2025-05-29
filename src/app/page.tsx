import Hero from '@/components/sections/hero'
import BiayaProduksi from '@/components/sections/biaya-produksi'
import HPP from '@/components/sections/hpp'
import BEP from '@/components/sections/bep'
import LabaKotor from '@/components/sections/laba-kotor'
import LabaBersih from '@/components/sections/laba-bersih'
import RCR from '@/components/sections/rcr'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <BiayaProduksi />
      <HPP />
      <BEP />
      <LabaKotor />
      <LabaBersih />
      <RCR />
      <Footer />
    </main>
  )
}
