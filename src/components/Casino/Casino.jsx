import React, { useState, useEffect, Fragment, Component } from "react";
import allConfig from "../../config/allConfig";
import { useSelector, useDispatch } from "react-redux";
import { CasinoApi } from "../../redux-toolkit/store/store";
import BannerLiveCasino from "../LiveCasino/BannerLiveCasino";
import "./casino.scss";
import ModalCasino from "../LiveCasino/ModalCasino";
import CasinoAllGames from "./CasinoAllGames";

function Casino() {
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(CasinoApi());
        }, 100);
    }, [dispatch]);

    const [modalOpen, setModalOpen] = useState(false);

    const bannerCasinoLive = useSelector((state) => state.betbuqsport.sliderApiHome.result?.casino_live);
    let displayNameCateg = useSelector((state) => state?.betbuqsport?.CasinoData?.result);

    const [idLink, setIdLink] = useState({
        other: 9999,
        link: null,
        activeText: null,
    });

    const changeId = (idLink, text) => {
        setIdLink({ link: idLink, other: idLink, activeText: text });
    };

    let categories = Object.values(displayNameCateg?.categories || {})
        .filter((F) => F.id !== 13 && F.id !== 12 && F.id !== 28)
        .map((C) => (
            <p
                className={idLink.link === C.id && C.name === idLink.activeText ? "active" : ""}
                key={C.id}
                onClick={() => changeId(C.id, C.name)}
            >
                {C.name}
            </p>
        ));

    console.log("categories", categories);

    let heartIcon = "fas fa-heart";
    let searchIcon = "fas fa-search";
    let alignRight = "fas fa-align-right";
    let searchFor = "Search for a game";
    return (
        <Fragment>
            <div className="livecasino">
                {Object.values(bannerCasinoLive || {}).map((B, b) => (
                    <BannerLiveCasino B={B} b={b} />
                ))}
            </div>
            <div style={{ background: "#313d42" }}>
                <div className="link">
                    <div className="link-live">
                        <span onClick={() => changeId(8888)} className={"heart " + (idLink.other === 8888 ? "active" : "")}>
                            <i className={heartIcon} />
                        </span>
                        <p onClick={() => changeId(9999, idLink.activeText)} className={idLink.other === 9999 ? "active" : ""}>
                            All Games
                        </p>
                        {categories ? categories : null}
                        <p onClick={() => changeId(7777, idLink.activeText)} className={idLink.other === 7777 ? "active" : ""}>
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
        </Fragment>
    );
}

export default Casino;

function CasinoWrapper({ displayNameCateg, idFavAllImag, link, text, categories, heartIcon }) {
    return (
        <div className="Slot">
            {idFavAllImag === 8888 && <p>{idFavAllImag}</p>}

            <CasinoAllGames
                allConfig={allConfig}
                idFavAllImag={idFavAllImag}
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
            />

            {link ? (
                <>
                    <p>{text}</p>
                    <div className="category-item-games">
                        <CasinoItemGames displayNameCateg={displayNameCateg} heartIcon={heartIcon} link={link} />
                    </div>
                </>
            ) : null}

            {idFavAllImag === 7777 ? (

                <>
                    <p>Providers</p>
                    <div className="category-item-games">

                        {Object.values(displayNameCateg?.providers || {}).map((H, index) => (
                            <Fragment key={index}>
                                <div className="images-name">
                                    <img src={H?.provider_logo} alt="" />
                                    <span>
                                        <p>{H.name}</p>
                                    </span>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </>
            ) : null}
        </div>
    );
}

class CasinoItemGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFav: null,
            colorFav: false,
        };
        this.handleAddActive = this.handleAddActive.bind(this);
    }

    handleAddActive(activeFav) {
        this.setState(
            this.setState({
                activeFav: activeFav,
                colorFav: !this.state.colorFav,
            })
        );
    }
    render() {
        return Object.values(this.props.displayNameCateg?.providers || {}).map((H, index) => (
            <Fragment key={index}>
                {Object.values(H.slots || {}).map((S) => (
                    <Fragment key={S.id}>
                        {this.props.link &&
                            Object.values(JSON.parse(S.categories || "{}"))
                                .filter((N) => N.id === this.props.link)
                                .map((N) => (
                                    <div className="images-name">
                                        <img src={S?.desktop_logo} alt="" />
                                        <span>
                                            <p>{S.name.length > 20 ? S.name.substring(0, 19) + "..." : S.name}</p>
                                            <i
                                                onClick={this.handleAddActive}
                                                className={`${this.props.heartIcon} `}
                                                style={{ color: `${!this.state.colorFav ? "" : "#1ab7af"}` }}
                                            />
                                        </span>
                                    </div>
                                ))}
                    </Fragment>
                ))}
            </Fragment>
        ));
    }
}
/* 
class CasinoAllGames extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {

        <div className="category-item-games">
                            <p className={"categ-name" + categories[0]?.props?.children}>{categories[0]?.props?.children}</p>
                            <div className="all-images-text">
                                {Object.values(displayNameCateg?.providers || {}).map((H, index) => (
                                    <div key={index} className="all">
                                        {Object.values(H.slots || {}).map((S) => (
                                            <Fragment key={S.id}>
                                                {Object.values(JSON.parse(S.categories || "{}"))
                                                    .slice(0, 2)
                                                    .filter((N) => N.name === categories[0]?.props?.children)
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
        return 
    }
}
 */
