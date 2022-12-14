import { Button } from "react-bootstrap";
import "./ButtonBack.css";
import { useNavigate } from "react-router-dom";

export const ButtonBack = () => {
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
          navigate("/");
        }}
      >
        Back
      </Button>
    </div>
  );
};
