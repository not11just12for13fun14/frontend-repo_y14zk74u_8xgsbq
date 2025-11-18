import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 -left-20 h-[40rem] w-[40rem] bg-gradient-to-br from-white/10 to-transparent blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <Services />
      <Showcase />
      <CTA />

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} UrbanLux Interiors. All rights reserved.</p>
          <div className="text-white/60 text-sm">Made for visionary living.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
