import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Let’s Build Something Quietly Powerful</h2>
        <p className="mt-3 text-slate-600">Have a product in mind? I’d love to hear it. Briefs welcome. NDA friendly.</p>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-4"
        >
          <input className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400" placeholder="Your name" />
          <input className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400" placeholder="Email" />
          <textarea rows={4} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400" placeholder="Project details" />
          <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white">Send</button>
        </motion.form>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="mailto:hello@manish.design" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"><Mail className="h-4 w-4" /> Email</a>
          <a href="#" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          <a href="#" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"><Github className="h-4 w-4" /> GitHub</a>
        </div>
      </div>
    </section>
  )
}
