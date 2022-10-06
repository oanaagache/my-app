import { NavLink } from "react-router-dom";
import { GiMountaintop } from "react-icons/gi";
import { BsFillShieldLockFill } from "react-icons/bs";
import "../../index.css";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { BiCart } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//import { useCartTotalSelector } from "../../hooks/selectors/useCartTotalSelector";
import { useEffect, useState } from "react";
//import { Cart } from "../Cart/Cart";

export const Navbar = () => {
  //const total = useSelector(useCartTotalSelector);

  return (
    <>
      <NavbarBs>
        <Container
          style={{
            maxWidth: "100%",
            gap: "30px",
            width: "100% !important",
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-around",
            padding: "0 40px",
          }}
        >
          <NavbarBs.Brand
            style={{
              fontSize: "32px",
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
            style={{
              fontSize: "20px",
              margin: "5px 0 0 0",
              justifyContent: "space-between",
              flexGrow: 3,
              width: "80%",
              // flexDirection: "row",
              // display: "flex !important",
              // alignItems: "center",
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
              <p style={{ marginBottom: "0px" }}>
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
              width: "40px",
              height: "40px",
              backgroundColor: "#b9dae9",
              border: "#5d8799",
              borderRadius: "10px",
            }}
          >
            <BiCart />

            <div
              style={{
                width: "20px",
                height: "20px",
                transform: "translate(30%, 30%)",
                borderRadius: "5px",
                backgroundColor: "red",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* {total !== 0 && <span>{total}</span>} */}
            </div>
          </Button>
        </Container>
      </NavbarBs>
    </>
  );
};
