import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import ServiceHighlights from '../components/ServiceHighlights'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mx-auto max-w-7xl px-4">
        <FeaturedProducts />
        <Categories />
        <ServiceHighlights />
        <Testimonials />
        <Newsletter />
      </div>
    </div>
  )
}
