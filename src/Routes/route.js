import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout/layout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
