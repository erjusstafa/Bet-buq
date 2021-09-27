import React from "react";
import { Link } from "react-router-dom";

const AllSlots = ({ R, F, heartIcon }) => {
    return (
        <>
            {
                <div className="item-slots-all" key={R.id}>
                    <Link to="/kot" className="link-slot-all">
                        <img src={F.desktop_logo} alt="" />
                    </Link>

                    <span className="span">
                        <p>{F.name}</p>
                        <i className={heartIcon} style={{ marginTop: "-11px" }} />
                    </span>
                </div>
            }
        </>
    );
};

export default AllSlots;
