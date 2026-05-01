import { useReveal } from '../hooks/useReveal'
import burgerSpec    from '../assets/burgerSpec.jpg'
import cakeSpec      from '../assets/cakeSpec.jpg'
import sweetsSpec    from '../assets/sweetsSpec.jpg'
import cupcakeSpec   from '../assets/cupcakeSpec.webp'
import colddrinksSpec from '../assets/colddrinksSpec.jpg'
import icecreamsSpec from '../assets/icecreamsSpec.webp'

const FOODS = [
  { img: burgerSpec,     name: 'Tasty Burger',    price: '$5 – $20', rating: 5 },
  { img: cakeSpec,       name: 'Tasty Cakes',     price: '$4 – $15', rating: 5 },
  { img: sweetsSpec,     name: 'Tasty Sweets',    price: '$3 – $12', rating: 5 },
  { img: cupcakeSpec,    name: 'Tasty Cupcakes',  price: '$2 – $10', rating: 5 },
  { img: colddrinksSpec, name: 'Cold Drinks',     price: '$2 – $8',  rating: 5 },
  { img: icecreamsSpec,  name: 'Tasty Ice-Cream', price: '$3 – $10', rating: 5 },
]

function FoodCard({ food, delay }) {
  const ref = useReveal(0.1, delay)
  return (
    <div
      ref={ref}
      className="reveal-scale card-lift bg-white rounded-xl shadow-sm border border-black/5
                 overflow-hidden group"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={food.img}
          alt={food.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2.5 py-1 rounded-full font-semibold shadow">
          {food.price}
        </span>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="text-center p-5">
        <h3 className="font-bold text-slate-700 text-base group-hover:text-red-500 transition-colors">{food.name}</h3>

        <div className="flex justify-center gap-0.5 mt-1.5 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < food.rating ? 'text-yellow-400' : 'text-slate-300'}>★</span>
          ))}
        </div>

        <button
          className="px-5 py-1.5 border-2 border-red-500 text-red-500 text-sm font-semibold rounded-full
                     hover:bg-red-500 hover:text-white transition-all duration-200
                     hover:shadow-lg hover:shadow-red-200"
        >
          Order Now
        </button>
      </div>
    </div>
  )
}

export default function PopularFoods() {
  const titleRef = useReveal()

  return (
    <section id="popular" className="py-14 px-4 bg-slate-50">
      <div ref={titleRef} className="reveal text-center mb-10">
        <p className="text-xs font-semibold tracking-widest uppercase text-red-500 mb-1">Top Picks</p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
          Most <span className="text-red-500">Popular</span> Foods
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {FOODS.map((food, i) => (
          <FoodCard key={food.name} food={food} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}
