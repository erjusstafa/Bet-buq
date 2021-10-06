import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";

function LeftMenu({ descTextBox }) {
    const [toggleUpDownIcon, setToggleUpDownIcon] = useState(false);

    const [tabsHourToggle, setTabsHourToggle] = useState(0);

    const handleTabsToggle = (tabsHourToggle) => {
        setTabsHourToggle(tabsHourToggle);
    };

    const [myindex, setMyIndex] = useState({ isActive: null });

    const activeTabs = (id) => {
        setMyIndex({ isActive: id });
    };

    const SportsItem = useSelector((state) => state.betbuqsport.PrematchData.schedules);

    console.log("tabsHour", SportsItem);

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
                        <p>{descTextBox}</p>
                        <span>
                            <i class="fa fa-search" aria-hidden="true" />
                            <input type="text" value="" placeholder="Search Event" className="search-event" />
                        </span>
                    </div>
                ) : null}
            </div>

            <div className="quick-filter">
                <p>Quick Filter</p>
                <div className="tabs-for-hour">
                    <span onClick={() => handleTabsToggle(0)} className={tabsHourToggle === 0 ? "active" : ""}>
                        <p>All</p>
                    </span>
                    <span onClick={() => handleTabsToggle(3)} className={tabsHourToggle === 3 ? "active" : ""}>
                        <p>3H</p>
                    </span>
                    <span onClick={() => handleTabsToggle(6)} className={tabsHourToggle === 6 ? "active" : ""}>
                        <p>6H</p>
                    </span>
                    <span onClick={() => handleTabsToggle(9)} className={tabsHourToggle === 9 ? "active" : ""}>
                        <p>9H</p>
                    </span>
                    <span onClick={() => handleTabsToggle(12)} className={tabsHourToggle === 12 ? "active" : ""}>
                        <p>12H</p>
                    </span>
                    <span onClick={() => handleTabsToggle(24)} className={tabsHourToggle === 24 ? "active" : ""}>
                        <p>24H</p>
                    </span>
                </div>
            </div>

            <div className="in-play-button" onClick={() => window.location.hash()}>
                <i className="fas fa-stopwatch" />
                <p>IN-PLAY</p>
            </div>

            <div className="left-sport">
                {Object.keys(SportsItem || {})
                    .sort((a, b) => a.id - b.id)
                    .map((S, index) => (
                        <>
                            {console.log("S", S)}
                            <p key={index}>{S}</p>

                            {/*     {
                                Object.values(SportsItem || {}).map(D => (
                                    <>
                                        <h5>{D.id}</h5></>
                                ))
                            } */}

                        </>
                    ))}
            </div>
        </Fragment>
    );
}

export default LeftMenu;
