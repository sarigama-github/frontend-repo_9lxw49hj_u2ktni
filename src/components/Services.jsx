import { motion } from 'framer-motion'
import { PenTool, Layers, Box, Pointer, Workflow, Component } from 'lucide-react'

const items = [
  { icon: PenTool, title: 'UI Design', desc: 'Elegant, high-conversion interfaces with premium polish.' },
  { icon: Workflow, title: 'UX Strategy', desc: 'Insight-led flows that reduce friction and increase clarity.' },
  { icon: Layers, title: 'Wireframing', desc: 'Rapid structure and information hierarchy exploration.' },
  { icon: Box, title: 'Prototyping', desc: 'Clickable prototypes with motion to validate early.' },
  { icon: Component, title: 'Product Identity', desc: 'Systematic design language with scalable components.' },
  { icon: Pointer, title: 'Interaction Design', desc: 'Micro-interactions and motion for a living product feel.' },
]

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Services</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <it.icon className="h-5 w-5 text-slate-700" />
                </div>
                <div>
                  <div className="text-base font-medium text-slate-900">{it.title}</div>
                  <div className="mt-1 text-sm text-slate-600">{it.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
