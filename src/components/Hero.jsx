import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1582408921715-18e7806365d9?q=80&w=1974&auto=format&fit=crop"
          alt="Grocery shopping"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              Quality groceries at low prices
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-gray-600"
            >
              Everyday essentials, fresh produce, and trusted brands — always affordable and always close to you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex items-center gap-3"
            >
              <a
                href="#stores"
                className="inline-flex items-center rounded-full bg-[#f99616] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#e78505] transition-colors"
              >
                Visit our stores
              </a>
              <a href="#about" className="text-sm font-semibold text-gray-700 hover:text-gray-900">Learn more</a>
            </motion.div>
          </div>
          <div className="lg:col-span-6" />
        </div>
      </div>
    </section>
  )
}
