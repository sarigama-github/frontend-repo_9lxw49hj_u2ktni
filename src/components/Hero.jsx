import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden bg-white">
      {/* Gradient aura backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(124,58,237,0.10),transparent_60%)]" />

      {/* Spline 3D center piece */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-balance text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
        >
          Manish Choudhary
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl"
        >
          Minimal. Cinematic. Immersive. UI/UX crafted with precision and quiet confidence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(99,102,241,0.2)] transition hover:opacity-90"
          >
            Hire Manish
          </a>
          <a
            href="#work"
            className="rounded-full border border-slate-300/70 bg-white/70 px-6 py-3 text-sm font-medium text-slate-900 backdrop-blur transition hover:bg-white"
          >
            View Work
          </a>
        </motion.div>
      </div>

      {/* Ambient floating chips */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 mx-auto flex max-w-5xl flex-wrap justify-center gap-3 px-6">
        {['UI Design','UX Strategy','Prototyping','Interaction','Product Identity'].map((t) => (
          <motion.span
            key={t}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-full border border-slate-200/80 bg-white/60 px-3 py-1 text-xs text-slate-700 backdrop-blur"
          >
            {t}
          </motion.span>
        ))}
      </div>
    </section>
  )
}
