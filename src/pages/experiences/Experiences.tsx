import React from "react";
import "./Experiences.css";
import Footer from "../../components/footer/Footer";
import ExpCards from "../../components/ExpCards/ExpCards";

const Experiences = () => {
  const expCards = [
    {
      title: "Undergraduate Research Assistant",
      employer: "Boston University",
      dates: "January 2023 - Present",
      location: "Boston, Massachusetts, United States",
      description:
        "Utilizing pandas, the Google Search API, web scraping, and the ChatGPT API to build Python software to automate the extraction of the biodata of 150,000 U.S. State Representative Candidates across all 50 states from 1970 to 2020. Working under Professor Jetson Leder-Luis of the Boston University Questrom School of Business.",
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
        "Worked as part of a team responsible for ensuring that 30000+ packages were sorted, organized, and moved efficiently between stations during each shift. Sorted packages on the conveyor line and identified package destinations. Physically stacked packages onto wooden pallets and wrapped them in preparation for delivery.",
    },
    {
      title: "Hospital Volunteer",
      employer: "UMass Memorial Health",
      dates: "July 2019 - August 2019",
      location: "Marlborough, Massachusetts, United States",
      description:
        "Stocked and transported hospital supplies, including personal protective equipment, wheelchairs, and beds. Supported patients in the hospital by providing food, water, reading material, support cards, and assistance with any physical tasks. Spent quality time with individual patients and fostered meaningful relationships.",
    },
    {
      title: "Math Tutor",
      employer: "Russian School of Mathematics",
      dates: "February 2019 - August 2019",
      location: "Shrewsbury, Massachusetts, United States",
      description:
        "Tutored elementary and middle school math students, helping them with homework, explaining relevant math concepts, and preparing them for competitive tests. Worked with students to develop strategies for better independent learning. Served as both a friend and mentor to students while striving to cultivate a love for math.",
    },
  ];
  return (
    <>
      <div className="experienceContent">
        <h1 className="pageTitle">Experience</h1>
        <ExpCards cards={expCards} />
        <div className="skills">
          <p className="skillsList">
            <span className="skillsTitle">Technical Skills: </span>Python, Java,
            HTML/CSS, TypeScript, React, Git, Github, LaTeX, Pandas,
            BeautifulSoup, ChatGPT, Web Development, Web Scraping,
            Object-Oriented Programming, Data Structures, Algorithm
            Analysis/Design.
          </p>
          <p className="skillsList">
            <span className="skillsTitle">Soft Skills: </span>Communication,
            Teamwork, Organization, Problem-Solving, Customer Service, Emotional
            Intelligence.
          </p>
        </div>
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </>
  );
};

export default Experiences;
