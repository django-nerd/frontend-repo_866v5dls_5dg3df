import { motion } from 'framer-motion'
import Analytics from './Analytics'
import Sparkline from './Sparkline'
import { Star, TrendingUp, Recycle, Store } from 'lucide-react'

export default function Dashboard() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111827]">Live metrics</h2>
            <p className="text-[#6b7280]">A modern overview of what matters most.</p>
          </div>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Customer rating', value: '4.7', icon: Star, trend: [3,4,4.2,4.4,4.6,4.7] },
            { label: 'Revenue', value: 'CZK 1.2M', icon: TrendingUp, trend: [200,240,260,310,350,400] },
            { label: 'Items recycled', value: '1.1k', icon: Recycle, trend: [120,160,180,190,220,240] },
            { label: 'Active stores', value: '42', icon: Store, trend: [30,32,34,36,40,42] },
          ].map(({ label, value, icon: Icon, trend }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-black/5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#6b7280]">{label}</p>
                  <p className="text-2xl font-semibold text-[#111827]">{value}</p>
                </div>
                <span className="h-10 w-10 rounded-xl bg-[#fff3e0] text-[#f99616] flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <div className="mt-3">
                <Sparkline values={trend} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Analytics charts */}
        <Analytics />
      </div>
    </section>
  )
}
