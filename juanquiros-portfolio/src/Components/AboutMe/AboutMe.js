import "./AboutMe.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/scrollService";
import Animations from "../../utilities/Animations";

const AboutMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONST = {
    description:
    "Enthusiastic systems engineer with junior level understanding of entire software development lifecycle. Professional junior Oracle developer and self taught Front-End Developer with technologies such as React Js. Passionate about learning every single thing on my way to become a full stack engineer",
    highlights: {
      bullets: [
        "Systems Engineer",
        "Junior Front End Developer",
        "HTML, CSS, JavaScript, ReactJs",
        "Junior Oracle PL/SQL Developer",
        "Junior Oracle APEX Developer",
      ],
      heading: "Here are a Few Highlights:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONST.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
          <span>{value}</span>
      </div>
    ));
  };
  return (
    <div className="about-me-container screen-container fade-in"  id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONST.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONST.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              > Hire Me </button>
              <a href="JuanQuiros.pdf" download="Juan Quiros Resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
