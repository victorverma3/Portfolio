import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="nav-container">
        <Navbar collapseOnSelect bg="light" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand className="nav-brand" href="/">
              Victor Verma
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link eventKey="1">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey="2">
                  <Link className="nav-link" to="/experience">
                    Experience
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey="3">
                  <Link className="nav-link" to="/education">
                    Education
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey="4">
                  <Link className="nav-link" to="/projects">
                    Projects
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey="5">
                  <Link className="nav-link" to="/resume">
                    Resume
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey="6">
                  <Link className="nav-link" to="/about">
                    About Me
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
