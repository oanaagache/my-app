import { Card } from "react-bootstrap";
import { useParams, useSearchParams } from "react-router-dom";
import { useProducts } from "../../hooks/custom/useProducts";
import Form from "react-bootstrap/Form";
import "./Categories.css";
import "../../index.css";
import { ButtonBack } from "../../components/ButtonBack/ButtonBack";
//import { useSearchSelector } from "../../hooks/selectors/useSearchSelector";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const Categories = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { products } = useProducts();
  const cat = searchParams.get("category");
  //console.log(cat);

  // let [search, setSearch] = useState("");
  // const { category } = useParams();
  // const dispatch = useDispatch();
  // const products = useSearchSelector(category);
  // console.log(products);

  return (
    <div>
      <h2 className="categories-title">
        LET'S SHOP! Choose a product you are interested in, or use our contact
        form to ask any advice you might need. We are always happy to help!
      </h2>
      <ButtonBack />

      <div>
        <div className="options">
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setSearchParams({ category: e.target.value })}
            //onChange={(e) => setSearch(e.target.value)}
          >
            <option>Select Option</option>
            <option value="Backpacks">Backpacks</option>
            <option value="Boots">Boots</option>
            <option value="Clothes">Clothes</option>
            <option value="Crampons">Crampons</option>
            <option value="Helmets">Helmets</option>
            <option value="Iceaxes">Iceaxes</option>
          </Form.Select>
        </div>
        <div
          className="d-flex justify-content-around flex-wrap"
          style={{ margin: "10px" }}
        >
          {products
            .filter((product) => {
              if (!cat) {
                return true;
              }
              return cat === product.category;
            })
            .map((product) => {
              return (
                <div>
                  <Card className="card">
                    <Card.Img
                      className="cardImg"
                      variant="top"
                      src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                      alt="Not Found"
                    />

                    <Card.Body className="cardBody">
                      <Card.Title className="cardTitle">
                        <span style={{ paddingRight: "80px" }}>
                          {product.name}
                        </span>
                        <span>{product.price}$</span>
                      </Card.Title>
                      <div style={{ paddingRight: "80px", fontWeight: "bold" }}>
                        {product.category}
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
