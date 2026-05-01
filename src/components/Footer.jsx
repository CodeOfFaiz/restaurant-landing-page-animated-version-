import { useState, useEffect } from 'react'

const SOCIALS = ['Facebook', 'Twitter', 'Instagram', 'Pinterest', 'LinkedIn']

const LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'Speciality', href: '#speciality' },
  { label: 'Popular',    href: '#popular' },
  { label: 'Gallery',    href: '#gallery' },
  { label: 'Reviews',    href: '#reviews' },
  { label: 'Order',      href: '#order' },
]

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <footer className="bg-slate-900 text-slate-300">
        {/* Top row */}
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.png" alt="FoodZone" className="w-8" />
              <span className="text-xl font-bold text-white">Food<span className="text-red-500">Zone</span></span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Fresh ingredients, authentic flavours, delivered to your door with love.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <div className="grid grid-cols-2 gap-1.5">
              {LINKS.map((l) => (
                <a key={l.label} href={l.href}
                   className="text-sm text-slate-400 hover:text-red-400 transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact Us</h4>
            <p className="text-sm text-slate-400">📍 123 Food Street, New York</p>
            <p className="text-sm text-slate-400 mt-1">📞 +1 (555) 123-4567</p>
            <p className="text-sm text-slate-400 mt-1">✉️ hello@foodzone.com</p>
          </div>
        </div>

        {/* Social buttons */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {SOCIALS.map((s) => (
              <button
                key={s}
                className="px-4 py-1.5 text-xs font-semibold border border-red-500 text-red-400 rounded-full
                           hover:bg-red-500 hover:text-white transition-all duration-200"
              >
                {s}
              </button>
            ))}
          </div>

          <p className="text-center text-slate-500 text-xs">
            © {new Date().getFullYear()} FoodZone. Created with ❤️ by{' '}
            <span className="text-red-400 font-semibold">Mohd Faiz</span> — All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll-to-top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-red-500 text-white
                    flex items-center justify-center shadow-lg shadow-red-300
                    hover:bg-red-600 hover:-translate-y-1 transition-all duration-300 text-lg
                    ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        ↑
      </button>
    </>
  )
}
