import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import image from "../../images/images";
import Slider from "react-slick";

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
  displayNameCateg,
  heartIcon,
  changeId,
}) {
  /*  let wave = setTimeout(() => {
    <img src={image.wave} alt="" />;
  }, 4000); */

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
                <Link id="link">
                  All Games <i className="fas fa-angle-right" />
                </Link>
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
                              .map((N) => (
                                <div className="images-name">
                                  <img src={S?.desktop_logo} alt="" />
                                  <span>
                                    <p>
                                      {S.name.length > 20
                                        ? S.name.substring(0, 19) + "..."
                                        : S.name}
                                    </p>
                                    <i className={heartIcon} />
                                  </span>
                                </div>
                              ))}
                          </Fragment>
                        ))}
                    </div>
                  ))}
              </div>
            </div>
          )}
          <img src={image.wave} alt="" />;
          {categoriesZero === "Tournaments" && (
            <div className="category-item-games">
              <span>
                <p className={"categ-name " + categoriesZero.toLowerCase()}>
                  {categoriesZero}
                </p>
                <Link id="link">
                  All Games <i className="fas fa-angle-right" />
                </Link>
              </span>
              <div className="all-images-text">
                {Object.values(displayNameCateg?.providers || {}).map(
                  (H, index) => (
                    <div key={index} className="all">
                      {Object.values(H.slots || {})
                        .slice(0, 12)
                        .map((S) => (
                          <Fragment key={S.id}>
                            {Object.values(JSON.parse(S.categories || "{}"))
                              .filter((N) => N.name === categoriesZero)
                              .map((N) => (
                                <div className="images-name">
                                  <img
                                    style={{ width: "auto", height: "auto" }}
                                    src={S?.desktop_logo}
                                    alt=""
                                  />
                                  <span>
                                    <p>
                                      {S.name.length > 20
                                        ? S.name.substring(0, 19) + "..."
                                        : S.name}
                                    </p>
                                    <i className={heartIcon} />
                                  </span>
                                </div>
                              ))}
                          </Fragment>
                        ))}
                    </div>
                  )
                )}
              </div>
            </div>
          )}
          {categoriesOne === "Hot Games" && (
            <div className="category-item-games">
              <span>
                <p className="categ-name">{categoriesOne}</p>
                <Link id="link">
                  All Games <i className="fas fa-angle-right" />
                </Link>
              </span>
              <div className="all-images-text">
                {Object.values(displayNameCateg?.providers || {})
                  .splice(0, 15)
                  .sort((a, b) => a["order"] - b["order"])
                  .map((H, index) => (
                    <div key={index} className="all">
                      {Object.values(H.slots || {})
                        .splice(0, 14)
                        .map((S) => (
                          <Fragment key={S.id}>
                            {Object.values(JSON.parse(S.categories || "{}"))
                              .filter((N) => N.name === categoriesOne)
                              .map((N) => (
                                <div className="images-name">
                                  <img src={S?.desktop_logo} alt="" />
                                  <span>
                                    <p>
                                      {S.name.length > 20
                                        ? S.name.substring(0, 19) + "..."
                                        : S.name}
                                    </p>
                                    <i className={heartIcon} />
                                  </span>
                                </div>
                              ))}
                          </Fragment>
                        ))}
                    </div>
                  ))}
              </div>
            </div>
          )}
          {categoriesTwo === "New Entry" && (
            <div className="category-item-games">
              <span>
                <p className="categ-name">{categoriesTwo}</p>
                <Link id="link">
                  All Games <i className="fas fa-angle-right" />
                </Link>
              </span>
              <div className="all-images-text">
                {Object.values(displayNameCateg?.providers || {})
                  .slice(0, 10)
                  .map((H, index) => (
                    <div key={index} className="all">
                      {Object.values(H.slots || {}).map((S) => (
                        <Fragment key={S.id}>
                          {Object.values(JSON.parse(S.categories || "{}"))
                            .filter((N) => N.name === categoriesTwo)
                            .map((N) => (
                              <div className="images-name">
                                <img src={S?.mobile_logo} alt="" />
                                <span>
                                  <p>
                                    {S.name.length > 20
                                      ? S.name.substring(0, 19) + "..."
                                      : S.name}
                                  </p>
                                  <i className={heartIcon} />
                                </span>
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
            <div className="category-item-games">
              <span>
                <p className="categ-name">{categoriesThree}</p>
                <Link id="link">
                  All Games <i className="fas fa-angle-right" />
                </Link>
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
                            .map((N) => (
                              <div className="images-name">
                                <img src={S?.mobile_logo} alt="" />
                                <span>
                                  <p>
                                    {S.name.length > 20
                                      ? S.name.substring(0, 19) + "..."
                                      : S.name}
                                  </p>
                                  <i className={heartIcon} />
                                </span>
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
            <div className="category-item-games">
              <span>
                <p className="categ-name">{categoriesFour}</p>
                <Link id="link">
                  All Games <i className="fas fa-angle-right" />
                </Link>
              </span>
              <div className="all-images-text">
                {Object.values(displayNameCateg?.providers || {}).map(
                  (H, index) => (
                    <div key={index} className="all">
                      {Object.values(H.slots || {}).map((S) => (
                        <Fragment key={S.id}>
                          {Object.values(JSON.parse(S.categories || "{}"))
                            .filter((N) => N.name === categoriesFour)
                            .map((N) => (
                              <div className="images-name">
                                <img src={S?.mobile_logo} alt="" />
                                <span>
                                  <p>
                                    {S.name.length > 20
                                      ? S.name.substring(0, 19) + "..."
                                      : S.name}
                                  </p>
                                  <i className={heartIcon} />
                                </span>
                              </div>
                            ))}
                        </Fragment>
                      ))}
                    </div>
                  )
                )}
              </div>
            </div>
          )}
          {categoriesSix === "Virtual Games" && (
            <div className="category-item-games">
              <span>
                <p className="categ-name">{categoriesSix}</p>
                <Link id="link">
                  All Games <i className="fas fa-angle-right" />
                </Link>
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
                            .map((N) => (
                              <div className="images-name">
                                <img src={S?.mobile_logo} alt="" />
                                <span>
                                  <p>
                                    {S.name.length > 20
                                      ? S.name.substring(0, 19) + "..."
                                      : S.name}
                                  </p>
                                  <i className={heartIcon} />
                                </span>
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
            <div className="category-item-games">
              <span>
                <p className="categ-name">{categoriesSeven}</p>
                <Link id="link">
                  All Games <i className="fas fa-angle-right" />
                </Link>
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
                              .map((N) => (
                                <div className="images-name">
                                  <img src={S?.mobile_logo} alt="" />
                                  <span>
                                    <p>
                                      {S.name.length > 20
                                        ? S.name.substring(0, 19) + "..."
                                        : S.name}
                                    </p>
                                    <i className={heartIcon} />
                                  </span>
                                </div>
                              ))}
                          </Fragment>
                        ))}
                    </div>
                  ))}
              </div>
            </div>
          )}
          <div className="provider-item-games">
            <span id="icon-text">
              <img id="icon-provider" src={image.provider} alt="" />
              <span id="categ-name">
                <p>Game Providers</p>
                <p>Only the most awsome games</p>
              </span>
            </span>
            <div className="all-images-text">
              {Object.values(displayNameCateg?.providers || {})
                .slice(0, 5)
                .map((H, index) => (
                  <div key={index} className="all">
                    {/*  <Slider {...settings}> */}
                    <div className="images-name">
                      <img
                        style={{ width: "270px" }}
                        src={H?.provider_logo}
                        alt=""
                      />
                      <span className="end-desc">
                        <span id="text">
                          <p>
                            {H.name.length > 20
                              ? H.name.substring(0, 19) + "..."
                              : H.name.split(" ")[0]}
                          </p>
                          <p> {H.name.split(" ")[0] + "!"}</p>
                        </span>

                        <span id="icon">
                          <i className="fas fa-angle-right" />
                        </span>
                      </span>
                    </div>
                    {/* </Slider> */}
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}
export default CasinoAllGames;
