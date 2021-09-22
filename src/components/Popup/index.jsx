import React, { useState } from "react";
import Popup from "./Popup";
import "./style.css";
const Index = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={togglePopup}>Open</button>

            {isOpen && <Popup content={<></>} handleClose={togglePopup} />}
        </div>
    );
};

export default Index;
