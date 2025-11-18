import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-end">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve text contrast; pointer-events-none so scene stays interactive */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-xs text-white/80 mb-4">
            Luxury • Contemporary • Urban
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Elevating Interiors for Modern Living
          </h1>
          <p className="mt-4 text-white/80 text-lg md:text-xl">
            We craft refined, functional spaces with a minimalist soul — from high-rise living rooms to boutique hospitality.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#portfolio" className="rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-semibold shadow/50 shadow-black/30 hover:shadow-black/40 hover:shadow-md transition">View portfolio</a>
            <a href="#contact" className="rounded-full border border-white/30 text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">Book a consultation</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
