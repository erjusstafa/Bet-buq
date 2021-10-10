import React from "react";
import image from "../../images/images";
import { Link } from "react-router-dom";

const MiddleMenu = ({ allConfig }) => {
  return (
    <div className="image-menu">
      <img
        src={
          allConfig.getSlider &&
          (image["banner2"] || allConfig.slider["slider2"].image_url)
        }
        alt="banner2"
      />
      {allConfig.getSlider ? (
        <span>
          <h1>{allConfig.slider["slider2"].title}</h1>
          <p>{allConfig.slider["slider2"].subtitle}</p>
          <Link
            to={allConfig.slider["slider2"].btn_url}
            target={allConfig.slider["slider2"].btn_target}
            className="button__Link"
          >
            {allConfig.slider["slider2"].btn_text}
          </Link>
        </span>
      ) : null}
    </div>
  );
};

export default MiddleMenu;
