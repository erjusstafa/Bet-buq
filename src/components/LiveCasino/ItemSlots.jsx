import React from "react";
import { Link } from "react-router-dom";
import PopupLoginRegister from "../LoginRegister/PopupLoginRegister";
import { useDispatch } from "react-redux";

const ItemSlots = ({ R, F, heartIcon, openPopup, setOpenPopup, handleChangePopup, addFavouriteCasino }) => {
    const dispatch = useDispatch();

    return (
        <>
            <div className="item-slots" key={R.id}>
                <div onClick={() => setOpenPopup(true)} to={null} className="link-slot">
                    {window.innerWidth >= "1024" ? <img src={F.desktop_logo} alt="" /> : <img src={F.mobile_logo} alt="" />}
                </div>

                {openPopup && <PopupLoginRegister handleChangePopup={handleChangePopup} open={openPopup} />}
                <span className="span">
                    <p>{R.name}</p>
                    <i
                        className={heartIcon}
                        style={{ marginTop: "-11px" }}
                        onClick={() =>
                            dispatch(
                                addFavouriteCasino({
                                    id: F.id,
                                    desktop_logo: F.desktop_logo,
                                    name: F.name,
                                })
                            )
                        }
                    />
                </span>
            </div>
        </>
    );
};

export default ItemSlots;
