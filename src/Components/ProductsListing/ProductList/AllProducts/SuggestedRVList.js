import React from "react";
import { useSuggestedRV } from "../../../../ApiContext/SuggestedRVContext"; // adjust import path as needed
import ProductItem from "../../../../Components/Home/PopularSales/ProductItem/ProductItem";

const SuggestedRVList = () => {
  const { suggestedRVs, loading, error } = useSuggestedRV();

  if (loading) return <p>Loading suggested RVs...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!suggestedRVs.length)
    return <p>No suggested RVs found for this vehicle type.</p>;

  return (
    <div className="suggested-rv-list all-products-list ">
    {suggestedRVs.map((rv) => (
      <ProductItem key={rv.id} product={rv} />
    ))}
  </div>
  );
};

export default SuggestedRVList;
