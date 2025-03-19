import FloorPlanIcon from "../../../../Assets/Icons/FloorPlanIcon";
import RVImage from "../../../../Assets/Images/Home/rv-image.png";
import "./productitem.css";
const ProductItem = () => {
  return (
    <div className="rv-product-item">
      <div className="rv-product-image">
        <img src={RVImage} alt="RVImage" />
      </div>
      <div className="rv-product-content">
        <span className="stock-id">Stock #456723984</span>
        <p className="product-text">USED 2025 KEYSTONE</p>
        <p className="product-text">BULLET 250BHS</p>
        <div className="rv-product-price">
          <p>$120.23</p>
          <span>$120.23</span>
        </div>
        <div className="rv-product-specs">
          <div className="rv-spec-item">
            <p>Length(ft)</p>
            <span>29’5”</span>
          </div>
          <div className="rv-spec-item">
            <p>Sleeps</p>
            <span>8</span>
          </div>
          <div className="rv-spec-item">
            <p>Length(ft)</p>
            <span>Weight(lbs)</span>
          </div>
          <div className="rv-spec-item floor-plan-spec">
            <p>View Floor Plan</p>
            <span>
              <FloorPlanIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
