import { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useNavigate, useLocation } from "react-router-dom";
import ProductItem from "../../../Home/PopularSales/ProductItem/ProductItem";
import ProductFilter from "../Filter/Filter";
import FilterIcon from "../../../../Assets/Icons/FilterIcon";
import NoImgAvtar from "../../../../Assets/Images/Products/no-product-img.png";
import "./allproducts.css";
import Loader from "../../../Loader";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useProducts } from "../../../../ApiContext/ProductApi";
import { useSuggestedRV } from "../../../../ApiContext/SuggestedRVContext";
import SuggestedRVList from "./SuggestedRVList";
import SearchBar from "../../../Home/SearchBar/SearchBar";

const AllProducts = () => {
  const { products, loading, error } = useProducts();
  const { suggestedRV } = useSuggestedRV();
  const [loadings, setLoadingS] = useState(true);

  const [sortOrder, setSortOrder] = useState("new");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState("center");
  const [value, setValue] = useState([0, 70]);
  const [filters, setFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedVehicleType = searchParams.get("vehicle_type")?.toLowerCase();

  useEffect(() => {
    if (products || suggestedRV) {
      setLoadingS(false);
    }
  }, [products, suggestedRV]);

  // Reset filters if vehicle_type is removed from URL
  // useEffect(() => {
  //   if (!selectedVehicleType) {
  //     setFilters({});
  //     setValue([0, 70]);
  //   }
  // }, [selectedVehicleType]);

  // Optional: Reset filters when user searches with no vehicle_type
  useEffect(() => {
    if (!selectedVehicleType && searchTerm) {
      setFilters({});
      setValue([0, 70]);
    }
  }, [searchTerm, selectedVehicleType]);

  const handleReset = () => {
    setVisible(false);
    setValue([0, 70]);
    setFilters({});
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
    if (!product) return false;

    const isInLengthRange =
      product.vehicle_length >= value[0] && product.vehicle_length <= value[1];

    const matchesVehicleType = selectedVehicleType
      ? product.vehicle_type?.toLowerCase() === selectedVehicleType
      : true;

    const matchesFilters = Object.entries(filters).every(
      ([key, selectedValues]) => {
        if (!selectedValues || selectedValues.length === 0) return true;
        return selectedValues.includes(product[key]);
      }
    );

    const searchMatch = () => {
      if (!searchTerm) return true;
      const query = searchTerm.toLowerCase();
      const combined = `${product.vehicle_year || ""} ${product.make || ""} ${
        product.trim_model || ""
      }`.toLowerCase();

      const matchesCombined = combined.includes(query);
      const matchesAnyField = Object.values(product).some(
        (value) =>
          typeof value === "string" && value.toLowerCase().includes(query)
      );

      return matchesCombined || matchesAnyField;
    };

    return (
      isInLengthRange && matchesVehicleType && matchesFilters && searchMatch()
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    return sortOrder === "new"
      ? b.vehicle_year - a.vehicle_year
      : a.vehicle_year - b.vehicle_year;
  });

  const totalProducts = sortedProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const displayedProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleScroll = () => {
    const element = document.getElementById("suggestedRv");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (loadings) return <p>Loading..</p>;
  if (error) return <div className="error-message">{error}</div>;

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
              <ProductFilter
                value={value}
                setValue={setValue}
                products={products}
                filters={filters}
                setFilters={setFilters}
              />
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
          <div className="filter-aside">
            <div>
              {selectedVehicleType && (
                <div className="selected-type-label">
                  <span className="type-name">
                    {selectedVehicleType.replace(/-/g, " ")}
                  </span>
                  <button
                    className="close-btn"
                    onClick={() => {
                      const params = new URLSearchParams(location.search);
                      params.delete("vehicle_type");
                      navigate(`/products?${params.toString()}`);
                    }}
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              products={products}
            />
            <ProductFilter
              value={value}
              setValue={setValue}
              products={products}
              filters={filters}
              setFilters={setFilters}
            />
          </div>
          <div>
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
              ) : !loading && !error ? (
                <div className="no-products">
                  <div className="no-rv-title">
                    <div className="no-rv-cnt">
                      <h5>No Rv‘s that meet this criteria at the moment</h5>
                      <p className="np-para">
                        The selected Rv is not available at the moment, but we
                        have more options for you -{" "}
                        <span onClick={handleScroll}>Check other options</span>
                      </p>
                    </div>
                    <div className="no-product-img">
                      <img src={NoImgAvtar} alt="NoImg" />
                    </div>
                  </div>

                  <div className="suggested-products">
                    <div className="heading" id="suggestedRv">
                      <h2>
                        Suggested RV'<span className="small-case">s</span>
                      </h2>
                      <span className="divider"></span>
                    </div>
                    <SuggestedRVList />
                  </div>
                </div>
              ) : null}
            </div>

            {!loading && !error && totalProducts > 0 && (
              <div className="pagination-container">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className={`pagination-arrow ${
                    currentPage === 1 ? "disabled" : ""
                  }`}
                >
                  <IoChevronBack />
                </button>

                {Array.from({ length: totalPages }, (_, index) => index + 1)
                  .filter((page) => {
                    return (
                      page === 1 ||
                      page === totalPages ||
                      Math.abs(page - currentPage) <= 1
                    );
                  })
                  .reduce((acc, page, idx, arr) => {
                    if (idx > 0 && page - arr[idx - 1] > 1) {
                      acc.push("dots");
                    }
                    acc.push(page);
                    return acc;
                  }, [])
                  .map((item, index) =>
                    item === "dots" ? (
                      <span key={`dots-${index}`} className="pagination-dots">
                        ...
                      </span>
                    ) : (
                      <button
                        key={item}
                        onClick={() => setCurrentPage(item)}
                        className={`pagination-number ${
                          currentPage === item ? "active" : ""
                        }`}
                      >
                        {item}
                      </button>
                    )
                  )}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className={`pagination-arrow ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <IoChevronForward />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
