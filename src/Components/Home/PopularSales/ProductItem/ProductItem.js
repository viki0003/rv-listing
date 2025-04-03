import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imageCompression from "browser-image-compression";
import FloorPlanIcon from "../../../../Assets/Icons/FloorPlanIcon";
import PlaceholderImage from "../../../../Assets/Images/Home/placeholder.jpg"
import "./productitem.css";

// Function to convert an image to WebP
const convertToWebP = async (imageSrc) => {
  try {
    const response = await fetch(imageSrc);
    const blob = await response.blob();
    const file = new File([blob], "image.png", { type: blob.type });

    const options = {
      maxSizeMB: 1, 
      maxWidthOrHeight: 800, 
      fileType: "image/webp",
    };

    const compressedFile = await imageCompression(file, options);
    return URL.createObjectURL(compressedFile);
  } catch (error) {
    console.error("Error converting image to WebP:", error);
    return imageSrc; 
  }
};

const ProductItem = ({ product }) => {
  const [webpImage, setWebpImage] = useState(PlaceholderImage);

  useEffect(() => {
    const imageSrc = product.rv_pics && product.rv_pics.length > 0 ? product.rv_pics[0] : PlaceholderImage;

    const processImage = async () => {
      const convertedImage = await convertToWebP(imageSrc);
      setWebpImage(convertedImage);
    };

    processImage();
  }, [product.rv_pics]);

  return (
    <Link to={`/product/${product.id}`} className="rv-product-item">
      <div className="rv-product-image">
        <img src={webpImage} alt="RV" />
      </div>
      <div className="rv-product-content">
        <span className="stock-id">Stock #{product.stock_number || "N/A"}</span>
        <p className="product-text">
          {product.vehicle_year} {product.make}
        </p>
        <p className="product-text">{product.trim_model}</p>
        <div className="rv-product-price">
          <p>{product.sale_price ? `$${product.sale_price}` : "Call for Price"}</p>
          {product.retail_price && <span>${product.retail_price}</span>}
        </div>
        <div className="rv-product-specs">
          <div className="rv-spec-item">
            <p>Length(ft)</p>
            <span>{product.vehicle_type_length || "N/A"}</span>
          </div>
          <div className="rv-spec-item">
            <p>Sleeps</p>
            <span>{product.sleeps || "N/A"}</span>
          </div>
          <div className="rv-spec-item">
            <p>Weight(lbs)</p>
            <span>{product.weight || "N/A"}</span>
          </div>
          <div className="rv-spec-item floor-plan-spec">
            <p>View Floor Plan</p>
            <span>
              <FloorPlanIcon />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
