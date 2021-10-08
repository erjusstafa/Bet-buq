import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";

function LeftMenu({ allConfig }) {
    const [toggleUpDownIcon, setToggleUpDownIcon] = useState(false);
    const [value, setValue] = useState("");
    const [tabsHourToggle, setTabsHourToggle] = useState(0);
    const [more, setMore] = useState(10)

    let moreSport = () => {
        setMore(more + 1)
        toggleUpDownIcon(!setToggleUpDownIcon)
    }

    const handleTabsToggle = (tabs) => {
        setTabsHourToggle(tabs);
    };

    /* const [myindex, setMyIndex] = useState({ isActive: 1 });

    const activeTabs = (id) => {
        setMyIndex({ isActive: id });
    }; */

    const SportsItem = useSelector((state) => state.betbuqsport.PrematchData);

    console.log("SportsItem", SportsItem);
    return (
        <Fragment>
            <div className="sport-menu-toggle">
                <p>Sports Menu</p>
                <i className="fas fa-align-right" />
            </div>
            <div className="event-toggle">
                <div className="search-event-toggle">
                    <p>Search Event</p>
                    <i
                        className={toggleUpDownIcon ? "fas fa-angle-up" : "fas fa-angle-down"}
                        onClick={() => setToggleUpDownIcon(!toggleUpDownIcon)}
                    />
                </div>
                {!toggleUpDownIcon ? (
                    <div className="desc-box">
                        <p>{allConfig.descriptionBox}</p>
                        <span>
                            <i className="fa fa-search" aria-hidden="true" />
                            <input
                                type="text"
                                className="search-event"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                placeholder="Search Event"
                            />
                        </span>
                    </div>
                ) : null}
            </div>

            <div className="quick-filter">
                <p>Quick Filter</p>
                <div className="tabs-for-hour">
                    <span onClick={() => handleTabsToggle(0)} className={tabsHourToggle === 0 ? "active" : null}>
                        <p>All</p>
                    </span>
                    <span onClick={() => handleTabsToggle(3)} className={tabsHourToggle === 3 ? "active" : null}>
                        <p>3H</p>
                    </span>
                    <span onClick={() => handleTabsToggle(6)} className={tabsHourToggle === 6 ? "active" : null}>
                        <p>6H</p>
                    </span>
                    <span onClick={() => handleTabsToggle(9)} className={tabsHourToggle === 9 ? "active" : null}>
                        <p>9H</p>
                    </span>
                    <span onClick={() => handleTabsToggle(12)} className={tabsHourToggle === 12 ? "active" : null}>
                        <p>12H</p>
                    </span>
                    <span onClick={() => handleTabsToggle(24)} className={tabsHourToggle === 24 ? "active" : null}>
                        <p>24H</p>
                    </span>
                </div>
            </div>

            <div className="in-play-button" onClick={() => window.location.hash()}>
                <i className="fas fa-stopwatch" />
                <p>IN-PLAY</p>
            </div>

            <div className="left-sport">
                {Object.keys(SportsItem.schedules || "[]")
                    .slice(0, more).reduce((A, B) => {
                        return (
                            <>
                                <div >
                                    <p>{A}</p>
                                    <p>{B}</p>
                                    {/* <span>
                                        {Object.values(SportsItem.schedules || {})
                                            .map((G) => (
                                                <>
                                                    <p>{G.count}</p>
                                                </>
                                            ))}
                                    </span> */}
                                </div>
                            </>
                        );
                    })}

                <p onClick={moreSport}  > more Sport </p>

                {tabsHourToggle === 9 && <h3>9 ore</h3>}
                {tabsHourToggle === 12 && <h3>12 ore</h3>}
                {tabsHourToggle === 24 && <h3>24 ore</h3>}
            </div>
        </Fragment>
    );
}
export default LeftMenu;
