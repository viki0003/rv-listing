import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import React from "react";
import ProductCard from "../../Components/ProductDetails/ProductCard/ProductCard";
import VehicleInfo from "../../Components/ProductDetails/VehicleInfo/VehicleInfo";
import PDBanner from "../../Components/ProductDetails/PDBanner/PDBanner";

import ItemLoader from "../../Components/ItemLoader";

const PDP = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://rvlistingbackend.campingx.net/main/get_contact_details`,
          {
            headers: {
              Authorization: `Bearer 9r3j@92rjierh@jhh#e992QW`,
              "Content-Type": "application/json",
            },
          }
        );

        console.log("API Response:", response.data); // Debugging

        // ✅ Find the correct product from the API response
        const productData = response.data.data.find((item) => item.id === id);

        if (productData) {
          setProduct(productData);
        } else {
          setError("Product not found.");
        }
      } catch (err) {
        setError("Failed to fetch product details.");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) return <span className="loader-class"><ItemLoader/></span>;
  if (error) return <p className="error">{error}</p>;

  return (
    <>
      {product ? (
        <>
          <PDBanner product={product} />
          <ProductCard product={product} />
          <VehicleInfo product={product} />
        </>
      ) : (
        <p>No products available.</p>
      )}
    </>
  );
};

export default PDP;
