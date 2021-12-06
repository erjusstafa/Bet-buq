import React, { useState } from "react";
import "./style.scss";
import allConfig from "../../config/allConfig";
import { Link } from "react-router-dom";
import LeftMenu from "./LeftMenu";
import MiddleMenu from "./MiddleMenu";
import RightMenu from "./RightMenu";
import MiddleQuotaPrematch from "./MiddleQuotaPrematch";

function Prematch() {
  const [iconSport, setIconSport] = useState(false);
  const [close, setClose] = useState(true);

  const delModalOds = () => {
    setOpenOdds(!close);
  };
  const toggleIcon = () => {
    setIconSport(!iconSport);
  };

  const [text, setText] = useState("");

  const AddText = () => {
    setText("erjus");
  };

  const [openOdds, setOpenOdds] = useState(false);

  const openDialog = () => {
    setOpenOdds(true);
    AddText();
  };
  return (
    <div
      className={allConfig?.defaults?.prematchExist ? allConfig["routes"]["Prematch"]["name"].toLocaleLowerCase() : ""}
    >
      <div className="sport__max">
        <div className="navigation-container">
          <div className="navigation-container-wrapper">
            {Object.values(allConfig.NavigationWrapper || []).map((N, index) => (
              <Link key={index} className={N.text.toLowerCase().replace(" ", "-")} to={N.link}>
                {N.text}
              </Link>
            ))}
          </div>
          <span>
            <i className="fas fa-question" />
            Help
          </span>
        </div>

        <div className={!iconSport ? "all-container-sportbook" : "all-container-sportbook-toggle"}>
          <div className={!iconSport ? "left-menu-sportbook" : "toggle-sport"}>
            <LeftMenu
              allConfig={allConfig}
              iconSport={iconSport}
              toggleIcon={toggleIcon}
            />
          </div>

          <div className={!iconSport ? "middle-menu-sportbook" : "middle"}>
            <MiddleMenu allConfig={allConfig} />
            <MiddleQuotaPrematch
              openDialog={openDialog}
              text={text}
              openOdds={openOdds}
              delModalOds={delModalOds}
            />
          </div>
          <div className="right-menu-sportbook">
            <RightMenu
              allConfig={allConfig}
              setOpenOdds={setOpenOdds}
              openOdds={openOdds}
              delModalOds={delModalOds}
              openDialog={openDialog}
              text={text}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Prematch;
