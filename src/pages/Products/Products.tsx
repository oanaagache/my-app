import { ProductCard } from "../Product/ProductCard";
//import { useProducts } from "../../hooks/custom/useProducts";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { CreateProduct } from "../Product/CRUD/CreateProduct";
import { useProductsQuery } from "../../hooks/queries/useProductsQuery";
import { ButtonBack } from "../../components/ButtonBack/ButtonBack";
import { useProductsSelector } from "../../hooks/selectors/useProductsSelector";
import { SearchInput } from "../SearchInput/SearchInput";
import { useFilteredProductsSelector } from "../../hooks/selectors/useFilteredProductsSelector";

export const Products = () => {
  const [show, setShow] = useState(false);

  // const { isLoading, isError, products } = useProducts();
  const { isLoading, isError, data: products } = useProductsQuery();

  // const productsRedux = useProductsSelector();
  // console.log(productsRedux);

  const filteredProducts = useFilteredProductsSelector();
  console.log("FilteredProducts in Products:");
  console.log(filteredProducts);

  if (isLoading) {
    return <div style={{ color: "red" }}>Loading...</div>;
  }

  if (isError) {
    return <div style={{ color: "red" }}>Error</div>;
  }

  return (
    <div>
      <h2
        className="d-flex align-items-start justify-content-center"
        style={{
          margin: "20px 20px 10px 20px",
          fontSize: "22px",
          fontWeight: "400",
          lineHeight: "36px",
          color: "#fff",
        }}
      >
        Add a product,edit,delete or search by name
      </h2>
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

        <div
          className="d-flex align-items-start"
          style={{ margin: "20px 0 0 0" }}
        >
          <SearchInput />
          <span>
            <Button
              variant="secondary"
              onClick={() => setShow(true)}
              style={{
                backgroundColor: "#3f6d83",
                margin: " 0 0 0 40px",
              }}
            >
              Create Product
            </Button>
          </span>
        </div>
      </div>

      <div
        className="d-flex justify-content-around flex-wrap"
        style={{ margin: "30px" }}
      >
        {filteredProducts.map((product) => (
          <div>
            <ProductCard key={product._uuid} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
