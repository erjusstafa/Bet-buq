import React, { useEffect, useState } from "react";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { LiveCasinoApi } from "../../redux-toolkit/store/store";
import BannerLiveCasino from "./BannerLiveCasino";
import { Link } from "react-router-dom";
import LoadedCasino from "./LoadedCasino";

function CasinoLive() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LiveCasinoApi());
        setLoading(false);
    }, [dispatch]);

    const bannerCasinoLive = useSelector(
        (state) => state.betbuqsport.sliderApiHome.result?.casino_live
    );

    const allDataCasinoLive = useSelector(
        (state) => state?.betbuqsport?.LiveCasino?.result
    );

    const [isLoading, setLoading] = useState(true);
    const [colorHeart, setColorHeart] = useState("");
    const [myindex, setMyIndex] = useState({
        favouriteId: (Math.random() * 1000).toFixed(),
        idAllGames: (Math.random() * 1000).toFixed(),
        isActive: null,
    });

    localStorage.getItem("myindex")

    useEffect(() => {
        localStorage.setItem("myindex", myindex.idAllGames)

    })

    let [txt, setTxt] = useState("");

    const ChangeIndex = (id) => {
        setMyIndex({ isActive: id });
        setColorHeart("red");
    };

    let heartIcon = "far fa-heart";
    return (
        <>
            {isLoading ? (
                <LoadedCasino />
            ) : (
                <>
                    <div className="livecasino">
                        {Object.values(bannerCasinoLive || {}).map((B, b) => (
                            <BannerLiveCasino B={B} b={b} />
                        ))}
                    </div>
                    <div style={{ background: "#313d42" }}>
                        <div className="link">
                            <div className="link-live">
                                <span onClick={() => ChangeIndex()} className="heart">
                                    {" "}
                                    <i style={{ color: `${colorHeart}` }} className={heartIcon} />
                                </span>

                                <p
                                    onClick={() => ChangeIndex()}
                                    className={
                                        "all-games " +
                                        (myindex.isActive === myindex.idAllGames ? "active" : "")
                                    }
                                >
                                    All Games
                                </p>
                                {Object.values(allDataCasinoLive?.categories || {})
                                    .sort((a, b) => a.order < b.order)
                                    .map((A) => {
                                        setTxt = A.name;

                                        console.log("txtx", setTxt);
                                        return (
                                            <>
                                                <p
                                                    key={A.id}
                                                    onClick={() => ChangeIndex(A.id)}
                                                    className={
                                                        A?.name
                                                            .split(" ")[0]
                                                            .replace(/\s+/g, "")
                                                            .toLowerCase() +
                                                        (myindex.isActive === A.id ? " active" : "")
                                                    }
                                                >
                                                    {A.name}
                                                </p>
                                            </>
                                        );
                                    })}
                            </div>

                            <h3>helo</h3>
                        </div>
                        <ToggleSlots
                            Slots={allDataCasinoLive}
                            myindex={myindex.isActive}
                            heartIcon={heartIcon}
                            txt={setTxt}
                        />
                    </div>
                </>
            )}
        </>
    );
}

export default CasinoLive;

const ToggleSlots = ({ Slots, myindex, heartIcon, txt }) => {
    return (
        <div className="Slot">
            {Slots &&
                Object.values(Slots?.providers || {}).map((T) => (
                    <>
                        {Object.values(T?.slots || {}).map((F, f) => {
                            return (
                                <>
                                    {myindex
                                        ? Object.values(
                                            JSON.parse(F.categories || "{}")
                                                .filter((Y) => Y.id === myindex)
                                                .map((R) => (
                                                    <div className="item-slots" key={R.id}>
                                                        <Link to="/kot" className="link-slot">
                                                            <img src={F.desktop_logo} alt="" />
                                                        </Link>

                                                        <span className="span">
                                                            <p>{F.name}</p>
                                                            <i
                                                                className={heartIcon}
                                                                style={{ marginTop: "-11px" }}
                                                            />
                                                        </span>
                                                    </div>
                                                ))
                                        )
                                        : Object.values(
                                            JSON.parse(F.categories || {})
                                                .map((R) => (
                                                    <>
                                                        {console.log("R.name", R.name)}

                                                        <div className="item-slots-all" key={R.id}>
                                                            <Link to="/kot" className="link-slot-all">
                                                                <img src={F.desktop_logo} alt="" />
                                                            </Link>

                                                            <span className="span">
                                                                <p>{F.name}</p>
                                                                <i
                                                                    className={heartIcon}
                                                                    style={{ marginTop: "-11px" }}
                                                                />
                                                            </span>
                                                        </div>
                                                    </>
                                                ))
                                        )}
                                </>
                            );
                        })}
                    </>
                ))}
        </div>
    );
};
