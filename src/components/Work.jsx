import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Neon Banking',
    tag: 'Fintech UX',
    image: 'https://images.unsplash.com/photo-1759547150759-438c4cfade41?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9uJTIwQmFua2luZ3xlbnwwfDB8fHwxNzYzNzk2Mzk5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Orbit Commerce',
    tag: 'E‑commerce UI',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Pulse Health',
    tag: 'Healthcare App',
    image: 'https://images.unsplash.com/photo-1512291505839-65ba15729a48?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQdWxzZSUyMEhlYWx0aHxlbnwwfDB8fHwxNzYzNzk2NDAwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative w-full bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Selected Work</h2>
          <a href="#" className="text-sm text-slate-600 hover:text-slate-900">All case studies →</a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50"
            >
              <img src={p.image} alt="" className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 transition group-hover:opacity-70" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-80">{p.tag}</div>
                  <div className="text-lg font-medium">{p.title}</div>
                </div>
                <div className="rounded-full border border-white/60 bg-white/20 px-3 py-1 text-xs backdrop-blur">View</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
