import React from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import image from "../../images/images";
import { Link } from "react-router-dom";
import allConfig from "../../config/allConfig";

const contentStyle = {
  width: "100%",
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  objectFit: "cover",
};

const SliderHome = ({ displayBanner }) => {
  const dotPosition = "right";
  const easing = "linear";
  const effect = "fade"

  return (
    <>
      {displayBanner ? (
        <Carousel dotPosition={dotPosition} effect={effect} autoplay easing={easing}>
          <div className="banner1">
            <img
              style={contentStyle}
              src={allConfig.getSlider && (image["1"] )}
              alt="banner1"
            />
            {allConfig.getSlider ? (
              <span>
                <h1>{allConfig.slider["slider1"].title}</h1>
                <p>{allConfig.slider["slider1"].subtitle}</p>
                <Link
                  to={allConfig.slider["slider1"].btn_url}
                  target={allConfig.slider["slider1"].btn_target}
                  className="button__Link"
                >
                  {allConfig.slider["slider1"].btn_text}
                </Link>
              </span>
            ) : null}
          </div>
          <div className="banner2">
            <img
              style={contentStyle}
              src={allConfig.getSlider && (image["2"] )}
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
          <div className="banner3">
            <img
              style={contentStyle}
              src={allConfig.getSlider && (image["3"] )}
              alt="banner3"
            />
            {allConfig.getSlider ? (
              <span>
                <h1>{allConfig.slider["slider3"].title}</h1>
                <p>{allConfig.slider["slider3"].subtitle}</p>
                <Link
                  to={allConfig.slider["slider3"].btn_url}
                  target={allConfig.slider["slider3"].btn_target}
                  className="button__Link"
                >
                  {allConfig.slider["slider3"].btn_text}
                </Link>
              </span>
            ) : null}
            
          </div>
        </Carousel>
      ) : (
        <Carousel dotPosition={dotPosition} autoplay easing={easing}>
          <div className="banner1">
            <img style={contentStyle} src={allConfig.getSlider && image["sliderCasino1"]} alt="banner1" />
            {allConfig.getSlider ? (
              <span>
                <h1>{allConfig.slider["slider1"].title}</h1>
                <p>{allConfig.slider["slider1"].subtitle}</p>
                <Link
                  to={allConfig.slider["slider1"].btn_url}
                  target={allConfig.slider["slider1"].btn_target}
                  className="button__Link"
                >
                  {allConfig.slider["slider1"].btn_text}
                </Link>
              </span>
            ) : null}
          </div>
          <div className="banner2">
            <img style={contentStyle} src={allConfig.getSlider && image["sliderCasino2"]} alt="banner2" />
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
          <div className="banner2">
            <img style={contentStyle} src={allConfig.getSlider && image["sliderCasino3"]} alt="banner2" />
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

          <div className="banner3">
            <img style={contentStyle} src={allConfig.getSlider && image["sliderCasino3"]} alt="banner3" />
            {allConfig.getSlider ? (
              <span>
                <h1>{allConfig.slider["slider3"].title}</h1>
                <p>{allConfig.slider["slider3"].subtitle}</p>
                <Link
                  to={allConfig.slider["slider3"].btn_url}
                  target={allConfig.slider["slider3"].btn_target}
                  className="button__Link"
                >
                  {allConfig.slider["slider3"].btn_text}
                </Link>
              </span>
            ) : null}
          </div>
        </Carousel>
      )}
    </>
  );
};
export default SliderHome;
