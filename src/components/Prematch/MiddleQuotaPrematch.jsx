import React, { useState } from "react";
import allEvents from "./data";
import "./quota.scss";
function MiddleQuotaPrematch({ openDialog, text, openOdds, delModalOds }) {

  const [prov, setprov] = useState([])


  return (
    <div className="quotes">
      <p> • • • Main Live Events</p>
      <table className="last-quota-table">
        <thead className="last-quota-thead">
          <tr>
            {/*             <th>Stats</th>
 */}            <th>Time</th>
            <th>Event</th>
            <th>W1</th>
            <th>Draw</th>
            <th>W2</th>
            <th>{""}</th>
          </tr>
        </thead>
        <tbody className="last-quota-body">
          {Object.values(allEvents).map((Z, index) => (
            <tr className="last-quota-title-heading-desc" key={index}>
              {/*               <td>{null}</td>
 */}              <td>{Z.time}</td>
              <td>{Z.event}</td>
              <td>{Z.w1}</td>
              <td>{Z.draw}</td>
              <td>{Z.w2}</td>

              <td onClick={() => openDialog()}>{Z.plus}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p> • • • Last minute</p>
      <table className="last-quota-table">
        <thead className="last-quota-thead">
          <tr>
            {/*             <th>Stats</th>
 */}            <th>Time</th>
            <th>Event</th>
            <th>W1</th>
            <th>Draw</th>
            <th>W2</th>
            <th>{"         "}</th>
          </tr>
        </thead>
        <tbody className="last-quota-body">
          {Object.values(allEvents)
            .splice(2)
            .map((Z, index) => {

              console.log("qwerty", allEvents);
              return (
                <tr className="last-quota-title-heading-desc" key={index}>
                  {/*                   <td>{null}</td>
 */}                  <td>{Z.time}</td>
                  <td>{Z.event}</td>
                  <td>{Z.w1}</td>
                  <td>{Z.draw}</td>
                  <td>{Z.w2}</td>

                  <td className="tooltip" onClick={() => openDialog()}>{Z.plus}</td>
                </tr>)
            }
            )}
        </tbody>
        {console.log("data", prov)}
      </table>
    </div>
  );
}

export default MiddleQuotaPrematch;
