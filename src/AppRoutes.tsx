import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Products } from "./pages/Products/Products";
import { Contact } from "./pages/Contact/Contact";
import { Product } from "./pages/Product/Product";
import { Categories } from "./pages/Categories/Categories";
import "./index.css";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/categories/" element={<Categories />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products/:uuid" element={<Product />} />
      <Route path="/categories/:category" element={<Categories />} />
    </Routes>
  );
}
