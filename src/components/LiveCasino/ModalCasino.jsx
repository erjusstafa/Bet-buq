import React, { useState } from "react";

const ModalCasino = ({
    setOpenModal,
    allDataCasinoLive,
    searchFor,
    searchIcon,
    alignRight,
    categories,
    Provider,
}) => {
    const [val, setVal] = useState("");
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    let providers = Object.keys(allDataCasinoLive?.providers || {}).map((D) => (
        <>
            <p>{D}</p>
        </>
    ));

    //filter data
    const handleChange = (e) => {
        const searchWord = e.target.value;
        setVal(searchWord);

        console.log("search", searchWord);
        Object.values(allDataCasinoLive.providers || {}).map((E) => {
            const kerko = Object.values(E.slots || {}).filter((Q) => {
                return Q.name
                    ? Q.name.toLowerCase().includes(searchWord.toLowerCase())
                    : alert("isn't okay");
            });

            return kerko;
        });
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
                    <span className="filters" onClick={handleToggle}>
                        <p>Filters</p>
                        <i className={alignRight} />
                        <span class="search-providers-counter">0</span>
                    </span>
                </form>
                {/**  modal content */}
                <div className={!toggle ? "content" : "content-toggle"}>
                    <div className="one--content">
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

                    {toggle ? (
                        <div className="two--content">
                            {Object.keys(allDataCasinoLive).map((R) => (
                                <>
                                    <div>
                                        {R === "categories" && (
                                            <>
                                                <h1>{R}</h1>
                                                <span>{categories}</span>
                                            </>
                                        )}
                                    </div>
                                    <br />

                                    <div>
                                        {" "}
                                        {R === "providers" && (
                                            <>
                                                <h1>{R}</h1>
                                                <span>{providers}</span>
                                            </>
                                        )}
                                    </div>
                                </>
                            ))}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default ModalCasino;
