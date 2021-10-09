import React, { useEffect, useState } from "react";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { LiveCasinoApi } from "../../redux-toolkit/store/store";
import BannerLiveCasino from "./BannerLiveCasino";
import LoadedCasino from "./LoadedCasino";
import AllSlots from "./AllSlots";
import ItemSlots from "./ItemSlots";
import ModalCasino from "./ModalCasino";

function CasinoLive() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LiveCasinoApi());
    setLoading(true);
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
    favouriteId: (Math.random() * 10000000).toFixed(),
    idAllGames: (Math.random() * 1000).toFixed(),
    isActive: null,
    isActiveText: "",
    textAllGames: "",
  });

  const ChangeIndex = (id, name) => {
    setMyIndex({ isActive: id, isActiveText: name });
    /* setColorHeart("red"); */
  };

  //load more
  const [loadMore, setLoadMore] = useState({ load: 4 });
  const moreSlots = () => {
    setLoadMore({ load: (loadMore.load += loadMore.load) });
  };

  //modal
  const [modalOpen, setModalOpen] = useState(false);

  //icon
  let heartIcon = "far fa-heart";
  let searchIcon = "fas fa-search";
  let alignRight = "fas fa-align-right";
  let searchFor = "Search for a game";

  let categories = Object.values(allDataCasinoLive?.categories || {})
    /*         .sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
     */ .filter((A) => A.id !== 70 || ![70].includes(A.id))
    .map((A) => {
      return (
        <>
          {A.name && (
            <p
              key={A.id}
              onClick={() => ChangeIndex(A.id, A.name)}
              className={
                A?.name.split(" ")[0].replace(/\s+/g, "").toLowerCase() +
                (myindex.isActive === A.id ? " active" : "")
              }
            >
              {A.name}
            </p>
          )}
        </>
      );
    });

  return (
    <>
      {!isLoading ? (
        <LoadedCasino />
      ) : (
        <>
          <div className="livecasino">
            {Object.values(bannerCasinoLive || {}).map((B, b) => (
              <BannerLiveCasino B={B} b={b} />
            ))}
          </div>

          {!modalOpen ? (
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
                    <i
                      style={{ color: `${colorHeart}` }}
                      className={heartIcon}
                    />
                  </span>
                  <p
                    onClick={() => ChangeIndex(myindex.idAllGames)}
                    className={
                      "all-games " +
                      (myindex.isActive === myindex.idAllGames ? "active" : "")
                    }
                  >
                    All Games
                  </p>
                  {categories}
                </div>
                <div className="search-game">
                  <span
                    className="search"
                    onClick={() => {
                      setModalOpen(true);
                    }}
                  >
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

              <ToggleSlots
                Slots={allDataCasinoLive}
                myindex={myindex.isActive}
                heartIcon={heartIcon}
                mytxt={myindex.isActiveText}
                loadMore={loadMore.load}
                moreSlots={moreSlots}
                dispatch={dispatch}
              />
            </div>
          ) : (
            <>
              {modalOpen && (
                <ModalCasino
                  setOpenModal={setModalOpen}
                  allDataCasinoLive={allDataCasinoLive}
                  searchFor={searchFor}
                  searchIcon={searchIcon}
                  alignRight={alignRight}
                  heartIcon={heartIcon}
                  onclose={() => setModalOpen(false)}
                />
              )}
            </>
          )}
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
  moreSlots,
  dispatch,
}) => {
  const [openPopup, setOpenPopup] = useState(false);

  const handleChangePopup = () => {
    setOpenPopup(false);
  };

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
          <h2>{mytxt}</h2>
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
                    {myindex ? (
                      Object.values(
                        JSON.parse(F.categories || "{}")
                          .sort((a, b) => (a.name > b.name ? -1 : 1))
                          .filter((Y) => Y.id === myindex)
                          .map((R) => (
                            <>
                              {R.id === myindex && (
                                <ItemSlots
                                  R={R}
                                  F={F}
                                  heartIcon={heartIcon}
                                  openPopup={openPopup}
                                  setOpenPopup={setOpenPopup}
                                  handleChangePopup={handleChangePopup}
                                />
                              )}
                            </>
                          ))
                      )
                    ) : (
                      <>
                        {Object.values(
                          JSON.parse(F.categories || "{}").map((R) => (
                            <>
                              <div className="allslots" key={R && R.id}>
                                <h2 style={{ color: "white" }}>{R.name}</h2>
                                <AllSlots
                                  catId={R.id}
                                  R={R}
                                  F={F}
                                  heartIcon={heartIcon}
                                  openPopup={openPopup}
                                  setOpenPopup={setOpenPopup}
                                  handleChangePopup={handleChangePopup}
                                />
                              </div>
                            </>
                          ))
                        )}
                      </>
                    )}
                  </>
                );
              })}
          </>
        ))}
      </div>
      <span className={"more"} onClick={() => moreSlots(myindex)}>
        <i className="fas fa-sync-alt"></i>
      </span>
    </div>
  );
};
