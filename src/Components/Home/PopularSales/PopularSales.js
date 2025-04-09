import "./popularsales.css";
import ProductItem from "./ProductItem/ProductItem";
import Loader from "../../Loader";
import { useProducts } from "../../../ApiContext/ProductApi";

const PopularSales = () => {
  const { products, loading, error } = useProducts();

  return (
    <div className="popular-sales-ui">
      <div className="container">
        <div className="heading">
          <h2>Featured Inventory</h2>
          <span className="divider"></span>
        </div>
        <div className="rv-product-list">
          {loading && <Loader />}
          {error && <p>{error}</p>}
          {!loading && !error && products.length > 0 ? (
            products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          ) : (
            !loading && !error && <p>No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularSales;
