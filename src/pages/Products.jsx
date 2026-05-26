import { useMemo, useState } from 'react'
import Filters from '../components/Filters'
import Pagination from '../components/Pagination'
import ProductGrid from '../components/ProductGrid'
import productsData from '../data/products'

export default function Products() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [sort, setSort] = useState('')
  const [page, setPage] = useState(1)
  const perPage = 9

  const categories = useMemo(
    () => [...new Set(productsData.map((product) => product.category || 'Other'))],
    []
  )

  const filtered = useMemo(() => {
    let items = productsData.slice()

    if (search) {
      items = items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (category) {
      items = items.filter(
        (item) => (item.category || '').toLowerCase() === category.toLowerCase()
      )
    }

    if (sort === 'price-asc') items.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') items.sort((a, b) => b.price - a.price)

    return items
  }, [search, category, sort])

  const totalPages = Math.ceil(filtered.length / perPage)
  const paged = filtered.slice((page - 1) * perPage, page * perPage)

  return (
    <div className="page">
      <section className="shop-hero">
        <div className="relative z-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_18rem] md:items-end">
          <div className="grid gap-3">
            <p className="section-kicker text-emerald-200">Shop CAAD</p>
            <h1 className="text-3xl font-extrabold md:text-5xl">Products</h1>
            <p className="max-w-2xl text-slate-200 leading-7">
              Browse selected laptops, accessories, and tech essentials backed by local support and practical buying guidance.
            </p>
          </div>
          <ul className="professional-list text-sm text-slate-200">
            <li>{productsData.length} available products</li>
            <li>Transparent NGN pricing</li>
            <li>Support after purchase</li>
          </ul>
        </div>
      </section>

      <Filters
        categories={categories}
        selectedCategory={category}
        onSelectCategory={(nextCategory) => {
          setCategory(nextCategory)
          setPage(1)
        }}
        search={search}
        onSearch={(nextSearch) => {
          setSearch(nextSearch)
          setPage(1)
        }}
        sort={sort}
        onSort={(nextSort) => setSort(nextSort)}
      />

      <ProductGrid products={paged} />

      <Pagination page={page} totalPages={totalPages} onPage={(nextPage) => setPage(nextPage)} />
    </div>
  )
}
