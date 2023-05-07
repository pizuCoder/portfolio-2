// import myImg from "../assets/myImgMain.png";
// import headerImgLight from "../assets/priyamoghe-light-small.png";
// import headerImgDark from "../assets/priyamoghe-dark-small.png";
// import bigHeaderLight from "../assets/priyamoghe-light-web.png";
// import bigHeaderDark from "../assets/priyamoghe-dark-web.png";
import Button from "react-bootstrap/Button";
import sampleResume from "../resume/priyamoghe-SDE1.pdf";
import "./LandingPage.css";
import React from "react";

import githubDark from "../assets/github-icon-dark-small.png";
import githubLight from "../assets/github-icon-light-small.png";
import twtIcon from "../assets/twitter-icon-small.png";
import instaIcon from "../assets/insta-icon-small.png";
import behanceLight from "../assets/behance-icon-light-small.png";
import behanceDark from "../assets/behance-icon-dark-small.png";
import mailLight from "../assets/mail-icon-light-small.png";
import mailDark from "../assets/mail-icon-dark-small.png";

export default function LandingPage({ isDarkMode }) {
  const myImg = 'https://i.imgur.com/oDmViyl.jpeg'
  const headerImgLight = 'https://i.imgur.com/iHInJZE.png'
  const headerImgDark = 'https://i.imgur.com/3HoUd8u.png'
  const bigHeaderLight = 'https://i.imgur.com/2grOLbC.png'
  const bigHeaderDark = 'https://i.imgur.com/0mFGcXO.png'

  
  return (
    <>
      <div className="mob-container">
        <div className="mob-text-part">
            <div className="headerImg">
          <img
            src={isDarkMode ? headerImgLight : headerImgDark}
            alt="priya moghe"
          />
          </div>
          <p
            style={{ color: isDarkMode ? "#212529" : "white", fontSize:"1.5rem" }}
          >{`Namaste! I'm Priya, a junior frontend developer, UI/UX designer and graphic designer based in India. 
          I'm passionate about solving UX issues with clean code and innovative designs.`}</p>
        </div>

        <Button
          variant={isDarkMode ? "dark" : "light"}
          className="mob-btn"
          onClick={() =>
            window.scrollTo(
              0,
              document.getElementById("projects-section").offsetTop
            )
          }
        >
          VIEW PROJECTS
        </Button>
        {/* <a href={sampleResume} download="MyExampleDoc" target='_blank' rel="noreferrer" style={{ width:"100%"}}>
          <Button  variant = {isDarkMode ? "dark" : "light"} className="mob-btn">RESUME</Button>
        </a> */}
        <Button
          onClick={() => {
            window.open(sampleResume, "_blank");
          }}
          variant={isDarkMode ? "dark" : "light"}
          download="priyamoghe-resume"
          className="mob-btn"
        >
          RESUME
        </Button>

        <div class="mob-my-img">
          <img
            src={myImg}
            alt="priya standing"
            style={{ width: "70%", borderRadius: "1rem" }}
          />
        </div>
      </div>
      <div className="web-container">
        <div className="icons">
          <p>
            <a
              href="https://github.com/pizuCoder"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={isDarkMode ? githubDark : githubLight}
                alt="github icon"
              />
            </a>
          </p>
          {/* ----------------- */}
          <p>
            <a
              href="https://twitter.com/pizzaCoder"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twtIcon} alt="twitter" />
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/pizucoder/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instaIcon} alt="instagram" />
            </a>
          </p>
          <p>
            <a
              href="https://www.behance.net/priya_moghe"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={isDarkMode ? behanceDark : behanceLight}
                alt="behance icon"
              />
            </a>
          </p>
          <p>
            <a
              href="mailto:priyamoghe2299@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={isDarkMode ? mailDark : mailLight} alt="mail icon" />
            </a>
          </p>
        </div>
        <div className="web-text-btn">
          <div className="web-text-part">
          <div className="headerImg">
            <img
              src={isDarkMode ? bigHeaderLight : bigHeaderDark}
              alt="priya moghe"
              id="header-img"
            />
            </div>
            <p
              style={{ color: isDarkMode ? "#212529" : "white", fontSize: "1.5rem" }}
            >{`Namaste! I'm Priya, a junior frontend developer, UI/UX designer and graphic designer based in India. 
            I'm passionate about solving UX issues with clean code and innovative designs.`}</p>
          </div>
          <div className="web-btn-group">
            <Button
              variant={isDarkMode ? "dark" : "light"}
              className="btn"
              style={{ marginRight: "1em" }}
              onClick={() =>
                window.scrollTo(
                  0,
                  document.getElementById("projects-section").offsetTop
                )
              }
            >
              VIEW PROJECTS
            </Button>
            {/* <Button  variant = {isDarkMode ? "dark" : "light"} className="btn">
        <a href={sampleResume} download="MyExampleDoc" target='_blank' rel="noreferrer" >
          RESUME
        </a>
        </Button> */}
            <Button
              onClick={() => {
                window.open(sampleResume, "_blank");
              }}
              variant={isDarkMode ? "dark" : "light"}
              download="priyamoghe-resume"
              className="btn"
            >
              RESUME
            </Button>
          </div>
        </div>
        <div class="web-my-img">
          <img
            src={myImg}
            alt="priya standing"
            style={{ width: "50%", borderRadius: "1rem" }}
          />
        </div>
      </div>
    </>
  );
}
