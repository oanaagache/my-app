import { Card, Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../hooks/custom/useProducts";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export const Categories = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { products } = useProducts();
  let navigate = useNavigate();
  const cat = searchParams.get("category");
  console.log(cat);

  return (
    <div>
      <h2
        className="d-flex align-items-center justify-content-center"
        style={{
          margin: "18px",
          fontSize: "22px",
          fontWeight: "400",
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
          margin: "20px",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </Button>
      <div>
        <div>
          <div
            className="options"
            style={{
              width: "150px",
              margin: "15px 30px 15px 30px",
            }}
          >
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setSearchParams({ category: e.target.value })}
              style={{ margin: "20px" }}
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
            style={{ margin: "20px" }}
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
                            fontSize: "16px",
                            height: "50px",
                            padding: "15px 0 35px 0",
                          }}
                        >
                          <span style={{ paddingRight: "80px" }}>
                            {product.name}
                          </span>
                          <span>{product.price}$</span>
                        </Card.Title>
                        <div
                          style={{ paddingRight: "80px", fontWeight: "bold" }}
                        >
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
    </div>
  );
};
