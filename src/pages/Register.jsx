import { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Register() {
  const { register } = useContext(AuthContext)
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Hide the global footer while the Register page is active
  useEffect(() => {
    const footer = document.querySelector('footer')
    if (footer) footer.style.display = 'none'
    return () => { if (footer) footer.style.display = '' }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    register({ name, email, password })
    navigate('/products')
  }

  return (
    <div className="page flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] px-4 py-12">
      <form 
        onSubmit={handleSubmit} 
        className="auth-card w-full max-w-[28rem] animate-rise p-8 shadow-2xl md:p-12"
      >
        <div className="mb-12 text-center">
          <p className="section-kicker">Join CAAD Tech</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">Create Account</h1>
        </div>

        <div className="grid gap-8">
          <div className="grid gap-3">
            <label className="field-label text-sm font-bold text-slate-700" htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="field-input py-4 shadow-sm"
              placeholder="Your full name"
            />
          </div>

          <div className="grid gap-3">
            <label className="field-label text-sm font-bold text-slate-700" htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="field-input py-4 shadow-sm"
              placeholder="you@example.com"
            />
          </div>

          <div className="grid gap-3">
            <label className="field-label text-sm font-bold text-slate-700" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              required
              minLength="6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="field-input py-4 shadow-sm"
              placeholder="Create a password"
            />
          </div>

          <button type="submit" className="btn-primary mt-4 w-full py-4 text-lg font-bold shadow-lg shadow-emerald-500/20">
            Register Now
          </button>
        </div>

        <div className="mt-12 border-t border-slate-100 pt-10 text-center">
          <p className="text-sm text-slate-600">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-emerald-700 transition-colors hover:text-emerald-600 underline-offset-4 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </form>

      <nav className="mt-12 flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
        <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
        <Link to="/products" className="hover:text-emerald-600 transition-colors">Products</Link>
        <Link to="/contact" className="hover:text-emerald-600 transition-colors">Contact</Link>
      </nav>
    </div>
  )
}