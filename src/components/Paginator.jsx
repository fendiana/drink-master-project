const Paginator = ({
  currentPage = 1,
  totalPages = 0,
  onPageChange = () => {},
}) => {
  if (totalPages <= 0) return null;

  return (
    <nav aria-label="Pagination">
      <button
        type="button"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <button
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </nav>
  );
};

export default Paginator;
