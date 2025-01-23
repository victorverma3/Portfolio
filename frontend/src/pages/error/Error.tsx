import React from "react";

import Footer from "../../components/Footer";

import tom from "../../../public/images/tom.png";

const Error = () => {
    return (
        <>
            <div className="w-screen min-h-[80vh] mt-20 mb-[-50px]">
                <h1 className="text-5xl 2xl:text-6xl">
                    Error 404 - Page Not Found
                </h1>
                <img
                    className="w-80 mx-auto my-6"
                    src={tom}
                    alt="error loading image"
                ></img>
            </div>
            <Footer />
        </>
    );
};

export default Error;
