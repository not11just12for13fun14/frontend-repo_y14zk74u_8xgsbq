import { Hammer, Ruler, LayoutGrid, Palette } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Interior Styling',
    desc: 'Curated furnishings, lighting, and art direction to elevate existing spaces.'
  },
  {
    icon: LayoutGrid,
    title: 'Full-Service Design',
    desc: 'Concept to completion for residential and boutique commercial projects.'
  },
  {
    icon: Ruler,
    title: 'Space Planning',
    desc: 'Optimized layouts, flow, and function tailored to modern urban living.'
  },
  {
    icon: Hammer,
    title: 'Renovation Management',
    desc: 'End-to-end oversight coordinating trades, timelines, and quality control.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.04),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Services</h2>
          <p className="mt-2 text-white/70">A versatile suite to bring your vision to life.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-white/10 border border-white/20 grid place-items-center text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
