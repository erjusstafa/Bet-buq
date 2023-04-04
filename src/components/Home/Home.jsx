import React from "react";
import "./style.scss";
import image from "../../images/images";
import SliderHome from "./SliderHome";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const linkSlot = useSelector((state) => state.betbuqsport.bet.allConfig.linkSlots);
  const BetLiveBook = [
    {
      title: "Card Label",
      img: image["b1"],
      text:"Some representative placeholder"
    },
     {
      title: "Card Label",
      img: image["b2"],
      text:"Some representative placeholder"
    },
    {
      title: "Card Label",
      img: image["b3"],
      text:"Some representative placeholder"
    }

  
  ];

  const displayBanner = true;
  return (
    <>
      <SliderHome displayBanner={displayBanner} />
      <SlotHome linkSlot={linkSlot} />
      <CardSlot BetLiveBook={BetLiveBook} />
    </>
  );
}
export default Home;

function SlotHome({ linkSlot }) {
  return (
    <>
      <div className="slotHome">
        <div className="slotHome__all">
          {linkSlot &&
            Object.values(linkSlot)
              .sort((a, b) => (a.name === b.name ? 0 : a.name > b.name ? 1 : -1))
              .map((I, index) => (
                <Link to={I.link} key={index} className="all__link">
                  <i className={I ? I.icon : ""} />
                  <span>
                    <h2>{I.name}</h2>
                    <p>{I.title}</p>
                  </span>
                </Link>
              ))}
        </div>
      </div>
    </>
  );
}

function CardSlot({ BetLiveBook }) {
  return (
    <div className="card">
      <div className="card__all">
        {BetLiveBook &&
          Object.values(BetLiveBook).map((B,index) => {
          return  <div className="content" key={index}>
              <img src={B.img} alt="" />
              <h4>{B.title}</h4>
              <p>{B.text}</p>
              <Link to="/" className="play__btn">
                {" Play Now"} 
              </Link>
            </div>
        })}
      </div>
    </div>
  );
}
