import React from "react";
import "./style.scss";
import image from "../../images/images";
import SliderHome from "./SliderHome";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  /*     const link = useSelector((state) => state.betbuqsport.bet.allConfig.routes); */
  const linkSlot = useSelector(
    (state) => state.betbuqsport.bet.allConfig.linkSlots
  );
  const BetLiveBook = useSelector(
    (state) => state.betbuqsport.sliderApiHome?.result?.landing_page?.mini
  );

  return (
    <>
      <SliderHome />
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
              .sort((a, b) =>
                a.name === b.name ? 0 : a.name > b.name ? 1 : -1
              )
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
          Object.values(BetLiveBook).map((B) => (
            <div className="content" key={B.order}>
              <img src={image.gonzoa} alt="" />
              <h4>{B.title}</h4>
              <p>{B.subtitle}</p>
              <Link to="/" className="play__btn">
                {" "}
                {B.btn_text}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
