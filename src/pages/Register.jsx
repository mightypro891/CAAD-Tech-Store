import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function Register() {
  const { register } = useContext(AuthContext)
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    register({ name, email, password })
    navigate('/products')
  }

  return (
    <div className="page grid min-h-[calc(100vh-10rem)] place-items-center">
      <form onSubmit={handleSubmit} className="auth-card animate-rise">
        <p className="section-kicker">Join CAAD Tech</p>
        <h1 className="mt-2 text-2xl font-bold text-slate-950">Create Account</h1>

        <label className="field-label mt-6" htmlFor="name">Name</label>
        <input
          id="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="field-input"
          placeholder="Your name"
        />

        <label className="field-label" htmlFor="email">Email</label>
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
          placeholder="Create a password"
        />

        <button className="btn-primary mt-6 w-full">Register</button>
        <p className="mt-4 text-center text-sm text-slate-600">
          Already have an account? <Link to="/login" className="text-emerald-700 font-semibold">Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Register
