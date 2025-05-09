import "./popularsales.css";
import ProductItem from "./ProductItem/ProductItem";
import { useProducts } from "../../../ApiContext/ProductApi";
import { Link } from "react-router";
import ItemLoader from "../../ItemLoader";

const PopularSales = () => {
  const { products, loading, error } = useProducts();

  return (
    <div className="popular-sales-ui">
      <div className="container">
        <div className="heading">
          <h2>Featured Inventory</h2>
          <span className="divider"></span>
        </div>
        {loading && (
          <div className="loader">
            <ItemLoader />
          </div>
        )}
        <div className="rv-product-list">
          {error && <p>{error}</p>}
          {!loading && !error && products.length > 0
            ? products
                .slice(0, 8)
                .map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))
            : !loading && !error && <p>No products available.</p>}
        </div>
        <div className="view-all-rv">
          <Link to="/products">View All RV's</Link>
        </div>
      </div>
    </div>
  );
};

export default PopularSales;
