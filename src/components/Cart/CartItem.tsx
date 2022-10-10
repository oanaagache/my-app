import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";
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
    <div
      style={{
        backgroundColor: "#ffff",
        margin: "0 10px 0 10px ",
      }}
    >
      <div
        style={{
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#ffff",
        }}
      >
        <span
          style={{
            padding: "10px",
            margin: "10px",
            fontSize: "25px",
            fontWeight: "300",
            lineHeight: "20px",
            width: "800px",
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
            width: "400px",
          }}
        >
          <small>$</small>
          <strong>{cartItem.price}</strong>
        </span>

        <Counter />

        <span style={{ padding: "5px" }}>
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
