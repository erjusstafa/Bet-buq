import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addCategProvid,
  addFavorites,
  delAllProvidrCateg,
  delCategProvid,
  delFavorites,
} from "../../redux-toolkit/store/store";
import PopupLoginRegister from "../LoginRegister/PopupLoginRegister";

const ModalCasino = ({ setOpenModal, allDataCasinoLive, searchFor, searchIcon, alignRight, heartIcon }) => {
  const [val, setVal] = useState("");
  const [tabsModal, setTabsModal] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  const handleChangePopup = () => {
    setOpenPopup(false);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleTabs = (tabsModal) => {
    setTabsModal(tabsModal);
  };

  const [myindex, setMyIndex] = useState({ isActive: null });

  const setActiveAddProCat = (id, name) => {
    setMyIndex({ isActive: id });
    dispatch(addCategProvid({ id: id, name: name }));
  };

  const dispatch = useDispatch();

  let providersData = Object.values(allDataCasinoLive?.providers || {}).map((D) => (
    <>
      <p className={myindex.isActive === D.id && "active"} key={D.id} onClick={() => setActiveAddProCat(D.id, D.name)}>
        {" "}
        {D.name}
      </p>
    </>
  ));

  let categoriesData = Object.values(allDataCasinoLive?.categories || {}).map((C) => (
    <p className={myindex.isActive === C.id && "active"} key={C.id} onClick={() => setActiveAddProCat(C.id, C.name)}>
      {" "}
      {C.name}
    </p>
  ));

  let counterFavorites = useSelector((state) => state.betbuqsport.Favorites);
  let counterFilter = useSelector((state) => state.betbuqsport.CategOrProvider);

  //filter data
  const handleChange = (e) => {
    const searchWord = e.target.value;
    setVal(searchWord);
  };

  const displaySlots = Object.values(allDataCasinoLive?.providers || {}).map((E) => (
    <>
      {Object.values(E.slots || {})
        .filter((Q) => (val === "" ? Q : Q.name.toLowerCase().includes(val.toLowerCase())))
        .map((Q) => (
          <div key={Q.id}>
            {console.log("Q", Q)}

            <img onClick={() => setOpenPopup(true)} src={Q.desktop_logo} alt="" style={{ cursor: "pointer" }} />
            <span>
              <p>{Q.name.length > 20 ? Q.name.substring(0, 19) + "..." : Q.name}</p>
              <i
                className={`${heartIcon}`}
                onClick={() => dispatch(addFavorites({ id: Q.id, desktop_logo: Q.desktop_logo, name: Q.name }))}
              />
            </span>

            {openPopup && <PopupLoginRegister handleChangePopup={handleChangePopup} open={openPopup} />}
          </div>
        ))}
    </>
  ));
  return (
    <div className="modalBackground">
      <div className="modalContainer">
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
            <span className="search-providers-counter">{counterFilter.length}</span>
          </span>
        </form>
        {/**  modal content */}

        <div className={!toggle ? "content" : "content-toggle"}>
          <div className="tabsModal--contentOne">
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
                  <>
                    {console.log("counterFilter", F)}
                    <span className="added--categ--provider">
                      <p>{F.name}</p>
                      <i onClick={() => dispatch(delCategProvid(F))} className="fas fa-times" />
                    </span>
                  </>
                ))}
                {counterFilter.length >= 1 ? (
                  <button onClick={() => dispatch(delAllProvidrCateg())}>Clear Filters !</button>
                ) : null}
              </div>
              <div>
                <span>
                  {tabsModal === 0 && (
                    <div className="one--content">
                      {displaySlots.length <= 0 ? <p>Opss! Sorry , no results for this criteria</p> : displaySlots}
                    </div>
                  )}
                </span>
                <span>
                  {tabsModal === 1 ? (
                    <>
                      {" "}
                      {counterFavorites.length <= 0 ? (
                        <p>Opss! Sorry , no results for this criteria</p>
                      ) : (
                        <div className="fav--added">
                          {Object.values(counterFavorites || {})
                            .filter((P) => (val === "" ? P : P.name.toLowerCase().includes(val.toLowerCase())))
                            .map((P) => (
                              <div className="item--fav">
                                <img src={P.desktop_logo} alt="" />
                                <span>
                                  <p>{P.name}</p>
                                  <i className={heartIcon} to onClick={() => dispatch(delFavorites(P))} />
                                </span>
                              </div>
                            ))}
                        </div>
                      )}{" "}
                    </>
                  ) : null}
                </span>
              </div>
            </div>
          </div>

          {toggle ? (
            <div className="two--content">
              {Object.keys(allDataCasinoLive)
                .sort((a, b) => (a < b ? 1 : -1))
                .map((R) => (
                  <>
                    <br />
                    <br />

                    <>
                      {" "}
                      <div>
                        {R === "categories" && (
                          <>
                            <h1>{R}</h1>
                            <span key={R.id}>{categoriesData}</span>
                          </>
                        )}
                      </div>
                      <div>
                        {" "}
                        {R === "providers" && (
                          <>
                            <span>
                              {" "}
                              <h1>{R}</h1>{" "}
                              {counterFilter.length > 0 && (
                                <button onClick={() => dispatch(delAllProvidrCateg())}>Clear Filters!</button>
                              )}
                            </span>
                            <span key={R.id}>{providersData}</span>
                          </>
                        )}
                      </div>
                    </>
                  </>
                ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ModalCasino;
