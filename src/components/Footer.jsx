import { Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-[#f99616]" />
              <span className="font-semibold text-white">cenovka.store</span>
            </div>
            <p className="mt-3 text-sm text-gray-400">Quality groceries at low prices.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#buyback" className="hover:text-white">Buyback</a></li>
              <li><a href="#careers" className="hover:text-white">Careers</a></li>
              <li><a href="#stores" className="hover:text-white">Stores</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Follow us</h4>
            <div className="mt-3 flex items-center gap-3">
              <a href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-sm font-semibold text-white">Newsletter</h4>
            <div className="mt-3 flex gap-2">
              <input type="email" placeholder="Your email" className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f99616]" />
              <button className="shrink-0 rounded-lg bg-[#f99616] px-3 py-2 text-sm font-semibold text-white hover:bg-[#e78505]">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-gray-400">© {new Date().getFullYear()} cenovka.store. All rights reserved.</div>
      </div>
    </footer>
  )
}
