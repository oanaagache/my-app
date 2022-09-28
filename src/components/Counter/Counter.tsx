import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useCountSelector } from "../../hooks/selectors/useCountSelector";
import { increment, decrement } from "../../store/counterSlice";

export const Counter = () => {
  const count = useCountSelector();
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <div
        className="d-flex align-items-center flex-column"
        style={{
          gap: "15px",
        }}
      >
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            gap: "15px",
          }}
        >
          <Button
            className="button"
            style={{
              backgroundColor: "#b9dae9",
              border: "#5d8799",
            }}
            onClick={handleIncrement}
          >
            +
          </Button>
          <div>x</div>
          <div>{count}</div>
          <Button
            className="button"
            style={{
              backgroundColor: "#b9dae9",
              border: "#5d8799",
            }}
            onClick={handleDecrement}
          >
            -
          </Button>
        </div>
      </div>
    </>
  );
};
