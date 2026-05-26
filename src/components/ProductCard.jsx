import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { formatPrice } from '../utils/formatPrice'

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext)
  const rating = product.reviews
    ? Math.round(
        product.reviews.reduce((sum, review) => sum + review.rating, 0) /
          product.reviews.length
      )
    : 0

  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="relative block overflow-hidden">
        <span className="product-badge absolute left-3 top-3 z-10">In stock</span>
        <div className="bg-slate-100 p-3">
          <img
            src={product.image}
            alt={product.name}
            className="h-52 w-full rounded-lg object-cover transition duration-500 hover:scale-105"
          />
        </div>
      </Link>

      <div className="card-body-fill p-5">
        <div className="grid gap-3">
          <div>
            <h3 className="product-card-title font-semibold text-slate-900">{product.name}</h3>
            <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">
              {product.category}
            </p>
          </div>
          <div className="text-lg font-extrabold text-slate-950">
            {formatPrice(product.price)}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="text-sm text-amber-500" aria-label={`${rating} star rating`}>
            {'*'.repeat(rating)}
          </div>
          <span className="text-xs font-semibold text-slate-500">
            {product.reviews?.length || 0} review
          </span>
        </div>

        <div className="product-card-actions">
          <button onClick={() => addToCart(product)} className="btn-primary w-full">
            Add to Cart
          </button>
          <Link to={`/products/${product.id}`} className="btn-outline">
            View
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
