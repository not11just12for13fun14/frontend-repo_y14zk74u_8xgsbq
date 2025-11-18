export default function CTA() {
  return (
    <section id="contact" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-12 backdrop-blur">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s shape your space</h2>
            <p className="mt-2 text-white/70">Tell us about your project and we’ll get back within 24 hours.</p>
          </div>

          <form className="mt-8 grid md:grid-cols-3 gap-4">
            <input className="md:col-span-1 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Name" />
            <input className="md:col-span-1 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Email" type="email" />
            <input className="md:col-span-1 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Phone" />
            <textarea rows="4" className="md:col-span-3 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Project details"></textarea>
            <div className="md:col-span-3">
              <button type="button" className="rounded-xl bg-white text-slate-900 px-6 py-3 font-semibold hover:opacity-90 transition">Request consultation</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
