import React, { useEffect, useState } from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LiveCasinoApi } from "../../redux-toolkit/store/store";

function CasinoLive() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LiveCasinoApi());
    }, [dispatch]);

    const bannerCasinoLive = useSelector(
        (state) => state.betbuqsport.sliderApiHome.result?.casino_live
    );

    const allDataCasinoLive = useSelector(
        (state) => state?.betbuqsport?.LiveCasino?.result
    );

    const [colorHeart, setColorHeart] = useState("");
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState(false);
    const [myindex, setMyIndex] = useState({ isActive: 0 });

    const ChangeIndex = (id) => {
        setMyIndex({ isActive: id });
    };
    const [category, setCategory] = useState(allDataCasinoLive);

    const changeCategory = (category) => {
        setCategory(category);
    };

    console.log("category", category);

    const chngColorHeart = () => {
        setColorHeart("red");
    };

    return (
        <div style={{ background: "#313d42" }}>
            <div className="livecasino">
                {Object.values(bannerCasinoLive || {}).map((B) => (
                    <BannerLiveCasino B={B} />
                ))}
            </div>
            <div className="link">
                <div className="link-live">
                    <span onClick={chngColorHeart} className="heart">
                        {" "}
                        <i style={{ color: `${colorHeart}` }} className="far fa-heart" />
                    </span>

                    <p
                        onClick={() => setActive(true)}
                        className={"all-games " + (active ? "active" : "")}
                    >
                        All Games
                    </p>
                    {Object.values(allDataCasinoLive?.categories || [])
                        .sort((a, b) => a.order < b.order)
                        .map((A) => (
                            <>
                                <p
                                    key={A.id}
                                    onClick={() => ChangeIndex(A.id)}
                                    className={
                                        "categories" /* || (A?.name.replace(/\s+/g, "")) */ +
                                        (myindex.isActive === A.id ? " active" : "")
                                    }
                                >
                                    {A.name}
                                </p>
                            </>
                        ))}
                </div>
                <div>
                    <h3>helo</h3>
                </div>
            </div>
            <Kot Slots={allDataCasinoLive} toggle={toggle} />
        </div>
    );
}

export default CasinoLive;

const BannerLiveCasino = ({ B }) => {
    return (
        <>
            <div className="live-casino-banner">
                <div className="banner_desc">
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

function Kot({ Slots, toggle }) {
    return (
        <div className="Slot">
            <TogggleSlots toggle={toggle} Slots={Slots} />
        </div>
    );
}

const TogggleSlots = ({ toggle, Slots }) => {
    return (
        <>
            {!toggle && (
                <>
                    (
                    {Slots &&
                        Object.values(Slots?.providers || {}).map((S, index) => (
                            <>
                                {Object.values(S?.slots).map((T) => (
                                    <>
                                        {console.log("TT", T)}

                                        <img src={T.desktop_logo} alt="" />
                                    </>
                                ))}
                            </>
                        ))}
                    )
                </>
            )}
        </>
    );
};
