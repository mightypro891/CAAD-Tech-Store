import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { CartContext } from '../context/CartContext'
import products from '../data/products'
import { formatPrice } from '../utils/formatPrice'

export default function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useContext(CartContext)
  const product = products.find((item) => String(item.id) === String(id))

  if (!product) {
    return (
      <div className="page">
        <h1>Product not found</h1>
        <Link to="/products" className="btn-primary mt-4 inline-flex">
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3)

  return (
    <div className="page">
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)]">
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <img
            src={product.images?.[0] || product.image}
            alt={product.name}
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="grid grid-cols-3 gap-3 p-3">
            {(product.images || []).map((img) => (
              <img
                key={img}
                src={img}
                alt=""
                className="aspect-[4/3] w-full rounded-md border border-slate-200 object-cover"
              />
            ))}
          </div>
        </div>

        <section className="flex h-full flex-col justify-center">
          <p className="section-kicker">{product.category}</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-950">{product.name}</h1>
          <p className="mt-4 text-slate-600">{product.description}</p>
          <div className="mt-5 text-3xl font-extrabold text-emerald-700">
            {formatPrice(product.price)}
          </div>

          <div className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="text-base font-semibold text-slate-950">
              Technical Specifications
            </h2>
            <dl className="mt-4 grid gap-3 text-sm text-slate-700">
              {Object.entries(product.specs || {}).map(([key, value]) => (
                <div key={key} className="summary-line border-b border-slate-100 pb-2">
                  <dt className="font-medium capitalize text-slate-500">{key}</dt>
                  <dd className="text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <button onClick={() => addToCart(product)} className="btn-primary mt-6 w-full sm:w-auto">
            Add to Cart
          </button>
        </section>
      </div>

      {product.reviews?.length > 0 && (
        <section className="mt-12">
          <h2 className="section-title">Reviews</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {product.reviews.map((review) => (
              <div key={review.user} className="surface-card p-4">
                <div className="font-semibold text-slate-900">{review.user}</div>
                <div className="mt-1 text-sm text-amber-500">
                  {'*'.repeat(review.rating)}
                </div>
                <p className="mt-2 text-sm text-slate-600">{review.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="section-title">Related Products</h2>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
