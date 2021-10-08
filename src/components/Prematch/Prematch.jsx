import React, { useEffect, useState } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import allConfig from "../../config/allConfig";
import { PrematchApi } from "../../redux-toolkit/store/store";
import { Link } from "react-router-dom";
import LeftMenu from "./LeftMenu";
import MiddleMenu from "./MiddleMenu";
import RightMenu from "./RightMenu";

function Prematch() {
    const dispatch = useDispatch();
    const [iconSport, setIconSport] = useState(false);

    const toggleIcon = () => {
        setIconSport(!iconSport);
    };
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
                        {Object.values(allConfig.NavigationWrapper || []).map((N, index) => (
                            <>
                                <Link key={index} className={N.text.toLowerCase().replace(" ", "-")} to={N.link}>
                                    {N.text}
                                </Link>
                            </>
                        ))}
                    </div>
                    <span>
                        <i className="fas fa-question" />
                        Help
                    </span>
                </div>

                <div className={!iconSport ? "all-container-sportbook" : "all-container-sportbook-toggle"}>
                    <div className={!iconSport ? "left-menu-sportbook" : "toggle-sport"}>
                        <LeftMenu allConfig={allConfig} iconSport={iconSport} toggleIcon={toggleIcon} />
                    </div>

                    <div className={!iconSport ? "middle-menu-sportbook" : "middle"}>
                        <MiddleMenu allConfig={allConfig} />
                    </div>
                    <div className="right-menu-sportbook">
                        <RightMenu allConfig={allConfig} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Prematch;
