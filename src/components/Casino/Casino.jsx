import React, { useState, useEffect } from "react";
import allConfig from "../../config/allConfig";
import { useSelector, useDispatch } from "react-redux";

function Casino() {


    /*  const dispatch = useDispatch();
     useEffect(() => {
         dispatch();
     }); */


    /*   let displayNameCateg = Object.values(casinoData["results"] || []).map((F) => {
            return (
    
                Object.values(F.categories || {}).map(Y => (
                    <>
                        <p>{Y.name}</p>
                        {console.log("YYYY", Y)}
                    </>
                ))
    
            )
    
        }) */

    return (
        <div className="casino">
            <div className="casino-max"></div>
        </div>
    );
}

export default Casino;
