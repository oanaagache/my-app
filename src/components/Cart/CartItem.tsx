import { useDispatch } from "react-redux";
import { increment, decrement, removeFromCart } from "../../store/cartSlice";
import { useProducts } from "../../hooks/custom/useProducts";
import { IProduct } from "../../types/IProduct";

interface ProductCardProps {
  name: string;
  price: number;
  category: string;
  quantity: number;
  _uuid: string;
}

export const CartItem = ({
  name,
  price,
  quantity,
  _uuid,
}: ProductCardProps) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      {/* <div className="product-image">
        <img src={image} alt={title} />
      </div> */}
      <div className="product-title">
        <h2>{name}</h2>
        <h2 className="product-price">${price}</h2>

        {/* <button onClick={() => dispatch(removeFromCart(props))}>
          Remove from cart
        </button> */}
      </div>
      <div className="quantity">
        {/* <button onClick={() => dispatch(decrement(props))}>
          <IoRemoveSharp />
        </button> */}
        {/* <p>{quantity}</p> */}

        {/* <button onClick={() => dispatch(increment(props))}>
          <IoAddSharp />
        </button> */}
      </div>
    </div>
  );
};
