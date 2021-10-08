/* import React, { Component } from 'react'

class RightMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataRightMenu: []
        };
    }

    componentDidMount() {
        const fullFooterHome = async () => {
            return await fetch(" https://api-new.betbuq.com/api_user/bestWinnings")
                .then((res) => res.json())
                .then((menu) => this.setState({ ...this.state, dataRightMenu: menu }))
                .catch((err) => console.log("has error bro "));

        };
        return fullFooterHome;

    }




    render() {
        console.log("right", this.state.dataRightMenu);
        return (
            <div className="sport-menu-toggle">
                {
                    Object.values(this.props.dataRightMenu || []).map(E => (


                        <span>
                            {E.bet}
                        </span>
                    ))
                }
            </div>
        )
    }
}

export default RightMenu */

import React, { useState, useEffect, Fragment } from "react";
import PopupLoginRegister from "../LoginRegister/PopupLoginRegister";
import ModalSearch from "./ModalSearch";

function RightMenu({ allConfig }) {
    const [WinData, setWinData] = useState([]);
    const [openPopup, setOpenPopup] = useState(false);

    const LastWinApi = (async) => {
        const fetchApi = fetch("https://api-new.betbuq.com/api_user/bestWinnings")
            .then((res) => res.json())
            .then((data) => setWinData(data))
            .catch((err) => console.log(err));

        return fetchApi;
    };

    console.log("win", WinData);

    useEffect(() => {
        LastWinApi();
    }, []);

    const handleChangePopup = () => {
        setOpenPopup(false);
    };

    return (
        <Fragment>
            <div className="betting-left-menu">
                <span className="betslip">
                    <p>Betslip</p>
                    <p className="counter">0</p>
                </span>
                <span id="betting" onClick={() => setOpenPopup(true)}>
                    <p>Betting</p>
                </span>
            </div>
            <div className="desc-box">
                <p>{allConfig.descriptionBox}</p>
            </div>
            {openPopup && <PopupLoginRegister handleChangePopup={handleChangePopup} open={openPopup} />}
            <div className="left">
                <span>Last Winnings</span>
                <table class="last-winnings-table">
                    <thead class="last-winnings-thead">
                        <td>Winner</td>
                        <td>Stake</td>
                        <td>Date</td>
                    </thead>
                    <tbody className="last-winnings-body">
                        {Object.values(WinData.data || [])
                            .slice(0, 7)
                            .map((L) => (
                                <>
                                    {console.log("L", L)}
                                    <tr class="last-winnings-title-heading-desc">
                                        <td>
                                            {parseFloat(L.win).toFixed(2)} {allConfig["skin"]["currency-symbol"]}
                                        </td>
                                        <td>
                                            {parseFloat(L.bet).toFixed(2)} {allConfig["skin"]["currency-symbol"]}
                                        </td>
                                        <td>{new Date(L.date).toLocaleDateString()}</td>
                                    </tr>
                                </>
                            ))}
                    </tbody>
                </table>
            </div>


        </Fragment>
    );
}
export default RightMenu;
