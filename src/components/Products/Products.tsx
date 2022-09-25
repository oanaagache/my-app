import { ProductCard } from "../Product/ProductCard";
//import { useProducts } from "../../hooks/custom/useProducts";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { CreateProduct } from "../Product/CRUD/CreateProduct";
import { useNavigate } from "react-router-dom";
import { useProductsQuery } from "../../hooks/queries/useProductsQuery";
import { ButtonBack } from "../ButtonBack/ButtonBack";
import { useProductsSelector } from "../../hooks/selectors/useProductsSelectors";

export const Products = () => {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);

  // const { isLoading, isError, products } = useProducts();
  const { isLoading, isError, data: products } = useProductsQuery();

  const productsRedux = useProductsSelector();
  console.log(productsRedux);

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

        <ButtonBack />

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
