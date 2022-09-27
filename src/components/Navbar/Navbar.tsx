import { NavLink } from "react-router-dom";
import { GiMountaintop } from "react-icons/gi";
import { BsFillShieldLockFill } from "react-icons/bs";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import "../../index.css";

export function Navbar() {
  return (
    <NavbarBs className="nav">
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
            maxWidth: "100%",
          }}
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
            margin: "5px 0 0 0",
          }}
        >
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#B22222" : "#000080",
            })}
            end
          >
            Home{" "}
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "#B22222" : "#000080",
            })}
          >
            About
          </NavLink>
          <NavLink
            to="/categories"
            style={({ isActive }) => ({
              color: isActive ? "#B22222" : "#000080",
            })}
          >
            Categories
          </NavLink>

          {/* <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "#B22222" : "#000080",
            })}
          >
            Contact
          </NavLink> */}

          <div className="d-flex">
            <p>
              <BsFillShieldLockFill />
            </p>
            <NavLink
              to="/products"
              style={({ isActive }) => ({
                color: isActive ? "#B22222" : "#000080",
              })}
            >
              Products
            </NavLink>
          </div>
        </Nav>
      </Container>
    </NavbarBs>
  );
}
