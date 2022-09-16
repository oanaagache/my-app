import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./components/Products";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Contact } from "./pages/Contact";
import { CartProvider } from "./context/CartContext";
import "./index.css";
import Form from "./components/Form";
import { NotFound } from "./components/NotFound";

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
          <Route path="/products/:categ" element={<Products />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
