import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { formatPrice } from '../utils/formatPrice'

function Cart() {
  const { cartItems, cartTotal, removeFromCart, decreaseQty, addToCart, clearCart } =
    useContext(CartContext)

  // Hide the global footer while the Cart page is active
  useEffect(() => {
    const footer = document.querySelector('footer')
    if (footer) footer.style.display = 'none'
    return () => { if (footer) footer.style.display = '' }
  }, [])

  return (
    <div className="page">
      <div className="page-heading">
        <div className="grid gap-3">
          <p className="section-kicker">Your selections</p>
          <h1 className="section-title">Shopping Cart</h1>
        </div>
        <Link to="/products" className="btn-outline w-fit">Continue Shopping</Link>
      </div>

      {cartItems.length === 0 ? (
        <div className="surface-card grid gap-3 text-center">
          <h2 className="text-xl font-semibold text-slate-950">Your cart is empty</h2>
          <p className="text-slate-600 leading-7">Add a few products and they will appear here.</p>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_22rem]">
          <div className="grid gap-6">
            {cartItems.map((item) => (
              <article key={item.id} className="surface-card cart-row p-6">
                <img src={item.image} alt={item.name} className="h-28 w-28 rounded-lg object-cover" />
                <div className="grid gap-1.5">
                  <h2 className="text-lg font-bold text-slate-950">{item.name}</h2>
                  <p className="text-sm text-slate-500">{formatPrice(item.price)}</p>
                </div>
                <div className="cart-row-actions flex items-center justify-start gap-4 sm:justify-center">
                  <button onClick={() => decreaseQty(item.id)} className="qty-button">-</button>
                  <span className="w-8 text-center font-semibold">{item.quantity}</span>
                  <button onClick={() => addToCart(item)} className="qty-button">+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="btn-ghost-dark cart-row-remove justify-self-start sm:justify-self-end">
                  Remove
                </button>
              </article>
            ))}
          </div>

          <aside className="surface-card grid h-fit gap-6 p-7">
            <h2 className="text-lg font-semibold text-slate-950">Order Summary</h2>
            <div className="flex justify-between border-t border-slate-200 pt-6 text-xl font-bold">
              <span>Total</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
            <Link to="/checkout" className="btn-primary flex w-full justify-center py-4">
              Checkout
            </Link>
            <button onClick={clearCart} className="btn-outline w-full">
              Clear Cart
            </button>
          </aside>
        </div>
      )}

      <nav className="mt-24 flex justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
        <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
        <Link to="/products" className="hover:text-emerald-600 transition-colors">Products</Link>
        <Link to="/contact" className="hover:text-emerald-600 transition-colors">Contact</Link>
      </nav>
    </div>
  )
}

export default Cart
