import styles from "./Pagination.module.css";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages;

  return (
    <div className={styles.wrap}>
      <button disabled={prevDisabled} onClick={() => onPageChange(currentPage - 1)}>
        Prev
      </button>

      <span className={styles.info}>
        Page {currentPage} / {totalPages}
      </span>

      <button disabled={nextDisabled} onClick={() => onPageChange(currentPage + 1)}>
        Next
      </button>
    </div>
  );
}
