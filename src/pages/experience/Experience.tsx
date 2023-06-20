import React from "react";
import "./Experience.css";
import Footer from "../../components/Footer/Footer";
import ExpCards from "../../components/ExpCards/ExpCards";

const Experiences = () => {
  const expCards = [
    {
      title: "Undergraduate Research Assistant",
      employer: "Boston University",
      dates: "January 2023 - Present",
      location: "Boston, Massachusetts, United States",
      description:
        "Utilizing pandas, the Google Search API, web scraping, and ChatGPT to build Python software to automate the extraction of the biodata of 150,000 U.S. State Representative Candidates across all 50 states from 1970 to 2020. Working under Professor Jetson Leder-Luis of the Boston University Questrom School of Business.",
    },
    {
      title: "Computer Assistant/Programmer",
      employer: "Boston University",
      dates: "September 2021 - Present",
      location: "Boston, Massachuetts, United States",
      description:
        "Working directly with professors, students, and teammates at the Questrom Open Access Lab to efficiently brainstorm solutions to technological problems that arise in the fast-paced classroom environment. Previously gained experience using Salesforce Lightning through the completion of Salesforce Trailhead Modules.",
    },
    {
      title: "Retail Sales Associate",
      employer: "Leslie's",
      dates: "June 2022 - August 2022",
      location: "Shrewsbury, Massachusetts, United States",
      description:
        "Tended to 75+ customers per shift, directing them to pool products and completing cash register transactions using the POS system. Performed 100s of water tests, analyzing the results to provide personalized chemical recommendations to maintain customers' pools. Assisted with inventory management and store maintenance.",
    },
    {
      title: "Sort Team",
      employer: "Amazon",
      dates: "June 2021 - January 2022",
      location: "Northborough, Massachusetts, United States",
      description:
        "Responsible for ensuring the packages were sorted, organized, and moved efficiently between stations. Sorted, scanned, and stacked 5000+ packages on pallets, helping to get customer orders ready for delivery.",
    },
    {
      title: "Hospital Volunteer",
      employer: "UMass Memorial Health",
      dates: "July 2019 - August 2019",
      location: "Marlborough, Massachusetts, United States",
      description:
        "Stocked and transported hospital supplies, including wheelchairs and beds. Supported patients in the hospital by providing food, water, reading material, and assistance with any physical tasks. Spent quality time with the patients and fostered meaningful relationships.",
    },
    {
      title: "Math Tutor",
      employer: "Russian School of Mathematics",
      dates: "February 2019 - August 2019",
      location: "Shrewsbury, Massachusetts, United States",
      description:
        "Tutored elementary and middle school math students, helping them with homework and preparing for competitive tests. Worked with individual students to develop strategies for better learning. Served as a friend, guide, and mentor to the students and strived to cultivate a love for math.",
    },
  ];
  return (
    <>
      <div className="experienceContent">
        <h1 className="pageTitle">Work Experience</h1>
        <ExpCards cards={expCards} />
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default Experiences;
