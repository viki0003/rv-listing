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
      <svg className="responsive-star" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M12 23.25C6.06294 23.25 1.25 18.4371 1.25 12.5C1.25 6.56294 6.06294 1.75 12 1.75C17.9371 1.75 22.75 6.56294 22.75 12.5C22.75 18.4371 17.9371 23.25 12 23.25ZM12.6478 7.1221C12.5134 6.89168 12.2668 6.75 12 6.75C11.7333 6.75 11.4866 6.89168 11.3522 7.1221L9.76099 9.84985L6.81661 10.5924C6.55988 10.6572 6.35631 10.8525 6.281 11.1063C6.20568 11.3602 6.26979 11.6349 6.44966 11.8292L8.43203 13.9704L7.67799 17.336C7.61669 17.6096 7.71312 17.8946 7.92799 18.0747C8.14286 18.2549 8.44026 18.3001 8.69898 18.192L12 16.8128L15.3011 18.192C15.5598 18.3001 15.8572 18.2549 16.072 18.0747C16.2869 17.8946 16.3833 17.6096 16.322 17.336L15.568 13.9704L17.5504 11.8292C17.7302 11.6349 17.7943 11.3602 17.719 11.1063C17.6437 10.8525 17.4402 10.6572 17.1834 10.5924L14.239 9.84985L12.6478 7.1221Z" fill="#F6BC2F"/>
</svg>

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