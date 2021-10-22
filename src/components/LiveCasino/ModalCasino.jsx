import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Zoom from "react-reveal/Zoom";
import allConfig from "../../config/allConfig";
import PopupLoginRegister from "../LoginRegister/PopupLoginRegister";
import {
  addCategProvid,
  addFavorites,
  delAllProvidrCateg,
  delCategProvid,
  delFavorites,
  addFavouriteCasinoModal,
  delFavoritesCasinoModal,
  addCategProvidCasinoModal,
  delCategProvidCasino,
} from "../../redux-toolkit/store/store";

function ModalCasino({
  setOpenModal,
  allDataCasinoLive,
  searchFor,
  searchIcon,
  alignRight,
  heartIcon,
  display,
  categories,
  displayNameCateg,
}) {
  let counterFavorites = useSelector((state) => state.betbuqsport.Favorites);
  let counterFilter = useSelector((state) => state.betbuqsport.CategOrProvider);
  let CasinoModal = useSelector((state) => state.betbuqsport.CasinoModal);
  let CategProvidCasinoModal = useSelector((state) => state.betbuqsport.CategProvidCasinoModal);

  const [val, setVal] = useState("");
  const [tabsModal, setTabsModal] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [myindex, setMyIndex] = useState({ isActive: null });
  let [arrayHeartActive, setArrayHeartActive] = useState([]);
  let [activeHeart, setActiveHeart] = useState(true);

  let handleChangeActiveHeart = (id) => {
    const findIndexHeart = arrayHeartActive.findIndex((arr) => arr === id);
    if (findIndexHeart >= 0) {
      let NextFavModal = arrayHeartActive.pop();
      arrayHeartActive = NextFavModal;
      /*    setArrayHeartActive([...arrayHeartActive, id].pop()); */
      setActiveHeart(!activeHeart);
    } else {
      setArrayHeartActive([...arrayHeartActive, id]);
      setActiveHeart(!activeHeart);
    }
  };
  //filter data
  const handleChange = (e) => {
    const searchWord = e.target.value;
    setVal(searchWord);
  };
  const handleChangePopup = () => {
    setOpenPopup(false);
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleTabs = (tabsModal) => {
    setTabsModal(tabsModal);
  };
  const setActiveAddProCat = (id, name) => {
    setMyIndex({ isActive: id });
    dispatch(addCategProvid({ id: id, name: name }));
  };
  const dispatch = useDispatch();

  //display poviders on modal using cond conditional rendering, if "display is true" , will display providers for LIVE CASINO else  providers for  CASINO
  let providersData = Object.values(
    display ? allDataCasinoLive?.providers || {} : displayNameCateg?.providers || {}
  ).map((D) => (
    <p
      className={myindex.isActive === D.id ? "active" : ""}
      key={D.id}
      onClick={() => {
        display ? setActiveAddProCat(D.id, D.name) : dispatch(addCategProvidCasinoModal(D.id, D.name));
      }}
    >
      {D.name}
    </p>
  ));
  let categoriesData = Object.values(allDataCasinoLive?.categories || {}).map((C) => (
    <p
      className={myindex.isActive === C.id ? "active" : ""}
      key={C.id}
      onClick={() => setActiveAddProCat(C.id, C.name)}
    >
      {C.name}
    </p>
  ));

  const displaySlotsLiveCasino = Object.values(allDataCasinoLive?.providers || {}).map((E) =>
    Object.values(E.slots || {})
      .filter((Q) => (val === "" ? Q : Q.name.toLowerCase().includes(val.toLowerCase())))
      .map((Q) => (
        <div key={Q.id}>
          <img onClick={() => setOpenPopup(true)} src={Q.desktop_logo} alt="" style={{ cursor: "pointer" }} />
          <span>
            <p>{Q.name.length > 20 ? Q.name.substring(0, 19) + "..." : Q.name}</p>
            <i
              className={`${heartIcon}`}
              onClick={() =>
                dispatch(
                  addFavorites({
                    id: Q.id,
                    desktop_logo: Q.desktop_logo,
                    name: Q.name,
                  })
                )
              }
            />
          </span>

          {openPopup && <PopupLoginRegister handleChangePopup={handleChangePopup} open={openPopup} />}
        </div>
      ))
  );

  //data modal for Casino
  const displaySlotsCasino = Object.values(displayNameCateg?.providers || []).map((acc) =>
    Object.values(acc.slots || [])
      .filter((Q) => (val === null ? Q : Q.name.toLowerCase().includes(val.toLowerCase())))
      .map((F) => (
        <div key={F.id}>
          <img onClick={() => setOpenPopup(true)} src={F.desktop_logo} alt="" style={{ cursor: "pointer" }} />
          <span>
            <p>{F.name.length > 20 ? F.name.substring(0, 19) + "..." : F.name}</p>
            <i
              onClick={() => {
                dispatch(
                  addFavouriteCasinoModal({
                    id: F.id,
                    desktop_logo: F.desktop_logo,
                    name: F.name,
                  })
                );
                handleChangeActiveHeart(F.id);
              }}
              className={`${heartIcon}` + (arrayHeartActive.includes(F.id) ? (!activeHeart ? " added" : " added") : "")}
            />
          </span>

          {openPopup && <PopupLoginRegister handleChangePopup={handleChangePopup} open={openPopup} />}
        </div>
      ))
  );
  return (
    <div
      className="modalBackground "
      onClick={() => {
        setOpenModal(false);
      }}
    >
      <Zoom right>
        <div className="modalContainer " onClick={(e) => e.stopPropagation()}>
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <form className="search-modal">
            <span className="search">
              <i className={searchIcon} />
              <input type="text" placeholder={searchFor} className="search-input" value={val} onChange={handleChange} />
            </span>
            <span className="filters" onClick={handleToggle}>
              <p>Filters</p>
              <i className={alignRight} />
              <span className="search-providers-counter">
                {display ? counterFilter.length : CategProvidCasinoModal.length}
              </span>
            </span>
          </form>
          {/**  modal content */}
          <div className={!toggle ? "content" : "content-toggle"}>
            <div className="tabsModal--contentOne">
              {
                //use same modal
                display ? (
                  <div className="add">
                    <span>
                      <span className={tabsModal === 0 ? "active" : ""} onClick={() => handleTabs(0)}>
                        Search Result
                      </span>
                      <span className={tabsModal === 1 ? "active" : ""} onClick={() => handleTabs(1)}>
                        Favorites({counterFavorites.length})
                      </span>
                    </span>
                    <div className="all--categ--provider">
                      {Object.values(counterFilter || {}).map((F) => (
                        <span className="added--categ--provider">
                          <p>{F.name}</p>
                          <i onClick={() => dispatch(delCategProvid(F))} className="fas fa-times" />
                        </span>
                      ))}
                      {counterFilter.length >= 1 ? (
                        <button onClick={() => dispatch(delAllProvidrCateg())}>Clear Filters !</button>
                      ) : null}
                    </div>
                    <div>
                      <span>
                        {tabsModal === 0 && (
                          <div className="one--content">
                            {displaySlotsLiveCasino.length <= 0 ? (
                              <p>{allConfig["dangerText"]}</p>
                            ) : (
                              displaySlotsLiveCasino
                            )}
                          </div>
                        )}
                      </span>
                      <span>
                        {tabsModal === 1 ? (
                          counterFavorites.length <= 0 ? (
                            <p>{allConfig["dangerText"]}</p>
                          ) : (
                            <div className="fav--added">
                              {Object.values(counterFavorites || {})
                                .filter((P) => (val === "" ? P : P.name.toLowerCase().includes(val.toLowerCase())))
                                .map((P) => (
                                  <div className="item--fav">
                                    <img src={P.desktop_logo} alt="" />
                                    <span>
                                      <p>{P.name}</p>
                                      <i className={heartIcon} onClick={() => dispatch(delFavorites(P))} />
                                    </span>
                                  </div>
                                ))}
                            </div>
                          )
                        ) : null}
                      </span>
                    </div>
                  </div>
                ) : (
                  /* content for CASINO */
                  <div className="add">
                    <span>
                      <span className={tabsModal === 0 ? "active" : ""} onClick={() => handleTabs(0)}>
                        Search Result
                      </span>
                      <span className={tabsModal === 1 ? "active" : ""} onClick={() => handleTabs(1)}>
                        Favorites({CasinoModal.length})
                      </span>
                    </span>
                    <div className="all--categ--provider">
                      {Object.values(CategProvidCasinoModal || {}).map((F) => (
                        <span className="added--categ--provider">
                          <p>{F.name}</p>
                          <i onClick={() => dispatch(delCategProvidCasino(F))} className="fas fa-times" />
                        </span>
                      ))}
                      {CategProvidCasinoModal.length > 0 ? <button>Clear Filters !</button> : null}
                    </div>
                    <div>
                      <span>
                        {tabsModal === 0 && (
                          <div className="one--content">
                            {displaySlotsCasino.length < 1 ? <p>{allConfig["dangerText"]}</p> : displaySlotsCasino}
                          </div>
                        )}
                      </span>
                      <span>
                        {tabsModal === 1 ? (
                          CasinoModal.length <= 0 ? (
                            <p>{allConfig["dangerText"]}</p>
                          ) : (
                            <div className="fav--added">
                              {Object.values(CasinoModal || {})
                                .filter((P) => (val === "" ? P : P.name.toLowerCase().includes(val.toLowerCase())))
                                .map((P) => (
                                  <div className="item--fav">
                                    <img src={P.desktop_logo} alt="" />
                                    <span>
                                      <p>{P.name}</p>
                                      <i onClick={() => dispatch(delFavoritesCasinoModal(P))} className={heartIcon} />
                                    </span>
                                  </div>
                                ))}
                            </div>
                          )
                        ) : null}
                      </span>
                    </div>
                  </div>
                )
              }
            </div>

            {toggle ? (
              <div className="two--content">
                {Object.keys(display ? allDataCasinoLive : displayNameCateg)
                  .sort((a, b) => (a < b ? 1 : -1))
                  .map((R) => (
                    <Fragment>
                      <br />
                      <br />
                      <div>
                        {R === "categories" && (
                          <Fragment>
                            <h1>{R}</h1>
                            <span key={R.id}>{display ? categoriesData : categories}</span>
                          </Fragment>
                        )}
                      </div>
                      <div>
                        {R === "providers" && (
                          <Fragment>
                            <span>
                              <h1>{R}</h1>
                              {display
                                ? counterFilter.length > 0
                                : null && (
                                  <button onClick={() => dispatch(delAllProvidrCateg())}>Clear Filters!</button>
                                )}
                            </span>
                            <span key={R.id}>{providersData} </span>
                          </Fragment>
                        )}
                      </div>
                    </Fragment>
                  ))}
              </div>
            ) : null}
          </div>
        </div>
      </Zoom>
    </div>
  );
}
export default ModalCasino;
