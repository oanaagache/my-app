import { BiChevronsDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "../index.css";

export const Home = () => {
  let navigate = useNavigate();
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        position: "relative",
        bottom: "10px",
        top: "200px",
        left: "0",
        right: "0",
        flexDirection: "column",
        textAlign: "center",
        color: "#ffff",
      }}
    >
      <h1
        style={{
          margin: "0 0 40px 0",
          fontSize: "64px",
          fontWeight: "600",
          lineHeight: "56px",
          color: "#ffff",
          top: "100px",
          textTransform: "uppercase",
        }}
      >
        WELCOME TO OUR SHOP
      </h1>
      <h2
        style={{
          marginBottom: "20px",
          fontSize: "20px",
          textTransform: "uppercase",
          fontWeight: "700",
          color: "#ffff",
        }}
      >
        WE ARE TAKING YOUR STEPS INTO THE MOUNTAINS
      </h2>
      <a
        className="buttonChevron"
        onClick={() => {
          navigate("/categories");
        }}
      >
        <BiChevronsDown />
      </a>
    </div>
  );
};
