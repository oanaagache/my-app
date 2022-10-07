import { useCartSelector } from "../../hooks/selectors/useCartSelector";
import { CartItem } from "./CartItem";
import { Total } from "./Total";

export const Cart = () => {
  const cart = useCartSelector();

  // if (cart.length === 0) {
  //   return (
  //     <>
  //       <h3 className="fs-bold" style={{ marginTop: "20px" }}>
  //         Your Shopping is Empty
  //       </h3>
  //     </>
  //   );
  // }
  return (
    <div>
      <h3
        style={{
          padding: "10px",
          margin: "20px",
          fontSize: "25px",
          fontWeight: "400",
          lineHeight: "26px",
          color: "#ffffff",
        }}
      >
        Your Shooping Cart:
      </h3>
      {cart.map((cartItem) => {
        return (
          // <CartItem
          //   key={item.id}
          //   id={item.id}
          //   name={item.name}
          //   price={item.price}
          //   quantity={item.quantity}
          //   category={item.category}
          // />
          // <CartItem key={item._uuid} {...item} />
          <CartItem key={cartItem._uuid} cartItem={cartItem} />
        );
      })}
      <Total />
    </div>
  );
};
