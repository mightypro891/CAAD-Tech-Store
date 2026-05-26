export default function Newsletter() {
  return (
    <section className="surface-card my-16 grid gap-5 border-emerald-100 bg-emerald-50/70 p-6 md:grid-cols-[minmax(0,1fr)_minmax(20rem,28rem)] md:items-center">
      <div>
        <p className="section-kicker">Stay updated</p>
        <h2 className="mt-2 text-xl font-bold text-slate-950">Get deals, arrivals, and support tips</h2>
        <p className="mt-2 text-sm text-slate-600">
          Subscribe for product drops, repair tips, and store updates.
        </p>
      </div>
      <form className="grid w-full gap-2 sm:grid-cols-[minmax(0,1fr)_auto]">
        <input
          aria-label="email"
          type="email"
          placeholder="Your email"
          className="field-input"
        />
        <button className="btn-primary">Subscribe</button>
      </form>
    </section>
  )
}
