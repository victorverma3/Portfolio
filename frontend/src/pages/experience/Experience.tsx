import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "./Experience.css";
import "react-vertical-timeline-component/style.min.css";

import amazonlogo from "../../../public/images/amazonlogo.png";
import bulogo from "../../../public/images/bulogo.png";
import ktplogo from "../../../public/images/ktplogo.png";
import leslieslogo from "../../../public/images/leslieslogo.png";
import rsmlogo from "../../../public/images/rsmlogo.png";
import umasshospitallogo from "../../../public/images/umasshospitallogo.png";

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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://victor-verma-portfolio-backend.vercel.app/experience-collection"
      )
      .then((response) => {
        setExperienceData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="experience-content">
      <h1 className="page-title">Experience</h1>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <VerticalTimeline>
          {experienceData.map((element, index) => {
            const experienceImageMap: { [key: string]: any } = {
              bulogo: bulogo,
              ktplogo: ktplogo,
              leslieslogo: leslieslogo,
              amazonlogo: amazonlogo,
              umasshospitallogo: umasshospitallogo,
              rsmlogo: rsmlogo,
            };
            return (
              <VerticalTimelineElement
                key={index}
                iconStyle={{
                  backgroundImage: `url(${experienceImageMap[element.icon]})`,
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
      )}
      <div className="skills">
        <p className="skills-list">
          <span className="skills-title">
            <strong>Technical Skills: </strong>
          </span>
          Python, HTML/CSS, JavaScript/TypeScript, React.js, Express.js,
          Node.js, MongoDB, Git, APIs, Pandas, Beautiful Soup, Web Scraping,
          Object-Oriented Programming, Data Structures, Algorithm Analysis and
          Design.
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
