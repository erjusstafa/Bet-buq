import React, { useState, useEffect, Fragment } from "react";
import allConfig from "../../config/allConfig";
import { useSelector, useDispatch } from "react-redux";
import { addFavouriteCasino, CasinoApi, delFavouriteCasino, sortItemCateg } from "../../redux-toolkit/store/store";
import "./casino.scss";
import ModalCasino from "../LiveCasino/ModalCasino";
import CasinoAllGames from "./CasinoAllGames";
import { Spin } from "antd";
import SliderHome from "../Home/SliderHome";

function Casino() {
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const [idLink, setIdLink] = useState({
    other: 9999,
    link: null,
    activeText: null,
  });

  useEffect(() => {
    setTimeout(() => {
      dispatch(CasinoApi());

      setLoader(true);
    }, 1000);
  }, [dispatch]);

  let bannerCasinoLive = useSelector((state) => state.betbuqsport.sliderApiHome.result?.casino_live);
  let displayNameCateg = useSelector((state) => state?.betbuqsport?.CasinoData?.result);
  let FavItem = useSelector((state) => state?.betbuqsport?.CasinoFav);

  const changeId = (idLink, text) => {
    setIdLink({ link: idLink, other: idLink, activeText: text });
  };

  let categories = Object.values(displayNameCateg?.categories || {})
    .flat()
    .filter((F) => (allConfig["betConstructWidget"] ? !allConfig.dontshowCateg.includes(F.id) : false))
    .map((C) => (
      <p
        className={idLink.link === C.id || C.name === idLink.activeText ? "active" : null}
        key={C.id}
        onClick={() => changeId(C.id, C.name)}
      >
        {C.name}
      </p>
    ));

  let heartIcon = "fas fa-heart";
  let searchIcon = "fas fa-search";
  let alignRight = "fas fa-align-right";
  let searchFor = "Search for a game";
  return (
    <Fragment>
      <div className="casino">
        {Object.values(bannerCasinoLive || {}).map((B, b) => (
          <Fragment key={b}>
            <SliderHome />
          </Fragment>
        ))}
      </div>
      {loader ? (
        <div style={{ background: "#313d42" }}>
          <div className="link">
            <div className="link-live">
              <span onClick={() => changeId(8888)} className={"heart " + (idLink.other === 8888 ? "active" : null)}>
                <i className={heartIcon} style={{ color: FavItem.length < 1 ? "" : "#22dbd1" }} />
              </span>
              <p onClick={() => changeId(9999)} className={idLink.other === 9999 ? "active" : null}>
                All Games
              </p>
              {categories ? categories : null}
              <p onClick={() => changeId(7777)} className={idLink.other === 7777 ? "active" : null}>
                Providers
              </p>
            </div>
            <div
              className="search-game"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <span className="search">
                <i className={searchIcon} />
                <p>{searchFor}</p>
              </span>
              <span className="provider ">
                <p>Providers</p>
                <i className={alignRight} />
              </span>
            </div>
          </div>

          <CasinoWrapper
            idFavAllImag={idLink.other}
            link={idLink.link}
            text={idLink.activeText}
            displayNameCateg={displayNameCateg}
            categories={categories}
            heartIcon={heartIcon}
            dispatch={dispatch}
            changeId={changeId}
            FavItem={FavItem}
          />
          {modalOpen && (
            <ModalCasino
              setOpenModal={setModalOpen}
              allDataCasinoLive={categories}
              searchIcon={searchIcon}
              alignRight={alignRight}
              heartIcon={heartIcon}
              onclose={() => setModalOpen(false)}
            />
          )}
        </div>
      ) : (
        <Spin />
      )}
    </Fragment>
  );
}

export default Casino;

