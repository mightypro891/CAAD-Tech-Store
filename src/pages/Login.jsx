import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function Login() {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    login({ email, password })
    navigate('/products')
  }

  return (
    <div className="page grid min-h-[calc(100vh-10rem)] place-items-center">
      <form onSubmit={handleSubmit} className="auth-card animate-rise">
        <p className="section-kicker">Welcome back</p>
        <h1 className="mt-2 text-2xl font-bold text-slate-950">Login</h1>

        <label className="field-label mt-6" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="field-input"
          placeholder="you@example.com"
        />

        <label className="field-label" htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          required
          minLength="6"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="field-input"
          placeholder="Enter your password"
        />

        <button className="btn-primary mt-6 w-full">Login</button>
        <p className="mt-4 text-center text-sm text-slate-600">
          New here? <Link to="/register" className="text-emerald-700 font-semibold">Create an account</Link>
        </p>
      </form>
    </div>
  )
}

export default Login
