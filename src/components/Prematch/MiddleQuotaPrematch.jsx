import React, { useEffect } from "react";
import allEvents from "./data";
import "./quota.scss";
/* import { useDispatch, useSelector } from "react-redux";
import { PrematchApi } from "../../redux-toolkit/store/store"; */

function MiddleQuotaPrematch() {
  /*   const dispatch = useDispatch();
  const Quota = useSelector((state) => state.betbuqsport.PrematchData);
  useEffect(() => {
    dispatch(PrematchApi());
  }, [dispatch]); */
  return (
    <div className="quotes">
      <>
        <p> • • • Main Live Events</p>
        <table className="last-quota-table">
          <thead className="last-quota-thead">
            <tr>
              <th>Stats</th>
              <th>Time</th>
              <th>Event</th>
              <th>W1</th>
              <th>Draw</th>
              <th>W2</th>
              <th>{"         "}</th>
            </tr>
          </thead>
          <tbody className="last-quota-body">
            {Object.values(allEvents).map((Z, index) => (
              <>
                <tr className="last-quota-title-heading-desc" key={index}>
                  <td>{null}</td>
                  <td>{Z.time}</td>
                  <td>{Z.event}</td>
                  <td>{Z.w1}</td>
                  <td>{Z.draw}</td>
                  <td>{Z.w2}</td>

                  <td>{Z.plus}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <p> • • • Last minute</p>
        <table className="last-quota-table">
          <thead className="last-quota-thead">
            <tr>
              <th>Stats</th>
              <th>Time</th>
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
              .map((Z, index) => (
                <>
                  <tr className="last-quota-title-heading-desc" key={index}>
                    <td>{null}</td>
                    <td>{Z.time}</td>
                    <td>{Z.event}</td>
                    <td>{Z.w1}</td>
                    <td>{Z.draw}</td>
                    <td>{Z.w2}</td>

                    <td>{Z.plus}</td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </>
    </div>
  );
}

export default MiddleQuotaPrematch;
