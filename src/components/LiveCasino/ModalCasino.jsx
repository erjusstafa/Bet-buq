import React from 'react'

const ModalCasino = ({ setOpenModal, allDataCasinoLive, searchFor, searchIcon, alignRight }) => {


    console.log("allDataCasinoLive", allDataCasinoLive)

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
                <div className="search-modal">
                    <span className="search">
                        <i className={searchIcon} />
                        <input type="text" placeholder={searchFor} className="search-input" />
                    </span>
                    <span className="filters">
                        <p>Filters</p>
                        <i className={alignRight} />
                    </span>

                </div>

            </div>
        </div>
    )
}

export default ModalCasino
