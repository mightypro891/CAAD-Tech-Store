import { Link } from 'react-router-dom'

const highlights = [
  {
    title: 'Expert Product Guidance',
    text: 'Clear recommendations based on how you actually plan to use the device.',
  },
  {
    title: 'Repair and Upgrade Support',
    text: 'Diagnostics, hardware upgrades, software setup, and practical maintenance.',
  },
  {
    title: 'Business-ready Solutions',
    text: 'Reliable systems and accessories for offices, schools, and growing teams.',
  },
]

export default function ServiceHighlights() {
  return (
    <section className="mt-20 rounded-xl bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 md:p-8">
      <div className="section-header">
        <div className="grid gap-3">
          <p className="section-kicker text-emerald-300">Why CAAD Tech</p>
          <h2 className="text-2xl font-extrabold">More than a checkout page</h2>
          <p className="max-w-2xl text-slate-300 leading-7">
            CAAD Tech combines retail, repairs, and hands-on support so customers can buy with more confidence.
          </p>
        </div>
        <Link to="/contact" className="btn-secondary">
          Talk to Us
        </Link>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.06] p-6">
            <h3 className="font-bold">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
