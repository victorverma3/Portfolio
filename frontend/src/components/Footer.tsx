import React from "react";

const Footer = () => {
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
