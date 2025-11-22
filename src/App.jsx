import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Minimal top nav */}
      <header className="fixed inset-x-0 top-0 z-30 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="text-sm font-medium tracking-tight">Manish Choudhary</a>
        <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#work" className="hover:text-slate-900">Work</a>
          <a href="#services" className="hover:text-slate-900">Services</a>
          <a href="#testimonials" className="hover:text-slate-900">Testimonials</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
      </header>

      <main className="w-full">
        <Hero />
        <About />
        <Work />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Manish Choudhary — Minimal. 3D. Cinematic.
      </footer>
    </div>
  )
}

export default App
