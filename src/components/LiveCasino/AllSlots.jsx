import React from "react";
import PopupLoginRegister from "../LoginRegister/PopupLoginRegister";
import { useDispatch } from "react-redux";

const AllSlots = ({ R, F, heartIcon, openPopup, setOpenPopup, handleChangePopup, addFavouriteCasino }) => {
    const dispatch = useDispatch();
    return (
        <>
            {
                <div className="item-slots-all" key={R.id}>
                    <div onClick={() => setOpenPopup(true)} to={null} className="link-slot-all">
                        {window.innerWidth >= "1024" ? <img src={F.desktop_logo} alt="" /> : <img src={F.mobile_logo} alt="" />}
                    </div>
                    {openPopup && <PopupLoginRegister handleChangePopup={handleChangePopup} open={openPopup} />}
                    <span className="span">
                        <p>{F.name}</p>
                        <i
                            className={heartIcon}
                            onClick={() =>
                                dispatch(
                                    addFavouriteCasino({
                                        id: F.id,
                                        desktop_logo: F.desktop_logo,
                                        name: F.name,
                                    })
                                )
                            }
                            style={{ marginTop: "-11px" }}
                        />
                    </span>
                </div>
            }
        </>
    );
};

export default AllSlots;
