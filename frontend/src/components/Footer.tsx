import React from "react";

import githublogo from "../images/githublogo.png";
import maillogo from "../images/maillogo.png";
import linkedinlogo from "../images/linkedinlogo.png";

const Footer = () => {
    return (
        <footer className="w-40 h-5 mx-auto mt-8 sm:mt-12 mb-12 flex flex-wrap justify-around">
            <a href="https://www.linkedin.com/in/victorverma" target="_blank">
                <img
                    className="w-8 block nav-display:hidden"
                    src={linkedinlogo}
                ></img>
            </a>
            <a href="https://github.com/victorverma3" target="_blank">
                <img
                    className="w-8 block nav-display:hidden"
                    src={githublogo}
                ></img>
            </a>
            <a href="mailto:vpverm@bu.edu" target="_blank">
                <img
                    className="w-8 block nav-display:hidden"
                    src={maillogo}
                ></img>
            </a>
        </footer>
    );
};

export default Footer;
