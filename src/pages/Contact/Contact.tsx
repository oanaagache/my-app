import { BiChevronsDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import "./Contact.css";

export const Contact = () => {
  let navigate = useNavigate();

  return (
    <div className="contact">
      <h2 className="h2-contact">
        You can find us at our store,online by email or you can call us anytime
        you need an answer.
      </h2>

      <h2 className="h2-contact">Please use the form below.</h2>
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
};
