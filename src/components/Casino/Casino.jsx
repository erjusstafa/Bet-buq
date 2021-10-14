import React, { useState, useEffect, Fragment, Component } from "react";
import allConfig from "../../config/allConfig";
import { useSelector, useDispatch } from "react-redux";
import { CasinoApi } from "../../redux-toolkit/store/store";
import BannerLiveCasino from "../LiveCasino/BannerLiveCasino";
import "./casino.scss";
import ModalCasino from "../LiveCasino/ModalCasino";
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
        .slice(0, 9)
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


            {idFavAllImag === 9999 ? (
                <div className="category-all-games">
                    <>

                        <div className="category-item-games">
                            <CasinoAllGames displayNameCateg={displayNameCateg} heartIcon={heartIcon} link={link} />
                        </div>
                    </>
                </div>
            ) : null}

            {link && (
                <>
                    <p>{text}</p>
                    <div className="category-item-games">
                        <CasinoItemGames displayNameCateg={displayNameCateg} heartIcon={heartIcon} link={link} />
                    </div>
                </>
            )}
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
        this.setState(this.setState({
            activeFav: activeFav,
            colorFav: !this.state.colorFav
        }));
    }
    render() {
        return Object.values(this.props.displayNameCateg?.providers || {}).map((H, index) => (
            <Fragment key={index}>
                {Object.values(H.slots || {}).map((S) => (
                    <Fragment key={S.id}>
                        {this.props.link &&
                            Object.values(JSON.parse(S.categories || "{}"))
                                .filter((N) => N.id === this.props.link || N.name === this.props.text)
                                .map((N) => (
                                    <div className="images-name">
                                        <img src={S?.desktop_logo} alt="" />
                                        <span>
                                            <p>{S.name.length > 20 ? S.name.substring(0, 19) + "..." : S.name}</p>
                                            <i
                                                onClick={this.handleAddActive}
                                                className={`${this.props.heartIcon + ` ${this.state.activeFav ? "addedd" : ""}`}`}
                                                style={{ color: `${!this.state.colorFav ? "" : "#1ab7af"}` }}
                                            />
                                        </span>
                                    </div>
                                ))

                          /*   : Object.values(JSON.parse(S.categories || "{}"))
                                .map((N) => (
                                    <div className="images-name">
                                        <img src={S.desktop_logo} alt="" />
                                        <span>
                                            <p>{S.name.length > 20 ? S.name.substring(0, 19) + "..." : S.name}</p>
                                            <i
                                                onClick={this.handleAddActive}
                                                className={`${this.props.heartIcon + ` ${this.state.activeFav ? "addedd" : ""}`}`}
                                                style={{ color: `${!this.state.colorFav ? "" : "#1ab7af"}` }}
                                            />
                                        </span>
                                    </div>
                                )) */}
                    </Fragment>
                ))}
            </Fragment>
        ));
    }
}

class CasinoAllGames extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return Object.values(this.props.displayNameCateg?.providers || {}).map((H, index) => (
            <Fragment key={index}>
                {Object.values(H.slots || {}).map((S) => (
                    <Fragment key={S.id}>
                        {
                            Object.values(JSON.parse(S.categories || "{}"))
                                .map((N) => (
                                    <div className="images-name">
                                        <img src={S?.desktop_logo} alt="" />
                                        <span>
                                            <p>{S.name.length > 10 ? S.name.substring(0, 19) + "..." : S.name}</p>
                                            <i className={this.props.heartIcon} />
                                        </span>
                                    </div>
                                ))}
                    </Fragment>
                ))}
            </Fragment>
        ));
    }
}
