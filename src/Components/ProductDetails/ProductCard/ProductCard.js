import React from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import TPForm from "../../TPForm/TPForm";
import "./productcard.css";
import ImageContainer from "../ImageContainer/ImageContainer";
import ResponsivePDCard from "./ResponsivePDCard/ResponsivePDCard";

const ProductCard = ({ product }) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="product-card-container">
      <div className="container">
        <div className="product-card-image">
          <ImageContainer product={product} />
        </div>
        <div className="product-details-container">
          <div className="pricing">
            <div>
              <span className="price">
                {product.sale_price
                  ? `$${product.sale_price}`
                  : "Call for Price"}
              </span>
              <span className="original-price">$31.00</span>
              <span className="discount">-50%</span>
            </div>
            <div>
              <span className="reviews">
                12 reviews <span className="stars">★★★★☆</span>
              </span>
            </div>
          </div>
          <p className="cta-text">
            Do the Math & Save call today! (951)634-8124
          </p>

          <div className="buttons">
            <Button label="Get Today's Price" className="primary" onClick={() => setVisible(true)} />
                        <Dialog  visible={visible}  onHide={() => {if (!visible) return; setVisible(false); }}>
                            <TPForm/>
                        </Dialog>
            <button className="secondary">Value My Trade</button>
          </div>
          <button className="info">Request More Info</button>
          <button className="pre-approved">Get Pre-Approved!</button>

          <p className="description">
            Lorem ipsum dolor sit amet consectetur. Mattis sed amet dolor a
            praesent...
          </p>
          <ul className="features">
            <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
      </div>
      <div className="responsive-vehicle-info">
      <ResponsivePDCard/>
      </div>
      
    </div>
  );
};

export default ProductCard;
