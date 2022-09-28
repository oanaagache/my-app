import { useDispatch, useSelector } from "react-redux";
import { useCartSelector } from "../../hooks/selectors/useCartSelector";
import { useCartTotalPriceSelector } from "../../hooks/selectors/useCartTotalPriceSelector";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { toggle } from "../../store/modalSlice";
import { useModalSelector } from "../../hooks/selectors/useModalSelector";
import { addToCart, increment, decrement } from "../../store/cartSlice";

export const Cart = () => {
  const cart = useCartSelector();
  const modal = useModalSelector();
  const dispatch = useDispatch();
  const totalPrice = useSelector(useCartTotalPriceSelector);
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton style={{}}>
            <Modal.Title
              style={{
                margin: "0 15px",
              }}
            >
              Create A New Product
            </Modal.Title>
          </Modal.Header>
          <div>
            {cart.map((item) => (
              <div key={item.id}>
                <img src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80" />
                <div>
                  <div>{item.name}</div>
                  <div>
                    <span> {item.quantity * item.price}$ </span>
                  </div>
                  <div>
                    <Button>-</Button>
                    <div>{item.quantity}</div>
                    <Button>+</Button>
                  </div>
                </div>
              </div>
            ))}
            {totalPrice > 0 && <div>{totalPrice}</div>}
          </div>
        </Modal>
      </div>
    </>
  );
};
