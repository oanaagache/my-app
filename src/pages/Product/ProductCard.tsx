import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "../../index.css";
import { IProduct } from "../../types/IProduct";
import "./Card.css";

interface ProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  let navigate = useNavigate();
  const handleRedirect = () => {
    navigate(`/products/${product._uuid}`);
  };

  return (
    <Card className="card">
      <Card.Img
        className="cardImg"
        variant="top"
        src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        alt="No Found"
      />

      <Card.Body className="cardBody">
        <Card.Title className="cardTitle">
          <span style={{ paddingRight: "80px" }}>{product.name}</span>
          <span>{product.price}$</span>
        </Card.Title>
        <div style={{ paddingRight: "80px", fontWeight: "bold" }}>
          {product.category}
        </div>
      </Card.Body>

      <Button onClick={handleRedirect} style={{ backgroundColor: "#3f6d83" }}>
        Details{" "}
      </Button>
    </Card>
  );
}
