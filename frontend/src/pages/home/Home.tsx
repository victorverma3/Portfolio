import React from "react";

import Footer from "../../components/Footer";
import HomeTitle from "../../components/HomeTitle";

const Home = () => {
    return (
        <>
            <div className="w-screen min-h-[80vh] mt-20 mb-[-125px] sm:mt-[110px] sm:mb-[-50px]">
                <HomeTitle />
                <p className="w-[65vw] m-auto pt-6 text-xl text-justify sm:w-[60vw] sm:text-2xl sm:mb-12 2xl:text-3xl">
                    I'm a third-year student at Boston University majoring in
                    mathematics and computer science and minoring in data
                    science. I am constantly striving to learn new skills and
                    further develop myself academically and professionally. With
                    experience in both project development and research, I am
                    actively searching for an internship in Summer 2024!
                </p>
            </div>
            <Footer />
        </>
    );
};

export default Home;
