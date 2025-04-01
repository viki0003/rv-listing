import { useEffect, useState } from "react";

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import axios from "axios";
import ProductItem from "../../../Home/PopularSales/ProductItem/ProductItem";
import ProductFilter from "../Filter/Filter";
import { useNavigate } from "react-router-dom";
import FilterIcon from "../../../../Assets/Icons/FilterIcon";
import "./allproducts.css";
import CategoryFilter from "../../CategoryFilter/CategoryFilter";
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState('center');
  const [value, setValue] = useState([0, 70]); // Store length range

  const handleReset = () =>{
    setVisible(false);
    setValue([0, 70]);
  }

  const footerContent = (
    <div className="vic-buttons filter-buttons">
      <Button label="Reset" icon="pi pi-times" onClick={() => handleReset()} className="vic-pre-approved" />
      <Button label="Apply" icon="pi pi-check" onClick={() => setVisible(false)} className="vic-info" autoFocus />
    </div>
  );

  const show = (position) => {
    setPosition(position);
    setVisible(true);
  };
  // Add error state

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
        const updatedProducts = (response.data.data || []).map(product => ({
          ...product,
          vehicle_length: Number((Math.random() * (70 - 20) + 20).toFixed(2)) // Random length between 20 to 70 feet
        }));
        // Extract the actual array
        setProducts(updatedProducts);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  console.log(products);
  const filteredProducts = products.filter(
    (product) =>
      product.vehicle_length >= value[0] && product.vehicle_length <= value[1]
  );
  return (
    <div className="all-products-ui">
      <div className="container">
        <div class="responsive-pd-header">
          <span class="responsive-pd-back-arrow" onClick={() => navigate(-1)}>❮</span>
          <span class="responsive-pd-title">Travel Trailer</span>
          <FilterIcon onClick={() => show('bottom')} />
          <Dialog visible={visible} position={position} className="responsive-filter-dialog" onHide={() => { if (!visible) return; setVisible(false); }} footer={footerContent} draggable={false} resizable={false}>
            <ProductFilter value={value} setValue={setValue} />
          </Dialog>
        </div>
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
            <ProductFilter value={value} setValue={setValue}/>
          </div>
          <div className="all-products-list">
            {loading && <p>Loading products...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
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
