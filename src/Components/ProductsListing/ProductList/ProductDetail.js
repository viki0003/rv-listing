import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RVImage from "../../../Assets/Images/Products/category-banner.png";
import Loader from "../../Loader";

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://rvlistingbackend.campingx.net/main/get_contact_details`, // ✅ API does NOT take ID in the URL
          {
            headers: {
              Authorization: `Bearer 9r3j@92rjierh@jhh#e992QW`,
              "Content-Type": "application/json",
            },
          }
        );

        // ✅ Fix: Response contains a `data` array, so find the correct product by ID
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

  if (loading) return <Loader/>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="product-detail-container">
      <h1>
        {product.first_name} {product.last_name}
      </h1>
      <img src={product.rv_pics?.[0] || RVImage} alt="RV" className="product-image" />
      <p>Email: {product.email || "N/A"}</p>
    </div>
  );
};

export default ProductDetail;
