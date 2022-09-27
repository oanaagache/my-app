import { NavLink } from "react-router-dom";
import { GiMountaintop } from "react-icons/gi";
import { BsFillShieldLockFill } from "react-icons/bs";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";

export function Navbar() {
  return (
    <NavbarBs>
      <Container className="d-flex align-items-start justify-content-center">
        <NavbarBs.Brand
          style={{
            fontSize: "32px",
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
            fontSize: "20px",
            gap: "150px",
          }}
        >
          <Nav.Link as={NavLink} to="/">
            Home{" "}
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

          <div className="d-flex">
            <p style={{ margin: "5px 0 0 0" }}>
              <BsFillShieldLockFill />
            </p>
            <Nav.Link to="/products" as={NavLink}>
              Products
            </Nav.Link>
          </div>
        </Nav>
      </Container>
    </NavbarBs>
  );
}
