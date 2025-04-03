import React from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../../ApiContext/ProductApi";
import ProductItem from "../../../Components/Home/PopularSales/ProductItem/ProductItem";

const SearchPage = () => {
    const { products } = useProducts();
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q")?.toLowerCase() || "";
  
    const filteredProducts = products.filter((product) =>
      Object.values(product).some(
        (value) =>
          typeof value === "string" && value.toLowerCase().includes(query)
      )
    );

    return (
        <div className="search-page-container">
            <div className="container">
                <div className="heading">
                    <h2>Search Results for "{query}"</h2>
                    <span className="divider"></span>
                </div>

                {filteredProducts.length > 0 ? (
                    <div className="rv-product-list">
                        {filteredProducts.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
