export default function Careers() {
  return (
    <section id="careers" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Join our team</h2>
            <p className="mt-3 text-gray-600">Were growing fast and looking for friendly, reliable people to help us build the best discount grocery experience. Flexible schedules, supportive teams, and room to grow.</p>
            <a href="#contact" className="mt-6 inline-flex items-center rounded-full bg-[#f99616] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#e78505]">See open positions</a>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-100">
              <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1974&auto=format&fit=crop" alt="Store staff" className="w-full h-72 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
