import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Form() {
  let navigate = useNavigate();

  return (
    <>
      <Button
        style={{
          color: "aliceblue",
          width: "100px",
          height: "50px",
          backgroundColor: "#b9dae9",
          fontSize: "24px",
          margin: "5px",
        }}
        onClick={() => {
          navigate("/categories");
        }}
      >
        Back
      </Button>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          position: "relative",
          bottom: "10px",
          top: "100px",
          left: "10px",
          right: "10px",
          flexDirection: "column",
          textAlign: "center",
          color: "#ffff",
        }}
      >
        <h1
          style={{
            margin: "20px 50px 20px 50px",
            fontSize: "30px",
            fontWeight: "500",
            lineHeight: "36px",
            color: "#ffff",
          }}
        >
          Please complete the form
        </h1>
      </div>
    </>
  );
}
