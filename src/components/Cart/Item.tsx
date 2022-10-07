import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

interface Item {
  name: string;
  price: number;
  category: string;
  quantity: number;
  _uuid: string;
}

function Item({ _uuid, name, price, quantity, category }: Item) {
  const dispatch = useDispatch();

  return (
    <div className="item">
      <div className="item__info">
        <p className="item__title">{name}</p>
        <p className="item__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>

      <button
        onClick={() =>
          dispatch(
            addToCart({
              _uuid,
              name,
              price,
              quantity,
              category,
            })
          )
        }
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Item;
