import { BiChevronsDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "../index.css";

export function Contact() {
  let navigate = useNavigate();
  const mystyle = {
    margin: "20px ",
    fontSize: "25px",
    fontWeight: "400",
    lineHeight: "36px",
  };
  return (
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
      <h2 style={mystyle}>
        You can find us at our store,online by email or you can call us anytime
        you need an answer.
      </h2>

      <h2 style={mystyle}>Please use the form below.</h2>
      <a
        className="buttonChevron"
        onClick={() => {
          navigate("/form");
        }}
      >
        <BiChevronsDown />
      </a>
    </div>
  );
}
