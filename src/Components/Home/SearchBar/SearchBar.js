import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import SearchIcon from "../../../Assets/Icons/SearchIcon";
import { IoClose } from "react-icons/io5";
import './searchbar.css';

const SearchBar = ({ searchTerm, setSearchTerm, products }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
  
    const searchProducts = (event) => {
      const query = event.query.toLowerCase();
    
      const filtered = products.filter((product) =>
        Object.entries(product).some(([key, value]) =>
          typeof value === "string" && value.toLowerCase().includes(query)
        )
      );
    
      const formatted = filtered.map((product) => ({
        ...product,
        displayLabel: `${product.stock_number || ""} ${product.vehicle_year || ""} ${product.make || ""} ${product.series || ""} ${product.trim_model || ""} ${product.vehicle_type || ""}`.trim()
      }));
    
      setFilteredProducts(formatted);
    };
  
    const handleReset = () => {
      setSearchTerm("");
      setFilteredProducts([]);
    };
  
    return (
      <div className="header-search-bar md">
        <div className="header-search-icon">
          <SearchIcon />
        </div>
  
        <AutoComplete
          value={searchTerm}
          suggestions={filteredProducts}
          completeMethod={searchProducts}
          field="displayLabel"
          onChange={(e) => setSearchTerm(e.value)}
          onSelect={(e) => setSearchTerm(e.value.displayLabel)}
          placeholder="Search RV's"
          className="header-search-input"
        />
        {searchTerm && (
          <button
            className="search-reset-btn"
            onClick={handleReset}
            aria-label="Reset search"
          >
            <IoClose size={20} />
          </button>
        )}
      </div>
    );
  };

export default SearchBar;
