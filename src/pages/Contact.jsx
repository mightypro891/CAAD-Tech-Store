function Contact() {
  return (
    <div className="page">
      <div className="grid gap-3">
        <p className="section-kicker">Reach us</p>
        <h1 className="section-title">Contact CAAD Tech</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <form className="surface-card grid gap-6">
          <div className="form-grid">
            <input className="field-input" placeholder="Full name" />
            <input className="field-input" type="email" placeholder="Email address" />
            <input className="field-input sm:col-span-2" placeholder="Subject" />
            <textarea
              className="field-input min-h-40 sm:col-span-2"
              placeholder="How can we help?"
            />
          </div>
          <button className="btn-primary w-full sm:w-auto">Send Message</button>
        </form>

        <aside className="surface-card grid gap-4">
          <h2 className="text-lg font-bold text-slate-950">Store Information</h2>
          <div className="grid gap-3 text-slate-600">
            <p className="leading-7">29, Anfani Layout, Challenge, Ibadan, Oyo State.</p>
            <p className="leading-7">Email: support@caadtech.com</p>
            <p className="leading-7">Hours: Monday to Saturday, 9:00 AM - 6:00 PM</p>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Contact
