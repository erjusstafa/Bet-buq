import React, { useEffect, useState } from "react";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { LiveCasinoApi, sortData } from "../../redux-toolkit/store/store";
import BannerLiveCasino from "./BannerLiveCasino";
import LoadedCasino from "./LoadedCasino";
import AllSlots from "./AllSlots";
import ItemSlots from "./ItemSlots";
import ModalCasino from "./ModalCasino";

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
        isActiveText: "",
    });

    const ChangeIndex = (id, name) => {
        setMyIndex({ isActive: id, isActiveText: name });
        setColorHeart("red");
    };

    const SortDataSlots = () => {
        dispatch(sortData(myindex));
    };

    const [modalOpen, setModalOpen] = useState(false);

    //icon
    let heartIcon = "far fa-heart";
    let searchIcon = "fas fa-search";
    let alignRight = "fas fa-align-right";
    let searchFor = "Search for a game";
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
                                <span
                                    onClick={() => ChangeIndex()}
                                    className={
                                        "heart " +
                                        (myindex.idAllGames === myindex.isActive ? "active" : "")
                                    }
                                >
                                    {" "}
                                    <i
                    /* style={{ color: `${colorHeart}` }} */ className={
                                            heartIcon
                                        }
                                    />
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
                                    /* .sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1) */
                                    .map((A) => {
                                        return (
                                            <>
                                                <p
                                                    key={A.id}
                                                    onClick={() => ChangeIndex(A.id, A.name)}
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

                            <div className="search-game">
                                <span className="search">
                                    <i className={searchIcon} />
                                    <p>{searchFor}</p>
                                </span>
                                <span
                                    className="provider "
                                    onClick={() => {
                                        setModalOpen(true);
                                    }}
                                >
                                    <p>Providers</p>
                                    <i className={alignRight} />
                                </span>
                            </div>
                        </div>
                        {modalOpen && (
                            <ModalCasino
                                setOpenModal={setModalOpen}
                                allDataCasinoLive={allDataCasinoLive}
                                searchFor={searchFor}
                                searchIcon={searchIcon}
                                alignRight={alignRight}
                            />
                        )}
                        <ToggleSlots
                            Slots={allDataCasinoLive}
                            myindex={myindex.isActive}
                            heartIcon={heartIcon}
                            mytxt={myindex.isActiveText}
                            SortDataSlots={SortDataSlots}
                            kot={myindex.idAllGames}
                        />
                    </div>
                </>
            )}
        </>
    );
}

export default CasinoLive;

const ToggleSlots = ({ Slots, myindex, heartIcon, mytxt, SortDataSlots, kot }) => {
    return (
        <div className="Slot">
            <div className="sort-category">
                {myindex ? (
                    <>
                        <h2>{mytxt}</h2>
                        <span>
                            <p>Sort By</p>
                            <h3 onClick={SortDataSlots}>A-Z</h3>
                        </span>
                    </>
                ) : (
                    <>{kot && <h4>Top Games</h4>}</>
                )}
            </div>
            <div className="slot-images">
                {Object.values(Slots?.providers || {}).map((T) => (
                    <>
                        {Object.values(T?.slots || {}).map((F, f) => {
                            return (
                                <>
                                    {myindex
                                        ? Object.values(
                                            JSON.parse(F.categories || "{}")
                                                .filter((Y) => Y.id === myindex)
                                                .map((R) => (
                                                    <>
                                                        {R.id === myindex && (
                                                            <ItemSlots R={R} F={F} heartIcon={heartIcon} />
                                                        )}
                                                    </>
                                                ))
                                        )
                                        : Object.values(
                                            JSON.parse(F.categories || "{}")
                                                .map((R) => (
                                                    <>
                                                        {
                                                            R.name === "Top Games" && <div>

                                                                <AllSlots
                                                                    catId={R.id}
                                                                    R={R}
                                                                    F={F}
                                                                    heartIcon={heartIcon}
                                                                /></div>
                                                        }
                                                        {
                                                            R.name === "Roulette" && <div>

                                                                <AllSlots
                                                                    catId={R.id}
                                                                    R={R}
                                                                    F={F}
                                                                    heartIcon={heartIcon}
                                                                /></div>
                                                        }

                                                    </>
                                                ))
                                        )}
                                </>
                            );
                        })}
                    </>
                ))}
            </div>
        </div>
    );
};
