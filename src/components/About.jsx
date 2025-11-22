import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '7+' },
    { label: 'Projects Delivered', value: '120+' },
    { label: 'Industries', value: '15+' },
  ]

  return (
    <section id="about" className="relative w-full bg-white py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">About Manish</h2>
          <p className="mt-4 text-slate-600">
            I design digital products with an obsessive focus on clarity, calm, and craft. My approach blends
            minimal aesthetics with immersive 3D and motion to create interfaces that feel inevitable.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white/60 p-6 text-center shadow-sm"
              >
                <div className="text-2xl font-semibold text-slate-900">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-slate-500">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_40%,rgba(59,130,246,0.12),transparent_60%)]" />
          <div className="absolute inset-0 backdrop-blur-[1px]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-40 w-40 rounded-full bg-slate-900/90 shadow-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
