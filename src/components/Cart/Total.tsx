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
    <div style={{ padding: "50px 10px" }}>
      <h4>Order Summary:</h4>
      <div style={{ padding: "10px" }}>
        <p className="total__p">
          Total ({getTotal().totalQuantity} items) :{" "}
          <strong>${getTotal().totalPrice}</strong>
        </p>
      </div>
    </div>
  );
};
