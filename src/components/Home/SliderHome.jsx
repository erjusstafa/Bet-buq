import React from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import image from "../../images/images";

const contentStyle = {
    width: "100%",
    height: "400px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
};



const SliderHome = () => {
    const dotPosition = "right";

    return (
        <>
            <Carousel dotPosition={dotPosition} autoplay easing="linear">
                <div>
                    <img style={contentStyle} src={image["banner1"]} alt="banner1" />
                </div>
                <div>
                    <img style={contentStyle} src={image["banner2"]} alt="banner2" />
                </div>
            </Carousel>
        </>
    );
};
export default SliderHome
