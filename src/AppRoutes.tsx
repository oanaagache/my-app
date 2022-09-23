import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./components/Products/Products";
import { Contact } from "./pages/Contact";
import { Product } from "./components/Product/Product";
import { Categories } from "./components/Categories";
import "./index.css";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products/:uuid" element={<Product />} />
    </Routes>
  );
}
