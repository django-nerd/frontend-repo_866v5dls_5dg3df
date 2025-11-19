import { DollarSign, ShoppingBasket, Smile } from 'lucide-react'

const features = [
  {
    title: 'Low prices',
    desc: 'We keep costs low so you can enjoy everyday savings on essentials.',
    icon: DollarSign,
  },
  {
    title: 'Wide assortment',
    desc: 'From pantry staples to fresh produce and snacks, find what you need.',
    icon: ShoppingBasket,
  },
  {
    title: 'Friendly service',
    desc: 'Our team is here to help with a smile and local advice.',
    icon: Smile,
  },
]

export default function Features() {
  return (
    <section id="about" className="bg-[#f9f9f9] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Why choose us</h2>
          <p className="mt-3 text-gray-600">Our mission is simple: quality food at prices everyone can afford. Were building a friendly neighborhood shopping experience with honest value.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-[#fff3e0] text-[#f99616] flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
