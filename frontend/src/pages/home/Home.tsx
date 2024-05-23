import React from "react";

import Footer from "../../components/Footer";
import HomeTitle from "../../components/HomeTitle";

const Home = () => {
    return (
        <>
            <div className="w-screen sm:min-h-[65vh] mt-20 sm:mt-28">
                <HomeTitle />
                <p className="w-[65vw] m-auto pt-6 text-xl text-justify sm:w-[60vw] sm:text-2xl sm:mb-12 2xl:text-3xl">
                    I'm a rising senior at Boston University graduating in 2025,
                    majoring in mathematics and computer science and minoring
                    data science. I am constantly striving to learn new skills
                    and continue to develop myself academically and
                    professionally. I particularly enjoy spending time on
                    personal projects and research and I will be working as a
                    software development engineer intern at Savvas Learning
                    Company in summer 2024.
                </p>
            </div>
            <Footer />
        </>
    );
};

export default Home;
