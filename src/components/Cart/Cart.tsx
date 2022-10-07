import { useCartSelector } from "../../hooks/selectors/useCartSelector";
import { CartItem } from "./CartItem";
import { Total } from "./Total";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ButtonBack } from "../ButtonBack/ButtonBack";

export const Cart = () => {
  const cart = useCartSelector();
  let navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <>
        <h3 className="categories-title">
          Your Shopping is Empty. Add a product from our Categories
        </h3>
        <ButtonBack />
        <div className="d-flex align-items-start">
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              navigate("/categories");
            }}
            style={{
              margin: "20px 20px 20px 20px",
              backgroundColor: "#3f6d83",
            }}
          >
            Add a Product
          </Button>
        </div>
      </>
    );
  }

  return (
    <div>
      <h3
        style={{
          padding: "10px",
          margin: "20px",
          fontSize: "25px",
          fontWeight: "400",
          lineHeight: "26px",
        }}
      >
        Your Shooping Cart:
      </h3>
      {cart.map((cartItem) => {
        return <CartItem key={cartItem._uuid} cartItem={cartItem} />;
      })}
      <Total />
    </div>
  );
};
