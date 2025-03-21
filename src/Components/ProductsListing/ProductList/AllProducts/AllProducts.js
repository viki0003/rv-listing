import ProductItem from "../../../Home/PopularSales/ProductItem/ProductItem";
import ProductFilter from "../Filter/Filter";
import "./allproducts.css";
const AllProducts = () => {
  return (
    <div className="all-products-ui">
      <div className="container">
        <div className="products-result">
          <p>
            Showing 1 - 20
            <span className="text-muted"> out of 2,356 Products</span>
          </p>
          <div className="product-sort-by">
            Sort by:
            <select>
              <option>New Arrivals</option>
              <option>Old Arrivals</option>
            </select>
          </div>
        </div>
        <div className="all-products">
          <div className="filter-aside">
            <ProductFilter />
          </div>
          <div className="all-products-list">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllProducts;
