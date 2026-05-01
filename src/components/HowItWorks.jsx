import { useReveal } from '../hooks/useReveal'

const STEPS = [
  { img: '/fvt-food.png',  label: 'Choose Your Favourite Food',  step: '01' },
  { img: '/delivery.png',  label: 'Free & Fast Delivery',        step: '02' },
  { img: '/payment.png',   label: 'Easy Payment Methods',        step: '03' },
  { img: '/enjoy-food.png', label: 'Enjoy Your Food',            step: '04' },
]

function Step({ s, delay, isLast }) {
  const ref = useReveal(0.1, delay)
  return (
    <div ref={ref} className="reveal relative flex flex-col items-center text-center gap-3 flex-1">
      {/* Connector line (not on last) */}
      {!isLast && (
        <div
          className="hidden md:block absolute top-1/3 left-[calc(50%+40px)] right-0 h-0.5 z-0"
          style={{
            background: 'repeating-linear-gradient(90deg,#ef4444 0,#ef4444 8px,transparent 8px,transparent 18px)',
          }}
        />
      )}

      {/* Step number badge */}
      <span className="absolute -top-2 -right-2 md:-top-1 md:-right-1 w-6 h-6 bg-red-500 text-white text-xs
                       font-bold rounded-full flex items-center justify-center shadow z-10">
        {s.step}
      </span>

      {/* Circle */}
      <div className="relative z-10 w-24 h-24 md:w-28 md:h-28 rounded-full bg-red-500 border-6 border-white
                      flex items-center justify-center shadow-lg shadow-red-200
                      hover:scale-105 transition-transform duration-300">
        <img src={s.img} alt={s.label} className="w-14 h-14 object-contain" />
      </div>

      <p className="font-semibold text-slate-700 text-sm md:text-base max-w-[120px]">{s.label}</p>
    </div>
  )
}

export default function HowItWorks() {
  const titleRef = useReveal()

  return (
    <section id="how" className="py-14 px-4 bg-white">
      <div ref={titleRef} className="reveal text-center mb-12">
        <p className="text-xs font-semibold tracking-widest uppercase text-red-500 mb-1">Simple Process</p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
          How It <span className="text-red-500">Works</span>
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-4 max-w-4xl mx-auto relative">
        {STEPS.map((s, i) => (
          <Step key={s.step} s={s} delay={i * 120} isLast={i === STEPS.length - 1} />
        ))}
      </div>
    </section>
  )
}
