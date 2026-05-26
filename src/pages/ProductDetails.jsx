import { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { CartContext } from '../context/CartContext'
import products from '../data/products'
import { formatPrice } from '../utils/formatPrice'

export default function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useContext(CartContext)
  const product = products.find((item) => String(item.id) === String(id))

  // Hide the global footer while the Product Details page is active
  useEffect(() => {
    const footer = document.querySelector('footer')
    if (footer) footer.style.display = 'none'
    return () => { if (footer) footer.style.display = '' }
  }, [])

  if (!product) {
    return (
      <div className="page">
        <div className="grid gap-3">
          <p className="section-kicker">Catalog</p>
          <h1 className="section-title">Product not found</h1>
        </div>
        <Link to="/products" className="btn-primary w-fit">
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3)

  return (
    <div className="page space-y-24">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)]">
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <img
            src={product.images?.[0] || product.image}
            alt={product.name}
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="grid grid-cols-3 gap-4 p-5">
            {(product.images || []).map((img) => (
              <img
                key={img}
                src={img}
                alt=""
                className="aspect-[4/3] w-full rounded-lg border border-slate-200 object-cover"
              />
            ))}
          </div>
        </div>

        <section className="flex h-full flex-col gap-8 justify-center lg:pl-6">
          <div className="grid gap-4">
            <p className="section-kicker">{product.category}</p>
            <h1 className="text-3xl font-extrabold text-slate-950 md:text-4xl">{product.name}</h1>
            <p className="max-w-2xl text-lg text-slate-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="text-3xl font-extrabold text-emerald-700">
            {formatPrice(product.price)}
          </div>

          <div className="surface-card grid gap-5 p-6">
            <h2 className="text-base font-semibold text-slate-950">
              Technical Specifications
            </h2>
            <dl className="grid gap-4 text-sm text-slate-700">
              {Object.entries(product.specs || {}).map(([key, value]) => (
                <div key={key} className="summary-line border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <dt className="font-medium capitalize text-slate-500">{key}</dt>
                  <dd className="text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <button onClick={() => addToCart(product)} className="btn-primary w-full py-4 text-lg sm:w-auto px-10">
            Add to Cart
          </button>
        </section>
      </div>

      {product.reviews?.length > 0 && (
        <section className="grid gap-4">
          <h2 className="section-title">Reviews</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {product.reviews.map((review) => (
              <div key={review.user} className="surface-card grid gap-3 p-6">
                <div className="font-semibold text-slate-900">{review.user}</div>
                <div className="text-sm text-amber-500 leading-6">
                  {'*'.repeat(review.rating)}
                </div>
                <p className="text-sm leading-7 text-slate-600">{review.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="grid gap-4">
          <h2 className="section-title">Related Products</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
