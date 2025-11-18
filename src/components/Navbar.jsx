import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className="text-sm md:text-base text-white/80 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen((v) => !v)
  const close = () => setOpen(false)

  return (
    <header className="relative z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-lg bg-white/10 backdrop-blur border border-white/20 grid place-items-center">
              <span className="text-white text-xl">UL</span>
            </div>
            <div>
              <div className="text-white font-semibold tracking-wide">UrbanLux Interiors</div>
              <div className="text-white/60 text-xs">Modern. Timeless. Yours.</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-medium shadow/50 shadow-black/30 hover:shadow-black/40 hover:shadow-md transition">
              <Phone size={16} /> Book a consult
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={toggle} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-4 rounded-2xl bg-slate-900/70 backdrop-blur border border-white/10 p-4 space-y-4">
          <NavLink href="#services" onClick={close}>Services</NavLink>
          <NavLink href="#portfolio" onClick={close}>Portfolio</NavLink>
          <NavLink href="#about" onClick={close}>About</NavLink>
          <NavLink href="#contact" onClick={close}>Contact</NavLink>
          <a href="#contact" onClick={close} className="flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-medium">
            <Mail size={16} /> Get in touch
          </a>
        </div>
      )}
    </header>
  )
}
