import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { CartContext } from '../context/CartContext'
import logoImage from '../assets/images/logo.svg'
import { motion } from 'framer-motion'

function Navbar() {
  const { user, logout } = useContext(AuthContext)
  const { cartCount } = useContext(CartContext)

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/70 text-white shadow-2xl backdrop-blur-xl transition-all duration-500">
      <div className="app-container flex h-20 items-center justify-between gap-12 px-6 lg:px-12">
        {/* Premium Branding */}
        <Link to="/" className="group flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 p-2 shadow-lg shadow-emerald-500/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
            <img
              src={logoImage}
              alt="CAAD Tech"
              className="h-full w-full object-contain brightness-0 invert"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-base font-black uppercase tracking-[0.18em] sm:text-lg">
              CAAD<span className="text-emerald-400 font-extrabold">TECH</span>
            </span>
            <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.25em] text-slate-500">
              Hardware & Engineering
            </span>
          </div>
        </Link>

        {/* Refined Navigation Links */}
        <ul className="hidden flex-1 items-center justify-center gap-10 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 md:flex">
          {['Home', 'Products', 'About', 'Support', 'Roadmap'].map((item) => (
            <li key={item}>
              <Link 
                to={item === 'Home' ? '/' : item === 'Support' ? '/contact' : `/${item.toLowerCase()}`} 
                className="relative py-2 transition-colors hover:text-emerald-400 group/link"
              >
                {item}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover/link:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side Utility Actions */}
        <div className="flex shrink-0 items-center justify-end gap-8">
          {/* Modern Cart with SVG Icon */}
          <Link to="/cart" className="group relative flex items-center justify-center p-2 text-slate-300 transition-all hover:scale-110 hover:text-white" aria-label="Shopping Cart">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 11-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[9px] font-black text-slate-950 ring-2 ring-slate-950">
                {cartCount}
              </motion.span>
            )}
          </Link>

          {/* User Interaction Area */}
          <div className="flex items-center gap-6 border-l border-white/10 pl-8">
            {user ? (
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-colors">
                  <div className="h-9 w-9 rounded-full border border-white/10 bg-slate-900 flex items-center justify-center shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="hidden lg:inline ml-1">Account</span>
                </button>
                <button onClick={logout} className="text-[10px] font-black uppercase tracking-widest text-rose-500 hover:text-rose-400 transition-colors">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-6">
                <Link to="/login" className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 transition-colors hover:text-white">
                  Log in
                </Link>
                <Link to="/register" className="rounded-full bg-emerald-500 px-8 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-slate-950 transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-95">
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
