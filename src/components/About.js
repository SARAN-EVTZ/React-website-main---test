import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Us",
    text:
      " We have a lot of products for men and women and also kid for Retail price. \
        Here You got all products at flexible and resanable price with best quality.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Mudith Sahu" },
    { id: 2, title: "Email:", text: "mudithsahu@gmail.com" },
    { id: 3, title: "Phone:", text: "+91 9154604767" },
    { id: 4, title: "Adress", text: "Postoffice street, palasa"
     },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/man-02.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
              When planning your wardrobe, it helps to coordinate and accessorize everything
              from head-to-toe. Here's a great checklist of all the different types of clothing 
              for women and men.
              <p>Men's clothes
              suits: Suits can be worn by men a women suit are different to a mans suit.
              waistcoats: Are worn with a suit although women tend not to wear them.
              long-sleeved: Shirts Shirts are worn with suits, but also can be worn with trousers or jeans.
              short-sleeved shirts:
              ties: Ties are worn with shirts and also when wearing a suit.</p>
              </div>
              <div className="about__info-p2">
              <p>Women's clothes
              dresses: A garment for women and girls, that consists of bodice and skirt in one piece.
              blouses: Worn with a women's suit or with a skirt.
              skirts: Skirts are only from the waist down and can vary in length.
              tank-tops: A item of clothing that as no arms and has shoulder straps.</p>

              <p>Baby clothes
              nappies: Used on babies till they are toilet trained.
              Baby grows: Covers the whole body and is fastened on the back.
              dummies: To help sooth babies.</p>
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
