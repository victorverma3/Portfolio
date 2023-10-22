import React from "react";
import "./Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useEffect, useState } from "react";
import axios from "axios";

type experienceDataType = {
  _id: string;
  role: string;
  employer: string;
  dates: string;
  location: string;
  description: string;
  icon: string;
  sortOrder: number;
};

const Experience = () => {
  const [experienceData, setExperienceData] = useState<experienceDataType[]>(
    []
  );
  useEffect(() => {
    axios
      .get(
        "https://victor-verma-portfolio-backend.vercel.app/experience-collection"
      )
      .then((response) => {
        setExperienceData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="experience-content">
      <h1 className="page-title">Experience</h1>
      <VerticalTimeline>
        {experienceData.map((element, index) => {
          const imageUrl = `https://victor-verma-portfolio-backend.vercel.app/get-image/${element.icon}`;
          return (
            <VerticalTimelineElement
              key={index}
              iconStyle={{
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <h3 className="vertical-timeline-element-title">
                {element.role}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.employer}
              </h5>
              <h6 className="vertical-timeline-element-subtitle">
                {element.dates}
              </h6>
              <h6 className="vertical-timeline-element-subtitle">
                {element.location}
              </h6>
              <p className="timeline-element-info">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <div className="skills">
        <p className="skills-list">
          <span className="skills-title">
            <strong>Technical Skills: </strong>
          </span>
          Python, HTML/CSS, JavaScript, TypeScript, React.js, Node.js, Git,
          LaTeX, APIs, Pandas, Beautiful Soup, Web Development, Web Scraping,
          Object-Oriented Programming, Data Structures, Algorithm
          Analysis/Design.
        </p>
        <p className="skills-list">
          <span className="skills-title">
            <strong>Soft Skills: </strong>
          </span>
          Communication, Teamwork, Organization, Leadership, Critical Thinking,
          Problem-Solving, Emotional Intelligence.
        </p>
      </div>
    </div>
  );
};

export default Experience;
