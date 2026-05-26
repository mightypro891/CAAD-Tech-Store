const testimonials = [
  { name: 'Aisha', text: 'Great service, fast repairs, and reliable products.' },
  { name: 'Kelechi', text: 'Excellent customer support and competitive prices.' },
  { name: 'Michael', text: 'High quality hardware. Highly recommended.' },
]

export default function Testimonials() {
  return (
    <section className="mt-16">
      <div className="section-header">
        <div>
          <p className="section-kicker">Customer notes</p>
          <h2 className="section-title mt-2">Customer Confidence</h2>
          <p className="section-copy mt-3">
            Short notes from customers who value responsive service and dependable products.
          </p>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <blockquote key={testimonial.name} className="surface-card flex min-h-40 flex-col p-5">
            <p className="text-slate-700">"{testimonial.text}"</p>
            <footer className="mt-4 text-sm font-semibold text-slate-500">
              {testimonial.name}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
