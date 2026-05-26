import { Link } from 'react-router-dom'

const categories = [
  { name: 'Laptops', description: 'Portable systems for work, school, and gaming.' },
  { name: 'Desktops', description: 'Stable machines for office and heavy workloads.' },
  { name: 'Accessories', description: 'Keyboards, audio, storage, and essentials.' },
  { name: 'Gaming', description: 'Performance gear for smoother play sessions.' },
  { name: 'Networking', description: 'Routers, setup, and reliable connectivity.' },
  { name: 'Services', description: 'Repairs, upgrades, diagnostics, and setup.' },
]

export default function Categories() {
  return (
    <section className="mt-16" id="categories">
      <p className="section-kicker">Browse by need</p>
      <h2 className="section-title mt-2">Shop by Category</h2>
      <p className="section-copy mt-3">
        Find the right product or support path quickly.
      </p>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((category, index) => (
          <Link
            key={category.name}
            to="/products"
            className="surface-card category-card text-left"
          >
            <span className="category-mark">{index + 1}</span>
            <span className="font-bold text-slate-950">{category.name}</span>
            <span className="text-xs leading-5 text-slate-500">{category.description}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
