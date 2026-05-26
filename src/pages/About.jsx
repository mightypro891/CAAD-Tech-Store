export default function About() {
  return (
    <main className="page">
      <div className="surface-card overflow-hidden">
        <div className="grid gap-8 p-6 md:grid-cols-[1fr_18rem] md:p-8">
          <div>
            <p className="section-kicker">Who we are</p>
            <h1 className="section-title mt-2">CAAD Technologies Enterprise</h1>
            <p className="mt-3 text-lg italic text-slate-600">
              "The Perfect Computer Product, Just For You"
            </p>

            <section className="mt-8 space-y-4 text-slate-700">
              <h2 className="text-xl font-semibold text-slate-900">Reliable tech support and sales</h2>
              <p>
                CAAD Technologies Enterprise is a multidisciplinary ICT and engineering
                company delivering computer sales, repairs, engineering services, and
                general contracting. We combine technical expertise with customer-focused
                service for businesses and individuals.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-lg font-semibold text-slate-900">Our Services</h2>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'ICT Services',
                  'Computer Sales',
                  'Computer Repairs',
                  'Engineering Services',
                  'General Contract and Merchandise',
                ].map((service) => (
                  <li key={service} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                    {service}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <h2 className="font-semibold text-slate-900">Quick Info</h2>
            <dl className="mt-4 space-y-4 text-sm text-slate-700">
              <div>
                <dt className="font-semibold text-slate-500">Location</dt>
                <dd>29, Anfani Layout, Challenge, Ibadan, Oyo State.</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-500">Business Type</dt>
                <dd>ICT, sales, repairs, engineering, and contracting.</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </main>
  )
}
