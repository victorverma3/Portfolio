import React from "react";

import useIsScreenMd from "../../hooks/useIsScreenMd";

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

const Footer = () => {
    const isScreenMd = useIsScreenMd();
    return (
        <footer className="h-fit min-h-8">
            {!isScreenMd && (
                <div className="w-fit mx-auto mt-8 pt-4 pb-12 flex gap-3">
                    {logoItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            className="rounded-md hover:scale-105 hover:opacity-75"
                        >
                            <img className="w-8 block" src={item.logo} />
                        </a>
                    ))}
                </div>
            )}
        </footer>
    );
};

export default Footer;
