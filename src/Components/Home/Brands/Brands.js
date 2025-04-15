import { useEffect, useState, useRef } from "react";
import imageCompression from "browser-image-compression";
import { useBrandImages } from "../../../ApiContext/BrandImagesContext";
import "./brands.css";

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

const Brands = () => {
  const { brandImages, error } = useBrandImages();
  const [webpImages, setWebpImages] = useState([]);
  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  // Convert to WebP and set images
  useEffect(() => {
    const processImages = async () => {
      if (brandImages && brandImages.length > 0) {
        const converted = await Promise.all(
          brandImages.map((img) => convertToWebP(img.file))
        );
        setWebpImages(converted);
      }
    };

    processImages();
  }, [brandImages]);

  // Setup sliding
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || webpImages.length === 0) return;

    const checkOverflow = () => {
      const isContentOverflowing = container.scrollWidth > container.clientWidth;
      setIsOverflowing(isContentOverflowing);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, [webpImages]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isOverflowing) return;

    const scrollStep = 1;
    const scrollSpeed = 20;

    scrollIntervalRef.current = setInterval(() => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollStep;
      }
    }, scrollSpeed);

    return () => {
      clearInterval(scrollIntervalRef.current);
    };
  }, [isOverflowing]);

  if (error) return <p>{error}</p>;

  return (
    <div className="brands">
      <div className="container">
        <div className="heading">
          <h2>Brands For You</h2>
          <span className="divider"></span>
        </div>
        <div
          className={`brands-list ${isOverflowing ? "scrolling" : ""}`}
          ref={scrollContainerRef}
        >
          {webpImages.map((src, index) => (
            <img key={index} src={src} alt={`brand-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
