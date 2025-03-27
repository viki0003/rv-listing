import { useEffect, useState } from "react";
import axios from "axios";
import "./popularsales.css";
import ProductItem from "./ProductItem/ProductItem";
const PopularSales = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://rvlistingbackend.campingx.net/main/get_contact_details",
          {
            headers: {
              Authorization: "Bearer 9r3j@92rjierh@jhh#e992QW",
            },
          }
        );
    
        console.log("API Response:", response.data); // Log the response
    
        // Extract the actual array
        setProducts(response.data.data || []); 
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="popular-sales-ui">
      <div className="container">
        <div className="heading">
          <h2>Popular sales</h2>
          <span className="divider"></span>
        </div>
        <div className="rv-product-list">
          {loading && <p>Loading products...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && products.length > 0 ? (
            products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          ) : (
            !loading && !error && <p>No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default PopularSales;
