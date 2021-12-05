import React, { useEffect } from "react";
import { useState } from "react";

const Pagination = ({ itemCount, setPage, spellsByClass }) => {
  
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(itemCount / 50);

  useEffect(() => {
    setCurrentPage(1)
  }, [spellsByClass])

  const goToNextPage = () => {
    setPage(currentPage + 1);
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setPage(currentPage - 1);
    setCurrentPage((page) => page - 1);
  };

  const changePage = (e) => {
    const pageNumber = Number(e.target.textContent);
    setPage(pageNumber);
    setCurrentPage(pageNumber);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / 3) * 3;
    const pagArray = [];
    for (let index = 0; index < 3; index++) {
      if (start + index + 1 <= totalPages) {
        pagArray.push(start + index + 1);
      }
    }
    return pagArray;
  };

  return (
    <nav aria-label="Page navigation example" className="pagination">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 && "disabled"}`} key="prev">
          <button
            className="page-link"
            aria-label="Previous"
            onClick={goToPreviousPage}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {getPaginationGroup().map((item, index) => {
          return (
            <li
              className={`page-item ${currentPage === item && "active"}`}
              key={index}
            >
              <button className="page-link" onClick={changePage}>
                {item}
              </button>
            </li>
          );
        })}
        {totalPages > 3 && 
            <li
            className="page-item disabled"
            key="dot"
          >
            <button className="page-link">
              <span aria-hidden="true">...</span>
            </button>
          </li>
        }
        {totalPages > 3 && 
            <li
            className="page-item"
            key="final"
          >
            <button className="page-link" onClick={changePage}>
              {totalPages}
            </button>
          </li>
        }
        <li
          className={`page-item ${
            currentPage === totalPages && "disabled"
          }`}
          key="next"
        >
          <button className="page-link" aria-label="Next" onClick={goToNextPage}>
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
