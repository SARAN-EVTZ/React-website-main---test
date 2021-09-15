import React from "react";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  // FaPlay,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <img src="/images/logo.png" alt="" />
              </div>
              <p>
                Thank for watching this website. I hope you find the things what you want.
                We provided lot of good things at resanable prices with best quality and with
                best Designs.I hope you are all happy to see this website and go through it.
              </p>
              <ul className="contactCircles">
                <li><a href="https://www.youtube.com/c/jamesqquick">
                  <FaPhoneAlt className="contactIcon" />
                  </a>
                </li>
                <li><a href="https://www.youtube.com/c/jamesqquick">
                  <FaFacebookF className="contactIcon" />
                  </a>
                </li>
                <li><a href="https://www.youtube.com/c/jamesqquick">
                  <FaInstagram className="contactIcon" />
                  </a>
                </li>
                <li><a href="https://www.youtube.com/c/jamesqquick">
                  <FaTwitter className="contactIcon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
