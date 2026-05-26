export default function Pagination({ page, totalPages, onPage }) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <div className="mt-6 flex items-center gap-2">
      {pages.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPage(pageNumber)}
          className={pageNumber === page ? 'btn-primary min-w-10' : 'qty-button bg-white'}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  )
}
