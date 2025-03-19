import { Link } from "react-router";
import "./ctabanner.css";
import RightArrow from "../../../Assets/Icons/RightArrow";
const CTABanner = () => {
  return (
    <div className="CTABanner">
      <div className="container">
        <div className="cta-ui">
          <div className="cta-content">
            <h2>What are you waiting for ?</h2>
            <p>Grab the great deals now</p>
            <Link to="/products">
              Shop Now
              <span className="btn-icon">
                <RightArrow />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
