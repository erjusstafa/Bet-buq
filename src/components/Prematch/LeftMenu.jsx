import React, { Fragment, useState } from "react";
import ModalSearch from "./ModalSearch";

function LeftMenu({ allConfig, iconSport, toggleIcon }) {
  const [toggleUpDownIcon, setToggleUpDownIcon] = useState(false);
  const [value, setValue] = useState("");
  const [tabsHourToggle, setTabsHourToggle] = useState(0);
  const [modal, setModal] = useState(false);

  const handleChangeInputSearch = (e) => {
    const search = e.target.value;
    setValue(search);

    if (search.length >= 0) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  const handleTabsToggle = (tabs) => {
    setTabsHourToggle(tabs);
  };

  const [Sport, setSport] = useState([]);

  const SportApi = async () => {
    const fetchApi = fetch("https://apisport.playlogiq.com/sporttree_new")
      .then((res) => res.json())
      .then((data) => setSport(data))
      .catch((err) => console.log(err));

    return fetchApi;
  };

  React.useEffect(() => {
    SportApi();
  });

  return (
    <Fragment>
      <div className="sport-menu-toggle">
        {!iconSport ? <p>Sports Menu</p> : null}
        <i onClick={toggleIcon} className="fas fa-align-right" />
      </div>
      {!iconSport ? (
        <div className="event-toggle">
          <div className="search-event-toggle">
            <p>Search Event</p>
            <i
              className={
                toggleUpDownIcon ? "fas fa-angle-up" : "fas fa-angle-down"
              }
              onClick={() => setToggleUpDownIcon(!toggleUpDownIcon)}
            />
          </div>

          <ModalSearch
            modal={modal}
            setModal={setModal}
            Sport={Sport}
            allConfig={allConfig}
            value={value}
          />
          {!toggleUpDownIcon ? (
            <div className="desc-box">
              <p>{allConfig.descriptionBox}</p>
              <span>
                <i className="fa fa-search" aria-hidden="true" />
                <input
                  type="text"
                  className="search-event"
                  value={value}
                  onChange={handleChangeInputSearch}
                  placeholder="Search Event"
                />
              </span>
            </div>
          ) : null}
        </div>
      ) : null}
      {!iconSport ? (
        <div className="quick-filter">
          <p>Quick Filter</p>
          <div className="tabs-for-hour">
            <span
              onClick={() => handleTabsToggle(0)}
              className={tabsHourToggle === 0 ? "active" : null}
            >
              <p>All</p>
            </span>
            <span
              onClick={() => handleTabsToggle(1)}
              className={tabsHourToggle === 1 ? "active" : null}
            >
              <p>3H</p>
            </span>
            <span
              onClick={() => handleTabsToggle(2)}
              className={tabsHourToggle === 2 ? "active" : null}
            >
              <p>6H</p>
            </span>
            <span
              onClick={() => handleTabsToggle(3)}
              className={tabsHourToggle === 3 ? "active" : null}
            >
              <p>9H</p>
            </span>
            <span
              onClick={() => handleTabsToggle(4)}
              className={tabsHourToggle === 4 ? "active" : null}
            >
              <p>12H</p>
            </span>
            <span
              onClick={() => handleTabsToggle(18)}
              className={tabsHourToggle === 18 ? "active" : null}
            >
              <p>24H</p>
            </span>
          </div>
        </div>
      ) : null}

      <div className="in-play-button" onClick={() => window.location.hash()}>
        <i className="fas fa-stopwatch" />
        {!iconSport ? <p>IN-PLAY</p> : null}{" "}
      </div>

      <div className="left-sport">
        {Object.values(Sport || []).map((R, index) => {
          return (
            <Fragment>
              {tabsHourToggle === R.order && (
                <div key={R ? R.id : index} className="all-sport-item">
                  {!iconSport ? (
                    <span id="item-sport">
                      <p id="counter-item">{R.count}</p>
                      <span id="dot"> • </span>
                      <p className="sport-name">{R.name}</p>
                    </span>
                  ) : null}

                  <span className="icon">
                    {allConfig["iconSport"].map((C) => (
                      <i
                        className={allConfig["betConstructWidget"] ? C : "icon"}
                      />
                    ))}
                  </span>
                </div>
              )}
              {tabsHourToggle === 0 && (
                <div key={R ? R.id : index} className="all-sport-item">
                  {!iconSport ? (
                    <span id="item-sport">
                      <p id="counter-item">{R.count}</p>
                      <span id="dot"> • </span>
                      <p className="sport-name">{R.name}</p>
                    </span>
                  ) : null}

                  <span className="icon">
                    {allConfig["iconSport"].map((C, index) => (
                      <i
                        key={index}
                        className={allConfig["betConstructWidget"] ? C : "icon"}
                      />
                    ))}
                  </span>
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
}
export default LeftMenu;
