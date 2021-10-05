import React from "react";
import { Link } from "react-router-dom";
import PopupLoginRegister from "../LoginRegister/PopupLoginRegister";

const ItemSlots = ({ R, F, heartIcon, openPopup, setOpenPopup, handleChangePopup }) => {
    return (
        <>
            <div className="item-slots" key={R.id}>
                <div onClick={() => setOpenPopup(true)} to={null} className="link-slot">
                    {window.innerWidth >= "1024" ? <img src={F.desktop_logo} alt="" /> : <img src={F.mobile_logo} alt="" />}
                </div>

                {openPopup && <PopupLoginRegister handleChangePopup={handleChangePopup} open={openPopup} />}
                <span className="span">
                    <p>{R.name /* .replace(/[ 0-9]/g, ' ') */}</p>
                    <i className={heartIcon} style={{ marginTop: "-11px" }} />
                </span>
            </div>
        </>
    );
};

export default ItemSlots;
