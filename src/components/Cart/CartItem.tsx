import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { increment, decrement, removeFromCart } from "../../store/cartSlice";
import { IProduct } from "../../types/IProduct";
import { Counter } from "../Counter/Counter";

// interface CartItem {
//   _uuid: string;
//   name: string;
//   price: number;
//   category: string;
//   quantity: number;
// }
interface CartItem {
  cartItem: IProduct;
}

export const CartItem = ({ cartItem }: CartItem) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div
        style={{
          padding: "10px",
        }}
      >
        <span
          style={{
            padding: "10px",
            margin: "20px",
            fontSize: "25px",
            fontWeight: "300",
            lineHeight: "20px",
            color: "#ffffff",
          }}
        >
          {cartItem.name}
        </span>
        <span
          style={{
            padding: "10px",
            margin: "10px",
            fontSize: "20px",
            fontWeight: "300",
            lineHeight: "20px",
            color: "#ffffff",
          }}
        >
          <small>$</small>
          <strong>{cartItem.price}</strong>
        </span>
        {/* <Counter /> */}

        <span style={{ padding: "10px" }}>
          <Button
            className="button"
            style={{
              backgroundColor: "#b9dae9",
              border: "#5d8799",
            }}
            onClick={() => dispatch(increment(cartItem._uuid))}
          >
            +
          </Button>

          <span>x {cartItem.quantity}</span>

          <Button
            className="button"
            style={{
              backgroundColor: "#b9dae9",
              border: "#5d8799",
            }}
            onClick={() => dispatch(decrement(cartItem._uuid))}
          >
            -
          </Button>

          <Button
            className="removeButton"
            style={{ backgroundColor: "#3f6d83" }}
            onClick={() => dispatch(removeFromCart(cartItem._uuid))}
          >
            {" "}
            Remove{" "}
          </Button>
        </span>
      </div>
    </div>
  );
};

{
  /* <span style={{ padding: "10px" }}>
          <button onClick={() => dispatch(decrement(cartItem._uuid))}>-</button>
          
          <span>{cartItem.quantity}</span>
          <button onClick={() => dispatch(increment(cartItem._uuid))}>+</button>
        </span>

        <button
          className="cartItem__removeButton"
          onClick={() => dispatch(removeFromCart(cartItem._uuid))}
        >
          {" "}
          Remove{" "}
        </button> */
}
