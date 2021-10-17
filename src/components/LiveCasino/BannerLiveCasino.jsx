import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import allConfig from "../../config/allConfig";
import SliderHome from "../Home/SliderHome";
const BannerLiveCasino = ({ B, b }) => {
  return (
    <Fragment>
      {window.location.href.match(
        `http://localhost:3000${allConfig.routes["LiveCasino"]["link"]}`
      ) && (
        <div className="live-casino-banner" key={b}>
          <div className="banner_desc" key={b}>
            <h4>{B[0].title}</h4>
            <h6>{B[0].subtitle}</h6>
            <Link
              className={B[0].btn_text && B[0].btn_text.split(" ")[0]}
              to={B[0].btn_url}
              target={B[0].btn_target}
            >
              <button>{B[0].btn_text}</button>
            </Link>
          </div>
        </div>
      )}

      {window.location.href.match(
        `http://localhost:3000${allConfig.routes["Casino"]["link"]}`
      ) && <SliderHome />}
    </Fragment>
  );
};

export default BannerLiveCasino;
