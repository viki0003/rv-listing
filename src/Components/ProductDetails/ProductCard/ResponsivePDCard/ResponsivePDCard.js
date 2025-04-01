import React, { useState } from "react";
import "./responsivepdcard.css";

const ResponsivePDCard = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="responsive-product-card">
      <h2 className="responsive-title">
        Echo Dot (5th Gen, 2022 release) | With bigger vibrant sound
      </h2>
      <div className="responsive-pricing-container">
      <p className="responsive-price">$34.08</p>
      <div className="responsive-rating">
        <span className="responsive-star">⭐</span>
        <span>4.3 (16 Reviews)</span>
      </div>
      </div>
      <h3 className="responsive-details-heading">Product Details</h3>
      <div className="responsive-description-container">
      <p className={`responsive-description ${expanded ? "responsive-expanded" : ""}`}>
        Lorem ipsum dolor sit amet consectetur. Arcu donec vitae ipsum facilisi
        mauris non et. Lorem ipsum dolor sit amet consectetur. Arcu donec...
      </p>
      <span className="responsive-read-more" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Read less" : "Read more"}
      </span>
      </div>
      
    </div>
  );
};

export default ResponsivePDCard;