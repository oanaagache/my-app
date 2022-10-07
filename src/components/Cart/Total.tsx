import { useCartSelector } from "../../hooks/selectors/useCartSelector";

export const Total = () => {
  const cart = useCartSelector();

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <div
      style={{
        padding: "10px",
        margin: "20px",
        fontSize: "25px",
        fontWeight: "200",
        lineHeight: "20px",
      }}
    >
      <h4>Order Summary:</h4>
      <div style={{ padding: "10px" }}>
        <p>
          Total ({getTotal().totalQuantity} items) :{" "}
          <strong>${getTotal().totalPrice}</strong>
        </p>
      </div>
    </div>
  );
};
