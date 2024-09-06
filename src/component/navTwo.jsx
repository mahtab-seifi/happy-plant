import React, { Component } from "react";
import brand from "./images/cactus.png";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavTwo() {
  return (
    <>
      {["md"].map((expand) =>(
        <Navbar id="nav" key={expand} expand={expand} className="">
          <Container fluid>
            <Navbar.Brand>
              <img src={brand} alt="" style={{ width: "50px" }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  گیاه شاد
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link ><Link to={"/care"} className=" nav-link">اهمیت گیاه</Link></Nav.Link>
                  <Nav.Link ><Link to={"/cactus"} className=" nav-link">کاکتوس</Link></Nav.Link>
                  <Nav.Link><Link to={"/tree"} className=" nav-link">درختچه</Link></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavTwo;
