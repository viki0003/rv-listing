import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ProductItem from "../../../Home/PopularSales/ProductItem/ProductItem";
import ProductFilter from "../Filter/Filter";
import FilterIcon from "../../../../Assets/Icons/FilterIcon";
import "./allproducts.css";
import Loader from "../../../Loader";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useProducts } from "../../../../ApiContext/ProductApi"; // Import context

const AllProducts = () => {
  const { products, loading, error } = useProducts(); // Fetch products from context
  const [sortOrder, setSortOrder] = useState("new");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState("center");
  const [value, setValue] = useState([0, 70]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedVehicleType = searchParams.get("vehicle_type")?.toLowerCase();

  const handleReset = () => {
    setVisible(false);
    setValue([0, 70]);
  };

  const footerContent = (
    <div className="vic-buttons filter-buttons">
      <Button
        label="Reset"
        icon="pi pi-times"
        onClick={handleReset}
        className="vic-pre-approved"
      />
      <Button
        label="Apply"
        icon="pi pi-check"
        onClick={() => setVisible(false)}
        className="vic-info"
        autoFocus
      />
    </div>
  );

  const show = (position) => {
    setPosition(position);
    setVisible(true);
  };

  const filteredProducts = products.filter((product) => {
    const isInLengthRange =
      product.vehicle_length >= value[0] && product.vehicle_length <= value[1];

    const matchesVehicleType = selectedVehicleType
      ? product.vehicle_type?.toLowerCase() === selectedVehicleType
      : true;

    return isInLengthRange && matchesVehicleType;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "new") {
      return b.vehicle_year - a.vehicle_year;
    } else {
      return a.vehicle_year - b.vehicle_year;
    }
  });

  const totalProducts = sortedProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const displayedProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="all-products-ui">
      <div className="container">
        <div className="responsive-pd-header">
          <span
            className="responsive-pd-back-arrow"
            onClick={() => navigate(-1)}
          >
            ❮
          </span>
          <span className="responsive-pd-title">
            {selectedVehicleType
              ? selectedVehicleType.replace(/-/g, " ")
              : "All RVs"}
          </span>
          <FilterIcon onClick={() => show("bottom")} />
          <Dialog
            visible={visible}
            position={position}
            className="responsive-filter-dialog"
            onHide={() => setVisible(false)}
            footer={footerContent}
            draggable={false}
            resizable={false}
          >
            {!loading && !error && displayedProducts.length > 0 ? (
              <ProductFilter value={value} setValue={setValue} />
            ) : (
              <p className="text-center text-sm text-gray-500">
                No filter options available.
              </p>
            )}
          </Dialog>
        </div>
        <div className="products-result">
          <p>
            Showing{" "}
            {Math.min((currentPage - 1) * productsPerPage + 1, totalProducts)} -{" "}
            {Math.min(currentPage * productsPerPage, totalProducts)}
            <span className="text-muted"> out of {totalProducts} Products</span>
          </p>
          <div className="product-sort-by">
            Sort by:
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="new">New Arrivals</option>
              <option value="old">Old Arrivals</option>
            </select>
          </div>
        </div>
        <div className="all-products">
          {!loading && !error && displayedProducts.length > 0 && (
            <div className="filter-aside">
              <ProductFilter value={value} setValue={setValue} />
            </div>
          )}
          <div
            className={`all-products-list ${
              !loading && !error && displayedProducts.length === 0
                ? "no-rv-section"
                : ""
            }`}
          >
            {loading && <Loader />}
            {error && <p>{error}</p>}

            {!loading && !error && displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))
            ) : (
              <div className="no-products">
                <div className="no-rv-title">
                  <p className="text-center text-lg font-medium text-gray-500 mb-4">
                    No RV's at the moment, Check other options.
                  </p>
                </div>
                <div className="suggested-products">
                  <div className="heading">
                    <h2>Suggested RV'<span className="small-case">s</span></h2>
                    <span className="divider"></span>
                  </div>

                  <div className="suggested-products-grid">
                    {products
                      .filter(
                        (product) =>
                          product.vehicle_type?.toLowerCase() !==
                          selectedVehicleType
                      )
                      .slice(0, 4) // Show top 6 suggestions
                      .map((product) => (
                        <ProductItem key={product.id} product={product} />
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {!loading && !error && displayedProducts.length > 0 && (
          <div className="pagination-controls">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <IoChevronBack />
            </button>
            <span>{currentPage}</span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <IoChevronForward />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
