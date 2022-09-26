import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useCountSelector } from "../hooks/selectors/useCountSelector";
import { increment, decrement } from "../store/counterSlice";
import { RootState } from "../store/store";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useCountSelector();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <div className="d-flex align-center">
        <Button onClick={handleIncrement}>
          <div>+</div>
        </Button>
        <div>{count}</div>
        <Button onClick={handleDecrement}>
          <div>-</div>
        </Button>
      </div>
    </>
  );
};
