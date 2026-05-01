import { useReveal } from '../hooks/useReveal'

const ITEMS = [
  { src: '/burger-opt.png',       title: 'Tasty Burger',    desc: 'Freshly made burgers with premium ingredients and rich flavours.' },
  { src: '/pizza-opt.png',        title: 'Tasty Pizza',     desc: 'Hot and cheesy pizzas topped with fresh veggies and authentic sauces.' },
  { src: '/IceCream-opt.png',     title: 'Cold Ice-Cream',  desc: 'Creamy and delicious ice creams made with high-quality ingredients.' },
  { src: '/ColdDrinks-opt.png',   title: 'Cold Drinks',     desc: 'Refreshing cold drinks made with natural fruits and energising flavours.' },
  { src: '/TastySweets-opt.png',  title: 'Tasty Sweets',    desc: 'Delightful sweets crafted with love to satisfy your sweet cravings.' },
  { src: '/TastyBreakfast-opt.png', title: 'Tasty Breakfast', desc: 'Healthy and tasty breakfast options to kickstart your day right.' },
]

function SpecialityCard({ item, delay }) {
  const ref = useReveal(0.1, delay)
  return (
    <div
      ref={ref}
      className="reveal card-lift flex flex-col gap-3 justify-center items-center text-center
                 rounded-xl p-6 bg-white shadow-sm border border-black/5
                 hover:border-red-200 cursor-pointer group"
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-50
                      group-hover:bg-red-100 transition-colors duration-300">
        <img src={item.src} alt={item.title} className="w-8 h-8 object-contain
                 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="text-slate-700 font-bold group-hover:text-red-500 transition-colors">{item.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
    </div>
  )
}

export default function Speciality() {
  const titleRef = useReveal()

  return (
    <section id="speciality" className="py-14 px-4">
      <div ref={titleRef} className="reveal text-center mb-10">
        <p className="text-xs font-semibold tracking-widest uppercase text-red-500 mb-1">What We Offer</p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
          Our <span className="text-red-500">Speciality</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {ITEMS.map((item, i) => (
          <SpecialityCard key={item.title} item={item} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}
