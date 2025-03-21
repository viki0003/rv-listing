import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductOne from "../../../Assets/Images/Product/rv-product1.png"
import "./imagecontainer.css";

const images = [
  ProductOne,
  ProductOne,
  ProductOne,
  ProductOne,
  ProductOne
];

export default function ImageContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="gallery-container">
      <div className="image-wrapper">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="main-image"
        />
        <button className="nav-button left" onClick={prevImage}>
          <ChevronLeft size={24} />
        </button>
        <button className="nav-button right" onClick={nextImage}>
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
