import React, { Fragment } from "react";
import { Link } from "react-router-dom";
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
}) {
    return (
        <Fragment>
            {idFavAllImag === 9999 ? (
                <div className="category-all-games ">
                    {categoriesFive === "Popular" && (
                        <div className={"category-item-games " + categoriesFive}>
                            <span>
                                <p className="categ-name">{categoriesFive}</p>
                                <Link id="link">
                                    All Games <i class="fas fa-angle-right" />
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
                                                                        <p>{S.name.length > 20 ? S.name.substring(0, 19) + "..." : S.name}</p>
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
                    <svg
                        width="100%"
                        height="100%"
                        id="svg"
                        viewBox="0 0 1440 400"
                        xmlns="http://www.w3.org/2000/svg"
                        class="transition duration-300 ease-in-out delay-150"
                    >
                        <defs>
                            <linearGradient id="gradient" x1="99%" y1="41%" x2="1%" y2="59%">
                                <stop offset="5%" stop-color="#47565cff"></stop>
                                <stop offset="95%" stop-color="#47565cff"></stop>
                            </linearGradient>
                        </defs>
                        <path
                            d="M 0,400 C 0,400 0,200 0,200 C 78.42105263157893,176.11483253588517 156.84210526315786,152.22966507177034 259,145 C 361.15789473684214,137.77033492822966 487.0526315789474,147.19617224880383 583,175 C 678.9473684210526,202.80382775119617 744.9473684210525,248.98564593301438 847,262 C 949.0526315789475,275.0143540669856 1087.1578947368423,254.86124401913878 1192,239 C 1296.8421052631577,223.13875598086122 1368.4210526315787,211.5693779904306 1440,200 C 1440,200 1440,400 1440,400 Z"
                            stroke="none"
                            stroke-width="0"
                            fill="url(#gradient)"
                            class="transition-all duration-300 ease-in-out delay-150 path-0"
                            transform="rotate(-180 720 200)"
                        ></path>
                    </svg>

                    {categoriesZero === "Tournaments" && (
                        <div className="category-item-games">
                            <span>
                                <p className={"categ-name " + categoriesZero.toLowerCase()}>{categoriesZero}</p>
                                <Link id="link">
                                    All Games <i class="fas fa-angle-right" />
                                </Link>
                            </span>
                            <div className="all-images-text">
                                {Object.values(displayNameCateg?.providers || {}).map((H, index) => (
                                    <div key={index} className="all">
                                        {Object.values(H.slots || {})
                                            .slice(0, 12)
                                            .map((S) => (
                                                <Fragment key={S.id}>
                                                    {Object.values(JSON.parse(S.categories || "{}"))
                                                        .filter((N) => N.name === categoriesZero)
                                                        .map((N) => (
                                                            <div className="images-name">
                                                                <img style={{ width: "auto", height: "auto" }} src={S?.desktop_logo} alt="" />
                                                                <span>
                                                                    <p>{S.name.length > 20 ? S.name.substring(0, 19) + "..." : S.name}</p>
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

                    {categoriesOne === "Hot Games" && (
                        <div className="category-item-games">
                            <span>
                                <p className="categ-name">{categoriesOne}</p>
                                <Link id="link">
                                    All Games <i class="fas fa-angle-right" />
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
                                                                        <p>{S.name.length > 20 ? S.name.substring(0, 19) + "..." : S.name}</p>
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
                                    All Games <i class="fas fa-angle-right" />
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
                                                                    <p>{S.name.length > 20 ? S.name.substring(0, 19) + "..." : S.name}</p>
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
                                    All Games <i class="fas fa-angle-right" />
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
                                                                    <p>{S.name.length > 20 ? S.name.substring(0, 19) + "..." : S.name}</p>
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
                                    All Games <i class="fas fa-angle-right" />
                                </Link>
                            </span>
                            <div className="all-images-text">
                                {Object.values(displayNameCateg?.providers || {}).map((H, index) => (
                                    <div key={index} className="all">
                                        {Object.values(H.slots || {}).map((S) => (
                                            <Fragment key={S.id}>
                                                {Object.values(JSON.parse(S.categories || "{}"))
                                                    .filter((N) => N.name === categoriesFour)
                                                    .map((N) => (
                                                        <div className="images-name">
                                                            <img src={S?.mobile_logo} alt="" />
                                                            <span>
                                                                <p>{S.name.length > 20 ? S.name.substring(0, 19) + "..." : S.name}</p>
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

                    {categoriesSix === "Virtual Games" && (
                        <div className="category-item-games">

                            <span>
                                <p className="categ-name">{categoriesSix}</p>
                                <Link id="link">
                                    All Games <i class="fas fa-angle-right" />
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
                                                                    <p>{S.name.length > 20 ? S.name.substring(0, 19) + "..." : S.name}</p>
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
                                    All Games <i class="fas fa-angle-right" />
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
                                                                        <p>{S.name.length > 20 ? S.name.substring(0, 19) + "..." : S.name}</p>
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
                            <img id="icon-provider" src={allConfig["iconProvider"]} alt="" />
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
                                        <div className="images-name">
                                            <img style={{ width: "270px" }} src={H?.provider_logo} alt="" />
                                            <span className="end-desc">
                                                <span id="text">
                                                    <p>{H.name.length > 20 ? H.name.substring(0, 19) + "..." : H.name.split(" ")[0]}</p>
                                                    <p> {H.name.split(" ")[0] + "!"}</p>
                                                </span>

                                                <span id="icon">
                                                    <i class="fas fa-angle-right" />
                                                </span>
                                            </span>
                                        </div>
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
