import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { formatPrice } from '../utils/formatPrice'

function Cart() {
  const { cartItems, cartTotal, removeFromCart, decreaseQty, addToCart, clearCart } =
    useContext(CartContext)

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <p className="section-kicker">Your selections</p>
          <h1 className="section-title mt-2">Shopping Cart</h1>
        </div>
        <Link to="/products" className="btn-outline">Continue Shopping</Link>
      </div>

      {cartItems.length === 0 ? (
        <div className="surface-card mt-8 p-8 text-center">
          <h2 className="text-xl font-semibold text-slate-950">Your cart is empty</h2>
          <p className="mt-2 text-slate-600">Add a few products and they will appear here.</p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_22rem]">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <article key={item.id} className="surface-card cart-row p-4">
                <img src={item.image} alt={item.name} className="h-24 w-24 rounded-md object-cover" />
                <div className="flex-1">
                  <h2 className="font-semibold text-slate-950">{item.name}</h2>
                  <p className="mt-1 text-sm text-slate-500">{formatPrice(item.price)}</p>
                </div>
                <div className="cart-row-actions flex items-center justify-start gap-2 sm:justify-center">
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

          <aside className="surface-card h-fit p-5">
            <h2 className="text-lg font-semibold text-slate-950">Order Summary</h2>
            <div className="mt-4 flex justify-between border-t border-slate-200 pt-4 text-lg font-bold">
              <span>Total</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
            <Link to="/checkout" className="btn-primary mt-5 flex w-full justify-center">
              Checkout
            </Link>
            <button onClick={clearCart} className="btn-outline mt-3 w-full">
              Clear Cart
            </button>
          </aside>
        </div>
      )}
    </div>
  )
}

export default Cart
