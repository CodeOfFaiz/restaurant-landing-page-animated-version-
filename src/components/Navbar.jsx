import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home',      href: '#home' },
  { label: 'Speciality', href: '#speciality' },
  { label: 'Popular',   href: '#popular' },
  { label: 'Gallery',   href: '#gallery' },
  { label: 'Reviews',   href: '#reviews' },
  { label: 'Order',     href: '#order' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 nav-animated transition-shadow duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-md'
      } bg-white`}
    >
      <nav className="flex justify-between items-center px-4 md:px-10 lg:px-16 py-2 md:py-3">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 md:gap-3">
          <img src="/logo.png" alt="FoodZone" className="w-9 md:w-10 drop-shadow-sm" />
          <span className="text-xl md:text-2xl font-bold text-slate-700">
            Food<span className="text-red-500">Zone</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-5 lg:gap-8 text-sm lg:text-base text-slate-600 font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative hover:text-red-500 transition-colors duration-200
                         after:absolute after:left-0 after:-bottom-0.5
                         after:h-0.5 after:w-0 after:bg-red-500
                         after:transition-all after:duration-300
                         hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#order"
          className="hidden md:block px-4 py-1.5 bg-red-500 text-white text-sm font-semibold
                     rounded-full hover:bg-red-600 transition-all duration-200
                     hover:shadow-lg hover:shadow-red-200 hover:-translate-y-0.5"
        >
          Order Now
        </a>

        {/* Hamburger (mobile) */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 cursor-pointer"
        >
          <span
            className={`block h-0.5 w-6 bg-slate-700 transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-slate-700 transition-all duration-200 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-slate-700 transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-slate-100 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4 text-sm font-medium text-slate-600">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={close}
              className="hover:text-red-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#order"
            onClick={close}
            className="mt-1 text-center px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            Order Now
          </a>
        </div>
      </div>
    </header>
  )
}
