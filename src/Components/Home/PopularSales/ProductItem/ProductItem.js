import { Link } from "react-router";
import FloorPlanIcon from "../../../../Assets/Icons/FloorPlanIcon";
import RVImage from "../../../../Assets/Images/Home/rv-image.png";
import "./productitem.css";

const ProductItem = ({ product }) => {
  const imageSrc = product.rv_pics && product.rv_pics.length > 0 ? product.rv_pics[0] : RVImage;
  return (
    <Link to={`/product/${product.id}`} className="rv-product-item">
      <div className="rv-product-image">
      <img src={imageSrc} alt="RV" />
      </div>
      <div className="rv-product-content">
        <span className="stock-id">Stock #{product.stock_number || "N/A"}</span>
        <p className="product-text">
          {product.vehicle_year} {product.make}
        </p>
        <p className="product-text">{product.trim_model}</p>
        <div className="rv-product-price">
          <p>{product.sale_price ? `$${product.sale_price}` : "Call for Price"}</p>
          {product.retail_price && <span>${product.retail_price}</span>}
        </div>
        <div className="rv-product-specs">
          <div className="rv-spec-item">
            <p>Length(ft)</p>
            <span>{product.vehicle_type_length || "N/A"}</span>
          </div>
          <div className="rv-spec-item">
            <p>Sleeps</p>
            <span>{product.sleeps || "N/A"}</span>
          </div>
          <div className="rv-spec-item">
            <p>Weight(lbs)</p>
            <span>{product.weight || "N/A"}</span>
          </div>
          <div className="rv-spec-item floor-plan-spec">
            <p>View Floor Plan</p>
            <span>
              <FloorPlanIcon />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;