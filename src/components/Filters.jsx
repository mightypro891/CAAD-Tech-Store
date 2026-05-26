export default function Filters({
  categories,
  selectedCategory,
  onSelectCategory,
  search,
  onSearch,
  sort,
  onSort,
}) {
  return (
    <div className="surface-card grid gap-3 p-4 md:grid-cols-[1fr_12rem_12rem]">
      <input
        value={search}
        onChange={(event) => onSearch(event.target.value)}
        placeholder="Search products..."
        className="field-input"
      />

      <select
        value={selectedCategory || ''}
        onChange={(event) => onSelectCategory(event.target.value)}
        className="field-input"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <select
        value={sort}
        onChange={(event) => onSort(event.target.value)}
        className="field-input"
      >
        <option value="">Sort</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  )
}
