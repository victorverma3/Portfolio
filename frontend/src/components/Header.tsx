import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import resume from "./VictorVerma.pdf";

import githublogo from "../images/githublogo.png";
import maillogo from "../images/maillogo.png";
import linkedinlogo from "../images/linkedinlogo.png";

const Header = () => {
    const openResume = () => {
        window.open(resume, "_blank");
    };
    return (
        <div className="w-full m-auto">
            <Navbar collapseOnSelect bg="light" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand className="text-xl lg:text-2xl" href="/">
                        Victor Verma
                    </Navbar.Brand>
                    <div className="w-32 m-auto flex-row flex-wrap justify-around hidden nav-display:flex portrait:hidden">
                        <a
                            href="https://www.linkedin.com/in/victor-verma-91713022b/"
                            target="_blank"
                        >
                            <img className="w-7" src={linkedinlogo}></img>
                        </a>
                        <a
                            href="https://github.com/victorverma3"
                            target="_blank"
                        >
                            <img className="w-7" src={githublogo}></img>
                        </a>
                        <a href="mailto:vpverm@bu.edu" target="_blank">
                            <img className="w-7" src={maillogo}></img>
                        </a>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link eventKey="1">
                                <Link
                                    className="text-xl lg:text-2xl text-black no-underline hover:underline hover:decoration-2 hover:decoration-blue-400 delay-150 duration-150 ease-linear"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </Nav.Link>
                            <Nav.Link eventKey="2">
                                <Link
                                    className="text-xl lg:text-2xl text-black no-underline hover:underline hover:decoration-2 hover:decoration-blue-400 delay-150 duration-150 ease-linear"
                                    to="/experience"
                                >
                                    Experience
                                </Link>
                            </Nav.Link>
                            <Nav.Link eventKey="3">
                                <Link
                                    className="text-xl lg:text-2xl text-black no-underline hover:underline hover:decoration-2 hover:decoration-blue-400 delay-150 duration-150 ease-linear"
                                    to="/education"
                                >
                                    Education
                                </Link>
                            </Nav.Link>
                            <Nav.Link eventKey="4">
                                <Link
                                    className="text-xl lg:text-2xl text-black no-underline hover:underline hover:decoration-2 hover:decoration-blue-400 delay-150 duration-150 ease-linear"
                                    to="/projects"
                                >
                                    Projects
                                </Link>
                            </Nav.Link>
                            <Nav.Link eventKey="5">
                                <Link
                                    className="text-xl lg:text-2xl text-black no-underline hover:underline hover:decoration-2 hover:decoration-blue-400 delay-150 duration-150 ease-linear"
                                    to="#"
                                    onClick={openResume}
                                >
                                    Resume
                                </Link>
                            </Nav.Link>
                            <Nav.Link eventKey="6">
                                <Link
                                    className="text-xl lg:text-2xl text-black no-underline hover:underline hover:decoration-2 hover:decoration-blue-400 delay-150 duration-150 ease-linear"
                                    to="/about"
                                >
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
