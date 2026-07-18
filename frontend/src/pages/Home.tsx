import React from "react";

import Featured from "../components/Featured";
import HomeTitle from "../components/HomeTitle";

const Home = () => {
    return (
        <div className="w-screen sm:min-h-[65vh] pt-12 sm:pt-20">
            <HomeTitle />
            <p className="w-3/5 max-w-3xl m-auto pt-6 text-xl text-justify sm:w-[60vw] sm:text-2xl sm:mb-12 2xl:text-3xl">
                I'm an MSCS student at Georgia Tech with a passion for solving
                interdisciplinary problems at the cutting edge of technology. My
                research interests include applied NLP, recommender systems,
                optimization, and computational social science
            </p>
            <Featured />
        </div>
    );
};

export default Home;
