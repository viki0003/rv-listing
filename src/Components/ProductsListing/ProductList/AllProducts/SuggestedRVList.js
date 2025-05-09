import React, { useState } from "react";
import { useSuggestedRV } from "../../../../ApiContext/SuggestedRVContext"; // adjust path if needed
import ProductItem from "../../../../Components/Home/PopularSales/ProductItem/ProductItem";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const SuggestedRVList = () => {
  const { suggestedRVs, loading, error } = useSuggestedRV();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  if (loading) return <p>Loading suggested RVs...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!suggestedRVs.length) return <p>No suggested RVs found for this vehicle type.</p>;

  const totalPages = Math.ceil(suggestedRVs.length / productsPerPage);
  const displayedProducts = suggestedRVs.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const paginationNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)
    .filter((page) => page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1)
    .reduce((acc, page, idx, arr) => {
      if (idx > 0 && page - arr[idx - 1] > 1) {
        acc.push("dots");
      }
      acc.push(page);
      return acc;
    }, []);

  return (
    <>
      <div className="suggested-rv-list all-products-list">
        {displayedProducts.map((rv) => (
          <ProductItem key={rv.id} product={rv} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination-container">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className={`pagination-arrow ${currentPage === 1 ? "disabled" : ""}`}
          >
            <IoChevronBack />
          </button>

          {paginationNumbers.map((item, index) =>
            item === "dots" ? (
              <span key={`dots-${index}`} className="pagination-dots">...</span>
            ) : (
              <button
                key={item}
                onClick={() => setCurrentPage(item)}
                className={`pagination-number ${currentPage === item ? "active" : ""}`}
              >
                {item}
              </button>
            )
          )}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className={`pagination-arrow ${currentPage === totalPages ? "disabled" : ""}`}
          >
            <IoChevronForward />
          </button>
        </div>
      )}
    </>
  );
};

export default SuggestedRVList;
