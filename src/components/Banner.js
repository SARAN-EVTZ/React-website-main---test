import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "MUDITH'S STORE",
    text:
      "Here you can find all types of clothing for men and women & Garments",
    image: "/images/man-01.png",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li><a href="https://www.youtube.com/c/jamesqquick">
                    <FaFacebookF className="headerIcon" />
                    </a>
                  </li>
                  <li><a href="https://www.youtube.com/c/jamesqquick">
                    <FaTwitter className="headerIcon" />
                    </a>
                  </li>
                  <li><a href="https://www.youtube.com/c/jamesqquick">
                    <FaPinterest className="headerIcon" />
                    </a>

                  </li>
                  <li><a href="https://www.youtube.com/c/jamesqquick">
                    <FaInstagram className="headerIcon" />
                    </a>
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="" className="btn btn-outline">
                    My Portfolio
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="https://www.youtube.com/c/jamesqquick" className="btn btn-smart">
                    <FaPlay className="play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
