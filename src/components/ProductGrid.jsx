import ProductCard from './ProductCard'

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className="surface-card mt-6 p-8 text-center text-slate-600">
        No products match your filters.
      </div>
    )
  }

  return (
    <div className="mt-6 grid items-stretch grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
