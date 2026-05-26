import { Link } from 'react-router-dom'
import products from '../data/products'
import ProductCard from './ProductCard'

export default function FeaturedProducts() {
  const featured = products.slice(0, 4)

  return (
    <section className="mt-16">
      <div className="section-header">
        <div>
          <p className="section-kicker">Popular picks</p>
          <h2 className="section-title mt-2">Featured Products</h2>
          <p className="section-copy mt-3">
            A tighter selection of useful products, presented with enough detail to help you choose confidently.
          </p>
        </div>
        <Link to="/products" className="btn-outline">View All</Link>
      </div>
      <div className="mt-5 grid items-stretch grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
