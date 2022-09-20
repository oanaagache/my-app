import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "../../index.css";
import { IProduct } from "../../types/IProduct";

interface ProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  let navigate = useNavigate();
  const handleRedirect = () => {
    navigate(`/products/${product._uuid}`);
  };

  return (
    <Card className="card" style={{ width: "380px" }}>
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        alt="No Found"
        height="350px"
        style={{ width: "100%", objectFit: "cover" }}
      />

      <Card.Body className="cardBody">
        <Card.Title
          className="cardTitle"
          style={{
            fontSize: "18px",
            height: "50px",
            padding: "15px 0 35px 0",
          }}
        >
          <span style={{ paddingRight: "130px" }}>{product.name}</span>
          <span>{product.price}$</span>
        </Card.Title>
      </Card.Body>
      <Button onClick={handleRedirect}>Details </Button>
    </Card>
  );
}
