import React, { useState, useEffect, Fragment } from "react";
import allConfig from "../../config/allConfig";
import "./style.scss";
import { Link } from "react-router-dom";
function Promo() {
  const [promoApi, setPromoApi] = useState([]);

  const fetchPromo = async () => {
    let promo = "promotions?lang=en";
    const data = await fetch(
      `https://stagingbackoffice.playlogiq.com/${allConfig["skinName"]}/${promo}`
    )
      .then((res) => res.json())
      .then((data) => setPromoApi(data))
      .catch((err) => console.log(err));

    console.log(data);
  };

  useEffect(() => {
    fetchPromo();
  }, []);

  console.log("promo", promoApi);

  return (
    <Fragment>
      <div className="promo-wrapper">
        <div className="promo-wrapper-max">
          <div className="navigation-container">
            <div className="navigation-container-wrapper">
              {Object.values(allConfig.NavigationWrapper || []).map(
                (N, index) => (
                  <>
                    <Link
                      key={index}
                      className={N.text.toLowerCase().replace(" ", "-")}
                      to={N.link}
                    >
                      {N.text}
                    </Link>
                  </>
                )
              )}
            </div>
            <span>
              <i className="fas fa-question" />
              Help
            </span>
          </div>
          <div className="promotion">
            <div className="promotion__max">
              {Object.values(promoApi.promotions || []).map((P, index) => {
                return (
                  <div key={index}>
                    {Object.values(P["posts"] || []).map((M) => (
                      <div className="card" key={M.id}>
                        <div className="text-logo">
                          <img src={M.image} alt="" />
                          <div className="slug-subtittle">
                            <span id="paragraph-promo">
                              <p>{M.slug.split("-")[0]}</p>
                              <p>{M.sub_title}</p>
                            </span>
                            <button id="read-more">Read More</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Promo;
