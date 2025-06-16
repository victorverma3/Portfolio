import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Auth from "./Auth";

import { supabase } from "../utils/Supabase";

const Header = () => {
    const [resumeURL, setResumeURL] = useState("");
    useEffect(() => {
        const { data: publicData } = supabase.storage
            .from("files")
            .getPublicUrl("VictorVermaResume.pdf");
        setResumeURL(publicData.publicUrl);
    }, []);
    const openResume = () => {
        window.open(resumeURL);
    };

    const logoItems = [
        {
            url: "https://www.linkedin.com/in/victorverma/",
            logo: "images/linkedinlogo.png",
        },
        {
            url: "https://github.com/victorverma3",
            logo: "images/githublogo.png",
        },
        { url: "mailto:vpverm@bu.edu", logo: "images/maillogo.png" },
    ];
    const navItems = [
        { url: "/", text: "Home" },
        { url: "/experience", text: "Experience" },
        { url: "/education", text: "Education" },
        { url: "/projects", text: "Projects" },
        { url: resumeURL, click: openResume, text: "Resume" },
        { url: "/about", text: "About Me" },
    ];
    return (
        <div className="w-full m-auto">
            <Navbar collapseOnSelect bg="light" expand="lg" fixed="top">
                <Container>
                    <Auth />
                    <Navbar.Brand href="/">
                        <span className="text-xl hover:opacity-75">
                            Victor Verma
                        </span>
                    </Navbar.Brand>
                    <div className="w-32 m-auto flex-row flex-wrap justify-around hidden nav-display:flex portrait:hidden">
                        {logoItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                className="rounded-md hover:scale-105 hover:opacity-75"
                            >
                                <img className="w-7" src={item.logo} />
                            </a>
                        ))}
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {navItems.map((item, index) => (
                                <Nav.Link eventKey={index} key={index}>
                                    <Link
                                        className="text-xl text-black no-underline hover:underline hover:decoration-blue-400 hover:opacity-75 duration-200 ease-in-out"
                                        to={item.url}
                                        onClick={item?.click}
                                    >
                                        {item.text}
                                    </Link>
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
