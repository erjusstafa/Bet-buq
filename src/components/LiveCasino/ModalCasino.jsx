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
  delAllProvidrCategCasino,
} from "../../redux-toolkit/store/store";

function ModalCasino({
  setOpenModal,
  allDataCasinoLive,
  searchFor,
  searchIcon,
  alignRight,
  heartIcon,
  display,
  displayNameCateg,
  more,
  handleIdMore,
}) {
  const dispatch = useDispatch();

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
  let [activeHeart, setActiveHeart] = useState(false);
  let [sortAccordProv, setSortAccordProv] = useState([]);
  let [trueFalse, setTrueFalse] = useState(true);

  let handleChangeActiveHeart = (id) => {
    const findIndexHeart = arrayHeartActive.findIndex((arr) => arr === id);
    const findSortAccordProv = sortAccordProv.findIndex((arr) => arr === id);
    setTrueFalse(true);

    if (findIndexHeart >= 0 && findSortAccordProv >= 0) {
      let NextFavModal = arrayHeartActive.pop();
      arrayHeartActive = NextFavModal;
      setActiveHeart(!activeHeart);

      let NextSortAccordProv = sortAccordProv.pop();
      sortAccordProv = NextSortAccordProv;
    } else {
      setTrueFalse(true);

      setArrayHeartActive([...arrayHeartActive, id]);
      setActiveHeart(!activeHeart);
      setSortAccordProv([...sortAccordProv, id]);
    }
  };

  console.log(" sortAccordProv.link", sortAccordProv);
  console.log("arrayHeartActive", arrayHeartActive);

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

  //dispaly categ and prov to Live Casino Component
  let providersData = Object.values(allDataCasinoLive?.providers || {}).map((D) => (
    <p
      className={myindex.isActive === D.id ? "active" : ""}
      key={D.id}
      onClick={() => setActiveAddProCat(D.id, D.name)}
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

  //display categ and prov to Casino Component
  let providersDataLiveCasino = Object.values(displayNameCateg?.providers || {}).map((C) => (
    <p
      className={arrayHeartActive.includes(C.id) ? (activeHeart ? " added" : " added") : ""}
      key={C.id}
      onClick={() => {
        dispatch(addCategProvidCasinoModal({ id: C.id, name: C.name }));
        handleChangeActiveHeart(C.id);
      }}
    >
      {C.name}
    </p>
  ));
  let categoriesCasino = Object.values(displayNameCateg?.categories || {}).map((C) => (
    <p
      className={myindex.isActive === C.id ? "active" : ""}
      key={C.id}
      onClick={() => dispatch(addCategProvidCasinoModal({ id: C.id, name: C.name }))}
    >
      {C.name}
    </p>
  ));

  //display categ and prov to Live Casino Component
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

  //display categ and prov to  CASINO
  const displaySlotsCasino = Object.values(displayNameCateg?.providers || [])
    .splice(!trueFalse && (0, 1))
    .filter((acc) => (!trueFalse ? sortAccordProv.includes(acc.id) : trueFalse))
    .map((acc) => (
      <Fragment>
        {Object.values(acc.slots || [])
          .splice(0, more)
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
                  className={
                    `${heartIcon}` + (arrayHeartActive.includes(F.id) ? (!activeHeart ? " added" : " added") : "")
                  }
                />
              </span>

              {openPopup && <PopupLoginRegister handleChangePopup={handleChangePopup} open={openPopup} />}
            </div>
          ))}
      </Fragment>
    ));

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
                      {Object.values(counterFilter || {}).map((F, index) => (
                        <span className="added--categ--provider" key={index}>
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
                                  <div className="item--fav" key={P.id}>
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
                      {Object.values(CategProvidCasinoModal || {}).map((F, index) => (
                        <span className="added--categ--provider" key={index}>
                          <p>{F.name}</p>
                          <i onClick={() => dispatch(delCategProvidCasino(F))} className="fas fa-times" />
                        </span>
                      ))}
                      {CategProvidCasinoModal.length > 0 ? (
                        <button onClick={() => dispatch(delAllProvidrCategCasino())}>Clear Filters !</button>
                      ) : null}
                    </div>
                    <div>
                      <span>
                        {tabsModal === 0 && (
                          <div className="one--content">{trueFalse ? displaySlotsCasino : displaySlotsCasino}</div>
                        )}
                      </span>

                      {tabsModal === 0 && displaySlotsCasino.length > 0 && (
                        <div id="more" onClick={() => handleIdMore()}>
                          <i className="fas fa-sync-alt"></i>
                          <p> Load more games</p>
                        </div>
                      )}

                      <span>
                        {tabsModal === 1 ? (
                          CasinoModal.length <= 0 ? (
                            <p>{allConfig["dangerText"]}</p>
                          ) : (
                            <div className="fav--added">
                              {Object.values(CasinoModal || {})
                                .filter((P) => (val === "" ? P : P.name.toLowerCase().includes(val.toLowerCase())))
                                .map((P) => (
                                  <div className="item--fav" key={P.id}>
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
                {display
                  ? Object.keys(allDataCasinoLive || "{}")
                    .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? 1 : -1))
                    .map((R) => (
                      <Fragment>
                        <br />
                        <br />
                        <div>
                          {R === "categories" && (
                            <Fragment>
                              <h1>{R}</h1>
                              <span key={R.id}>{categoriesData}</span>
                            </Fragment>
                          )}
                        </div>
                        <div>
                          {R === "providers" && (
                            <Fragment>
                              <span>
                                <h1>{R}</h1>
                                {counterFilter.length > 0 && (
                                  <button onClick={() => dispatch(delAllProvidrCateg())}>Clear Filters!</button>
                                )}
                              </span>
                              <span key={R.id}>{providersData} </span>
                            </Fragment>
                          )}
                        </div>
                      </Fragment>
                    ))
                  : Object.keys(displayNameCateg || "{}")
                    .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? 1 : -1))
                    .map((R) => (
                      <Fragment>
                        <div>
                          {R === "providers" && (
                            <Fragment>
                              <span>
                                <h1>{R}</h1>
                                {CategProvidCasinoModal.length > 0 && (
                                  <button onClick={() => dispatch(delAllProvidrCategCasino())}>Clear Filters!</button>
                                )}
                              </span>
                              <span key={R.id}>{providersDataLiveCasino} </span>
                            </Fragment>
                          )}
                        </div>

                        <br />
                        <div>
                          {R === "categories" && (
                            <Fragment>
                              <h1>{R}</h1>
                              <span key={R.id}> {categoriesCasino}</span>
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
