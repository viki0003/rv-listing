import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import RVImage from "../../../Assets/Images/Home/rv-image.png";
import "./imagecontainer.css";

const ImageContainer = ({ product }) => {
  // ✅ Ensure hooks are always called at the top
  const images = product?.rv_pics && product.rv_pics.length > 0 ? product.rv_pics : [RVImage];
  const [activeIndex, setActiveIndex] = useState(0);

  // If product is null, show message but keep hooks defined above
  if (!product) return <p>No vehicle details available.</p>;

  // Template for rendering images inside the carousel
  const imageTemplate = (image) => (
    <div className="image-wrapper">
      <img src={image} alt="Product" className="carousel-image" />
    </div>
  );

  return (
    <div className="gallery-container">
      {/* Main Image Slider */}
      <Carousel
        value={images}
        numVisible={1}
        numScroll={1}
        itemTemplate={imageTemplate}
        showIndicators={false}
        showNavigators={true}
        circular={false}
        
        page={activeIndex} // ✅ Use `page` prop to control active image
        onPageChange={(e) => setActiveIndex(e.page)}
      />

      {/* Thumbnail Images */}
      <div className="thumbnails">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className={`thumbnail ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)} // ✅ Update carousel index on click
          />
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;
