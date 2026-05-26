import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { CartContext } from '../context/CartContext'
import logoImage from '../assets/images/logo.svg'

function Navbar() {
  const { user, logout } = useContext(AuthContext)
  const { cartCount } = useContext(CartContext)

  return (
    <nav className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-slate-950/85 text-white shadow-lg shadow-slate-950/10 backdrop-blur-xl">
      <div className="app-container flex min-h-16 items-center justify-between gap-4 py-3">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img
            src={logoImage}
            alt="CAAD Tech logo"
            className="h-9 w-9 rounded-lg object-contain"
          />
          <span className="whitespace-nowrap text-base font-extrabold tracking-wide sm:text-lg">
            CAAD Tech Store
          </span>
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-1 text-sm md:flex">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Support</Link>
          <Link to="/roadmap" className="nav-link">Roadmap</Link>
        </div>

        <div className="flex shrink-0 items-center justify-end gap-2">
          <Link to="/cart" className="icon-button relative" aria-label="Cart">
            <span aria-hidden="true">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-emerald-400 px-1 text-xs font-bold text-slate-950">
                {cartCount}
              </span>
            )}
          </Link>

          {user ? (
            <button onClick={logout} className="btn-secondary">Sign out</button>
          ) : (
            <>
              <Link to="/login" className="btn-ghost hidden sm:inline-flex">Sign in</Link>
              <Link to="/register" className="btn-light">Create account</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
