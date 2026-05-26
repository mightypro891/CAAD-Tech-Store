const testimonials = [
  { name: 'Aisha', text: 'Great service, fast repairs, and reliable products.' },
  { name: 'Kelechi', text: 'Excellent customer support and competitive prices.' },
  { name: 'Michael', text: 'High quality hardware. Highly recommended.' },
]

export default function Testimonials() {
  return (
    <section className="mt-20">
      <div className="section-header">
        <div className="grid gap-3">
          <p className="section-kicker">Customer notes</p>
          <h2 className="section-title">Customer Confidence</h2>
          <p className="section-copy">
            Short notes from customers who value responsive service and dependable products.
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <blockquote key={testimonial.name} className="surface-card flex min-h-40 flex-col gap-4 p-6">
            <p className="text-slate-700 leading-7">"{testimonial.text}"</p>
            <footer className="text-sm font-semibold text-slate-500">
              {testimonial.name}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
