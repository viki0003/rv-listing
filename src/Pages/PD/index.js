import { useParams } from "react-router-dom";
import React from "react";
import ProductCard from "../../Components/ProductDetails/ProductCard/ProductCard";
import VehicleInfo from "../../Components/ProductDetails/VehicleInfo/VehicleInfo";
import PDBanner from "../../Components/ProductDetails/PDBanner/PDBanner";
import ItemLoader from "../../Components/ItemLoader";
import { useProducts } from "../../ApiContext/ProductApi"; // Import context

const PDP = () => {
  const { id } = useParams(); // Get product ID from URL
  const { products, loading, error } = useProducts(); // Fetch products from context

  // Find the product by ID
  const product = products.find((item) => item.id === id);

  if (loading) return <span className="loader-className"><ItemLoader/></span>;
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
        <p>No product available.</p>
      )}
    </>
  );
};

export default PDP;
