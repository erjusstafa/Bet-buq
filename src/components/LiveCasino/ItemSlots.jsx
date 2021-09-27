import React from "react";
import { Link } from "react-router-dom";

const ItemSlots = ({ R, F, heartIcon }) => {
    return (
        <div className="item-slots" key={R.id}>
            <Link to="/kot" className="link-slot">
                <img src={F.desktop_logo} alt="" />
            </Link>

            <span className="span">
                <p>{F.name/* .replace(/[ 0-9]/g, ' ') */}</p>
                <i className={heartIcon} style={{ marginTop: "-11px" }} />
            </span>
        </div>
    );
};

export default ItemSlots;
