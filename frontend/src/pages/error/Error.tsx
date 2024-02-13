import React from "react";

import Footer from "../../components/Footer";

import "./Error.css";

import tom from "../../images/tom.png";

const Error = () => {
    return (
        <>
            <div className="error-content">
                <h1>Error 404 - Page Not Found</h1>
                <img
                    className="error-image"
                    src={tom}
                    alt="error loading image"
                ></img>
            </div>
            <Footer />
        </>
    );
};

export default Error;
