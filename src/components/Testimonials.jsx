import { useReveal } from '../hooks/useReveal'

const REVIEWS = [
  {
    img:    "/1-testimonials.png",
    name:   "John Deo",
    rating: 4,
    text:   "Fast delivery, great taste, and excellent service. The whole experience feels premium. I'll definitely be ordering again very soon!",
  },
  {
    img:    '/2-testimonials.png',
    name:   'Marlin Casey',
    rating: 5,
    text:   'The food arrived hot and fresh, and the delivery was super quick. Ordering was smooth, and everything tasted amazing. Definitely my go-to place now!',
  },
  {
    img:    '/3-testimonials.png',
    name:   'Herlin Timo',
    rating: 4,
    text:   'I love how easy it is to order from here. The variety is great, and the quality is always consistent. Highly recommended for anyone who loves good food.',
  },
]

function ReviewCard({ r, delay }) {
  const ref = useReveal(0.1, delay)
  return (
    <div
      ref={ref}
      className="reveal card-lift relative bg-slate-800 text-center rounded-xl shadow-lg
                 pt-16 pb-6 px-5 border border-slate-700 hover:border-red-500/40
                 transition-colors duration-300"
    >
      {/* Avatar */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <img
          src={r.img}
          alt={r.name}
          loading="lazy"
          className="w-20 h-20 rounded-full object-cover border-4 border-red-500 shadow-lg"
        />
      </div>

      {/* Stars */}
      <div className="flex justify-center gap-0.5 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`text-lg ${i < r.rating ? 'text-red-500' : 'text-slate-600'}`}>★</span>
        ))}
      </div>

      <h3 className="text-white font-bold text-lg mb-3">{r.name}</h3>

      {/* Quote icon */}
      <span className="text-red-500/40 text-5xl font-serif leading-none select-none">"</span>

      <p className="text-slate-300 text-sm leading-relaxed -mt-3">{r.text}</p>
    </div>
  )
}

export default function Testimonials() {
  const titleRef = useReveal()

  return (
    <section id="reviews" className="py-14 px-4">
      <div ref={titleRef} className="reveal text-center mb-14">
        <p className="text-xs font-semibold tracking-widest uppercase text-red-500 mb-1">What People Say</p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
          Customer <span className="text-red-500">Reviews</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {REVIEWS.map((r, i) => (
          <ReviewCard key={r.name} r={r} delay={i * 100} />
        ))}
      </div>
    </section>
  )
}
