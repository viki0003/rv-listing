import React, { useState, useRef } from "react";
import { Carousel } from "primereact/carousel";
import RVImage from "../../../Assets/Images/Home/rv-image.png";
import "./imagecontainer.css";

const ImageContainer = ({ product }) => {
  const images = product?.rv_pics && product.rv_pics.length > 0 ? product.rv_pics : [RVImage];
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailsRef = useRef(null);

  if (!product) return <p>No vehicle details available.</p>;

  const scrollThumbnails = (direction) => {
    if (thumbnailsRef.current) {
      const scrollAmount = 200;
      thumbnailsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const imageTemplate = (image) => (
    <div className="image-wrapper">
      <img src={image} alt="Product" className="carousel-image" />
    </div>
  );

  const showNavigationButtons = images.length > 3;

  return (
    <div className="gallery-container">
      <Carousel
        value={images}
        numVisible={1}
        numScroll={1}
        itemTemplate={imageTemplate}
        showIndicators={false}
        showNavigators={true}
        circular={false}
        page={activeIndex}
        onPageChange={(e) => setActiveIndex(e.page)}
      />
      <div className="thumbnails-container">
        {showNavigationButtons && (
          <button 
            className="thumbnail-nav-btn prev-btn"
            onClick={() => scrollThumbnails('left')}
            aria-label="Previous thumbnails"
          >
            &#10094;
          </button>
        )}
        <div className="thumbnails" ref={thumbnailsRef}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className={`thumbnail ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        {showNavigationButtons && (
          <button 
            className="thumbnail-nav-btn next-btn"
            onClick={() => scrollThumbnails('right')}
            aria-label="Next thumbnails"
          >
            &#10095;
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageContainer;
