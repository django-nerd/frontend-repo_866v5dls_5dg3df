import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
            <p className="mt-3 text-gray-600">Questions, partnerships, or buyback offers? Wed love to hear from you.</p>

            <div className="mt-6 space-y-4">
              <p className="flex items-center gap-3 text-sm text-gray-700"><Mail className="h-5 w-5 text-[#f99616]" /> info@cenovka.store</p>
              <p className="flex items-center gap-3 text-sm text-gray-700"><Phone className="h-5 w-5 text-[#f99616]" /> +420 000 000 000</p>
              <p className="flex items-start gap-3 text-sm text-gray-700"><MapPin className="h-5 w-5 text-[#f99616]" /> Národní 1, Praha 1</p>
            </div>

            <div className="mt-8 rounded-2xl overflow-hidden ring-1 ring-gray-100 shadow-sm">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.953992189474!2d14.42076!3d50.08804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA1JzE2LjIiTiAxNMKwMjUnMTQuNyJF!5e0!3m2!1sen!2sus!4v1610000000000"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <form className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-gray-100">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#f99616]" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#f99616]" placeholder="you@example.com" />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows="5" className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#f99616]" placeholder="How can we help?" />
              </div>
              <button type="button" className="mt-4 inline-flex items-center rounded-full bg-[#f99616] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#e78505]">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
