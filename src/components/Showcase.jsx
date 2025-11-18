import { useState } from 'react'

const projects = [
  {
    title: 'Skyline Residence – Living Room',
    image: 'https://images.unsplash.com/photo-1624473843678-6b516ac82d78?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTa3lsaW5lJTIwUmVzaWRlbmNlJTIwJUUyJTgwJTkzJTIwTGl2aW5nfGVufDB8MHx8fDE3NjM0NjkwODh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'Residential'
  },
  {
    title: 'Penthouse Study – Minimal Modern',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1640&auto=format&fit=crop',
    tag: 'Residential'
  },
  {
    title: 'Boutique Lobby – Marble & Brass',
    image: 'https://images.unsplash.com/photo-1530738472658-404f693bd4b2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCb3V0aXF1ZSUyMExvYmJ5JTIwJUUyJTgwJTkzJTIwTWFyYmxlfGVufDB8MHx8fDE3NjM0NjkwODh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'Commercial'
  },
  {
    title: 'Urban Loft – Open-Plan Kitchen',
    image: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1640&auto=format&fit=crop',
    tag: 'Residential'
  }
]

export default function Showcase() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.tag === active)

  return (
    <section id="portfolio" className="py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Work</h2>
            <p className="mt-2 text-white/70">A glimpse into recent residential and commercial projects.</p>
          </div>
          <div className="flex gap-2">
            {['All','Residential','Commercial'].map(tab => (
              <button key={tab} onClick={() => setActive(tab)} className={`rounded-full px-4 py-2 text-sm border transition ${active===tab? 'bg-white text-slate-900 border-white' : 'text-white/80 border-white/20 hover:border-white/40'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <div key={p.title} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="text-xs text-white/60">{p.tag}</div>
                <h3 className="text-white font-semibold">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
