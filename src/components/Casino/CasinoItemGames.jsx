/* import React, { Fragment } from "react";
import { addFavouriteCasino } from "../../redux-toolkit/store/store";

function CasinoItemGames({ link, displayNameCateg, heartIcon, dispatch, more, handleAddActive, colorFav, activeFav }) {
    return Object.values(displayNameCateg?.providers || {})
        .map((H, index) => (
            <Fragment key={index}>
                {Object.values(H.slots || {})
                    .splice(0, more)
                    .map((S) => (
                        <Fragment key={S.id}>
                            {Object.values(JSON.parse(S.categories || "{}"))
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
                                                className={`${heartIcon}` + (activeFav.includes(S.id) ? (!colorFav ? " added" : " added") : "")}
                                            />
                                        </span>
                                    </div>
                                ))}
                        </Fragment>
                    ))}
            </Fragment>
        ));
}

export default CasinoItemGames;
 */