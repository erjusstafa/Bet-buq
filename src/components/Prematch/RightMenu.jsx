import React, { useState, useEffect, Fragment } from "react";
import PopupLoginRegister from "../LoginRegister/PopupLoginRegister";

function RightMenu({ allConfig }) {
  const [WinData, setWinData] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  const LastWinApi = async () => {
    const fetchApi = fetch("https://api-new.betbuq.com/api_user/bestWinnings")
      .then((res) => res.json())
      .then((data) => setWinData(data))
      .catch((err) => console.log(err));

    return fetchApi;
  };

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
        <table className="last-winnings-table">
          <thead className="last-winnings-thead">
            <tr>
              <th>Winner</th>
              <th>Stake</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className="last-winnings-body">
            {Object.values(WinData.data || [])
              .slice(0, 7)
              .map((L, index) => (
                <tr className="last-winnings-title-heading-desc" key={index}>
                  <td>
                    {parseFloat(L.win).toFixed(2)} {allConfig["skin"]["currency-symbol"]}
                  </td>
                  <td>
                    {parseFloat(L.bet).toFixed(2)} {allConfig["skin"]["currency-symbol"]}
                  </td>
                  <td>{new Date(L.date).toLocaleDateString()}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
export default RightMenu;
