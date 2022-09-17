import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./components/Products";
import { Contact } from "./pages/Contact";
import { CartProvider } from "./context/CartContext";
import { NotFound } from "./components/NotFound";
import { Product } from "./pages/Product";
import "./index.css";

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:uuid" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
