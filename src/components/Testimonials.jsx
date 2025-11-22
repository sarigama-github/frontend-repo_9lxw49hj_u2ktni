import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Manish brings an uncommon calm and clarity to complex product problems. The work feels inevitable.',
    name: 'Ananya Gupta',
    title: 'VP Product, Helix AI',
  },
  {
    quote: 'Elegant taste paired with rigorous UX thinking. Our conversion lifted 27% post redesign.',
    name: 'Rohit Sharma',
    title: 'Founder, Orbit Commerce',
  },
  {
    quote: 'Minimal, cinematic, and deeply considered. A rare combination of craft and strategy.',
    name: 'Sarah Johnson',
    title: 'Design Director, Northwave',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">What Clients Say</h2>
        <div className="mt-10 overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            whileInView={{ x: ['0%', '-50%'] }}
            viewport={{ once: true }}
            transition={{ duration: 16, ease: 'linear' }}
            className="flex w-[200%] gap-6"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-1/3 shrink-0 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-slate-700">“{t.quote}”</div>
                <div className="mt-4 text-sm font-medium text-slate-900">{t.name}</div>
                <div className="text-xs text-slate-500">{t.title}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
