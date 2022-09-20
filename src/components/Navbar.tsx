import { NavLink } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { GiMountaintop } from "react-icons/gi";
import { useCart } from "../context/CartContext";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";

export function Navbar() {
  return (
    <NavbarBs>
      <Container className="d-flex align-items-start justify-content-center">
        <NavbarBs.Brand
          style={{
            fontSize: "30px",
            position: "absolute",
            top: "10px",
            left: "20px",
            fontFamily: "Garamond",
            color: "#ffff",
            fontWeight: "bold",
          }}
          to="/"
          as={NavLink}
        >
          <div>
            <GiMountaintop />
            <span className="name">Mountain Shop</span>
          </div>
        </NavbarBs.Brand>

        <Nav
          className="d-flex align-items-start justify-content-center"
          style={{
            fontSize: "30px",
            gap: "150px",
          }}
        >
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
          <Nav.Link to="/categories" as={NavLink}>
            Categories
          </Nav.Link>

          <Nav.Link to="/contact" as={NavLink}>
            Contact
          </Nav.Link>
          <Nav.Link to="/products" as={NavLink}>
            Products
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}
