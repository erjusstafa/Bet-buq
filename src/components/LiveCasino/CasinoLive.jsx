import React, { useEffect, useState } from "react";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { LiveCasinoApi } from "../../redux-toolkit/store/store";
import BannerLiveCasino from "./BannerLiveCasino";
import LoadedCasino from "./LoadedCasino";
import AllSlots from "./AllSlots";
import ItemSlots from "./ItemSlots";
import ModalCasino from "./ModalCasino";
import Providers from "./Providers";
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

    const logIn = useSelector((state) => state.betbuqsport.userLog);

    const [isLoading, setLoading] = useState(true);
    const [colorHeart, setColorHeart] = useState("");

    const [myindex, setMyIndex] = useState({
        favouriteId: (Math.random() * 10000000).toFixed(),
        idAllGames: (Math.random() * 1000).toFixed(),
        isActive: null,
        isActiveText: "",

    });

    /*  const uniqueList = [
         "All",
         ...new Set(
             Object.values(allDataCasinoLive?.categories || {}).map(m => {
                 return m.name; 
             })
         ),
 
     ];
 
 
     const [menuData, setMenuData] = useState(allDataCasinoLive?.categories);
 
 
     const filterItem = (category) => {
         if (category === "All") {
             setMenuData(allDataCasinoLive?.categories);  
             return;
         }
 
         else {
             const updatedList = allDataCasinoLive?.categories.filter((m) => {
                 return m.name === category; 
             });
 
             setMenuData(updatedList);
         }
     };
  */

    console.log("favouriteId", myindex.favouriteId);
    console.log("idAllGames", myindex.idAllGames);

    const ChangeIndex = (id, name) => {
        setMyIndex({ isActive: id, isActiveText: name });
        /* setColorHeart("red"); */
    };

    //load more
    const [loadMore, setLoadMore] = useState({ load: 3 });

    const moreSlots = () => {
        setLoadMore({ load: loadMore.load + loadMore.load });
    };

    //modal
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
                                        (myindex.isActive !== myindex.favouriteId ||
                                            myindex.idAllGames !== myindex.favouriteId
                                            ? "active"
                                            : "")
                                    }
                                >
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
                            loadMore={loadMore.load}
                            loadKey={loadMore}
                            moreSlots={moreSlots}
                        />
                    </div>
                </>
            )}
        </>
    );
}

export default CasinoLive;

const ToggleSlots = ({
    Slots,
    myindex,
    heartIcon,
    mytxt,
    loadMore,
    loadKey,
    moreSlots,
}) => {
    return (
        <div className="Slot">
            <div className="sort-category">
                {myindex ? (
                    <>
                        <h2>{mytxt}</h2>
                        <span>
                            <p>Sort By</p>
                            <h3>A-Z</h3>
                        </span>
                    </>
                ) : (
                    <>{mytxt === "Top Games" && <h1>{mytxt}</h1>}</>
                )}
            </div>
            <div className={mytxt ? "slot-images" : "all-slot-images"}>
                {Object.values(Slots?.providers || {}).map((T) => (
                    <>
                        {Object.values(T?.slots || {})
                            .slice(0, loadMore)
                            .map((F, f) => {
                                return (
                                    <>
                                        {myindex
                                            ? Object.values(
                                                JSON.parse(F.categories || "{}")
                                                    .filter((Y) => Y.id === myindex)
                                                    .map((R) => (
                                                        <>
                                                            {R.id === myindex && (
                                                                <ItemSlots
                                                                    R={R}
                                                                    F={F}
                                                                    heartIcon={heartIcon}
                                                                />
                                                            )}
                                                        </>
                                                    ))
                                            )
                                            : Object.values(
                                                JSON.parse(F.categories || "{}").map((R) => (
                                                    <>
                                                        <div className="allslots">
                                                            <AllSlots
                                                                catId={R.id}
                                                                R={R}
                                                                F={F}
                                                                heartIcon={heartIcon}
                                                            />


                                                        </div>

                                                    </>
                                                ))
                                            )}
                                    </>
                                );
                            })}
                        {/* 
                        <Providers T={T} /> */}
                    </>
                ))}
            </div>

            <span className={"more"} onClick={() => moreSlots()}>
                <i className="fas fa-sync-alt"></i>
            </span>
        </div>
    );
};
