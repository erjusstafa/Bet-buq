import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterGames } from "../../redux-toolkit/store/store";

const ModalCasino = ({
  setOpenModal,
  allDataCasinoLive,
  searchFor, searchIcon,
  alignRight,
  categories,
  Provider
}) => {

  const [val, setVal] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const dispatch = useDispatch();
  let providers = Object.keys(allDataCasinoLive?.providers || {}).map((D) => <p>{D}</p>);

  //filter data
  const handleChange = (e) => {
    const searchWord = e.target.value;
    setVal(searchWord);
    /*   dispatch(filterGames({ name: val })) */
  };

  const displaySlots = Object.values(allDataCasinoLive.providers || {}).map((E) => (
    <>
      {Object.values(E.slots || {})
        .filter((Q) => (val === "" ? Q : Q.name.toLowerCase().includes(val.toLowerCase())))
        .map((Q) => (
          <span>
            <img src={Q.desktop_logo} alt="" />
            <h3>{Q.name}</h3>
          </span>
        ))}
    </>
  ));
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
            <input type="text" placeholder={searchFor} className="search-input" value={val} onChange={handleChange} />
          </span>
          <span className="filters" onClick={handleToggle}>
            <p>Filters</p>
            <i className={alignRight} />
            <span class="search-providers-counter">0</span>
          </span>
        </form>
        {/**  modal content */}
        <div className={!toggle ? "content" : "content-toggle"}>
          <div className="one--content">{displaySlots.length > 0 ? displaySlots : <p>The data is missing</p>}</div>

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
