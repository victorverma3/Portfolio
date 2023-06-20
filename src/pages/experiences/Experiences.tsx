import React from "react";
import "./Experiences.css";
import Footer from "../../components/Footer/Footer";
import ExpCards from "../../components/ExpCards/ExpCards";

const Experiences = () => {
  const expCards = [
    {
      title: "Undergraduate Research Assistant",
      employer: "Boston University",
      dates: "January 2023 - Present",
      location: "Boston, Massachusetts, United States",
      description: "placeholder",
    },
    {
      title: "Computer Assistant/Programmer",
      employer: "Boston University",
      dates: "September 2021 - Present",
      location: "Boston, Massachuetts, United States",
      description: "placeholder",
    },
    {
      title: "Retail Sales Associate",
      employer: "Leslie's",
      dates: "June 2022 - August 2022",
      location: "Shrewsbury, Massachusetts, United States",
      description: "placeholder",
    },
    {
      title: "Sort Team",
      employer: "Amazon",
      dates: "June 2021 - January 2022",
      location: "Northborough, Massachusetts, United States",
      description: "placeholder",
    },
    {
      title: "Hospital Volunteer",
      employer: "UMass Memorial Health",
      dates: "July 2019 - August 2019",
      location: "Marlborough, Massachusetts, United States",
      description: "placeholder",
    },
    {
      title: "Math Tutor",
      employer: "Russian School of Mathematics",
      dates: "February 2019 - August 2019",
      location: "Shrewsbury, Massachusetts, United States",
      description: "placeholder",
    },
  ];
  return (
    <>
      <div className="experienceContent">
        <h1 className="pageTitle">Experiences</h1>
        <ExpCards cards={expCards} />
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default Experiences;
