import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Buyback', href: '#buyback' },
  { label: 'Careers', href: '#careers' },
  { label: 'Stores', href: '#stores' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-[#f99616]" />
            <span className="font-semibold text-gray-900 tracking-tight">cenovka.store</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#stores" className="inline-flex items-center rounded-full bg-[#f99616] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#e78505] transition-colors">
              Visit our stores
            </a>
          </div>

          <button className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="px-2 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  {item.label}
                </a>
              ))}
              <a href="#stores" className="mt-2 inline-flex items-center justify-center rounded-full bg-[#f99616] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#e78505]">
                Visit our stores
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
