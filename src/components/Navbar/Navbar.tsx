import { NavLink } from "react-router-dom";
import { GiMountaintop } from "react-icons/gi";
import { BsFillShieldLockFill } from "react-icons/bs";
import "../../index.css";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { BiCart } from "react-icons/bi";

export const Navbar = () => {
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

          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "#B22222" : "#000080",
            })}
          >
            Contact
          </NavLink>

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
        <Button
          style={{
            width: "50px",
            height: "50px",
            position: "absolute",
            top: "30px",
            right: "50px",
            backgroundColor: "#b9dae9",
            border: "#5d8799",
            borderRadius: "10px",
          }}
        >
          <BiCart />

          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "20px",
              height: "20px",
              position: "absolute",
              bottom: "0",
              right: "0",
              transform: "translate(30%, 30%)",
              borderRadius: "5px",
              backgroundColor: "red",
              fontSize: "15px",
            }}
          >
            qty
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};
