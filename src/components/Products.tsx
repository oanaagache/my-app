// import { products } from "./data";
import { ProductCard } from "./ProductCard";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IProduct } from "../types/IProduct";
import { IProductsPagination } from "../types/IProductsPagination";
import { useEffect, useState } from "react";

export const Products = () => {
  // let navigate = useNavigate();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const { data } = await axios.get<IProductsPagination>(
          "http://localhost:5004/products"
        );
        setProducts(data.items);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <div style={{ color: "red" }}>Loading...</div>;
  }

  if (isError) {
    return <div style={{ color: "red" }}>Error</div>;
  }

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
      {/* <Button
        className="back"
        style={{
          backgroundColor: "#b9dae9",
          border: "#5d8799",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </Button> */}
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
