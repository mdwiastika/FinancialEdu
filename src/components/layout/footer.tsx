import { Button } from '@/components/ui/button'
import {
  ExternalLink,
  Mail,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 relative overflow-hidden border-t-2 border-slate-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_#f97316_1px,_transparent_1px),_linear-gradient(-45deg,_#f97316_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl transform rotate-45"></div>
                <h3 className="text-3xl font-bold text-white">Exelerate</h3>
              </div>

              <p className="text-xl text-slate-300 leading-relaxed max-w-md">
                Gak cuma kasih rumus dan penjelasan yang nggak bikin pusing,
                Excelerate juga punya fitur hitung otomatis yang bikin kamu gak
                perlu ribet ngitung manual.
              </p>
              <a
                href="/all-in-one-financial.xlsx"
                download={true}
                className="inline-block mt-4"
              >
                <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 rounded-full text-lg">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Download Semua Template
                </Button>
              </a>

              {/* Social Media */}
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <Instagram className="h-5 w-5 text-slate-300" />
                </div>
                <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <Twitter className="h-5 w-5 text-slate-300" />
                </div>
                <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <Linkedin className="h-5 w-5 text-slate-300" />
                </div>
              </div>
            </div>

            {/* Learning Materials */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-xl font-bold text-white">
                Materi Pembelajaran
              </h4>
              <div className="space-y-3">
                {[
                  {
                    href: '#biaya-produksi',
                    label: 'Biaya Produksi',
                    color: 'text-orange-400',
                  },
                  { href: '#hpp', label: 'HPP', color: 'text-emerald-400' },
                  { href: '#bep', label: 'BEP', color: 'text-orange-400' },
                  {
                    href: '#laba-kotor',
                    label: 'Laba Kotor',
                    color: 'text-purple-400',
                  },
                  {
                    href: '#laba-bersih',
                    label: 'Laba Bersih',
                    color: 'text-emerald-400',
                  },
                  { href: '#rcr', label: 'RCR', color: 'text-indigo-400' },
                ].map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`block ${item.color} hover:text-white transition-colors font-medium`}
                  >
                    {String(index + 1).padStart(2, '0')}. {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-4 space-y-6">
              <h4 className="text-xl font-bold text-white">Hubungi Kami</h4>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center">
                    <Mail className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">Email</div>
                    <div className="text-white font-medium">
                      info@exelerate.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center">
                    <Phone className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">WhatsApp</div>
                    <div className="text-white font-medium">
                      +62 853-3865-1231
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                <h5 className="text-white font-semibold mb-3">Newsletter</h5>
                <p className="text-slate-400 text-sm mb-4">
                  Dapatkan tips keuangan bisnis terbaru langsung di inbox kamu
                  semua
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Email Kamuu"
                    className="flex-1 bg-slate-700 border border-slate-600 rounded-xl px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-orange-400"
                  />
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-4 py-2 rounded-xl">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              &copy; 2025 Exelerate. Semua hak cipta dilindungi.
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
