import { useReveal } from '../hooks/useReveal'

const IMAGES = [
  { src: '/burger-gallery.jpg', alt: 'Burger',    span: '' },
  { src: '/sandwich.jpg',       alt: 'Sandwich',  span: '' },
  { src: '/roll.jpg',           alt: 'Roll',      span: '' },
  { src: '/sweets.jpg',         alt: 'Sweets',    span: '' },
  { src: '/cupcake.jpg',        alt: 'Cupcake',   span: '' },
  { src: '/choco.jpg',          alt: 'Chocolate', span: '' },
  { src: '/fried.jpg',          alt: 'Fried',     span: '' },
  { src: '/breakfast.jpg',      alt: 'Breakfast', span: '' },
  { src: '/cookies.jpg',        alt: 'Cookies',   span: 'col-span-2' },
]

function GalleryItem({ img, delay }) {
  const ref = useReveal(0.1, delay)
  return (
    <div
      ref={ref}
      className={`reveal-scale gallery-img border-4 border-white rounded-lg shadow-sm ${img.span}`}
    >
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        className={`w-full object-cover rounded ${img.span ? 'h-52' : 'h-44'}`}
      />
    </div>
  )
}

export default function FoodGallery() {
  const titleRef = useReveal()

  return (
    <section id="gallery" className="py-14 px-4 bg-slate-50">
      <div ref={titleRef} className="reveal text-center mb-10">
        <p className="text-xs font-semibold tracking-widest uppercase text-red-500 mb-1">Visual Feast</p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
          Our Food <span className="text-red-500">Gallery</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
        {IMAGES.map((img, i) => (
          <GalleryItem key={img.alt} img={img} delay={i * 60} />
        ))}
      </div>
    </section>
  )
}
