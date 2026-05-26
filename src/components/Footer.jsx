import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="mt-12 bg-slate-950 py-8 text-slate-300">
      <div className="app-container grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <h2 className="font-semibold text-white">CAAD Technologies</h2>
          <p className="mt-2 text-sm">29, Anfani Layout, Challenge, Ibadan, Oyo State.</p>
        </div>

        <div>
          <h2 className="font-semibold text-white">Quick Links</h2>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-white">Contact</h2>
          <p className="mt-2 text-sm">support@caadtech.com</p>
        </div>
      </div>

      <div className="mt-8 border-t border-slate-800 pt-4 text-center text-sm text-slate-500">
        Copyright 2026 CAAD Tech Store
      </div>
    </footer>
  )
}

export default Footer
