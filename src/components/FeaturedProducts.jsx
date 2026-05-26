import { Link } from 'react-router-dom'
import products from '../data/products'
import ProductCard from './ProductCard'

export default function FeaturedProducts() {
  const featured = products.slice(0, 4)

  return (
    <section className="mt-20">
      <div className="section-header">
        <div className="grid gap-3">
          <p className="section-kicker">Popular picks</p>
          <h2 className="section-title">Featured Products</h2>
          <p className="section-copy">
            A tighter selection of useful products, presented with enough detail to help you choose confidently.
          </p>
        </div>
        <Link to="/products" className="btn-outline">View All</Link>
      </div>
      <div className="mt-8 grid items-stretch grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
