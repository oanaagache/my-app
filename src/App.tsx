import { Navbar } from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import "./index.css";
import AppRoutes from "./AppRoutes";

export default function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <AppRoutes />
      </CartProvider>
    </>
  );
}
