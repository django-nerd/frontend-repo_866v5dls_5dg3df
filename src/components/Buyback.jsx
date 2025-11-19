import { Package } from 'lucide-react'

export default function Buyback() {
  return (
    <section id="buyback" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Do you have products to sell?</h2>
          <p className="mt-3 text-gray-600">We buy surplus, overstock, and short-dated goods. Fair pricing, quick processing, and a simple experience.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-[#fff3e0] text-[#f99616] flex items-center justify-center">
                <Package className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Buyback service</h3>
            </div>
            <p className="mt-3 text-gray-600 text-sm">Send us your product list and quantities. We evaluate quickly and arrange logistics to make it easy for you.</p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center rounded-full bg-[#f99616] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#e78505]"
            >
              Contact us about buyback
            </a>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <h4 className="text-base font-semibold text-gray-900">What we buy</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 list-disc pl-5">
              <li>Groceries and packaged foods</li>
              <li>Beverages and snacks</li>
              <li>Non-perishable essentials</li>
              <li>Short-dated or overstock lots</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
