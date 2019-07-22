import React from "react";

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="navbar m-2">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <button
              onClick={() => paginate(number)}
              className="btn btn-secondary"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
