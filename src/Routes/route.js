import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout/layout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductDetail from "../Components/ProductsListing/ProductList/ProductDetail";
import PD from "../Pages/PD";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/" element={<ProductDetail />} />
          <Route path="/product/:id" element={<PD />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
