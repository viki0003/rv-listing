import './PDBanner.css';
import { useNavigate } from "react-router-dom";
const PDBanner = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="pd-banner">
      <div className="pl-banner pd">
        <div className="container">
          <div className="pl-bg">
            <div className="pl-bg-content">
              <h2>{product.vehicle_year}</h2>
              <p>
                {product.make}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="responsive-header-pd">
      
        <div className="pd-responsive-header">
        <span className="pd-responsive-back-arrow" onClick={() => navigate(-1)}>&#x276E;</span>
          <span>Product Details</span>
        </div>
      </div>
    </div>
  );
};
export default PDBanner;
