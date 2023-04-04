import React, { Fragment, useRef } from "react";
import image from "../../images/images";
import Slider from "react-slick";
import { addFavouriteCasino } from "../../redux-toolkit/store/store";
import { useDispatch } from "react-redux";
import { Svg } from "./svg";

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
                          .slice(0, 1)
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
                  .map((H, index) => (
                    <div key={index} className="all">
                      {Object.values(H.slots || {}).slice(0, 25)
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
                  .slice(0, 6)
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
