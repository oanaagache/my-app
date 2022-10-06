import { useCartSelector } from "../../hooks/selectors/useCartSelector";
//import { useCartTotalPriceSelector } from "../../hooks/selectors/useCartTotalPriceSelector";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
//import { addToCart } from "../../store/cartSlice";

import { CartItem } from "./CartItem";
import { RootState } from "../../store/store";

export const Cart = () => {
  //const totalPrice = useCartTotalPriceSelector();
  const dispatch = useDispatch();

  const cart = useCartSelector();
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  // const { cart, totalAmount, quantity } = useSelector(
  //   (state: RootState) => state.cart
  // );
  if (cart.length === 0) {
    return (
      <>
        <h3 className="fs-bold" style={{ marginTop: "20px" }}>
          Your Shopping is Empty
        </h3>
        {/* <Button onClick={() => dispatch(addToCart())}>Add to Cart</Button> */}
      </>
    );
  }
  return (
    <div>
      <h2>Your Shooping Cart</h2>
      {cart.map((item) => {
        return <CartItem key={item._uuid} {...item} />;
      })}
      <footer>
        <hr />
        <div>
          <h4
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginRight: "60px",
            }}
          >
            Total <span>${totalAmount}</span>
          </h4>
        </div>

        <Button
          color="danger"
          //   onClick={() => dispatch(clearCart())}
          style={{ width: "140px", marginTop: "50px" }}
        >
          Clear Cart
        </Button>
      </footer>
    </div>
  );
};
