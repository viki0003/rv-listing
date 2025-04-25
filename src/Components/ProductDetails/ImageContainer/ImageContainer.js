import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import RVImage from "../../../Assets/Images/Home/rv-image.png";
import "./imagecontainer.css";

const ImageContainer = ({ product }) => {
  const images = product?.rv_pics && product.rv_pics.length > 0 ? product.rv_pics : [RVImage];
  const [activeIndex, setActiveIndex] = useState(0);
  if (!product) return <p>No vehicle details available.</p>;
  const imageTemplate = (image) => (
    <div className="image-wrapper">
      <img src={image} alt="Product" className="carousel-image" />
    </div>
  );

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
      <div className="thumbnails">
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
    </div>
  );
};

export default ImageContainer;
