import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../../../ApiContext/ProductApi";
import Logo from "../../../Assets/Images/Home/RVLogo.png";
import "./header.css";
import SearchIcon from "../../../Assets/Icons/SearchIcon";
import { RxHamburgerMenu } from "react-icons/rx";
import { Dialog } from "primereact/dialog";
import SearchVisualIcon from "../../../Assets/Icons/SearchVisual";

const Header = () => {
  const { products } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visibleSell, setVisibleSell] = useState(false);
  const [position, setPosition] = useState("center");
  const navigate = useNavigate();

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

  const onProductSelect = (selectedProduct) => {
    setSearchTerm(selectedProduct.make);
    navigate(`/search?q=${selectedProduct.make}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate(`/search?q=${searchTerm}`);
    }
  };

  const show = (position) => {
    setPosition(position);
    setVisible(true);
  };

  return (
    <>
      <header className="home-header">
        <div className="container">
          <a href="/">
            <img src={Logo} alt="Logo" width={180} />
          </a>
          <div className="header-search-bar md">
            <div className="header-search-icon">
              <SearchIcon />
            </div>

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

          <div className="header-search-bar sm">
            <div className="header-search-icon">
              <SearchIcon />
            </div>

            <AutoComplete
              value={searchTerm}
              suggestions={filteredProducts}
              completeMethod={searchProducts}
              field="make"
              onChange={(e) => setSearchTerm(e.value)}
              onSelect={(e) => onProductSelect(e.value)}
              placeholder="Find your favorite items"
              className="header-search-input"
              onKeyDown={handleKeyPress}
            />
            <span className="header-search-icon-last">
              <SearchVisualIcon />
            </span>
          </div>

          <span className="app-hamburger" onClick={() => show("left")}>
            <RxHamburgerMenu />
          </span>
          <nav>
            <ul className="nav-list">
              <li>
                <Link to="/products">Shop Your RV</Link>
              </li>
              <li>
                <Link onClick={() => setVisibleSell(true)}>Sell Your RV</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Dialog
        header="Sell your RV"
        visible={visibleSell}
        style={{ width: "50vw" }}
        onHide={() => {
          setVisibleSell(false);
        }}
        className="sell-rv-dialog"
      >
        <iframe
          src="https://link.nationwiderv.net/widget/survey/E8WL9iX0ktdbg6GPhUNk"
          id="E8WL9iX0ktdbg6GPhUNk"
          title="2. New Lead Survey [HL Native Survey]"
        ></iframe>
        <script src="https://link.nationwiderv.net/js/form_embed.js"></script>
      </Dialog>
      <Dialog
        header="RV Listing"
        visible={visible}
        position={position}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        draggable={false}
        resizable={false}
        className="flyout-dialog"
      >
        <div className="flyout-menu">
          <nav>
            <ul className="nav-list">
              <li>
                <Link to="/products">Shop Your RV</Link>
              </li>
              <li>
                <Link to="#">Sell Your RV</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Dialog>
    </>
  );
};

export default Header;
