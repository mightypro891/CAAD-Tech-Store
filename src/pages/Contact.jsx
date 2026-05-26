function Contact() {
  return (
    <div className="page">
      <p className="section-kicker">Reach us</p>
      <h1 className="section-title mt-2">Contact CAAD Tech</h1>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <form className="surface-card p-6">
          <div className="form-grid">
            <input className="field-input" placeholder="Full name" />
            <input className="field-input" type="email" placeholder="Email address" />
            <input className="field-input sm:col-span-2" placeholder="Subject" />
            <textarea
              className="field-input min-h-36 sm:col-span-2"
              placeholder="How can we help?"
            />
          </div>
          <button className="btn-primary mt-5">Send Message</button>
        </form>

        <aside className="surface-card p-6">
          <h2 className="text-lg font-bold text-slate-950">Store Information</h2>
          <div className="mt-4 space-y-3 text-slate-600">
            <p>29, Anfani Layout, Challenge, Ibadan, Oyo State.</p>
            <p>Email: support@caadtech.com</p>
            <p>Hours: Monday to Saturday, 9:00 AM - 6:00 PM</p>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Contact
