import React, { Fragment, useRef } from "react";
import image from "../../images/images";
import Slider from "react-slick";
import { addFavouriteCasino } from "../../redux-toolkit/store/store";
import { useDispatch } from "react-redux";

let stylePadd = {
  padding: "35px 0",
};

function CasinoAllGames({
  allConfig,
  idFavAllImag,
  categoriesZero,
  categoriesOne,
  categoriesTwo,
  categoriesThree,
  categoriesFour,
  categoriesFive,
  categoriesSix,
  categoriesSeven,
  kezId,
  displayNameCateg,
  heartIcon,
  changeId,
  colorFav,
  activeFav,
  handleAddActive,
  nameCat,
}) {
  //prev-next button
  const sliderRefNextPrev = useRef();

  const goToNext = () => {
    sliderRefNextPrev.current.slickNext();
  };

  const goToPrev = () => {
    sliderRefNextPrev.current.slickPrev();
  };

  let Svg = () => (
    <svg className="casino-play-btn" viewBox="0 0 1012 812">
      <path
        id="Color Fill 5"
        fillRule="evenodd"
        className="shp0"
        d="M128.05 34.4C187.25 0.22 256.21 -8.86 322.23 8.83C388.26 26.52 443.43 68.86 477.61 128.05C511.78 187.25 520.86 256.22 503.18 322.24C485.48 388.26 443.14 443.43 383.95 477.61C344.51 500.38 300.76 512 256.41 512C234.19 512 211.82 509.08 189.77 503.18C123.75 485.48 68.57 443.14 34.39 383.95C0.22 324.75 -8.86 255.79 8.82 189.77C26.52 123.75 68.86 68.57 128.05 34.4ZM477.43 315.33C493.28 256.19 485.15 194.4 454.53 141.37C423.91 88.34 374.48 50.42 315.33 34.57C295.59 29.28 275.53 26.67 255.63 26.67C215.91 26.67 176.71 37.07 141.37 57.47C88.36 88.09 50.42 137.52 34.57 196.67C18.72 255.81 26.85 317.6 57.47 370.63C88.09 423.66 137.52 461.58 196.67 477.44C255.81 493.28 317.6 485.15 370.63 454.53C423.66 423.91 461.58 374.48 477.43 315.33Z"
      />
      <path
        id="Color Fill 5"
        fillRule="evenodd"
        className="shp0"
        d="M128.05 34.4C187.25 0.22 256.21 -8.86 322.23 8.83C388.26 26.52 443.43 68.86 477.61 128.05C511.78 187.25 520.86 256.22 503.18 322.24C485.48 388.26 443.14 443.43 383.95 477.61C344.51 500.38 300.76 512 256.41 512C234.19 512 211.82 509.08 189.77 503.18C123.75 485.48 68.57 443.14 34.39 383.95C0.22 324.75 -8.86 255.79 8.82 189.77C26.52 123.75 68.86 68.57 128.05 34.4ZM477.43 315.33C493.28 256.19 485.15 194.4 454.53 141.37C423.91 88.34 374.48 50.42 315.33 34.57C295.59 29.28 275.53 26.67 255.63 26.67C215.91 26.67 176.71 37.07 141.37 57.47C88.36 88.09 50.42 137.52 34.57 196.67C18.72 255.81 26.85 317.6 57.47 370.63C88.09 423.66 137.52 461.58 196.67 477.44C255.81 493.28 317.6 485.15 370.63 454.53C423.66 423.91 461.58 374.48 477.43 315.33Z"
      />
      <path
        id="Color Fill 5"
        fillRule="evenodd"
        className="shp1"
        d="M128.05 34.4C187.25 0.22 256.21 -8.86 322.23 8.83C388.26 26.52 443.43 68.86 477.61 128.05C511.78 187.25 520.86 256.22 503.18 322.24C485.48 388.26 443.14 443.43 383.95 477.61C344.51 500.38 300.76 512 256.41 512C234.19 512 211.82 509.08 189.77 503.18C123.75 485.48 68.57 443.14 34.39 383.95C0.22 324.75 -8.86 255.79 8.82 189.77C26.52 123.75 68.86 68.57 128.05 34.4ZM477.43 315.33C493.28 256.19 485.15 194.4 454.53 141.37C423.91 88.34 374.48 50.42 315.33 34.57C295.59 29.28 275.53 26.67 255.63 26.67C215.91 26.67 176.71 37.07 141.37 57.47C88.36 88.09 50.42 137.52 34.57 196.67C18.72 255.81 26.85 317.6 57.47 370.63C88.09 423.66 137.52 461.58 196.67 477.44C255.81 493.28 317.6 485.15 370.63 454.53C423.66 423.91 461.58 374.48 477.43 315.33Z"
      />
      <path
        id="Color Fill 4"
        fillRule="evenodd"
        className="shp2"
        d="M454.53 141.37C485.15 194.4 493.28 256.19 477.43 315.33C461.58 374.48 423.66 423.91 370.63 454.53C317.6 485.15 255.81 493.28 196.67 477.44C137.52 461.58 88.09 423.66 57.47 370.63C26.85 317.6 18.72 255.82 34.57 196.67C50.42 137.52 88.36 88.09 141.37 57.47C176.71 37.07 215.91 26.67 255.63 26.67C275.53 26.67 295.59 29.28 315.33 34.57C374.48 50.42 423.91 88.34 454.53 141.37ZM410.92 153.14C416.74 148.64 417.81 140.26 413.31 134.45C381.62 93.5 333.97 66 282.61 58.98C275.32 57.98 268.59 63.08 267.61 70.38C266.61 77.67 271.71 84.39 279 85.39C323.51 91.46 364.78 115.3 392.23 150.75C394.85 154.15 398.8 155.92 402.78 155.92C405.63 155.92 408.5 155.02 410.92 153.14ZM392.72 256C392.72 245.92 387.51 236.9 378.78 231.86L214.26 136.86C205.51 131.82 195.1 131.82 186.37 136.86C177.64 141.91 172.42 150.93 172.42 161.02L172.42 350.99C172.42 361.08 177.64 370.1 186.37 375.15C190.73 377.66 195.52 378.92 200.31 378.92C205.1 378.92 209.89 377.67 214.26 375.15L378.78 280.15C387.51 275.11 392.72 266.09 392.72 256Z"
      />
      <g id="Layer">
        <path
          id="Layer"
          className="shp3"
          d="M413.31 134.45C417.81 140.25 416.74 148.64 410.92 153.14C408.5 155.02 405.63 155.92 402.78 155.92C398.8 155.92 394.85 154.15 392.23 150.75C364.78 115.3 323.51 91.46 279 85.39C271.71 84.39 266.61 77.67 267.61 70.38C268.59 63.08 275.32 57.98 282.61 58.98C333.97 66 381.62 93.5 413.31 134.45Z"
        />
        <path
          id="Layer"
          fillRule="evenodd"
          className="shp1"
          d="M378.78 231.86C387.51 236.9 392.72 245.92 392.72 256C392.72 266.09 387.51 275.11 378.78 280.14L214.26 375.15C209.89 377.66 205.1 378.92 200.31 378.92C195.52 378.92 190.73 377.66 186.37 375.15C177.64 370.1 172.42 361.08 172.42 350.99L172.42 161.01C172.42 150.93 177.64 141.91 186.37 136.86C195.1 131.82 205.52 131.82 214.26 136.86L378.78 231.86ZM366.07 256C366.07 255.28 365.66 255.04 365.46 254.94L200.93 159.94C200.8 159.87 200.6 159.75 200.32 159.75C200.15 159.75 199.93 159.8 199.69 159.94C199.07 160.3 199.07 160.77 199.07 161.01L199.07 350.99C199.07 351.23 199.07 351.71 199.69 352.07C200.31 352.42 200.73 352.18 200.93 352.07L365.46 257.07C365.66 256.96 366.07 256.72 366.07 256Z"
        />
      </g>
      <path
        id="Layer"
        className="shp4"
        d="M365.46 254.94C365.66 255.04 366.07 255.28 366.07 256C366.07 256.72 365.66 256.96 365.46 257.07L200.93 352.07C200.73 352.18 200.31 352.41 199.69 352.07C199.07 351.71 199.07 351.23 199.07 350.99L199.07 161.01C199.07 160.77 199.07 160.29 199.69 159.94C199.93 159.8 200.15 159.75 200.32 159.75C200.6 159.75 200.8 159.87 200.93 159.94L365.46 254.94Z"
      />
      <g id="Layer" />
      <g id="Layer" />
      <g id="Layer" />
      <g id="Layer" />
      <g id="Layer" />
      <g id="Layer" />
      <g id="Layer" />
      <g id="Layer" />
      <g id="Layer" />
      <g id="Layer" />
      <g id="Layer" />
      <g id="Layer" />
      <g id="Layer" />
      <g id="Layer" />
      <g id="Layer" />
    </svg>
  );

  const dispatch = useDispatch();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      {idFavAllImag === 9999 ? (
        <div className="category-all-games ">
          {categoriesFive === "Popular" && (
            <div className={"category-item-games " + categoriesFive}>
              <span style={{ padding: "0 20px" }}>
                <p className="categ-name">{categoriesFive}</p>
                <div
                  id="link"
                  onClick={() =>
                    changeId(10) ||
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  All Games <i className="fas fa-angle-right" />
                </div>
              </span>
              <div className="all-images-text">
                {Object.values(displayNameCateg?.providers || {})
                  .slice(0, 1)
                  .map((H, index) => (
                    <div key={index} className="all">
                      {Object.values(H.slots || {})
                        .slice(0, 14)
                        .map((S) => (
                          <Fragment key={S.id}>
                            {Object.values(JSON.parse(S.categories || "{}"))
                              .filter((N) => N.name === categoriesFive)
                              .map((N, index) => (
                                <div className="images-name" key={index}>
                                  <img src={S?.desktop_logo} alt="" />
                                  <span>
                                    <p>{S.name.length > 20 ? S.name.substring(0, 19) + "..." : S.name}</p>
                                    <i
                                      onClick={() =>
                                        dispatch(
                                          addFavouriteCasino({
                                            id: S.id,
                                            desktop_logo: S.desktop_logo,
                                            name: S.name,
                                          })
                                        ) && handleAddActive(S.id)
                                      }
                                      className={
                                        `${heartIcon}` +
                                        (activeFav.includes(S.id) ? (!colorFav ? " added" : " added") : "")
                                      }
                                    />
                                  </span>
                                  <Svg />
                                </div>
                              ))}
                          </Fragment>
                        ))}
                    </div>
                  ))}
              </div>
            </div>
          )}
          <img src={image.wave} alt="" />
          {categoriesZero && (
            <div className="category-item-games">
              <span>
                <p className={"categ-name " + categoriesZero.toLowerCase()}>Tournaments</p>
                <div
                  id="link"
                  onClick={() =>
                    changeId(14) ||
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  All Games <i className="fas fa-angle-right" />
                </div>
              </span>
              <div className="all-images-text">
                {Object.values(displayNameCateg?.providers || {}).map((H, index) =>
                  Object.values(H.slots || {})
                    .slice(0, 4)
                    .map((S) => (
                      <Fragment key={S.id}>
                        {Object.values(JSON.parse(S.categories || "{}"))
                          .filter((N) => N.name === categoriesZero)
                          .map((N, index) => (
                            <div className="images-name" style={{ margin: "0 5px" }} key={index}>
                              <img style={{ width: "325px", height: "250px" }} src={S?.desktop_logo} alt="" />
                              <span>
                                <p>{S.name.length > 20 ? S.name.substring(0, 19) + "..." : S.name}</p>
                                <i
                                  className={
                                    `${heartIcon}` + (activeFav.includes(S.id) ? (!colorFav ? " added" : " added") : "")
                                  }
                                  onClick={() =>
                                    dispatch(
                                      addFavouriteCasino({
                                        id: S.id,
                                        desktop_logo: S.desktop_logo,
                                        name: S.name,
                                      })
                                    ) && handleAddActive(S.id)
                                  }
                                />
                              </span>
                              {/*                                 <div id="svg"><Svg /></div>
                               */}
                            </div>
                          ))}
                      </Fragment>
                    ))
                )}
              </div>
            </div>
          )}





          {allConfig.displaySlotsCategories &&
            <Fragment>
              <div className="category-item-games" style={stylePadd}>
                {nameCat && (
                  <span>
                    <p className="categ-name">{nameCat}</p>
                    <div
                      id="link"
                      onClick={() =>
                        changeId(7) ||
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        })
                      }
                    >
                      All Games <i className="fas fa-angle-right" />
                    </div>
                  </span>
                )}

                {(
                  <div className="all-images-text">
                    {Object.values(displayNameCateg?.providers || {}).map((H, index) => (
                      <div key={index} className="all">
                        {Object.values(H.slots || {})
                          .splice(0, 4)
                          .map((S) => (
                            <Fragment key={S.id}>
                              {allConfig.displaySlotsCategories && Object.values(JSON.parse(S.categories || "{}"))
                                .filter((N) =>
                                  allConfig.betConstructWidget ? allConfig.displaySlotsCategories.includes(N.id) : false
                                )
                                .map((N, index) => (
                                  <div className="images-name" key={index}>
                                    <img src={S?.desktop_logo} alt="" />
                                    <span>
                                      <p>{S.name.length > 20 ? S.name.substring(0, 19) + "..." : S.name}</p>
                                      <i
                                        className={
                                          `${heartIcon}` +
                                          (activeFav.includes(S.id) ? (!colorFav ? " added" : " added") : "")
                                        }
                                        onClick={() =>
                                          dispatch(
                                            addFavouriteCasino({
                                              id: S.id,
                                              desktop_logo: S.desktop_logo,
                                              name: S.name,
                                            })
                                          ) && handleAddActive(S.id)
                                        }
                                      />
                                    </span>
                                    <div id="svg">
                                      <Svg />
                                    </div>
                                  </div>
                                ))}
                            </Fragment>
                          ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Fragment>
          }

          {categoriesTwo === "New Entry" && (
            <div className="category-item-games" style={stylePadd}>
              <span>
                <p className="categ-name">{categoriesTwo}</p>
                <div
                  id="link"
                  onClick={() =>
                    changeId(2) ||
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  All Games <i className="fas fa-angle-right" />
                </div>
              </span>
              <div className="all-images-text">
                {Object.values(displayNameCateg?.providers || {})
                  .slice(0, 10)
                  .map((H, index) => (
                    <div key={index} className="all">
                      {Object.values(H.slots || {}).slice(0, 15)
                        .map((S) => (
                          <Fragment key={S.id}>
                            {Object.values(JSON.parse(S.categories || "{}"))
                              .filter((N) => N.name === categoriesTwo)
                              .map((N, index) => (
                                <div className="images-name" key={index}>
                                  <img src={S?.mobile_logo} alt="" />
                                  <span>
                                    <p>{S.name.length > 20 ? S.name.substring(0, 19) + "..." : S.name}</p>
                                    <i
                                      className={`${heartIcon}` + (activeFav.includes(S.id) ? !colorFav ? " added" : " added" : "")}

                                      onClick={() =>
                                        dispatch(
                                          addFavouriteCasino({
                                            id: S.id,
                                            desktop_logo: S.desktop_logo,
                                            name: S.name,
                                          })
                                        ) && handleAddActive(S.id)
                                      }
                                    />
                                  </span>
                                  <div id="svg">
                                    <Svg />
                                  </div>
                                </div>
                              ))}
                          </Fragment>
                        ))}
                    </div>
                  ))}
              </div>
            </div>
          )}
          {categoriesThree === "Megaways" && (
            <div className="category-item-games" style={stylePadd}>
              <span>
                <p className="categ-name">{categoriesThree}</p>
                <div
                  id="link"
                  onClick={() =>
                    changeId(8) ||
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  All Games <i className="fas fa-angle-right" />
                </div>
              </span>
              <div className="all-images-text">
                {Object.values(displayNameCateg?.providers || {})
                  .slice(13, 17)
                  .map((H, index) => (
                    <div key={index} className="all">
                      {Object.values(H.slots || {}).map((S) => (
                        <Fragment key={S.id}>
                          {Object.values(JSON.parse(S.categories || "{}"))
                            .filter((N) => N.name === categoriesThree)
                            .map((N, index) => (
                              <div className="images-name" key={index}>
                                <img src={S?.mobile_logo} alt="" />
                                <span>
                                  <p>{S.name.length > 20 ? S.name.substring(0, 19) + "..." : S.name}</p>
                                  <i
                                    className={`${heartIcon}` + (activeFav.includes(S.id) ? !colorFav ? " added" : " added" : "")}

                                    onClick={() =>
                                      dispatch(
                                        addFavouriteCasino({
                                          id: S.id,
                                          desktop_logo: S.desktop_logo,
                                          name: S.name,
                                        })
                                      ) && handleAddActive(S.id)
                                    }
                                  />
                                </span>
                                <div id="svg">
                                  <Svg />
                                </div>
                              </div>
                            ))}
                        </Fragment>
                      ))}
                    </div>
                  ))}
              </div>
            </div>
          )}
          {categoriesFour === "Instant Games" && (
            <div className="category-item-games" style={stylePadd}>
              <span>
                <p className="categ-name">{categoriesFour}</p>
                <div
                  id="link"
                  onClick={() =>
                    changeId(9) ||
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  All Games <i className="fas fa-angle-right" />
                </div>
              </span>
              <div className="all-images-text">
                {Object.values(displayNameCateg?.providers || {}).map((H, index) => (
                  <div key={index} className="all">
                    {Object.values(H.slots || {}).map((S) => (
                      <Fragment key={S.id}>
                        {Object.values(JSON.parse(S.categories || "{}"))
                          .filter((N) => N.name === categoriesFour)
                          .map((N, index) => (
                            <div className="images-name" key={index}>
                              <img src={S?.mobile_logo} alt="" />
                              <span>
                                <p>{S.name.length > 20 ? S.name.substring(0, 19) + "..." : S.name}</p>
                                <i
                                  className={`${heartIcon}` + (activeFav.includes(S.id) ? !colorFav ? " added" : " added" : "")}

                                  onClick={() =>
                                    dispatch(
                                      addFavouriteCasino({
                                        id: S.id,
                                        desktop_logo: S.desktop_logo,
                                        name: S.name,
                                      })
                                    ) && handleAddActive(S.id)
                                  }
                                />
                              </span>
                              <div id="svg">
                                <Svg />
                              </div>
                            </div>
                          ))}
                      </Fragment>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
          {categoriesSix === "Virtual Games" && (
            <div className="category-item-games" style={stylePadd}>
              <span>
                <p className="categ-name">{categoriesSix}</p>
                <div
                  id="link"
                  onClick={() =>
                    changeId(11) ||
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  All Games <i className="fas fa-angle-right" />
                </div>
              </span>
              <div className="all-images-text">
                {Object.values(displayNameCateg?.providers || {})
                  .slice(0, 13)
                  .map((H, index) => (
                    <div key={index} className="all">
                      {Object.values(H.slots || {}).map((S) => (
                        <Fragment key={S.id}>
                          {Object.values(JSON.parse(S.categories || "{}"))
                            .filter((N) => N.name === categoriesSix)
                            .map((N, index) => (
                              <div className="images-name" key={index}>
                                <img src={S?.mobile_logo} alt="" />
                                <span>
                                  <p>{S.name.length > 20 ? S.name.substring(0, 19) + "..." : S.name}</p>
                                  <i
                                    className={`${heartIcon}` + (activeFav.includes(S.id) ? !colorFav ? " added" : " added" : "")}

                                    onClick={() =>
                                      dispatch(
                                        addFavouriteCasino({
                                          id: S.id,
                                          desktop_logo: S.desktop_logo,
                                          name: S.name,
                                        })
                                      ) && handleAddActive(S.id)
                                    }
                                  />
                                </span>
                                <div id="svg">
                                  <Svg />
                                </div>
                              </div>
                            ))}
                        </Fragment>
                      ))}
                    </div>
                  ))}
              </div>
            </div>
          )}
          {categoriesSeven === "All Slots" && (
            <div className="category-item-games" style={stylePadd}>
              <span>
                <p className="categ-name">{categoriesSeven}</p>
                <div
                  id="link"
                  onClick={() =>
                    changeId(1) ||
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  All Games <i className="fas fa-angle-right" />
                </div>
              </span>
              <div className="all-images-text">
                {Object.values(displayNameCateg?.providers || {})
                  .slice(0, 1)
                  .map((H, index) => (
                    <div key={index} className="all">
                      {Object.values(H.slots || {})
                        .slice(0, 14)
                        .map((S) => (
                          <Fragment key={S.id}>
                            {Object.values(JSON.parse(S.categories || "{}"))
                              .filter((N) => N.name === categoriesSeven)
                              .map((N, index) => (
                                <div className="images-name" key={index}>
                                  <img src={S?.mobile_logo} alt="" />
                                  <span>
                                    <p>{S.name.length > 20 ? S.name.substring(0, 19) + "..." : S.name}</p>
                                    <i
                                      className={`${heartIcon}` + (activeFav.includes(S.id) ? !colorFav ? " added" : " added" : "")}

                                      onClick={() =>
                                        dispatch(
                                          addFavouriteCasino({
                                            id: S.id,
                                            desktop_logo: S.desktop_logo,
                                            name: S.name,
                                          })
                                        ) && handleAddActive(S.id)
                                      }
                                    />
                                  </span>
                                  <div id="svg">
                                    <Svg />
                                  </div>
                                </div>
                              ))}
                          </Fragment>
                        ))}
                    </div>
                  ))}
              </div>
            </div>
          )}
          <div className="provider-item-games" style={stylePadd}>
            <span id="icon-text">
              <span>
                <img id="icon-provider" src={image.provider} alt="" />
                <span id="categ-name">
                  <p>Game Providers</p>
                  <p>Only the most awsome games</p>
                </span>
              </span>
              <span id="ref-slide">
                <i className="fas fa-angle-left" onClick={goToPrev} />
                <i className="fas fa-angle-right" onClick={goToNext} />
              </span>
            </span>

            <div className="all-images-text">
              <Slider {...settings} ref={sliderRefNextPrev}>
                {Object.values(displayNameCateg?.providers || {}).map((H, index) => (
                  <div key={index} className="all">
                    <div className="images-name">
                      <img style={{ width: "270px" }} src={H?.provider_logo} alt="" />
                      <span className="end-desc">
                        <span id="text">
                          <p>{H.name.length > 20 ? H.name.substring(0, 19) + "..." : H.name.split(" ")[0]}</p>
                          <p> {H.name.split(" ")[0] + "!"}</p>
                        </span>

                        <span
                          id="icon"
                          onClick={() =>
                            changeId(7777) ||
                            window.scrollTo({
                              top: 0,
                              behavior: "smooth",
                            })
                          }
                        >
                          <i className="fas fa-angle-right" />
                        </span>
                      </span>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}
export default CasinoAllGames;
