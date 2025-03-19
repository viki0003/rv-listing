import "./popularsales.css";
import ProductItem from "./ProductItem/ProductItem";
const PopularSales = () => {
  return (
    <div className="popular-sales-ui">
      <div className="container">
        <div className="heading">
          <h2>Popular sales</h2>
          <span className="divider"></span>
        </div>
        <div className="rv-product-list">
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
        </div>
      </div>
    </div>
  );
};
export default PopularSales;
