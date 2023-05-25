import React from "react";
import "../styles/paginator.css";
const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="paginator">
      <button onClick={() => prevPage()} className="btn">
        &lt;
      </button>
      <span>
        Page {currentPage}/{totalPages}
      </span>
      <button onClick={() => nextPage()} className="btn">
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
