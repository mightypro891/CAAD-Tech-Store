import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="page">
      <div className="surface-card p-8 text-center">
        <p className="section-kicker">404</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">Page not found</h1>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn-primary mt-6">
          Back Home
        </Link>
      </div>
    </main>
  )
}

export default NotFound
