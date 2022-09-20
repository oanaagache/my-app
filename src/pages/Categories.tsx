import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

export const Categories = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ margin: "60px 20px 50px 20px" }}>
      <h2
        className="d-flex align-items-center justify-content-center"
        style={{
          margin: "0 0 60px 0",
          fontSize: "25px",
          fontWeight: "500",
          lineHeight: "36px",
          color: "#ffff",
        }}
      >
        LET'S SHOP! Choose a product you are interested in, or use our contact
        form to ask any advice you might need. We are always happy to help!
      </h2>
      <Button
        className="back"
        style={{
          backgroundColor: "#b9dae9",
          border: "#5d8799",
        }}
      >
        Back
      </Button>
    </div>
  );
};
