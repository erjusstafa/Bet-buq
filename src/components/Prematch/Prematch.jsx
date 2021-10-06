import React, { useEffect } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import allConfig from "../../config/allConfig";
import { PrematchApi } from "../../redux-toolkit/store/store";
import { Link } from "react-router-dom";
import LeftMenu from "./LeftMenu";
import MiddleMenu from "./MiddleMenu";

function Prematch() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(PrematchApi());
    }, [dispatch]);
    return (
        <div
            className={allConfig["defaults"].prematchExist ? allConfig["routes"]["Prematch"]["name"].toLocaleLowerCase() : ""}
        >
            <div className="sport__max">
                <div className="navigation-container">
                    <div className="navigation-container-wrapper">
                        {Object.values(allConfig.NavigationWrapper || []).map((N) => (
                            <>
                                <Link className={N.text.toLowerCase().replace(" ", "-")} to={N.link}>
                                    {N.text}
                                </Link>
                            </>
                        ))}
                    </div>
                    <span>Help</span>
                </div>

                <div className="all-container-sportbook">
                    <div className="left-menu-sportbook">
                        <LeftMenu descTextBox={allConfig.descriptionBox} />
                    </div>

                    <div className="middle-menu-sportbook">
                        <MiddleMenu allConfig={allConfig} />
                    </div>
                    {/*  <div className="right-menu-sportbook">
                        <div className="sport-menu-toggle">
                            <p>Sports Menu</p>
                            <i className="fas fa-align-right" />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Prematch;
