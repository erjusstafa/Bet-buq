import React, { useState } from "react";

const ModalCasino = ({
    setOpenModal,
    allDataCasinoLive,
    searchFor,
    searchIcon,
    alignRight,
}) => {





    const [val, setVal] = useState("");

    const handleChange = (e) => {

        const searchWord = e.target.value;
        setVal(searchWord);


        Object.values(allDataCasinoLive.providers || {}).filter((E) => {

            const kerko = Object.values(E.slots || []).filter((Q) => {

                return Q.name ? Q.name.toLowerCase().includes(searchWord.toLowerCase()) : alert("isn't okay")
            })

            return kerko
        })


    };






    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <form className="search-modal">


                    <span className="search">
                        <i className={searchIcon} />
                        <input
                            type="text"
                            placeholder={searchFor}
                            className="search-input"
                            value={val}
                            onChange={handleChange}
                        />
                    </span>
                    <span className="filters">
                        <p>Filters</p>
                        <i className={alignRight} />
                    </span>
                </form>
                {/**  modal content */}
                <div className="content">
                    {Object.values(allDataCasinoLive.providers || {}).map((E) => (
                        <>
                            {Object.values(E.slots || {}).map((Q) => (
                                <span>
                                    <img src={Q.desktop_logo} alt="" />
                                    <h3>{Q.name}</h3>
                                </span>
                            ))}
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ModalCasino;
