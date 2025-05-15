import React from "react";
import { Dialog } from "primereact/dialog";
import TPForm from "../../TPForm/TPForm";
import "./productcard.css";
import ImageContainer from "../ImageContainer/ImageContainer";
import ResponsivePDCard from "./ResponsivePDCard/ResponsivePDCard";
import { Link } from "react-router";
import { useElementSettings } from "../../../ApiContext/ElementSettingsContext";

const ProductCard = ({ product }) => {
  const [visible, setVisible] = React.useState(false);
  const { settings, error } = useElementSettings();
  if (error) return <p>{error}</p>;
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
              {settings?.show_price_feature && (
                <span className="discount">-50%</span>
              )}
            </div>
            <div>
              <span className="reviews">
                12 reviews <span className="stars">★★★★☆</span>
              </span>
            </div>
          </div>
          <p className="cta-text">
            Do the Math & Save call today!{" "}
            <Link to={`tel:${product.phone}`}>{product.phone}</Link>
          </p>

          {/* <div className="buttons">
            <Button
              label="Get Today's Price"
              className="primary"
             
            />

            <button className="secondary">Value My Trade</button>
          </div> */}
          <button className="info" onClick={() => setVisible(true)}>
            Request More Info
          </button>
          {settings?.pre_approved && (
            <button className="pre-approved">Get Pre-Approved!</button>
          )}

          <p className="description">
          {product.vehicle_description
                  ? `${product?.vehicle_description}`
                  : "No Description Available"}
            
          </p>
          {/* <ul className="features">
            <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul> */}
        </div>
      </div>
      <Dialog
        className="price-form-ui"
        visible={visible}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <TPForm />
      </Dialog>
      <div className="responsive-vehicle-info">
        <ResponsivePDCard />
      </div>
    </div>
  );
};

export default ProductCard;
