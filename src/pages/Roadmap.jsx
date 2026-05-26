const features = [
  {
    title: 'AI product recommendations',
    desc: 'Personalized suggestions based on customer intent, product specs, and shopping behavior.',
    status: 'Planned',
    phase: 'Intelligence',
  },
  {
    title: 'Live chat support',
    desc: 'Real-time sales and technical support for shoppers who need guidance before checkout.',
    status: 'Planned',
    phase: 'Support',
  },
  {
    title: 'Multi-vendor marketplace',
    desc: 'A seller portal for trusted vendors to list, price, and manage approved products.',
    status: 'Research',
    phase: 'Marketplace',
  },
  {
    title: 'Crypto payment',
    desc: 'Optional digital asset payments through secure, compliant payment gateway providers.',
    status: 'Research',
    phase: 'Payments',
  },
  {
    title: 'Affiliate system',
    desc: 'Referral tracking, commission rules, and dashboards for approved affiliate partners.',
    status: 'Planned',
    phase: 'Growth',
  },
  {
    title: 'Inventory automation',
    desc: 'Low-stock alerts, product availability rules, and stock update workflows for admins.',
    status: 'Planned',
    phase: 'Operations',
  },
  {
    title: 'Delivery tracking',
    desc: 'Order status updates from processing to dispatch and customer delivery confirmation.',
    status: 'Planned',
    phase: 'Fulfillment',
  },
]

export default function Roadmap() {
  return (
    <main className="page">
      <section className="shop-hero">
        <div className="relative z-10 max-w-3xl">
          <p className="section-kicker text-emerald-200">Future Features</p>
          <h1 className="mt-2 text-3xl font-extrabold md:text-5xl">
            Product Roadmap
          </h1>
          <p className="mt-4 text-slate-200">
            Long-term ideas for turning CAAD Tech Store into a smarter, more automated,
            and more scalable ecommerce platform.
          </p>
        </div>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        {features.map((feature) => (
          <article key={feature.title} className="surface-card p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="section-kicker">{feature.phase}</p>
                <h2 className="mt-2 text-xl font-bold text-slate-950">
                  {feature.title}
                </h2>
              </div>
              <span className="product-badge">{feature.status}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">{feature.desc}</p>
          </article>
        ))}
      </section>

      <section className="surface-card mt-10 p-6">
        <p className="section-kicker">Next Steps</p>
        <ol className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 md:grid-cols-3">
          <li>Define MVP scope and user stories for each feature.</li>
          <li>Design data models, admin flows, and integration requirements.</li>
          <li>Build one feature at a time, starting with highest customer impact.</li>
        </ol>
      </section>
    </main>
  )
}
