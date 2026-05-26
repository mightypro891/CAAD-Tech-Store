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
    <section className="mt-20" id="categories">
      <div className="grid gap-3">
        <p className="section-kicker">Browse by need</p>
        <h2 className="section-title">Shop by Category</h2>
        <p className="section-copy">
          Find the right product or support path quickly.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((category, index) => (
          <Link
            key={category.name}
            to="/products"
            className="surface-card category-card text-left"
          >
            <span className="category-mark">{index + 1}</span>
            <span className="font-bold text-slate-950">{category.name}</span>
            <span className="text-xs leading-6 text-slate-500">{category.description}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
