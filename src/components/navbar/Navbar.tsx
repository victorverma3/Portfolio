import React from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="">Victor Verma</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link className="navLink" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="navLink" to="/experiences">
                  Experiences
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="navLink" to="/academics">
                  Academics
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="navLink" to="/projects">
                  Projects
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="navLink" to="/resume">
                  Resume
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="navLink" to="/about">
                  About Me
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default Header;
