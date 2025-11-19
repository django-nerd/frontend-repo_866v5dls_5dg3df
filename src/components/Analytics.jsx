import { motion } from 'framer-motion'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  RadialBarChart,
  RadialBar,
  Legend,
} from 'recharts'

const salesData = [
  { month: 'Jan', value: 120 },
  { month: 'Feb', value: 140 },
  { month: 'Mar', value: 160 },
  { month: 'Apr', value: 180 },
  { month: 'May', value: 210 },
  { month: 'Jun', value: 240 },
]

const buybackData = [
  { name: 'Cans', value: 320 },
  { name: 'Bottles', value: 450 },
  { name: 'Paper', value: 290 },
  { name: 'Plastics', value: 380 },
]

const satisfactionData = [
  { name: 'Satisfaction', value: 86, fill: '#f99616' },
]

export default function Analytics() {
  return (
    <section className="py-20 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-medium text-[#f99616] shadow-sm ring-1 ring-black/5">
            Insights
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-[#1f2937]">
            Our impact at a glance
          </h2>
          <p className="mt-3 text-base text-[#6b7280] max-w-2xl mx-auto">
            A quick look at how we keep prices low, recycle more, and delight customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Area Chart */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-black/5"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-[#111827]">Sales growth</h3>
                <p className="text-sm text-[#6b7280]">Past 6 months</p>
              </div>
              <span className="text-[#10b981] text-sm font-medium bg-[#10b981]/10 px-2 py-1 rounded-md">
                +14%
              </span>
            </div>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorAccent" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f99616" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#f99616" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }} />
                  <Area type="monotone" dataKey="value" stroke="#f99616" strokeWidth={2.5} fillOpacity={1} fill="url(#colorAccent)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Bar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-black/5"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-[#111827]">Buyback volume</h3>
                <p className="text-sm text-[#6b7280]">Items recycled this month</p>
              </div>
              <span className="text-[#f59e0b] text-sm font-medium bg-[#f59e0b]/10 px-2 py-1 rounded-md">
                +9%
              </span>
            </div>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={buybackData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }} />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]} fill="#f99616" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Radial Chart */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-black/5"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-[#111827]">Customer satisfaction</h3>
                <p className="text-sm text-[#6b7280]">Survey score</p>
              </div>
              <span className="text-[#3b82f6] text-sm font-medium bg-[#3b82f6]/10 px-2 py-1 rounded-md">
                86%
              </span>
            </div>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart innerRadius="65%" outerRadius="100%" data={satisfactionData} startAngle={90} endAngle={450}>
                  <RadialBar minAngle={15} background clockWise dataKey="value" cornerRadius={16} />
                  <Legend content={() => null} />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-[#6b7280]">
                Based on last quarter’s feedback
              </p>
            </div>
          </motion.div>
        </div>

        {/* KPI mini-cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Avg. basket', value: 'CZK 289' },
            { label: 'Stores', value: '42' },
            { label: 'Buyback partners', value: '120+' },
            { label: 'On-time delivery', value: '98.4%' },
          ].map((kpi) => (
            <div key={kpi.label} className="bg-white rounded-xl px-4 py-3 shadow-sm ring-1 ring-black/5">
              <p className="text-xs text-[#6b7280]">{kpi.label}</p>
              <p className="text-base font-semibold text-[#111827]">{kpi.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
