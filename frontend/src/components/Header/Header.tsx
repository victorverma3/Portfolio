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
                  <Link className="navLink" to="/">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey="2">
                  <Link className="navLink" to="/experience">
                    Experience
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey="3">
                  <Link className="navLink" to="/education">
                    Education
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey="4">
                  <Link className="navLink" to="/projects">
                    Projects
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey="5">
                  <Link className="navLink" to="/resume">
                    Resume
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey="6">
                  <Link className="navLink" to="/about">
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
