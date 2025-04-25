import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import Layout from "../Components/Layout/layout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import PD from "../Pages/PD";
import SearchPage from "../Components/Home/SearchBar/SearchPage";

const Routing = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<PD />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
