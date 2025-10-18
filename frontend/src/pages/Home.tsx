import React from "react";

import Featured from "../components/Featured";
import Footer from "../components/layout/Footer";
import HomeTitle from "../components/HomeTitle";

const Home = () => {
    return (
        <>
            <div className="w-screen sm:min-h-[65vh] pt-20 sm:pt-28">
                <HomeTitle />
                <p className="w-3/5 max-w-3xl m-auto pt-6 text-xl text-justify sm:w-[60vw] sm:text-2xl sm:mb-12 2xl:text-3xl">
                    I'm an associate software developer in the AI Enabled
                    Learning domain at Savvas Learning Company. I love to work
                    on creative projects that solve problems.
                </p>
                <Featured />
            </div>
            <Footer />
        </>
    );
};

export default Home;
