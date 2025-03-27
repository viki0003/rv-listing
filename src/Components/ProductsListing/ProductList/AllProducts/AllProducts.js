import { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "../../../Home/PopularSales/ProductItem/ProductItem";
import ProductFilter from "../Filter/Filter";
import "./allproducts.css";
const AllProducts = () => {
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
    <div className="all-products-ui">
      <div className="container">
        <div className="products-result">
          <p>
            Showing 1 - 20
            <span className="text-muted"> out of 2,356 Products</span>
          </p>
          <div className="product-sort-by">
            Sort by:
            <select>
              <option>New Arrivals</option>
              <option>Old Arrivals</option>
            </select>
          </div>
        </div>
        <div className="all-products">
          <div className="filter-aside">
            <ProductFilter />
          </div>
          <div className="all-products-list">
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
    </div>
  );
};
export default AllProducts;
