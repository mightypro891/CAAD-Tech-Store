import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="mt-48 border-t border-white/5 bg-slate-950 text-slate-400">
      {/* 6. Newsletter Section */}
      <div className="border-b border-white/5 py-16">
        <div className="app-container flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="max-w-md text-center lg:text-left">
            <h3 className="text-xl font-bold text-white tracking-tight">Get updates on new arrivals and deals</h3>
            <p className="mt-2 text-sm text-slate-500">Subscribe to our newsletter for exclusive tech insights and offers.</p>
          </div>
          <form className="flex w-full max-w-md gap-3">
            <input 
              type="email" 
              placeholder="Email address" 
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-6 text-sm text-white placeholder:text-slate-600 focus:border-emerald-500/50 focus:outline-none transition-all"
              required
            />
            <button type="submit" className="h-14 rounded-2xl bg-emerald-500 px-8 text-xs font-black uppercase tracking-widest text-slate-950 transition-all hover:bg-emerald-400 active:scale-95 whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="app-container py-24">
        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1. Brand Section */}
          <div className="space-y-8">
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black uppercase tracking-[0.2em] text-white">
                CAAD<span className="text-emerald-400">TECH</span>
              </span>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600">
                Store
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              A modern tech ecommerce store specializing in computers, laptops, gaming systems, and high-quality accessories for students, gamers, and professionals.
            </p>
            <div className="inline-flex items-center rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-400/80">
              Quality tech products at affordable prices
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="space-y-8">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Quick Links</h2>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="transition-colors hover:text-emerald-400">Home</Link></li>
              <li><Link to="/products" className="transition-colors hover:text-emerald-400">Shop / Products</Link></li>
              <li><Link to="/products" className="transition-colors hover:text-emerald-400">Categories</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-emerald-400">About Us</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-emerald-400">Contact</Link></li>
              <li><Link to="#" className="transition-colors hover:text-emerald-400">FAQ</Link></li>
            </ul>
          </div>

          {/* 3. Product Categories */}
          <div className="space-y-8">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Categories</h2>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/products" className="transition-colors hover:text-emerald-400">Laptops</Link></li>
              <li><Link to="/products" className="transition-colors hover:text-emerald-400">Gaming PCs</Link></li>
              <li><Link to="/products" className="transition-colors hover:text-emerald-400">Accessories</Link></li>
              <li><Link to="/products" className="transition-colors hover:text-emerald-400">Keyboards & Mice</Link></li>
              <li><Link to="/products" className="transition-colors hover:text-emerald-400">Monitors</Link></li>
              <li><Link to="/products" className="transition-colors hover:text-emerald-400">Networking Devices</Link></li>
            </ul>
          </div>

          {/* 4 & 5. Contact & Socials */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Contact</h2>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-slate-600">Email</span>
                  <a href="mailto:support@caadtechstore.com" className="text-white transition-colors hover:text-emerald-400">support@caadtechstore.com</a>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-slate-600">Phone</span>
                  <span className="text-white">+234 XXX XXX XXXX</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-slate-600">Location</span>
                  <span className="text-white">Lagos, Nigeria</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Follow Us</h2>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-[10px] font-bold hover:bg-emerald-500 hover:text-slate-950 transition-all cursor-pointer">IG</div>
                <div className="h-10 w-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-[10px] font-bold hover:bg-emerald-500 hover:text-slate-950 transition-all cursor-pointer">FB</div>
                <div className="h-10 w-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-[10px] font-bold hover:bg-emerald-500 hover:text-slate-950 transition-all cursor-pointer">TT</div>
                <div className="h-10 w-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-[10px] font-bold hover:bg-emerald-500 hover:text-slate-950 transition-all cursor-pointer">X</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Bottom Bar */}
      <div className="border-t border-white/5 py-8">
        <div className="app-container flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600">
            &copy; 2026 CAAD Tech Store &bull; All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
