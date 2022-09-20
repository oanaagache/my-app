import { ProductCard } from "../Product/ProductCard";
import { useProducts } from "../../hooks/useProducts";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { CreateProduct } from "../Product/CRUD/CreateProduct";

export const Products = () => {
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
          <Modal.Header closeButton>
            <Modal.Title>Create new Product</Modal.Title>
          </Modal.Header>
          <CreateProduct />
        </Modal>

        <div className="d-flex justify-content-around align-center">
          <Button variant="secondary" onClick={() => setShow(true)}>
            Create Product
          </Button>
        </div>
      </div>

      <div className="d-flex justify-content-around flex-wrap">
        {products.map((product) => (
          <div>
            <ProductCard key={product._uuid} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
