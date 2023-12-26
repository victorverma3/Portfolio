import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import resume from "../VictorVerma.pdf";

import "./Header.css";

import githublogo from "../../images/githublogo.png";
import maillogo from "../../images/maillogo.png";
import linkedinlogo from "../../images/linkedinlogo.png";

const Header = () => {
    const openResume = () => {
        window.open(resume, "_blank");
    };
    return (
        <div className="nav-container">
            <Navbar collapseOnSelect bg="light" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand className="nav-brand" href="/">
                        Victor Verma
                    </Navbar.Brand>
                    <div className="header-nav-logos">
                        <a
                            href="https://www.linkedin.com/in/victor-verma-91713022b/"
                            target="_blank"
                        >
                            <img
                                className="header-nav-logo"
                                src={linkedinlogo}
                            ></img>
                        </a>
                        <a
                            href="https://github.com/victorverma3"
                            target="_blank"
                        >
                            <img
                                className="header-nav-logo"
                                src={githublogo}
                            ></img>
                        </a>
                        <a href="mailto:vpverm@bu.edu" target="_blank">
                            <img
                                className="header-nav-logo"
                                src={maillogo}
                            ></img>
                        </a>
                    </div>
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
                                <Link
                                    className="navLink"
                                    to="#"
                                    onClick={openResume}
                                >
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
    );
};

export default Header;
