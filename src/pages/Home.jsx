import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import ServiceHighlights from '../components/ServiceHighlights'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <div className="grid gap-48">
      <Hero />
      <div className="app-container grid gap-48 px-6 pb-48">
        <FeaturedProducts />
        <Categories />
        <ServiceHighlights />
        <Testimonials />
        <Newsletter />
      </div>
    </div>
  )
}
