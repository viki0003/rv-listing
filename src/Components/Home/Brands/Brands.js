import { useEffect, useState } from "react";
import imageCompression from "browser-image-compression";
import "./brands.css";

// Import PNG Images
import B1 from "../../../Assets/Images/Home/Brands/chanel.png";
import B2 from "../../../Assets/Images/Home/Brands/dior.png";
import B3 from "../../../Assets/Images/Home/Brands/d-g.png";
import B4 from "../../../Assets/Images/Home/Brands/gucci.png";
import B6 from "../../../Assets/Images/Home/Brands/versace.png";

// Function to convert image to WebP
const convertToWebP = async (imageSrc) => {
  try {
    const response = await fetch(imageSrc);
    const blob = await response.blob();
    const file = new File([blob], "image.png", { type: blob.type });

    const options = {
      maxSizeMB: 1, // Adjust the max size as needed
      maxWidthOrHeight: 800, // Resize for better performance
      fileType: "image/webp", // Convert to WebP
    };

    const compressedFile = await imageCompression(file, options);
    return URL.createObjectURL(compressedFile);
  } catch (error) {
    console.error("Error converting image to WebP:", error);
    return imageSrc; // Return original image if conversion fails
  }
};

const Brands = () => {
  const [webpImages, setWebpImages] = useState([B1, B2, B3, B4, B6]);

  useEffect(() => {
    const processImages = async () => {
      const convertedImages = await Promise.all([
        convertToWebP(B1),
        convertToWebP(B2),
        convertToWebP(B3),
        convertToWebP(B4),
        convertToWebP(B6),
      ]);
      setWebpImages(convertedImages);
    };

    processImages();
  }, []);

  return (
    <>
      <div className="brands">
        <div className="container">
          <div className="heading">
            <h2>Brands For You</h2>
            <span className="divider"></span>
          </div>
          <div className="brands-list">
            {webpImages.map((src, index) => (
              <img key={index} src={src} alt="brand" />
            ))}
          </div>
        </div>
      </div>      
    </>
  );
};

export default Brands;
