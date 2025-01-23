import React from "react";

import githublogo from "../../public/images/githublogo.png";
import linkedinlogo from "../../public/images/linkedinlogo.png";
import maillogo from "../../public/images/maillogo.png";

const Footer = () => {
    const logoItems = [
        { url: "https://www.linkedin.com/in/victorverma/", logo: linkedinlogo },
        { url: "https://github.com/victorverma3", logo: githublogo },
        { url: "mailto:vpverm@bu.edu", logo: maillogo },
    ];
    return (
        <footer className="w-40 h-5 mx-auto mt-8 sm:mt-12 mb-12 flex flex-wrap justify-around">
            {logoItems.map((item, index) => (
                <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    className="rounded-md hover:scale-105 hover:shadow-md"
                >
                    <img
                        className="w-8 block nav-display:hidden"
                        src={item.logo}
                    />
                </a>
            ))}
        </footer>
    );
};

export default Footer;
