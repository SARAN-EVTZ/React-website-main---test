import React from "react";

const Prices = () => {
  const [header] = React.useState({
    mainHeader: "OUR PRODUCTS",
    subHeading: "LOOK INTO PRODUCTS",
    text:
      "we have a lot of products for Men and Women and also for Kids. We have a special Garments for Women and Men.",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "MEN SPACE",
      // price: 50,
      msg1: "Hawaiin Shirts",
      msg2: "Sleeveless shirt",
      msg3: "Jeans & T-shirts",
      msg4: "Suit's & Blazer",
      msg5: "Wallet & watches",
    },
    {
      id: 2,
      heading: "WOMEN SPACE",
      // price: 80,
      msg1: "Sweater & T-shirts",
      msg2: "Dress & Dress Pants",
      msg3: "Long-Sleeve Tops",
      msg4: "Hoodie & Jeans",
      msg5: "Long Coats & Skirts",
    },
    {
      id: 3,
      heading: "KIDS SPACE",
      // price: 160,
      msg1: "T-shirts & Shorts",
      msg2: "Jeans and Shirts",
      msg3: "Mittens",
      msg4: "Baby aprons and Socks",
      msg5: "Kurthis and pants",
    },
  ]);
  return (
    <div className="prices">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id}>
              <div className="price">
                <div className="priceHeading">${prices.heading}</div>
                <div className="price__rs">
                  <span>@</span>
                  {prices.price}
                </div>
                <ul>
                  <li>{prices.msg1}</li>
                  <li>{prices.msg2}</li>
                  <li>{prices.msg3}</li>
                  <li>{prices.msg4}</li>
                  <li>{prices.msg5}</li>
                </ul>
                <div className="price__btn">
                  <a href="" className="btn btn-outline">
                    Purchase
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
