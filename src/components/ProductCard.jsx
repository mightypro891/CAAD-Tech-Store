import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { formatPrice } from '../utils/formatPrice'
import { motion } from 'framer-motion'

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext)
  const rating = product.reviews
    ? Math.round(
        product.reviews.reduce((sum, review) => sum + review.rating, 0) /
          product.reviews.length
      )
    : 0

  return (
    <motion.article 
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="group flex flex-col h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-2xl hover:shadow-emerald-500/10"
    >
      <Link to={`/products/${product.id}`} className="relative block aspect-[4/3] overflow-hidden bg-slate-100">
        <div className="absolute left-4 top-4 z-10 rounded-full bg-slate-950/90 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md">
          In Stock
        </div>
        <div className="h-full w-full p-8 transition-transform duration-500 group-hover:scale-110">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-8">
        <div className="flex-1 space-y-4">
          <div className="grid gap-1.5">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600">{product.category}</p>
            <h3 className="text-lg font-extrabold tracking-tight text-slate-950 line-clamp-1 group-hover:text-emerald-600 transition-colors">{product.name}</h3>
          </div>
          <div className="text-xl font-black text-slate-950">
            {formatPrice(product.price)}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-3 border-t border-slate-100 pt-6">
          <div className="text-sm text-amber-500" aria-label={`${rating} star rating`}>
            {'*'.repeat(rating)}
          </div>
          <span className="text-xs font-semibold text-slate-500">
            {product.reviews?.length || 0} review{product.reviews?.length === 1 ? '' : 's'}
          </span>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3">
          <button onClick={() => addToCart(product)} className="rounded-xl bg-slate-950 py-3 text-[10px] font-black uppercase tracking-widest text-white transition-all hover:bg-emerald-500 active:scale-95">
            Add to Cart
          </button>
          <Link to={`/products/${product.id}`} className="flex items-center justify-center rounded-xl border border-slate-200 py-3 text-[10px] font-black uppercase tracking-widest text-slate-950 transition-all hover:bg-slate-50 active:scale-95">
            Details
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export default ProductCard
