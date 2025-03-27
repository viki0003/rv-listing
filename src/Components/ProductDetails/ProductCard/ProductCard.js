import React from "react";
import "./productcard.css";
import ImageContainer from "../ImageContainer/ImageContainer";

const ProductCard = () => {
  return (
    <>
      <div className="product-card-container">
        <div className="product-card-image">
          <ImageContainer />
        </div>
        <div className="product-details-container">
          <div className="pricing">
            <div>
              <span className="price">$15.50</span>
              <span className="original-price">$31.00</span>
              <span className="discount">-50%</span>
            </div>
            <div>
              <span className="reviews">
                12 reviews <span className="stars">★★★★☆</span>
              </span>
            </div>
          </div>
          <p className="cta-text">Do the Math & Save call today! (951)634-8124</p>

          <div className="buttons">
            <button className="primary">Get Today’s Price</button>
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
    </>
  );
};

export default ProductCard;
