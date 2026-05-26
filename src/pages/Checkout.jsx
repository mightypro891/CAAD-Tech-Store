import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { formatPrice } from '../utils/formatPrice'

function Checkout() {
  const { cartItems, cartTotal, clearCart } = useContext(CartContext)
  const [paid, setPaid] = useState(false)

  const handlePay = () => {
    setPaid(true)
    clearCart()
  }

  return (
    <div className="page">
      <p className="section-kicker">Secure checkout</p>
      <h1 className="section-title mt-2">Checkout</h1>

      {paid ? (
        <div className="surface-card mt-8 p-8">
          <h2 className="text-xl font-semibold text-emerald-700">Payment successful</h2>
          <p className="mt-2 text-slate-600">Thanks for shopping with CAAD Tech.</p>
        </div>
      ) : cartItems.length === 0 ? (
        <div className="surface-card mt-8 p-8">
          <h2 className="text-xl font-semibold text-slate-950">No items in cart</h2>
          <p className="mt-2 text-slate-600">Your checkout summary will appear here.</p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_22rem]">
          <div className="surface-card p-5">
            <h2 className="text-lg font-semibold text-slate-950">Delivery Details</h2>
            <div className="form-grid mt-5">
              <input className="field-input" placeholder="Full name" />
              <input className="field-input" placeholder="Phone number" />
              <input className="field-input sm:col-span-2" placeholder="Delivery address" />
            </div>
          </div>

          <aside className="surface-card h-fit p-5">
            <h2 className="text-lg font-semibold text-slate-950">Order Summary</h2>
            <div className="mt-4 space-y-3">
              {cartItems.map((item) => (
                <div key={item.id} className="summary-line text-sm">
                  <span className="min-w-0">{item.name} x {item.quantity}</span>
                  <span>{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-between border-t border-slate-200 pt-4 font-bold">
              <span>Total</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
            <button onClick={handlePay} className="btn-primary mt-5 w-full">
              Pay Now
            </button>
          </aside>
        </div>
      )}
    </div>
  )
}

export default Checkout
