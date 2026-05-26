import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { formatPrice } from '../utils/formatPrice'

function Checkout() {
  const { cartItems, cartTotal, clearCart } = useContext(CartContext)
  const [paid, setPaid] = useState(false)

  // Hide the global footer while the Checkout page is active
  useEffect(() => {
    const footer = document.querySelector('footer')
    if (footer) footer.style.display = 'none'
    return () => { if (footer) footer.style.display = '' }
  }, [])

  const handlePay = () => {
    setPaid(true)
    clearCart()
  }

  return (
    <div className="page">
      <div className="grid gap-3">
        <p className="section-kicker">Secure checkout</p>
        <h1 className="section-title">Checkout</h1>
      </div>

      {paid ? (
        <div className="surface-card grid gap-3">
          <h2 className="text-xl font-semibold text-emerald-700">Payment successful</h2>
          <p className="text-slate-600 leading-7">Thanks for shopping with CAAD Tech.</p>
        </div>
      ) : cartItems.length === 0 ? (
        <div className="surface-card grid gap-3">
          <h2 className="text-xl font-semibold text-slate-950">No items in cart</h2>
          <p className="text-slate-600 leading-7">Your checkout summary will appear here.</p>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_22rem]">
          <div className="surface-card grid gap-8 p-8">
            <h2 className="text-lg font-semibold text-slate-950">Delivery Details</h2>
            <div className="form-grid gap-6">
              <input className="field-input" placeholder="Full name" />
              <input className="field-input" placeholder="Phone number" />
              <input className="field-input sm:col-span-2" placeholder="Delivery address" />
            </div>
          </div>

          <aside className="surface-card grid h-fit gap-6 p-7">
            <h2 className="text-lg font-semibold text-slate-950">Order Summary</h2>
            <div className="grid gap-4">
              {cartItems.map((item) => (
                <div key={item.id} className="summary-line text-sm">
                  <span className="min-w-0 leading-6">{item.name} x {item.quantity}</span>
                  <span>{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between border-t border-slate-200 pt-6 text-lg font-bold">
              <span>Total</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
            <button onClick={handlePay} className="btn-primary w-full py-4">
              Pay Now
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

export default Checkout
