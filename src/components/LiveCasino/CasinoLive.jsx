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

    const titlee = useSelector(
        (state) =>
            state.betbuqsport?.sliderApiHome?.result?.casino_live?.center["0"].title
    );
    const subTitlee = useSelector(
        (state) =>
            state.betbuqsport?.sliderApiHome?.result?.casino_live?.center["0"]
                .subtitle
    );
    const btn_txtt = useSelector(
        (state) =>
            state.betbuqsport?.sliderApiHome?.result?.casino_live?.center["0"]
                .btn_text
    );
    const btn_urll = useSelector(
        (state) =>
            state.betbuqsport?.sliderApiHome?.result?.casino_live?.center["0"].btn_url
    );
    const btn_targett = useSelector(
        (state) =>
            state.betbuqsport?.sliderApiHome?.result?.casino_live?.center["0"]
                .btn_target
    );
    const btn_activee = useSelector(
        (state) =>
            state.betbuqsport?.sliderApiHome?.result?.casino_live?.center["0"].active
    );

    const allDataCasinoLive = useSelector(
        (state) => state?.betbuqsport?.LiveCasino?.result
    );

    const [col, setCol] = useState("");

    const chngCol = () => {
        setCol("red");
    };
    return (
        <div style={{ background: "#313d42" }}>
            <div className="livecasino">
                <BannerLiveCasino
                    title={titlee}
                    subTitle={subTitlee}
                    btn_txt={btn_txtt}
                    btn_url={btn_urll}
                    btn_active={btn_activee}
                    btn_target={btn_targett}
                />
            </div>
            <div className="link">
                <div className="link-live">
                    <span onClick={chngCol} className="heart">
                        {" "}
                        <i style={{ color: `${col}` }} class="far fa-heart" />
                    </span>
                    <p>All Games</p>
                    {Object.keys(allDataCasinoLive?.categories || [])
                        .sort((a, b) => a.order < b.order)
                        .map((A, index) => (
                            <>
                                <p key={A.order || index} className={A?.replace(/\s+/g, "")}>
                                    {A}
                                </p>
                                <Slots slotetLiveCasino={allDataCasinoLive?.providers} A={A} />
                            </>
                        ))}
                </div>
                <div>
                    <h3>helo</h3>
                </div>
            </div>
        </div>
    );
}

export default CasinoLive;

const BannerLiveCasino = ({
    title,
    subTitle,
    btn_txt,
    btn_url,
    btn_active,
    btn_target,
}) => {
    return (
        <>
            <div className="live-casino-banner">
                <div className="banner_desc">
                    <h4>{title}</h4>
                    <h6>{subTitle}</h6>
                    <Link
                        className={btn_txt && btn_txt.split(" ")[0]}
                        to={btn_url}
                        target={btn_target}
                    >
                        <button>{btn_txt}</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

function Slots({ slotetLiveCasino, A }) {
    console.log("slotetLiveCasino", slotetLiveCasino);
    console.log("ABC", A);

    return (
        <>
            {Object.values(slotetLiveCasino || {}).map((Y) => (
                <>
                    {Object.values(Y["slots"]).map((E) => (
                        <>
                            <h2>{E?.categories?.name}</h2>

                            {E.name === A.name && <img src={E.desktop_logo} alt="" />}
                        </>
                    ))}
                </>
            ))}
        </>
    );
}
