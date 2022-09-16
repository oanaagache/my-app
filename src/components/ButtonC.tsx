import { Button } from "react-bootstrap";
import "../index.css";
import { useNavigate } from "react-router-dom";

export const ButtonC = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Button
        className="back"
        style={{
          backgroundColor: "#b9dae9",
          border: "#5d8799",
        }}
        onClick={() => {
          navigate("/categories");
        }}
      >
        Back
      </Button>
    </div>
  );
};
