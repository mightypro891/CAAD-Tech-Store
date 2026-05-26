import { Link } from 'react-router-dom'
import heroBanner from '../assets/images/hero-banner.svg'
import laptopImage from '../assets/images/laptop.svg'

export default function Hero() {
  return (
    <section
      className="premium-hero"
      style={{ '--hero-image': `url(${heroBanner})` }}
    >
      <div className="app-container hero-grid">
        <div className="space-y-7">
          <span className="store-badge">CAAD Tech Store - Lagos</span>

          <div className="space-y-5">
            <h1 className="hero-title">
              Tech that feels ready for real work.
            </h1>
            <p className="hero-copy">
              Buy reliable computers, accessories, and repair support from a local team
              that helps you choose properly, set up cleanly, and keep your devices working.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link to="/products" className="btn-primary">Shop Products</Link>
            <Link to="/contact" className="btn-secondary">Book a Consultation</Link>
          </div>

          <div className="hero-stat-grid">
            <div className="hero-stat">
              <strong>24h</strong>
              <span>Fast support response</span>
            </div>
            <div className="hero-stat">
              <strong>3+</strong>
              <span>Core product categories</span>
            </div>
            <div className="hero-stat">
              <strong>Local</strong>
              <span>Ibadan service presence</span>
            </div>
          </div>

          <div className="trust-row">
            <span>Sales</span>
            <span>Repairs</span>
            <span>Upgrades</span>
            <span>Setup</span>
            <span>Business support</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="device-frame">
            <img
              src={laptopImage}
              alt="Performance laptop"
              className="aspect-[4/3] object-cover"
            />
          </div>

          <div className="floating-spec mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase text-emerald-200">Featured system</p>
              <h2 className="mt-1 text-lg font-extrabold">Gaming Laptop GX-15</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Built for smooth multitasking, creative work, and play.
              </p>
            </div>
            <div className="rounded-lg bg-white/10 p-4">
              <p className="text-xs font-bold uppercase text-emerald-200">Support included</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Ask for setup, diagnostics, upgrades, and practical buying advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
