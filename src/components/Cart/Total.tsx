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
        margin: "0 10px 0 10px ",
        fontSize: "25px",
        fontWeight: "200",
        lineHeight: "20px",
        backgroundColor: "#ffff",
      }}
    >
      <h4
        style={{
          padding: "10px",
          margin: "10px",
          fontSize: "25px",
          fontWeight: "500",
          lineHeight: "20px",
        }}
      >
        Order Summary:
      </h4>
      <div
        style={{
          padding: "10px",
          margin: "10px",
          fontSize: "25px",
          fontWeight: "300",
          lineHeight: "20px",
        }}
      >
        <p>
          Total ({getTotal().totalQuantity} items) :{" "}
          <strong>${getTotal().totalPrice}</strong>
        </p>
      </div>
    </div>
  );
};
