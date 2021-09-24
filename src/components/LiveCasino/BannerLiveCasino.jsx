import React from "react"
import { Link } from "react-router-dom";


const BannerLiveCasino = ({ B, b }) => {
    return (
        <>
            <div className="live-casino-banner">
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
        </>
    );
};


export default BannerLiveCasino