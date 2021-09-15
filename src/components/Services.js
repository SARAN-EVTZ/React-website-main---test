import React from "react";
import {
  FaHatCowboy,
  FaWpbeginner,
  FaOdnoklassnikiSquare,
  FaBaseballBall,
  FaRing,
  FaCar,
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text:
      "Here we can provide all types of Clothings for men and women, Garments for women and , gaming toys for kids.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaHatCowboy className="commonIcons" />,
      heading: "Men's Wear",
      text:
        "Here you can find different types, different brands of jeans and T-shirts\
        Shutings and Shirt's",
    },
    {
      id: 2,
      icon: <FaWpbeginner className="commonIcons" />,
      heading: "Women's Wear",
      text:
        "Here you can find different types of Kurthis, Leggings, Night dresses\
        all items for ladies",
    },
    {
      id: 3,
      icon: <FaOdnoklassnikiSquare className="commonIcons" />,
      heading: "Kid's Wear",
      text:
        "Here you can find Children's clothings like dresses for both Boys and \
        girls, and all types of kid's Wear",
    },
    {
      id: 4,
      icon: <FaBaseballBall className="commonIcons" />,
      heading: "Sports Wear",
      text:
        "Here you can find Different types of branded sports trags and T-shirts\
        and gym wear for both Men and Women",
    },
    {
      id: 5,
      icon: <FaRing className="commonIcons" />,
      heading: "Garments",
      text:
        "Here you can find different types of garments like Chains and different Metal items\
        Ear Rings And Rings for Women.",
    },
    {
      id: 6,
      icon: <FaCar className="commonIcons" />,
      heading: "Kids Gaming Toys",
      text:
        "Here you can find different gaming toy's for kids like Remot Control cars and different\
        toys for boys and girls",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
