import { useState } from 'react'
import { MapPin, Clock, Search } from 'lucide-react'

const initialStores = [
  {
    name: 'Cenovka Praha - Centrum',
    address: 'Václavské náměstí 12, Praha',
    hours: 'Mon–Sun 8:00–21:00',
  },
  {
    name: 'Cenovka Brno - Královo Pole',
    address: 'Sportovní 5, Brno',
    hours: 'Mon–Sun 8:00–20:00',
  },
  {
    name: 'Cenovka Ostrava - Poruba',
    address: 'Hlavní třída 45, Ostrava',
    hours: 'Mon–Sun 8:00–20:00',
  },
]

export default function Stores() {
  const [query, setQuery] = useState('')

  const filtered = initialStores.filter((s) =>
    (s.name + ' ' + s.address).toLowerCase().includes(query.toLowerCase())
  )

  return (
    <section id="stores" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Find a store</h2>
            <p className="mt-3 text-gray-600">Browse our locations and plan your visit.</p>
          </div>
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search city or address"
              className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f99616]"
            />
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((store) => (
            <div key={store.name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{store.name}</h3>
                  <p className="mt-1 text-sm text-gray-600 flex items-center gap-2"><MapPin className="h-4 w-4 text-[#f99616]" /> {store.address}</p>
                  <p className="mt-1 text-sm text-gray-600 flex items-center gap-2"><Clock className="h-4 w-4 text-[#f99616]" /> {store.hours}</p>
                </div>
                <a href="#contact" className="shrink-0 inline-flex items-center rounded-full bg-[#f99616] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#e78505]">Directions</a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl overflow-hidden ring-1 ring-gray-100 shadow-sm">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.953992189474!2d14.42076!3d50.08804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA1JzE2LjIiTiAxNMKwMjUnMTQuNyJF!5e0!3m2!1sen!2sus!4v1610000000000"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
