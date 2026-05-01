import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Speciality   from './components/Speciality'
import PopularFoods from './components/PopularFoods'
import HowItWorks   from './components/HowItWorks'
import FoodGallery  from './components/FoodGallery'
import Testimonials from './components/Testimonials'
import OrderNow     from './components/OrderNow'
import Footer       from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Speciality />
        <PopularFoods />
        <HowItWorks />
        <FoodGallery />
        <Testimonials />
        <OrderNow />
      </main>
      <Footer />
    </div>
  )
}
