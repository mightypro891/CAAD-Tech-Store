import { Link } from 'react-router-dom'
import laptopImage from '../assets/images/laptop.svg'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-slate-950 py-24 flex items-center">
      {/* Ambient background effects */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="app-container relative z-10 grid gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10"
        >
          <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 shadow-2xl">
            <span className="mr-2 flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Lagos Service Hub
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-white md:text-7xl">
              Engineering the <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Future of Work.</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl">
              Buy reliable computers, accessories, and repair support from a local team
              that helps you choose properly and keep your gear working perfectly.
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            <Link to="/products" className="rounded-full bg-white px-10 py-4 text-sm font-black uppercase tracking-widest text-slate-950 transition-all hover:bg-emerald-400 hover:scale-105 active:scale-95 shadow-xl shadow-emerald-500/10">
              Explore Catalog
            </Link>
            <Link to="/contact" className="rounded-full border border-white/10 bg-white/5 px-10 py-4 text-sm font-black uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20">
              Technical Support
            </Link>
          </div>

          <div className="flex items-center gap-12 pt-8 grayscale opacity-50 contrast-125">
            {['Asus', 'HP', 'Dell', 'Lenovo'].map(brand => (
              <span key={brand} className="text-xl font-bold tracking-tighter text-white">{brand}</span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <div className="group relative z-10 mx-auto max-w-[500px]">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-20 blur transition duration-1000 group-hover:opacity-40" />
            <div className="relative rounded-3xl border border-white/10 bg-slate-900 p-2 shadow-2xl overflow-hidden">
              <img src={laptopImage} alt="Hardware" className="w-full transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
