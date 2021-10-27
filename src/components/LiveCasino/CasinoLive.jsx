import React, { useEffect, useState } from "react";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { LiveCasinoApi } from "../../redux-toolkit/store/store";
import BannerLiveCasino from "./BannerLiveCasino";
import LoadedCasino from "./LoadedCasino";
import AllSlots from "./AllSlots";
import ItemSlots from "./ItemSlots";
import ModalCasino from "./ModalCasino";
import { Spin, Alert } from "antd";
import allConfig from "../../config/allConfig";

function CasinoLive() {
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(true);
  const [colorHeart, setColorHeart] = useState("");
  const [loadMore, setLoadMore] = useState({ load: 4 });
  const [myindex, setMyIndex] = useState({
    favouriteId: (Math.random() * 10000000).toFixed(),
    idAllGames: (Math.random() * 1000).toFixed(),
    isActive: null,
    isActiveText: "",
    textAllGames: "",
  });
  const display = true
  //modal
  const [modalOpen, setModalOpen] = useState(false);

  //icon


  useEffect(() => {
    setTimeout(() => {

      dispatch(LiveCasinoApi());
      setLoading(true);
    }, 1000);

  }, [dispatch]);

  const bannerCasinoLive = useSelector((state) => state.betbuqsport.sliderApiHome.result?.casino_live);

  const allDataCasinoLive = useSelector((state) => state?.betbuqsport?.LiveCasino?.result);





  const ChangeIndex = (id, name) => {
    setMyIndex({ isActive: id, isActiveText: name });
    /* setColorHeart("red"); */
  };

  //load more
  const moreSlots = () => {
    setLoadMore({ load: (loadMore.load += loadMore.load) });
  };



  let categories = Object.values(allDataCasinoLive?.categories || {})
    .filter((A) => A.id !== 70 || ![70].includes(A.id))
    .map((A, index) => {
      return (
        A.name && (
          <p
            key={A ? A.id : index}
            onClick={() => ChangeIndex(A.id, A.name)}
            className={
              A?.name.split(" ")[0].replace(/\s+/g, "").toLowerCase() + (myindex.isActive === A.id ? " active" : "")
            }
          >
            {A.name}
          </p>
        )
      );
    });

  return !isLoading ? (
    /*  <LoadedCasino /> */
    <Spin tip="Loading...">
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    </Spin>
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
                  (myindex.isActive !== myindex.favouriteId || myindex.idAllGames !== myindex.favouriteId
                    ? "active"
                    : "")
                }
              >
                {" "}
                <i style={{ color: `${colorHeart}` }} className={allConfig.heartIcon} />
              </span>
              <p
                onClick={() => ChangeIndex(myindex.idAllGames)}
                className={"all-games " + (myindex.isActive === myindex.idAllGames ? "active" : "")}
              >
                All Games
              </p>
              {categories}
            </div>
            <div
              className="search-game"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <span className="search">
                <i className={allConfig.searchIcon} />
                <p>{allConfig.searchFor}</p>
              </span>
              <span className="provider ">
                <p>Providers</p>
                <i className={allConfig.alignRight} />
              </span>
            </div>
          </div>

          <ToggleSlots
            Slots={allDataCasinoLive}
            myindex={myindex.isActive}
            heartIcon={allConfig.heartIcon}
            mytxt={myindex.isActiveText}
            loadMore={loadMore.load}
            moreSlots={moreSlots}
            dispatch={dispatch}
          />
        </div>
      ) : (
        modalOpen && (
          <ModalCasino
            setOpenModal={setModalOpen}
            allDataCasinoLive={allDataCasinoLive}
            searchFor={allConfig.searchFor}
            searchIcon={allConfig.searchIcon}
            alignRight={allConfig.alignRight}
            heartIcon={allConfig.heartIcon}
            display={display}
          />
        )
      )}
    </>
  );
}

export default CasinoLive;

const ToggleSlots = ({ Slots, myindex, heartIcon, mytxt, loadMore, moreSlots, dispatch }) => {
  const [openPopup, setOpenPopup] = useState(false);

  const handleChangePopup = () => {
    setOpenPopup(false);
  };

  return (
    <div className="Slot">
      <div className="sort-category">
        {myindex ?
          <h2>{mytxt}</h2>
          :
          <h2>{mytxt}</h2>}
      </div>
      <div className={mytxt ? "slot-images" : "all-slot-images"}>
        {Object.values(Slots?.providers || {}).map((T) =>
          Object.values(T?.slots || {})
            .slice(0, loadMore)
            .map((F, f) => {
              return myindex
                ? Object.values(
                  JSON.parse(F.categories || "{}")
                    .sort((a, b) => (a.name > b.name ? -1 : 1))
                    .filter((Y) => Y.id === myindex)
                    .map(
                      (R) =>
                        R.id === myindex && (
                          <ItemSlots
                            R={R}
                            F={F}
                            heartIcon={heartIcon}
                            openPopup={openPopup}
                            setOpenPopup={setOpenPopup}
                            handleChangePopup={handleChangePopup}
                          />
                        )
                    )
                )
                : Object.values(
                  JSON.parse(F.categories || "{}").map((R) => (
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
                  ))
                );
            })
        )}
      </div>
      <span className={"more"} onClick={() => moreSlots(myindex)}>
        <i className="fas fa-sync-alt"></i>
      </span>
    </div>
  );
};
