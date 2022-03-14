import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/scrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";


const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}<i className={props.icon1}/><i className={props.icon2}/><i className={props.icon3}/><i className={props.icon4}/></span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React Js", ratingPercentage: 85 },
    { skill: "Oracle PL/SQL", ratingPercentage: 80 },
    { skill: "Oracle APEX", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];
  const projectsDetails = [
    {
      title: "Personal Portfolio WebSite",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Biggest project from my repositories section created while practicing and learning new features from this great library which is React.",
      subHeading: "Technologies Used: ",
      icon1 : "fab fa-react",
      icon2 : "fab fa-js-square",
      icon3 : "fab fa-html5",
      icon4 : "fab fa-css3-alt"
    },
    {
      title: "Coronavirus Cases Tracker",
      duration: { fromDate: "2019", toDate: "2019" },
      description:
        "React js project created in order to track coronavirus cases around the world.",
      subHeading: "Technologies Used: ",
      icon1 : "fab fa-react",
      icon2 : "fab fa-js-square",
      icon3 : "fab fa-html5",
      icon4 : "fab fa-css3-alt"
    },
    {
      title: "STEAM Interactive Books",
      duration: { fromDate: "2019", toDate: "2020" },
      description:
        "Web App created during my College Community Service, implementing React js as client side and Java Spring Boot for server side.",
      subHeading: "Technologies Used: ",
      icon1 : "fab fa-react",
      icon2 : "fab fa-js-square",
      icon3 : "fab fa-html5",
      icon4 : "fab fa-css3-alt"

    },
  ];
  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Universidad Latina de Costa Rica"}
        subHeading={"BACHELOR OF SYSTEMS ENGINEERING"}
        fromDate={"2016"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"CertiProf"}
        subHeading={"SCRUM FOUNDATION PROFESSIONAL CERTIFICATE"}
        fromDate={"2019"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"Instituto Nacional de Aprendizaje"}
        subHeading={"ENGLISH FOR CUSTOMER SERVICE"}
        fromDate={"2019"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"Instituto Nacional de Aprendizaje"}
        subHeading={"WEB DEVELOPMENT, TECHNICIAN"}
        fromDate={"2015"}
        toDate={"2016"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Legadmi Consulting & System"}
          subHeading={"JUNIOR ORACLE DEVELOPER"}
          fromDate={"2021"}
          toDate={"present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          Create online services and apps hosted on cloud with Oracle
          DataBase as well as Oracle APEX.
          </span>
        </div>
        
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Tek Experts"}
          subHeading={"AZURE API MANAGEMENT SUPPORT ENGINEER"}
          fromDate={"2021"}
          toDate={"May,2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          Be part of a break-and-fix team providing support about
          Microsoft Azure API Management
          </span>
        </div>
      </div>

    </div>,
    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
          icon1={projectsDetails.icon1}
          icon2={projectsDetails.icon2}
          icon3={projectsDetails.icon3}
          icon4={projectsDetails.icon4}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Soccer"
        description="Apart from being a tech enthusiast and a code writer, I also love to share time with my friends playing soccer once a week."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to music is something I can never compromise with, Spotify is one of the apps that I use the most every day."
      />
      <ResumeHeading
        heading="Video Games"
        description="Playing video games with my friends is a way to do something diferrent from the routine and a thing that I really enjoy."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
