import { ProductCard } from "../Product/ProductCard";
import { useProducts } from "../../hooks/useProducts";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { CreateProduct } from "../Product/CRUD/CreateProduct";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  let navigate = useNavigate();
  const { isLoading, isError, products } = useProducts();
  const [show, setShow] = useState(false);

  if (isLoading) {
    return <div style={{ color: "red" }}>Loading...</div>;
  }

  if (isError) {
    return <div style={{ color: "red" }}>Error</div>;
  }

  return (
    <div>
      <div>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton style={{}}>
            <Modal.Title
              style={{
                margin: "0 15px",
              }}
            >
              Create A New Product
            </Modal.Title>
          </Modal.Header>
          <CreateProduct />
        </Modal>

        <Button
          className="back"
          style={{
            backgroundColor: "#b9dae9",
            border: "#5d8799",
            margin: "60px 20px 50px 20px",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </Button>

        <div>
          <Button
            variant="secondary"
            onClick={() => setShow(true)}
            style={{
              backgroundColor: "#3f6d83",
              margin: " 0  0 0 20px",
            }}
          >
            Create Product
          </Button>
        </div>
      </div>

      <div
        className="d-flex justify-content-around flex-wrap"
        style={{ margin: " 30px " }}
      >
        {products.map((product) => (
          <div>
            <ProductCard key={product._uuid} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