function CasinoWrapper({
  dispatch,
  displayNameCateg,
  idFavAllImag,
  link,
  text,
  categories,
  heartIcon,
  changeId,
  FavItem,
}) {
  const [idSort, setIdSort] = useState(0);
  const [more, setMore] = useState(12);
  let [activeFav, setActiveFav] = useState([]);
  const [colorFav, setColorFav] = useState(true);
  let GET_LOCALSTORAGE = localStorage.getItem("activeFav")

  let handleAddActive = (id) => {

    let ekzistoCatProv = activeFav.findIndex((I) => I === id);

    if (ekzistoCatProv >= 0) {
      let nextCasinoFav = activeFav.pop();
      activeFav = nextCasinoFav;
      setColorFav(!colorFav);
    } else {
      setActiveFav([...activeFav, id]);
      setColorFav(!colorFav);
    }

    localStorage.setItem("activeFav", activeFav)

  };

  const handleIdSort = (idSort) => {
    setIdSort(idSort);
  };
  const handleIdMore = () => {
    setMore(more + 7);
  };

  console.log("activeFavactiveFav", activeFav);
  return (
    <div className="Slot">
      <CasinoAllGames
        allConfig={allConfig}
        idFavAllImag={idFavAllImag}
        link={link}
        displayNameCateg={displayNameCateg}
        categoriesZero={categories[0]?.props?.children}
        categoriesOne={categories[1]?.props?.children}
        categoriesTwo={categories[2]?.props?.children}
        categoriesThree={categories[3]?.props.children}
        categoriesFour={categories[4]?.props?.children}
        categoriesFive={categories[5]?.props?.children}
        categoriesSix={categories[6]?.props?.children}
        categoriesSeven={categories[7]?.props?.children}
        heartIcon={heartIcon}
        changeId={changeId}
        handleAddActive={handleAddActive}
        colorFav={colorFav}
        activeFav={activeFav}
      />

      {link ? (
        <Fragment>
          <div className={"item-sort " + link}>
            <p>{text}</p>
            {text && (
              <span>
                <p>Sort By</p>
                <p className={idSort === 0 ? "active" : ""} onClick={() => handleIdSort(0)}>
                  A-Z
                </p>
                <p className={idSort === 1 ? "active" : ""} onClick={() => handleIdSort(1)}>
                  Providers
                </p>
              </span>
            )}
          </div>
          <div className="category-item-games">
            <CasinoItemGames
              displayNameCateg={displayNameCateg}
              heartIcon={heartIcon}
              link={link}
              dispatch={dispatch}
              more={more}
              handleAddActive={handleAddActive}
              colorFav={colorFav}
              activeFav={activeFav}
            />
          </div>

          {/* show  'Load more games' only on link  */}
          {idFavAllImag === 7777 || idFavAllImag === 8888 || idFavAllImag === 9999 ? (
            ""
          ) : (
            <div id="more" onClick={handleIdMore}>
              <i className="fas fa-sync-alt"></i>
              <p> Load more games</p>
            </div>
          )}
        </Fragment>
      ) : null}

      {idFavAllImag === 7777 && (
        <Fragment>
          <div id="prov-item">
            <p className="provider-text">Providers</p>
            <span>
              <p>Sort By</p>
              <p className={idSort === 0 ? "active" : null} onClick={() => handleIdSort(0)}>
                A-Z
              </p>
              <p className={idSort === 1 ? "active" : null} onClick={() => handleIdSort(1)}>
                Providers
              </p>
            </span>
          </div>
          <div className="category-item-games">
            {Object.values(displayNameCateg?.providers || {}).map((H, index) => (
              <div className="images-name" key={index}>
                <img src={H?.provider_logo} alt="" />
                <span>
                  <p>{H.name}</p>
                  <i
                    onClick={() =>
                      dispatch(
                        addFavouriteCasino({
                          id: H.id,
                          desktop_logo: H.provider_logo,
                          name: H.name,
                        })
                      ) && handleAddActive(H.id)
                    }
                    className={`${heartIcon}` + (activeFav.includes(H.id) ? !colorFav ? " added" : " added" : "")}
                  />
                </span>
              </div>
            ))}
          </div>
        </Fragment>
      )}

      {idFavAllImag === 8888 &&
        (FavItem.length > 0 ? (
          <div className="category-item-games">
            {Object.values(FavItem || []).map((T) => (
              <div className="images-name">
                <img src={T?.desktop_logo} alt="" />
                <span>
                  <p>{T?.name}</p>
                  <i
                    onClick={() => dispatch(delFavouriteCasino({ id: T.id }))}
                    className={heartIcon}
                    style={{
                      color: "#22dbd1",
                    }}
                  />
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p>{allConfig?.descriptionAllFav}</p>
        ))}
    </div>
  );
}

function CasinoItemGames({
  link,
  displayNameCateg,
  heartIcon,
  dispatch,
  more,
  handleAddActive,
  colorFav,
  activeFav,
}) {
  return Object.values(displayNameCateg?.providers || {})
    .slice(0, more)
    .map((H, index) => (
      <Fragment key={index}>
        {Object.values(H.slots || {})
          .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
          .map((S) => (
            <Fragment key={S.id}>
              {link &&
                Object.values(JSON.parse(S.categories || "{}"))
                  .splice(0, more)
                  .filter((N) => N.id === link)
                  .map((N) => (
                    <div className="images-name" key={N.id}>
                      <img src={S?.desktop_logo} alt="" />
                      <span>
                        <p>{S.name.length > 20 ? S.name.substring(0, 19) + "..." : S?.name}</p>
                        <i
                          onClick={() => {
                            dispatch(
                              addFavouriteCasino({
                                id: S.id,
                                desktop_logo: S.desktop_logo,
                                name: S.name,
                              })
                            );
                            handleAddActive(S.id);
                          }}
                          className={`${heartIcon}` + (activeFav.includes(S.id) ? !colorFav ? " added" : " added" : "")}
                        />
                        {console.log("color", colorFav)}
                      </span>
                    </div>
                  ))}
            </Fragment>
          ))}
      </Fragment>
    ));
}
