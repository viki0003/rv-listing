
import B1 from "../../../Assets/Images/Home/Brands/chanel.png";
import B2 from "../../../Assets/Images/Home/Brands/dior.png";
import B3 from "../../../Assets/Images/Home/Brands/d-g.png";
import B4 from "../../../Assets/Images/Home/Brands/gucci.png";
import B5 from "../../../Assets/Images/Home/Brands/zara.png";
import B6 from "../../../Assets/Images/Home/Brands/versace.png";
import './responsivebrands.css';
const ResponsiveBrands = () => {
  return (
    <div className="responsive-brands">
      <div className="responsive-container">
        <div className="responsive-brands-list">
            <img src={B1} alt="brands"/>
            <img src={B3} alt="brands"/>
            <img src={B2} alt="brands"/>
            <img src={B6} alt="brands"/>
            <img src={B5} alt="brands"/>
            <img src={B4} alt="brands"/>
        </div>
      </div>
    </div>
  );
};
export default ResponsiveBrands;
