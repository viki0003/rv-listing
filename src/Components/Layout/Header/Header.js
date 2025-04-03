import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../../../ApiContext/ProductApi";
import Logo from "../../../Assets/Images/Home/RVLogo.png";
import "./header.css";
import SearchIcon from "../../../Assets/Icons/SearchIcon";

const Header = () => {
  const { products } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  // Filter products based on user input
  const searchProducts = (event) => {
    let query = event.query.toLowerCase();
    let filtered = products.filter((product) =>
      Object.values(product).some(
        (value) =>
          typeof value === "string" && value.toLowerCase().includes(query)
      )
    );
    setFilteredProducts(filtered);
  };

  // Handle product selection from suggestions
  const onProductSelect = (selectedProduct) => {
    setSearchTerm(selectedProduct.make);
    navigate(`/search?q=${selectedProduct.make}`);
  };

  // Handle search on Enter key
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate(`/search?q=${searchTerm}`);
    }
  };

  return (
    <header className="home-header">
      <div className="container">
        <a href="/">
          <img src={Logo} alt="Logo" width={100} />
        </a>
        <div className="header-search-bar">
          <SearchIcon/>
          <AutoComplete
            value={searchTerm}
            suggestions={filteredProducts}
            completeMethod={searchProducts}
            field="make"
            onChange={(e) => setSearchTerm(e.value)}
            onSelect={(e) => onProductSelect(e.value)}
            placeholder="Search for an item"
            className="header-search-input"
            onKeyDown={handleKeyPress}
          />
        </div>
        <nav>
            <ul className="nav-list">
              <li>
                <Link to="/products">Shop By Category</Link>
              </li>
              {/* <li>
                <Link to="#">Deals & Services</Link>
              </li>
              <li>
                <Link to="#">Find A Store</Link>
              </li> */}
            </ul>
          </nav>
      </div>
    </header>
  );
};

export default Header;
