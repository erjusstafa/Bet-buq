import React from "react";
import "./style.scss";

const ModalOdds = ({ text, delModalOds }) => {
    return (
        <>
            <div className="modal-odds">
                <h1 onClick={delModalOds}>x</h1>
                <h2>{text}</h2>
            </div>
        </>
    );
};

export default ModalOdds;
